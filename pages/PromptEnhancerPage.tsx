import React from 'react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';
import PromptEnhancer from '../components/PromptEnhancer';

const PromptEnhancerPage: React.FC = () => {
    const breadcrumbItems = [
        { label: 'Beranda', href: '/' },
        { label: 'Peningkat Prompt' },
    ];

    return (
        <>
            <MetaTags
                title="Peningkat Prompt AI"
                description="Ubah ide sederhana Anda menjadi prompt JSON yang terstruktur dan kaya detail. Tuliskan konsep Anda (dalam bahasa apa pun), dan biarkan AI menyempurnakannya."
                canonicalUrl={`${window.location.origin}/enhancer`}
            />
            <Breadcrumbs items={breadcrumbItems} />
            <div className="max-w-4xl mx-auto">
                 <PromptEnhancer />
            </div>
        </>
    );
};

export default PromptEnhancerPage;
