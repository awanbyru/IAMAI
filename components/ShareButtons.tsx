import React, { useState } from 'react';

interface ShareButtonsProps {
  url: string;
  title: string;
  shareText?: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title, shareText = "Bagikan:" }) => {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const socialLinks = [
    {
      name: 'Twitter',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4z" />
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38c1.45.79 3.08 1.21 4.79 1.21 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.12c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31c-.82-1.31-1.26-2.83-1.26-4.41 0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24s-3.7 8.24-8.24 8.24zm4.52-6.13c-.25-.12-1.47-.72-1.7-.8s-.39-.12-.56.12c-.17.25-.64.8-.79.97s-.3.17-.56 0c-.25-.12-1.07-.39-2.04-1.26s-1.47-1.9-1.64-2.2c-.17-.3-.02-.46.1-.61s.25-.3.37-.44.17-.25.25-.42.12-.3-.02-.42c-.15-.12-.56-1.34-.76-1.84s-.4-.43-.56-.43c-.16 0-.34 0-.5 0s-.42.06-.64.3c-.22.25-.87.85-1.07 2.07s-1.1 2.4 1.26 4.3c.07.05 2.33 3.54 5.65 4.96.79.34 1.4.54 1.88.69.75.25 1.42.21 1.95.12.59-.09 1.47-.6 1.68-1.18s.21-1.08.15-1.18c-.06-.1-.22-.16-.47-.28z" />
        </svg>
      )
    }
  ];

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url).then(() => {
        setCopyStatus('copied');
        setTimeout(() => setCopyStatus('idle'), 2000);
      });
    }
  };

  const linkIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.72"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.72-1.72"></path>
    </svg>
  );

  const checkIcon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-green-500">
        <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );

  return (
    <div className="flex items-center flex-wrap gap-2">
      <h3 className="text-base font-semibold text-text-main dark:text-gray-200 mr-2">{shareText}</h3>
      {socialLinks.map(link => (
        <a
          key={link.name}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Bagikan di ${link.name}`}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-secondary/20 hover:text-secondary transition-all duration-300"
        >
          <span className="sr-only">Bagikan di {link.name}</span>
          {link.icon}
        </a>
      ))}
      <button
        onClick={handleCopy}
        aria-label={copyStatus === 'idle' ? 'Salin tautan' : 'Tautan disalin'}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-secondary/20 hover:text-secondary transition-all duration-300"
      >
        <span className="sr-only">{copyStatus === 'idle' ? 'Salin tautan' : 'Tautan disalin'}</span>
        {copyStatus === 'idle' ? linkIcon : checkIcon}
      </button>
    </div>
  );
};

export default ShareButtons;
