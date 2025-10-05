import React, { useState, useEffect } from 'react';
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

  useEffect(() => {
    try {
      const allCommentsJSON = localStorage.getItem('article_comments');
      if (allCommentsJSON) {
        const allComments = JSON.parse(allCommentsJSON);
        setComments(allComments[articleSlug] || []);
      }
    } catch (e) {
      console.error("Failed to parse comments from localStorage", e);
      setComments([]);
    }
  }, [articleSlug]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!name.trim() || !message.trim()) {
      setError('Name and message cannot be empty.');
      return;
    }

    setIsSubmitting(true);

    const newComment: Comment = {
      id: Date.now().toString(),
      name: name.trim(),
      message: message.trim(),
      date: new Date().toISOString(),
    };

    setTimeout(() => {
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
            console.error("Failed to save comment to localStorage", e);
            setError("Could not save your comment. Please try again.");
          } finally {
            setIsSubmitting(false);
          }
    }, 500); // Simulate network delay
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  return (
    <div className="border-t dark:border-gray-700 pt-8">
      <h2 className="text-2xl font-bold text-text-main dark:text-gray-100 mb-6">Join the Discussion</h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit} className="mb-8 p-6 bg-gray-50 dark:bg-gray-900/50 rounded-lg border dark:border-gray-700 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm dark:text-white dark:placeholder-gray-400"
            placeholder="e.g., Jane Doe"
            required
            aria-required="true"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Comment</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-secondary focus:border-secondary sm:text-sm dark:text-white dark:placeholder-gray-400"
            placeholder="Share your thoughts..."
            required
            aria-required="true"
          ></textarea>
        </div>
        {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
        <div className="text-right">
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-secondary hover:bg-secondary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-colors disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Posting...' : 'Post Comment'}
          </button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-text-main dark:text-gray-200">
          {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
        </h3>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <div key={comment.id} className="p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg border dark:border-gray-700/50">
              <div className="flex items-center justify-between mb-2">
                <p className="font-bold text-text-main dark:text-gray-100">{comment.name}</p>
                <p className="text-xs text-text-muted dark:text-gray-400">{formatDate(comment.date)}</p>
              </div>
              <p className="text-text-main dark:text-gray-300 whitespace-pre-wrap">{comment.message}</p>
            </div>
          ))
        ) : (
          <div className="text-center py-8 px-4 bg-gray-50 dark:bg-gray-900/50 rounded-lg border dark:border-gray-700">
            <p className="text-text-muted dark:text-gray-400">No comments yet. Be the first to share your thoughts!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentSection;
