import React, { useState, useMemo } from 'react';

// Memoized component for syntax highlighting
const JsonHighlighter = React.memo(({ jsonString }: { jsonString: string }) => {
    if (!jsonString) return null;
    try {
        const formattedJson = JSON.stringify(JSON.parse(jsonString), null, 2);
        const highlightedHtml = formattedJson
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
            (match) => {
                let cls = 'json-number';
                if (/^"/.test(match)) {
                    cls = /:$/.test(match) ? 'json-key' : 'json-string';
                } else if (/true|false/.test(match)) {
                    cls = 'json-boolean';
                } else if (/null/.test(match)) {
                    cls = 'json-null';
                }
                return `<span class="${cls}">${match}</span>`;
            });
        return <pre className="text-sm font-mono whitespace-pre-wrap max-h-[28rem] overflow-auto" dangerouslySetInnerHTML={{ __html: highlightedHtml }} />;
    } catch (e) {
        // Fallback for non-JSON text
        return <pre className="text-sm font-mono whitespace-pre-wrap max-h-[28rem] overflow-auto"><code>{jsonString}</code></pre>;
    }
});

const PromptEnhancer: React.FC = () => {
    const [userInput, setUserInput] = useState('');
    const [generatedJson, setGeneratedJson] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');

    const handleGenerate = async () => {
        if (!userInput.trim()) return;
        
        setIsLoading(true);
        setError('');
        setGeneratedJson('');
        setCopyStatus('idle');

        try {
            const apiResponse = await fetch('/api/enhance-prompt', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userInput }),
            });

            const data = await apiResponse.json();

            if (!apiResponse.ok) {
                throw new Error(data.error || `Permintaan gagal dengan status ${apiResponse.status}`);
            }

            const rawJsonText = data.result;
            
            try {
                // Pre-format the JSON to ensure consistent spacing
                const parsedJson = JSON.parse(rawJsonText);
                setGeneratedJson(JSON.stringify(parsedJson, null, 2));
            } catch (parseError) {
                setError('Respons dari AI bukan format JSON yang valid. Menampilkan hasil mentah.');
                setGeneratedJson(rawJsonText);
            }
        } catch (e) {
            const errorMessage = e instanceof Error ? e.message : 'Terjadi kesalahan yang tidak diketahui.';
            setError(`Terjadi kesalahan saat membuat prompt: ${errorMessage}. Silakan coba lagi.`);
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
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
    );

    const checkIcon = (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
    );

    return (
        <div className="bg-app-surface rounded-lg shadow-lg p-6 sm:p-8 border border-app-default">
            <div className="text-center mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-app-main mb-2">AI Prompt Enhancer</h2>
                <p className="text-app-muted max-w-2xl mx-auto">
                    Ubah ide sederhana Anda menjadi prompt JSON yang terstruktur dan kaya detail. Tuliskan konsep Anda (dalam bahasa apa pun), dan biarkan AI menyempurnakannya ke dalam format bahasa Inggris yang siap pakai.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8 space-y-8 md:space-y-0">
                {/* Input Column */}
                <div className="flex flex-col space-y-4">
                    <div>
                        <label htmlFor="user-prompt" className="block text-sm font-medium text-app-muted mb-2">1. Tulis Ide Anda</label>
                        <textarea
                            id="user-prompt"
                            rows={8}
                            className="w-full px-3 py-2 bg-app-subtle border border-app-default rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand sm:text-sm text-app-main transition"
                            placeholder="Contoh: seekor naga cyberpunk terbang di kota hujan"
                            value={userInput}
                            onChange={(e) => setUserInput(e.target.value)}
                            disabled={isLoading}
                            aria-label="Ide Prompt Anda"
                        />
                    </div>
                    <div className="text-center md:text-left pt-2">
                        <button
                            onClick={handleGenerate}
                            disabled={isLoading || !userInput.trim()}
                            className="inline-flex items-center justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
                            aria-disabled={!userInput.trim() || isLoading}
                        >
                            {isLoading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                    Meningkatkan...
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 -ml-1 mr-2" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
                                    Tingkatkan Prompt
                                </>
                            )}
                        </button>
                    </div>
                </div>

                {/* Output Column */}
                <div className="flex flex-col">
                    <label className="block text-sm font-medium text-app-muted mb-2">2. Salin Prompt yang Disempurnakan</label>
                    <div className="relative bg-[#1E1E1E] p-4 rounded-md border border-gray-700 min-h-[20rem] h-full flex flex-col justify-center text-gray-400 font-mono">
                        {isLoading ? (
                             <div className="flex items-center justify-center flex-col text-center">
                                <div className="typing-indicator"><span></span><span></span><span></span></div>
                                <span className="text-sm mt-3">AI sedang berpikir...</span>
                                <span className="text-xs text-gray-500 mt-1">Ini bisa memakan waktu beberapa detik.</span>
                            </div>
                        ) : error ? (
                            <div role="alert" className="flex flex-col items-center justify-center text-center text-red-400 p-4 h-full">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                <p className="font-semibold text-base mb-1">Terjadi Kesalahan</p>
                                <p className="text-sm">{error}</p>
                            </div>
                        ) : generatedJson ? (
                            <>
                                <JsonHighlighter jsonString={generatedJson} />
                                <button
                                    onClick={handleCopy}
                                    className="absolute top-2 right-2 p-2 rounded-full bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                                    aria-label={copyStatus === 'idle' ? 'Salin prompt' : 'Prompt disalin'}
                                >
                                    {copyStatus === 'idle' ? copyIcon : checkIcon}
                                </button>
                            </>
                        ) : (
                            <div className="text-center text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1"><path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                <p className="text-sm">Hasil JSON akan muncul di sini.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PromptEnhancer;
