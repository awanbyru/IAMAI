import { GoogleGenAI, Type } from '@google/genai';

// This is a Vercel serverless function (Node.js runtime)
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  if (!process.env.API_KEY) {
      return res.status(500).json({ error: 'Kunci API tidak dikonfigurasi di server.' });
  }

  try {
    const { userInput } = req.body;

    if (!userInput) {
        return res.status(400).json({ error: 'Input pengguna diperlukan.' });
    }

    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const systemInstruction = "You are an expert prompt engineer for advanced text-to-image AI models. Your task is to take a user's simple, high-level idea and transform it into a structured, detailed, and evocative JSON prompt in English. This JSON prompt should be designed to generate a visually stunning, coherent, and high-quality image. The user's input can be in any language, but your output must always be a JSON object in English. The JSON structure should be logical and creative, often including keys such as `subject`, `environment`, `cinematography`, and `style`. Be creative and add specific, artistic details that enhance the user's original concept. Output only the raw JSON object, without any markdown formatting like ```json.";

    const responseSchema = {
        type: Type.OBJECT,
        properties: {
            scene_description: { type: Type.STRING, description: "A detailed overall description of the scene." },
            subject: {
                type: Type.OBJECT,
                properties: {
                    description: { type: Type.STRING, description: "Detailed description of the main subject." },
                    action: { type: Type.STRING, description: "The action the subject is performing." }
                },
                required: ["description", "action"]
            },
            environment: {
                type: Type.OBJECT,
                properties: {
                    setting: { type: Type.STRING, description: "The primary setting or location." },
                    details: { type: Type.ARRAY, items: { type: Type.STRING }, description: "Specific environmental details." }
                },
                required: ["setting", "details"]
            },
            cinematography: {
                type: Type.OBJECT,
                properties: {
                    shot_type: { type: Type.STRING, description: "e.g., Close-up, Wide shot, Drone shot." },
                    camera_movement: { type: Type.STRING, description: "e.g., Panning, Tilting, Static." },
                    lighting: { type: Type.STRING, description: "Description of the lighting style, e.g., Cinematic, Moody, Golden Hour." }
                },
                required: ["shot_type", "camera_movement", "lighting"]
            },
            style: {
                type: Type.OBJECT,
                properties: {
                    visual_style: { type: Type.STRING, description: "e.g., Photorealistic, Anime, Abstract." },
                    quality: { type: Type.STRING, description: "e.g., 8k, high detail, masterpiece." },
                    mood: { type: Type.STRING, description: "The emotional tone of the image." }
                },
                required: ["visual_style", "quality", "mood"]
            }
        },
        required: ["scene_description", "subject", "environment", "cinematography", "style"]
    };

    const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: userInput,
        config: {
            systemInstruction: systemInstruction,
            responseMimeType: "application/json",
            responseSchema: responseSchema,
        },
    });

    // The response.text is guaranteed to be a JSON string due to the config.
    // No need to parse markdown.
    const rawJsonText = response.text;
    
    return res.status(200).json({ result: rawJsonText });

  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unknown error occurred.';
    return res.status(500).json({ error: `Kesalahan server: ${errorMessage}` });
  }
}