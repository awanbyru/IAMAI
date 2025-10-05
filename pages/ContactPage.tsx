import React, { useState } from 'react';
import MetaTags from '../components/MetaTags';

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

  return (
    <>
      <MetaTags
        title="Hubungi Kami"
        description="Punya pertanyaan, masukan, atau ingin berkolaborasi? Hubungi tim IAMAI. Kami ingin mendengar dari Anda."
        canonicalUrl={`${window.location.origin}/#/contact`}
      />
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-primary dark:text-gray-100">Hubungi Kami</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">
          Punya pertanyaan, masukan, atau ingin berkolaborasi? Kami ingin mendengar dari Anda.
        </p>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nama Lengkap</label>
            <input
              type="text"
              name="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm dark:text-white dark:placeholder-gray-400"
              placeholder="John Doe"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Alamat Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm dark:text-white dark:placeholder-gray-400"
              placeholder="anda@contoh.com"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Pesan</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm dark:text-white dark:placeholder-gray-400"
              placeholder="Pesan Anda di sini..."
              required
            ></textarea>
          </div>
          
          <div className="text-center">
              <button type="submit" className="inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors">
              Kirim Pesan
              </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContactPage;
