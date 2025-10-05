import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';

const ImageGenerator: React.FC = () => {
    const [prompt, setPrompt] = useState('A robot holding a red skateboard.');
    const [generatedImage, setGeneratedImage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [copyButtonText, setCopyButtonText] = useState('Salin sebagai Data URI');

    const handleGenerate = async () => {
        if (!prompt) {
            setError('Silakan masukkan prompt.');
            return;
        }

        setIsLoading(true);
        setError(null);
        setGeneratedImage(null);
        setCopyButtonText('Salin sebagai Data URI');

        try {
            const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });
            const response = await ai.models.generateImages({
                model: 'imagen-4.0-generate-001',
                prompt: prompt,
                config: { numberOfImages: 1, outputMimeType: 'image/png' },
            });
            
            if (response.generatedImages && response.generatedImages.length > 0) {
                const base64Data = response.generatedImages[0].image.imageBytes;
                setGeneratedImage(`data:image/png;base64,${base64Data}`);
            } else {
                 setError("AI tidak mengembalikan gambar. Coba perbaiki prompt Anda.");
            }
        } catch (err) {
            console.error(err);
            setError('Terjadi kesalahan saat membuat gambar. Silakan coba lagi.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleCopy = () => {
        if (!generatedImage) return;
        navigator.clipboard.writeText(generatedImage).then(() => {
            setCopyButtonText('Disalin!');
            setTimeout(() => setCopyButtonText('Salin sebagai Data URI'), 2000);
        }).catch(err => {
            console.error('Gagal menyalin teks: ', err);
            alert('Gagal menyalin. Silakan coba lagi.');
        });
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-6">
                <div>
                    <label htmlFor="generate-prompt" className="block text-sm font-medium text-gray-700 dark:text-gray-300">1. Deskripsikan Gambar yang Anda Inginkan</label>
                    <textarea id="generate-prompt" value={prompt} onChange={(e) => setPrompt(e.target.value)} rows={4} className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm dark:text-white dark:placeholder-gray-400" placeholder="contoh: Seekor naga megah berwarna-warni di puncak gunung bersalju saat matahari terbit." />
                </div>
                <button onClick={handleGenerate} disabled={isLoading || !prompt} className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed">
                    {isLoading ? 'Membuat...' : 'Buat Gambar'}
                </button>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-center min-h-[400px]">
                {isLoading ? (
                    <div className="text-center"><svg className="animate-spin h-10 w-10 text-secondary mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg><p className="text-gray-600 dark:text-gray-300">Membuat gambar Anda, harap tunggu...</p></div>
                ) : error ? (
                    <div className="text-center text-red-600 dark:text-red-400 bg-red-100 dark:bg-red-900/50 p-4 rounded-md"><p className="font-bold">Error</p><p>{error}</p></div>
                ) : generatedImage ? (
                    <div className="text-center space-y-4">
                        <img src={generatedImage} alt="Hasil" className="max-w-full max-h-[400px] rounded-md shadow-md" />
                        <button onClick={handleCopy} className="inline-block bg-accent text-white font-bold py-2 px-6 rounded-lg hover:bg-accent/90 transition-colors">{copyButtonText}</button>
                    </div>
                ) : (
                    <div className="text-center text-gray-500 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        <p>Gambar yang Anda buat untuk artikel & galeri akan muncul di sini.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ImageGenerator;
