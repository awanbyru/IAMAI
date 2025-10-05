import React from 'react';
import MetaTags from '../components/MetaTags';

const AboutPage: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Tentang Kami"
        description="Pelajari tentang misi IAMAI untuk mengungkap dunia AI prompting dan memberdayakan para penggemar, seniman, dan pengembang. Didirikan oleh awanbyru."
        canonicalUrl={`${window.location.origin}/about`}
      />
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-primary dark:text-gray-100">Tentang IAMAI</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
          <p className="text-center text-xl text-gray-600 dark:text-gray-300">
            Menjelajahi batas-batas Kecerdasan Buatan, satu prompt pada satu waktu.
          </p>

          <section>
            <h2 className="text-2xl font-semibold">Misi Kami</h2>
            <p>
              IAMAI lahir dari ketertarikan pada potensi kreatif Kecerdasan Buatan. Misi kami adalah untuk mengungkap dunia AI prompting dan memberdayakan para penggemar, seniman, pengembang, dan penulis untuk membuka hasil yang inovatif. Kami percaya bahwa prompt yang dibuat dengan baik adalah kunci untuk mengubah alat yang kuat menjadi mitra kreatif sejati.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">Kenali Penulis - awanbyru</h2>
            <p>
              Hai, saya awanbyru, pendiri dan penulis utama di balik IAMAI. Dengan latar belakang di bidang teknologi dan hasrat untuk seni digital, saya terpikat oleh kebangkitan AI generatif. Blog ini adalah platform saya untuk berbagi eksperimen, tutorial, dan wawasan yang dikumpulkan dari berjam-jam berkolaborasi dengan model AI. Tujuan saya adalah menciptakan komunitas di mana kita semua bisa belajar dan tumbuh bersama di bidang baru yang menarik ini.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold">Visi Kami</h2>
            <p>
              Kami membayangkan masa depan di mana kreativitas manusia dan kecerdasan buatan bekerja dalam harmoni yang mulus. IAMAI bertujuan untuk menjadi yang terdepan dalam evolusi ini, menyediakan konten berkualitas tinggi, sumber daya yang terkurasi, dan ruang untuk diskusi. Baik Anda seorang insinyur prompt berpengalaman atau baru memulai perjalanan Anda, kami di sini untuk membimbing dan menginspirasi Anda.
            </p>
          </section>

          <p className="text-center font-semibold pt-4 border-t dark:border-gray-600">
              Terima kasih telah bergabung dengan kami dalam petualangan ini.
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutPage;