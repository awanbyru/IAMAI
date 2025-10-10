import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const PromptEnhancer: React.FC = () => {
    const [userInput, setUserInput] = useState('');
    const [generatedJson, setGeneratedJson] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');

    const handleGenerate = async () => {
        if (!userInput.trim()) {
            setError('Silakan masukkan ide prompt Anda.');
            return;
        }
        setIsLoading(true);
        setError('');
        setGeneratedJson('');

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY! });
            const systemInstruction = "You are an expert prompt engineer for advanced text-to-image AI models. Your task is to take a user's simple, high-level idea and transform it into a structured, detailed, and evocative JSON prompt in English. This JSON prompt should be designed to generate a visually stunning, coherent, and high-quality image. The user's input can be in any language, but your output must always be a JSON object in English. The JSON structure should be logical and creative, often including keys such as `subject`, `environment`, `cinematography`, and `style`. Be creative and add specific, artistic details that enhance the user's original concept. Output only the raw JSON object, without any markdown formatting like ```json.";
            
            const response = await ai.models.generateContent({
                model: 'gemini-2.5-flash',
                contents: userInput,
                config: {
                    systemInstruction: systemInstruction,
                    responseMimeType: "application/json",
                },
            });

            const rawJsonText = response.text;
            const parsedJson = JSON.parse(rawJsonText);
            setGeneratedJson(JSON.stringify(parsedJson, null, 2));

        } catch (e) {
            console.error(e);
            setError('Terjadi kesalahan saat membuat prompt. Silakan coba lagi.');
            setGeneratedJson('');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCopy = () => {
        if (navigator.clipboard && generatedJson) {
            navigator.clipboard.writeText(generatedJson).then(() => {
                setCopyStatus('copied');
                setTimeout(() => setCopyStatus('idle'), 2000);
            });
        }
    };

    const copyIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
    );

    const checkIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
    );

    return (
        <div className="bg-app-surface rounded-lg shadow-lg p-6 sm:p-8 border border-app-default">
            <h2 className="text-2xl sm:text-3xl font-bold text-app-main mb-2 text-center">AI Prompt Enhancer</h2>
            <p className="text-app-muted mb-6 text-center max-w-2xl mx-auto">
                Ubah ide sederhana Anda menjadi prompt JSON yang terstruktur dan kaya detail. Tuliskan konsep Anda (dalam bahasa apa pun), dan biarkan AI menyempurnakannya ke dalam format bahasa Inggris yang siap pakai.
            </p>
            <div className="space-y-4">
                <div>
                    <label htmlFor="user-prompt" className="block text-sm font-medium text-app-muted mb-1">Ide Prompt Anda</label>
                    <textarea
                        id="user-prompt"
                        rows={4}
                        className="w-full px-3 py-2 bg-app-subtle border border-app-default rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm text-app-main"
                        placeholder="Contoh: naga cyberpunk terbang di kota hujan..."
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        disabled={isLoading}
                    />
                </div>
                <div className="text-center">
                    <button
                        onClick={handleGenerate}
                        disabled={isLoading || !userInput.trim()}
                        className="inline-flex items-center justify-center py-3 px-8 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
                    >
                        {isLoading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Meningkatkan...
                            </>
                        ) : 'Tingkatkan Prompt'}
                    </button>
                </div>
                {error && <p className="text-sm text-center text-red-600 dark:text-red-400 mt-2">{error}</p>}
                
                {generatedJson && (
                    <div className="mt-6">
                        <label className="block text-sm font-medium text-app-muted mb-1">Prompt JSON yang Dihasilkan</label>
                        <div className="relative bg-app-subtle p-4 rounded-md border border-app-default max-h-96 overflow-auto">
                            <pre className="text-app-main text-sm font-mono whitespace-pre-wrap">
                                <code>{generatedJson}</code>
                            </pre>
                            <button
                                onClick={handleCopy}
                                className="absolute top-2 right-2 p-2 rounded-full bg-app-surface text-app-muted hover:bg-brand-subtle hover:text-brand transition-colors"
                                aria-label={copyStatus === 'idle' ? 'Salin prompt' : 'Prompt disalin'}
                            >
                                {copyStatus === 'idle' ? copyIcon : checkIcon}
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PromptEnhancer;
