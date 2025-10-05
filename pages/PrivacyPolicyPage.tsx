import React from 'react';
import MetaTags from '../components/MetaTags';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <>
      <MetaTags
        title="Kebijakan Privasi"
        description="Pelajari bagaimana IAMAI - awanbyru mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda. Kami berkomitmen untuk menjaga privasi Anda."
        canonicalUrl={`${window.location.origin}/privacy-policy`}
      />
      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg prose prose-lg dark:prose-invert">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-primary dark:text-gray-100">Kebijakan Privasi</h1>
        
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">Terakhir diperbarui: 26 Oktober 2023</p>

        <p>
          Selamat datang di IAMAI - awanbyru. Kami menghormati privasi Anda dan berkomitmen untuk melindungi data pribadi Anda. Kebijakan privasi ini akan memberitahu Anda bagaimana kami menjaga data pribadi Anda saat Anda mengunjungi situs web kami (terlepas dari mana Anda mengunjunginya) dan memberitahu Anda tentang hak privasi Anda dan bagaimana hukum melindungi Anda.
        </p>

        <h2>1. Informasi Penting dan Siapa Kami</h2>
        <p>
          Kebijakan privasi ini bertujuan untuk memberi Anda informasi tentang bagaimana IAMAI - awanbyru mengumpulkan dan memproses data pribadi Anda melalui penggunaan situs web ini, termasuk data apa pun yang mungkin Anda berikan melalui situs web ini saat Anda mendaftar ke buletin kami, membeli produk atau layanan, atau mengambil bagian dalam kompetisi.
        </p>

        <h2>2. Data yang Kami Kumpulkan Tentang Anda</h2>
        <p>
          Data pribadi, atau informasi pribadi, berarti setiap informasi tentang individu dari mana orang tersebut dapat diidentifikasi. Kami dapat mengumpulkan, menggunakan, menyimpan, dan mentransfer berbagai jenis data pribadi tentang Anda yang telah kami kelompokkan sebagai berikut:
          <ul>
              <li>Data Identitas mencakup nama depan, nama belakang, nama pengguna atau pengidentifikasi serupa.</li>
              <li>Data Kontak mencakup alamat penagihan, alamat pengiriman, alamat email, dan nomor telepon.</li>
              <li>Data Teknis mencakup alamat protokol internet (IP), data login Anda, jenis dan versi browser, pengaturan zona waktu dan lokasi, jenis dan versi plug-in browser, sistem operasi dan platform, dan teknologi lain pada perangkat yang Anda gunakan untuk mengakses situs web ini.</li>
          </ul>
        </p>

        <h2>3. Cookie dan Iklan</h2>
        <p>
          Situs web kami menggunakan cookie untuk membedakan Anda dari pengguna lain di situs web kami. Ini membantu kami untuk memberikan Anda pengalaman yang baik saat Anda menjelajahi situs web kami dan juga memungkinkan kami untuk meningkatkan situs kami. Kami mungkin menggunakan perusahaan periklanan pihak ketiga, seperti Google AdSense, untuk menayangkan iklan saat Anda mengunjungi situs web kami. Perusahaan-perusahaan ini mungkin menggunakan informasi tentang kunjungan Anda ke situs ini dan situs web lain untuk menyediakan iklan tentang barang dan jasa yang menarik bagi Anda.
        </p>
        
        <h2>4. Hak Hukum Anda</h2>
        <p>
        Anda memiliki hak di bawah undang-undang perlindungan data sehubungan dengan data pribadi Anda, termasuk hak untuk meminta akses, koreksi, penghapusan, pembatasan, transfer, untuk menolak pemrosesan, portabilitas data, dan (di mana dasar hukum pemrosesan adalah persetujuan) untuk menarik persetujuan.
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;