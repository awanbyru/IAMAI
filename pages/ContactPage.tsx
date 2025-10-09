import React, { useState } from 'react';
import MetaTags from '../components/MetaTags';
import Breadcrumbs from '../components/Breadcrumbs';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Pesan Formulir Kontak dari ${name}`;
    const body = `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`;
    const mailtoLink = `mailto:tissue.tessa@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const breadcrumbItems = [
    { label: 'Beranda', href: '/' },
    { label: 'Hubungi Kami' },
  ];

  return (
    <>
      <MetaTags
        title="Hubungi Kami"
        description="Punya pertanyaan, masukan, atau ingin berkolaborasi? Hubungi tim IAMAI. Kami ingin mendengar dari Anda."
        canonicalUrl={`${window.location.origin}/contact`}
      />
      <Breadcrumbs items={breadcrumbItems} />
      <div className="max-w-2xl mx-auto bg-app-surface p-8 rounded-lg shadow-lg border border-app-default">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-app-main">Hubungi Kami</h1>
        <p className="text-app-muted mb-8 text-center">
          Punya pertanyaan, masukan, atau ingin berkolaborasi? Kami ingin mendengar dari Anda.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-app-muted">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-app-surface border border-app-default rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-app-muted">Alamat Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-app-surface border border-app-default rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
              placeholder="anda@contoh.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-app-muted">Pesan</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-app-surface border border-app-default rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
              placeholder="Pesan Anda di sini..."
              required
            ></textarea>
          </div>
          
          <div className="text-center">
              <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand transition-colors">
              Kirim Pesan
              </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactPage;