import React, { useState, useMemo, useEffect, useRef } from 'react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';
import { Prompt } from '../types';

const PromptCard: React.FC<{ prompt: Prompt }> = ({ prompt }) => {
    const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');
    const copyTimeoutRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (copyTimeoutRef.current) {
                clearTimeout(copyTimeoutRef.current);
            }
        };
    }, []);

    const handleCopy = () => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(prompt.prompt).then(() => {
                setCopyStatus('copied');
                if (copyTimeoutRef.current) {
                    clearTimeout(copyTimeoutRef.current);
                }
                copyTimeoutRef.current = window.setTimeout(() => setCopyStatus('idle'), 2000);
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
        <div className="bg-app-surface rounded-lg shadow-md p-6 flex flex-col border border-app-default">
            <div className="flex-grow">
                <span className="inline-block bg-brand-subtle text-brand-subtle text-xs font-medium mb-2 px-2 py-0.5 rounded-full">{prompt.category}</span>
                <h3 className="text-xl font-bold text-app-main mb-2">{prompt.title}</h3>
                <p className="text-app-muted text-sm mb-4">{prompt.description}</p>
            </div>
            <div className="relative bg-app-subtle p-4 rounded-md border border-app-default max-h-80 overflow-auto">
                <pre className="text-app-main text-sm font-mono whitespace-pre-wrap overflow-x-auto">
                    <code>{prompt.prompt}</code>
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
    );
};


const PromptLibraryPage: React.FC = () => {
    const [prompts, setPrompts] = useState<Prompt[]>([]);
    const [activeFilter, setActiveFilter] = useState('Semua');

    useEffect(() => {
        import('../data/prompts').then(module => {
            setPrompts(module.prompts);
        });
    }, []);

    const categories = useMemo(() => {
        if (prompts.length === 0) return ['Semua'];
        return ['Semua', ...new Set(prompts.map(p => p.category))];
    }, [prompts]);

    const filteredPrompts = useMemo(() => {
        if (activeFilter === 'Semua') {
            return prompts;
        }
        return prompts.filter(p => p.category === activeFilter);
    }, [activeFilter, prompts]);

    const breadcrumbItems = [
        { label: 'Beranda', href: '/' },
        { label: 'Pustaka Prompt' },
    ];

    return (
        <>
            <MetaTags
                title="Pustaka Prompt"
                description="Koleksi prompt AI ahli yang telah dikurasi untuk seni, pengembangan, pemasaran, dan lainnya. Salin dan gunakan untuk meningkatkan produktivitas Anda."
                canonicalUrl={`${window.location.origin}/prompts`}
            />
            <Breadcrumbs items={breadcrumbItems} />
            <div className="space-y-8">
                <section className="text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-app-main mb-2">
                        Pustaka Prompt
                    </h1>
                    <p className="text-base sm:text-lg text-app-muted max-w-2xl mx-auto">
                        Jelajahi koleksi prompt ahli yang telah dikurasi untuk berbagai kebutuhan. Salin dan gunakan untuk meningkatkan produktivitas dan kreativitas Anda.
                    </p>
                </section>

                <div className="flex justify-center flex-wrap gap-2 sm:gap-4">
                    {categories.map(category => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-4 py-2 text-sm font-semibold rounded-full transition-colors duration-300 ${
                                activeFilter === category
                                    ? 'bg-brand text-white'
                                    : 'bg-app-surface text-app-main hover:bg-app-subtle border border-app-default'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPrompts.map(prompt => (
                        <PromptCard key={prompt.id} prompt={prompt} />
                    ))}
                </section>
            </div>
        </>
    );
};

export default PromptLibraryPage;