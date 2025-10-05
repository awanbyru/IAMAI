import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useContentManager } from '../hooks/useContentManager';
import { Article } from '../types';
import MetaTags from '../components/MetaTags';

const EditArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { getArticleBySlug, updateArticle } = useContentManager();
  
  const [article, setArticle] = useState<Article | null>(null);
  const [formData, setFormData] = useState<Partial<Article>>({});
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    if (slug) {
      const foundArticle = getArticleBySlug(slug);
      if (foundArticle) {
        setArticle(foundArticle);
        setFormData(foundArticle);
      } else {
        navigate('/admin'); // Redirect if article not found
      }
    }
  }, [slug, getArticleBySlug, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleArrayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     const { name, value } = e.target;
     setFormData(prev => ({ ...prev, [name]: value.split(',').map(item => item.trim()) }));
  }

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, content: e.target.value.split('\n') }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveMessage({ text: '', type: '' });

    // A simple client-side validation
    if (!formData.title || !formData.excerpt || !formData.content || !formData.imageUrl) {
        setSaveMessage({ text: 'Error: Harap isi semua bidang yang wajib diisi.', type: 'error' });
        setIsSaving(false);
        return;
    }

    const success = updateArticle(formData as Article);
    
    setTimeout(() => {
        if (success) {
            setSaveMessage({ text: 'Artikel berhasil diperbarui!', type: 'success' });
            // Optionally refetch data to confirm
            const updated = getArticleBySlug(slug!);
            if(updated) setFormData(updated);

        } else {
            setSaveMessage({ text: 'Error: Tidak dapat memperbarui artikel.', type: 'error' });
        }
        setIsSaving(false);
        setTimeout(() => setSaveMessage({ text: '', type: '' }), 3000);
    }, 1000); // Simulate network delay
  };

  if (!article) {
    return (
        <>
            <MetaTags title="Memuat Editor" description="" noIndex={true} />
            <div className="text-center p-8">Memuat editor artikel...</div>
        </>
    );
  }
  
  const inputStyle = "mt-1 block w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm dark:text-white";


  return (
    <>
      <MetaTags title={`Edit: ${article.title}`} description="" noIndex={true} />
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-primary dark:text-gray-100">Edit Artikel</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Judul</label>
            <input type="text" name="title" id="title" value={formData.title || ''} onChange={handleChange} className={inputStyle} required />
          </div>
          <div>
            <label htmlFor="excerpt" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Kutipan</label>
            <textarea name="excerpt" id="excerpt" rows={3} value={formData.excerpt || ''} onChange={handleChange} className={inputStyle} required />
          </div>
          <div>
              <label htmlFor="content" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Konten (satu paragraf per baris)</label>
              <textarea name="content" id="content" rows={10} value={formData.content?.join('\n') || ''} onChange={handleContentChange} className={`${inputStyle} font-mono`} required />
          </div>
          <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300">URL Gambar atau Data URI</label>
              <textarea name="imageUrl" id="imageUrl" rows={5} value={formData.imageUrl || ''} onChange={handleChange} className={`${inputStyle} font-mono`} required />
          </div>
          <div>
            <label htmlFor="tags" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Tag (dipisahkan koma)</label>
            <input type="text" name="tags" id="tags" value={formData.tags?.join(', ') || ''} onChange={handleArrayChange} className={inputStyle} />
          </div>
          
          <div className="flex items-center justify-between pt-4 border-t dark:border-gray-700">
            <Link to="/admin" className="text-secondary hover:underline">&larr; Kembali ke Panel Admin</Link>
            <div className="flex items-center space-x-4">
              {saveMessage.text && <span className={saveMessage.type === 'success' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>{saveMessage.text}</span>}
              <button type="submit" disabled={isSaving} className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-secondary hover:bg-secondary/90 disabled:bg-gray-400 dark:disabled:bg-gray-600">
                  {isSaving ? 'Menyimpan...' : 'Simpan Perubahan'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditArticlePage;
