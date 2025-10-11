import React, { useState, useEffect, useRef } from 'react';
import { Comment } from '../types';

interface CommentSectionProps {
  articleSlug: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ articleSlug }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submitTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    try {
      const allCommentsJSON = localStorage.getItem('article_comments');
      if (allCommentsJSON) {
        const allComments = JSON.parse(allCommentsJSON);
        setComments(allComments[articleSlug] || []);
      }
    } catch (e) {
      console.error("Gagal mem-parsing komentar dari localStorage", e);
      setComments([]);
    }

    return () => {
        if (submitTimeoutRef.current) {
            clearTimeout(submitTimeoutRef.current);
        }
    };
  }, [articleSlug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!name.trim() || !message.trim()) {
      setError('Nama dan pesan tidak boleh kosong.');
      return;
    }

    setIsSubmitting(true);

    const newComment: Comment = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      date: new Date().toISOString(),
    };

    submitTimeoutRef.current = window.setTimeout(() => {
        try {
            const allCommentsJSON = localStorage.getItem('article_comments');
            const allComments = allCommentsJSON ? JSON.parse(allCommentsJSON) : {};
            const articleComments = allComments[articleSlug] || [];
            
            const updatedComments = [newComment, ...articleComments];
      
            allComments[articleSlug] = updatedComments;
            localStorage.setItem('article_comments', JSON.stringify(allComments));
      
            setComments(updatedComments);
            setName('');
            setMessage('');
            setError('');
          } catch (e) {
            console.error("Gagal menyimpan komentar ke localStorage", e);
            setError("Tidak dapat menyimpan komentar Anda. Silakan coba lagi.");
          } finally {
            setIsSubmitting(false);
          }
    }, 500); // Simulate network delay
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  return (
    <div className="border-t border-app-default pt-8">
      <h2 className="text-2xl font-bold text-app-main mb-6">Bergabung dalam Diskusi</h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8 p-6 bg-app-subtle rounded-lg border border-app-default space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-app-muted mb-1">Nama Anda</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 bg-app-surface border border-app-default rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
            placeholder="contoh, Jane Doe"
            required
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-app-muted mb-1">Komentar Anda</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 bg-app-surface border border-app-default rounded-md shadow-sm focus:outline-none focus:ring-brand focus:border-brand sm:text-sm"
            placeholder="Bagikan pemikiran Anda..."
            required
            aria-required="true"
          ></textarea>
        </div>
        {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
        <div className="text-right">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-brand hover:bg-brand-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Mengirim...' : 'Kirim Komentar'}
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-app-main">
          {comments.length} {comments.length === 1 ? 'Komentar' : 'Komentar'}
        </h3>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="p-4 bg-app-subtle rounded-lg border border-app-default">
              <div className="flex items-center justify-between mb-2">
                <p className="font-bold text-app-main">{comment.name}</p>
                <p className="text-xs text-app-muted">{formatDate(comment.date)}</p>
              </div>
              <p className="text-app-main whitespace-pre-wrap">{comment.message}</p>
            </div>
          ))
        ) : (
          <div className="text-center py-8 px-4 bg-app-subtle rounded-lg border border-app-default">
            <p className="text-app-muted">Belum ada komentar. Jadilah yang pertama membagikan pemikiran Anda!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;