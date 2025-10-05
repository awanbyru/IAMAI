import React, { useEffect } from 'react';

interface MetaTagsProps {
  title: string;
  description: string;
  imageUrl?: string;
  canonicalUrl?: string;
  noIndex?: boolean;
}

// Helper to create/update meta/link tags
const setTag = (tag: 'meta' | 'link', keyName: 'name' | 'property' | 'rel', key: string, valueName: 'content' | 'href', value: string) => {
    // Prevent execution on server-side rendering environments
    if (typeof document === 'undefined') {
        return;
    }

    let element = document.querySelector(`${tag}[${keyName}='${key}']`) as HTMLMetaElement | HTMLLinkElement;
    if (!element) {
        element = document.createElement(tag);
        element.setAttribute(keyName, key);
        document.head.appendChild(element);
    }
    element.setAttribute(valueName, value);
};

// Helper to remove a tag
const removeTag = (tag: 'meta' | 'link', keyName: 'name' | 'property' | 'rel', key: string) => {
    if (typeof document === 'undefined') {
        return;
    }
    const element = document.querySelector(`${tag}[${keyName}='${key}']`);
    if (element) {
        element.parentNode?.removeChild(element);
    }
};

const MetaTags: React.FC<MetaTagsProps> = ({ title, description, imageUrl, canonicalUrl, noIndex = false }) => {
  useEffect(() => {
    const siteName = 'IAMAI - awanbyru';
    const fullTitle = `${title} | ${siteName}`;
    document.title = fullTitle;

    const finalCanonicalUrl = canonicalUrl || window.location.href;
    const defaultImage = `${window.location.origin}/icon-512.png`;
    const absoluteImageUrl = imageUrl 
      ? (imageUrl.startsWith('http') ? imageUrl : new URL(imageUrl, window.location.origin).href)
      : defaultImage;

    setTag('meta', 'name', 'description', 'content', description);
    setTag('link', 'rel', 'canonical', 'href', finalCanonicalUrl);

    // Open Graph
    setTag('meta', 'property', 'og:title', 'content', fullTitle);
    setTag('meta', 'property', 'og:description', 'content', description);
    setTag('meta', 'property', 'og:image', 'content', absoluteImageUrl);
    setTag('meta', 'property', 'og:url', 'content', finalCanonicalUrl);
    setTag('meta', 'property', 'og:site_name', 'content', siteName);
    setTag('meta', 'property', 'og:type', 'content', 'website');
    setTag('meta', 'property', 'og:locale', 'content', 'id_ID');

    // Twitter
    setTag('meta', 'name', 'twitter:card', 'content', 'summary_large_image');
    setTag('meta', 'name', 'twitter:title', 'content', fullTitle);
    setTag('meta', 'name', 'twitter:description', 'content', description);
    setTag('meta', 'name', 'twitter:image', 'content', absoluteImageUrl);
    
    // NoIndex for admin pages
    if (noIndex) {
        setTag('meta', 'name', 'robots', 'content', 'noindex, nofollow');
    } else {
        // Ensure no leftover noindex tag from previous pages
        removeTag('meta', 'name', 'robots');
    }
    
    // Cleanup function to remove noindex tag when component unmounts
    return () => {
        if(noIndex) {
            removeTag('meta', 'name', 'robots');
        }
    };
  }, [title, description, imageUrl, canonicalUrl, noIndex]);

  return null; // This component doesn't render anything
};

export default MetaTags;
