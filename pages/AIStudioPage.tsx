import React, { useState, lazy, Suspense } from 'react';
import MetaTags from '../components/MetaTags';
import LoadingSpinner from '../components/LoadingSpinner';

// Lazy load components for code splitting
const ImageEditor = lazy(() => import('../components/ImageEditor'));
const ImageGenerator = lazy(() => import('../components/ImageGenerator'));

// --- Main Page Component ---
const AIStudioPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'generate' | 'edit'>('generate');

    return (
        <>
            <MetaTags
                title="Peralatan AI"
                description="Pusat kreatif untuk menghasilkan dan mengedit gambar dengan kekuatan AI. Gunakan generator dan editor kami untuk mewujudkan ide-ide Anda."
                canonicalUrl={`${window.location.origin}/aistudio`}
            />
            <div className="space-y-8">
                <section className="text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accent to-secondary mb-2">
                        Peralatan AI
                    </h1>
                    <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Pusat kreatif Anda untuk membuat dan mengedit gambar dengan kekuatan AI.
                    </p>
                </section>

                <div>
                    <div className="border-b border-gray-200 dark:border-gray-700">
                        <nav className="-mb-px flex justify-center space-x-8" aria-label="Tabs">
                            <button
                                onClick={() => setActiveTab('generate')}
                                className={`${activeTab === 'generate' ? 'border-secondary text-secondary' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
                            >
                                Generator Gambar
                            </button>
                            <button
                                onClick={() => setActiveTab('edit')}
                                className={`${activeTab === 'edit' ? 'border-secondary text-secondary' : 'border-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:border-gray-300 dark:hover:border-gray-600'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm transition-colors`}
                            >
                                Editor Gambar
                            </button>
                        </nav>
                    </div>
                    
                    <Suspense fallback={<LoadingSpinner />}>
                        {activeTab === 'generate' && <ImageGenerator />}
                        {activeTab === 'edit' && <ImageEditor />}
                    </Suspense>
                </div>
            </div>
        </>
    );
};

export default AIStudioPage;