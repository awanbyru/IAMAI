import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useContentManager } from '../hooks/useContentManager';
import MetaTags from '../components/MetaTags';

const ADMIN_PASSWORD = 'password123'; // Simple hardcoded password

// Helper function to parse Indonesian dates
const parseIndonesianDate = (dateString: string): Date => {
  const monthMap: { [key: string]: string } = {
    'Januari': 'January', 'Februari': 'February', 'Maret': 'March', 'April': 'April',
    'Mei': 'May', 'Juni': 'June', 'Juli': 'July', 'Agustus': 'August',
    'September': 'September', 'Oktober': 'October', 'November': 'November', 'Desember': 'December',
  };
  const parts = dateString.split(' ');
  if (parts.length === 3) {
    const day = parts[0];
    const month = monthMap[parts[1]];
    const year = parts[2];
    if (month) {
      return new Date(`${month} ${day}, ${year}`);
    }
  }
  const d = new Date(dateString);
  if (!isNaN(d.getTime())) return d;
  return new Date();
};

const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { articles } = useContentManager();

  useEffect(() => {
    // Check session storage to persist authentication during the session
    if (sessionStorage.getItem('isAdminAuthenticated') === 'true') {
      setIsAuthenticated(true);
    } else {
      const password = prompt('Silakan masukkan kata sandi admin:');
      if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem('isAdminAuthenticated', 'true');
        setIsAuthenticated(true);
      }
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <>
        <MetaTags title="Akses Ditolak" description="" noIndex={true} />
        <div className="text-center py-20 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
          <h1 className="text-2xl font-bold text-red-600 dark:text-red-400">Akses Ditolak</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-4">Anda harus memasukkan kata sandi yang benar untuk melihat halaman ini.</p>
          <button onClick={() => window.location.reload()} className="mt-6 bg-secondary text-white font-bold py-2 px-4 rounded-lg hover:bg-secondary/80 transition-colors">
            Coba Lagi
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <MetaTags title="Panel Admin" description="Kelola artikel blog." noIndex={true} />
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold mb-6 text-center text-primary dark:text-gray-100">Panel Admin</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-center">Kelola artikel blog Anda di sini.</p>
        
        <div className="space-y-4">
          {articles.sort((a, b) => parseIndonesianDate(b.date).getTime() - parseIndonesianDate(a.date).getTime()).map(article => (
            <div key={article.id} className="flex justify-between items-center p-4 border dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-900/50">
              <div>
                <h2 className="font-bold text-lg text-text-main dark:text-gray-200">{article.title}</h2>
                <p className="text-sm text-text-muted dark:text-gray-400">Slug: {article.slug}</p>
              </div>
              <Link
                to={`/admin/edit/${article.slug}`}
                className="bg-secondary hover:bg-secondary/80 text-white font-bold py-2 px-4 rounded-lg transition-colors flex-shrink-0"
              >
                Edit
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminPage;
