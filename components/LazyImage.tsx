import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from '@google/genai';

const imageGenerationPromises = new Map<string, Promise<string>>();

const generateImage = async (prompt: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
    const response = await ai.models.generateImages({
      model: 'imagen-4.0-generate-001',
      prompt: prompt,
      config: {
        numberOfImages: 1,
        outputMimeType: 'image/jpeg',
        aspectRatio: '4:3',
      },
    });
    const base64ImageBytes: string = response.generatedImages[0].image.imageBytes;
    return `data:image/jpeg;base64,${base64ImageBytes}`;
  } catch (error) {
    console.error(`Error generating image for prompt "${prompt}":`, error);
    throw error;
  }
};

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aiPrompt?: string;
  cacheKey?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({ src, alt, className, aiPrompt, cacheKey, ...props }) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const aiGenerationTriggered = useRef(false);

  useEffect(() => {
    if (aiPrompt && cacheKey) {
      try {
        const cachedImage = localStorage.getItem(cacheKey);
        if (cachedImage) {
          setCurrentSrc(cachedImage);
        }
      } catch (e) {
        console.warn('Could not access localStorage for image cache.', e);
      }
    }
  }, [aiPrompt, cacheKey]);

  useEffect(() => {
    const imgElement = imgRef.current;
    if (!aiPrompt || !cacheKey || !imgElement) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !aiGenerationTriggered.current) {
          aiGenerationTriggered.current = true;
          observer.disconnect();

          const loadAiImage = async () => {
            try {
              const cachedImage = localStorage.getItem(cacheKey);
              if (cachedImage) {
                if (currentSrc !== cachedImage) setCurrentSrc(cachedImage);
                return;
              }
            } catch (e) { /* ignore */ }
            
            let generationPromise = imageGenerationPromises.get(cacheKey);

            if (!generationPromise) {
              generationPromise = generateImage(aiPrompt)
                .then(url => { 
                  try { localStorage.setItem(cacheKey, url); } catch (e) { console.warn('Failed to save to localStorage', e); }
                  return url; 
                })
                .catch(err => {
                  imageGenerationPromises.delete(cacheKey);
                  throw err; 
                });
              imageGenerationPromises.set(cacheKey, generationPromise);
            }
            
            try {
              const generatedUrl = await generationPromise;
              setCurrentSrc(generatedUrl);
            } catch (error) {
              console.error(`AI image generation failed for "${cacheKey}". Using fallback.`, error);
            }
          };
          
          loadAiImage();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(imgElement);

    return () => {
      observer.disconnect();
    };
  }, [aiPrompt, cacheKey, currentSrc]);

  useEffect(() => {
    setIsLoaded(false);
    if(imgRef.current?.complete) {
        setIsLoaded(true);
    }
  }, [currentSrc]);
  
  return (
    <div className={`${className} bg-gray-200 dark:bg-gray-700`}>
        <img
            ref={imgRef}
            src={currentSrc}
            alt={alt}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            {...props}
        />
    </div>
  );
};

export default LazyImage;
