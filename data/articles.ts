import { Article } from '../types';

const authorAvatar = '/icon.svg';

export const articles: Article[] = [
  {
    id: '39',
    slug: 'revolusi-bisnis-kecil-prompt-ai-praktis',
    title: 'Revolusi Bisnis Kecil: 15+ Prompt AI Praktis untuk Pemasaran, Layanan Pelanggan, & Operasional',
    excerpt: 'Berhenti mengerjakan semuanya sendiri. Panduan ini berisi 15+ prompt AI siap pakai untuk UKM, mulai dari membuat kalender konten media sosial hingga menganalisis ulasan pelanggan secara otomatis. Hemat waktu, tingkatkan efisiensi.',
    summary: 'Panduan praktis untuk pemilik Usaha Kecil dan Menengah (UKM) tentang cara memanfaatkan AI untuk tugas sehari-hari. Mencakup prompt siap pakai untuk pemasaran (kalender konten, ide postingan), layanan pelanggan (analisis ulasan, draf balasan), dan operasional (email profesional, ringkasan rapat).',
    type: 'howto',
    content: [
      'Menjalankan Usaha Kecil dan Menengah (UKM) seringkali terasa seperti menjadi seorang _one-person army_. Anda adalah pemasar, layanan pelanggan, sekaligus manajer operasional. Waktu adalah sumber daya paling berharga, dan tugas-tugas administratif bisa dengan cepat menghabiskannya. Bagaimana jika Anda bisa memiliki tim ahli yang bekerja untuk Anda 24/7, tanpa biaya? Itulah janji Kecerdasan Buatan (AI) untuk UKM.',
      'Lupakan konsep AI yang rumit dan mahal. Dengan perintah atau "prompt" yang tepat, Anda dapat mengubah model bahasa seperti Gemini menjadi asisten bisnis yang sangat efisien. Panduan ini menyediakan koleksi prompt praktis yang dapat Anda salin-tempel untuk mengotomatiskan berbagai tugas penting.',
      '**Mengapa AI adalah Game-Changer untuk UKM?**',
      'AI menyeimbangkan persaingan. Ia memungkinkan UKM untuk:',
      '  - **Menghemat Waktu:** Otomatiskan tugas-tugas berulang seperti menulis email atau membuat draf konten.',
      '  - **Meningkatkan Pemasaran:** Hasilkan ide-ide kreatif dan analisis data tanpa perlu agensi mahal.',
      '  - **Memahami Pelanggan:** Dapatkan wawasan mendalam dari ulasan pelanggan dalam hitungan menit, bukan jam.',
      '**Koleksi Prompt Praktis untuk Bisnis Anda**',
      'Salin prompt di bawah ini dan sesuaikan bagian dalam `[kurung siku]` dengan detail bisnis Anda.',
      '**A. Pemasaran Digital**',
      '**1. Kalender Konten Media Sosial (JSON Lengkap)**',
      'Prompt ini akan menghasilkan ide kalender konten terstruktur untuk satu minggu. AI akan bertindak sebagai manajer media sosial Anda.',
      `JSON_PROMPT:{
  "role": "Manajer Media Sosial untuk UKM",
  "task": "Buat kalender konten Instagram untuk satu minggu (Senin-Jumat).",
  "business_name": "[Nama Bisnis Anda, misal: Kedai Kopi Senja]",
  "target_audience": "[Target Audiens Anda, misal: Profesional muda usia 25-35 tahun]",
  "content_pillars": ["Kualitas Produk", "Di Balik Layar", "Edukasi", "Interaksi Komunitas"],
  "output_format": "Tabel dengan kolom: Hari, Tipe Postingan (Foto/Video/Story), Ide Konten, dan Contoh Caption Singkat."
}`,
      '**2. Ide Postingan Blog yang Menarik Trafik**',
      'Butuh ide segar untuk blog Anda? AI dapat membantu Anda melakukan brainstorming topik yang relevan dengan audiens.',
      'JSON_PROMPT:Bertindaklah sebagai ahli strategi konten. Hasilkan 5 ide judul postingan blog yang menarik dan SEO-friendly untuk sebuah bisnis [jenis bisnis Anda, misal: toko kue artisan]. Topik harus relevan untuk audiens yang tertarik pada [minat audiens, misal: kue buatan tangan dan bahan-bahan berkualitas].',
      '**3. Deskripsi Produk yang Menjual (E-commerce)**',
      'Ubah fitur produk menjadi manfaat yang menarik bagi pelanggan. Hemat waktu menulis deskripsi untuk puluhan produk.',
      'JSON_PROMPT:Tulis deskripsi produk yang persuasif (sekitar 100 kata) untuk produk berikut: [Nama Produk, misal: Sabun Kopi Organik]. Target audiens adalah konsumen yang sadar lingkungan. Tonjolkan manfaat utamanya: [manfaat 1, misal: mengangkat sel kulit mati], [manfaat 2, misal: aroma yang menyegarkan], dan [manfaat 3, misal: dibuat dari bahan alami tanpa limbah plastik].',
      '**4. A/B Testing Judul Email Marketing**',
      'Tingkatkan open rate email Anda dengan judul yang menarik. Minta AI membuat beberapa opsi untuk diuji.',
      'JSON_PROMPT:Buat 3 opsi judul (subject line) yang berbeda untuk kampanye email marketing. Tujuannya adalah untuk mempromosikan [penawaran Anda, misal: diskon 20% akhir pekan]. Buat satu judul yang lugas, satu yang menciptakan rasa urgensi, dan satu lagi yang menggunakan emoji.',
      '**B. Layanan Pelanggan**',
      '**5. Menganalisis Ulasan Pelanggan (JSON)**',
      'Punya ratusan ulasan? Tempelkan beberapa di antaranya, dan AI akan merangkum sentimen dan poin-poin utamanya.',
      `JSON_PROMPT:{
  "role": "Analis Umpan Balik Pelanggan",
  "task": "Analisis ulasan pelanggan berikut dan identifikasi sentimen (Positif/Negatif/Netral), 3 tema utama yang paling sering disebut, dan satu saran perbaikan yang bisa ditindaklanjuti.",
  "customer_reviews": [
    "[Tempel ulasan pelanggan 1 di sini]",
    "[Tempel ulasan pelanggan 2 di sini]",
    "[Tempel ulasan pelanggan 3 di sini]"
  ],
  "output_format": "Ringkasan poin-poin yang jelas."
}`,
      '**6. Draf Balasan Ulasan Negatif**',
      'Menanggapi ulasan buruk dengan empati dan profesionalisme sangat penting. Biarkan AI membantu Anda menyusun draf awalnya.',
      'JSON_PROMPT:Buat draf balasan yang profesional dan empatik untuk ulasan pelanggan negatif berikut: "[Tempel ulasan negatif di sini]". Balasan harus mengakui masalah, meminta maaf, dan menawarkan solusi atau cara untuk menghubungi layanan pelanggan secara langsung.',
      '**7. Membuat Draf FAQ (Frequently Asked Questions)**',
      'Antisipasi pertanyaan pelanggan. Berikan AI informasi tentang produk atau layanan Anda, dan ia akan membuat draf FAQ.',
      'JSON_PROMPT:Berdasarkan informasi produk ini: [deskripsi singkat produk/layanan Anda], buat 5 pertanyaan yang paling mungkin ditanyakan oleh pelanggan (FAQ) beserta jawaban yang jelas dan singkat.',
      '**C. Operasional Bisnis**',
      '**8. Menulis Email Profesional**',
      'Butuh mengirim email ke pemasok atau mitra bisnis? Jelaskan tujuannya, dan AI akan menyusun email yang sopan dan to-the-point.',
      'JSON_PROMPT:Tulis draf email profesional kepada pemasok bernama [Nama Pemasok]. Tujuannya adalah untuk menanyakan keterlambatan pengiriman pesanan nomor [Nomor Pesanan]. Minta pembaruan status dan perkiraan tanggal pengiriman baru. Jaga agar nadanya tetap sopan dan kolaboratif.',
      '**9. Meringkas Transkrip Rapat**',
      'Ubah transkrip rapat yang panjang menjadi poin-poin penting dan item tindakan (action items) yang jelas.',
      'JSON_PROMPT:Berikut adalah transkrip singkat dari rapat tim kami: "[Tempel transkrip atau poin-poin utama di sini]". Ringkaslah diskusi ini menjadi 3 poin keputusan utama dan daftar item tindakan (action items) beserta penanggung jawabnya.',
      '**10. Membuat Draf Deskripsi Pekerjaan**',
      'Rekrutmen menjadi lebih mudah. AI dapat membantu Anda membuat deskripsi pekerjaan yang menarik dan komprehensif.',
      'JSON_PROMPT:Buat draf deskripsi pekerjaan untuk posisi [Nama Posisi, misal: Staf Media Sosial] di perusahaan kami, [Nama Perusahaan]. Tanggung jawab utamanya meliputi [tanggung jawab 1] dan [tanggung jawab 2]. Kualifikasi yang dibutuhkan adalah [kualifikasi 1] dan [kualifikasi 2].',
      '**Kesimpulan: Mitra Pertumbuhan Anda**',
      'AI bukan lagi alat untuk perusahaan besar saja. Dengan kreativitas dan prompt yang tepat, AI bisa menjadi mitra paling efisien bagi UKM. Mulailah dengan prompt di atas, bereksperimen, dan saksikan bagaimana teknologi dapat membebaskan waktu Anda untuk fokus pada hal yang paling penting: mengembangkan bisnis Anda.'
    ],
    imageUrl: 'https://picsum.photos/seed/ai-for-small-business/800/400',
    author: 'awanbyru',
    authorAvatar,
    date: '03 November 2025',
    claps: 180,
    tags: ['AI untuk Bisnis', 'UKM', 'Prompt Engineering', 'Pemasaran Digital', 'Tutorial'],
    faq: [
      {
        question: "Apakah saya memerlukan alat AI yang mahal untuk menggunakan prompt ini?",
        answer: "Tidak sama sekali. Semua prompt dalam panduan ini dirancang untuk bekerja dengan model bahasa besar yang dapat diakses secara gratis, seperti Gemini dari Google. Keterampilan Anda dalam memberikan perintah jauh lebih penting daripada alat yang Anda gunakan."
      },
      {
        question: "Seberapa akurat AI dalam menganalisis ulasan pelanggan?",
        answer: "AI sangat baik dalam mengidentifikasi pola dan sentimen umum dari sekumpulan besar teks. Ini adalah alat yang hebat untuk mendapatkan gambaran cepat tentang umpan balik pelanggan. Namun, untuk kasus yang sangat sensitif atau kompleks, wawasan tersebut harus selalu ditinjau kembali oleh manusia untuk memastikan pemahaman konteks yang penuh."
      }
    ]
  },
  {
    id: '38',
    slug: 'cetak-biru-guru-modern-prompt-ai-kurikulum-merdeka',
    title: 'Cetak Biru Guru Modern: 20+ Prompt AI Siap Pakai untuk Kurikulum Merdeka & Pembelajaran Inovatif',
    excerpt: 'Berhenti menghabiskan waktu berjam-jam untuk administrasi. Panduan ini memberikan lebih dari 20 prompt AI praktis yang dirancang khusus untuk guru Indonesia, mulai dari membuat RPP Kurikulum Merdeka hingga merancang asesmen P5 yang menarik.',
    summary: 'Panduan komprehensif bagi guru Indonesia untuk mengintegrasikan AI ke dalam pengajaran sehari-hari. Mencakup rekayasa prompt untuk membuat Rencana Pelaksanaan Pembelajaran (RPP) Kurikulum Merdeka, soal HOTS, materi ajar diferensiasi, dan asesmen untuk Proyek Penguatan Profil Pelajar Pancasila (P5).',
    type: 'howto',
    content: [
      'Sebagai seorang pendidik di era digital, beban administrasi seringkali terasa tak ada habisnya, menyita waktu berharga yang seharusnya bisa digunakan untuk berinovasi di dalam kelas. Namun, bagaimana jika Anda memiliki asisten pribadi yang cerdas, siap membantu 24/7 untuk merancang RPP, membuat soal, hingga memberikan ide proyek yang menarik? Asisten itu kini ada dalam bentuk Kecerdasan Buatan (AI).',
      'Kunci untuk membuka potensi penuh AI bukanlah dengan bertanya secara umum, melainkan dengan memberikan perintah atau "prompt" yang tepat. Panduan ini adalah cetak biru Anda untuk menjadi seorang "arsitek pembelajaran" yang mahir menggunakan AI, khususnya dalam konteks Kurikulum Merdeka.',
      '**Mengapa Prompting Penting untuk Guru Kurikulum Merdeka?**',
      'Kurikulum Merdeka menekankan pada pembelajaran yang berpusat pada murid, fleksibel, dan relevan. AI, jika dipandu dengan benar, dapat menjadi alat yang luar biasa untuk:',
      '  - **Personalisasi Pembelajaran:** Membuat materi ajar untuk tingkat pemahaman yang berbeda.',
      '  - **Menghemat Waktu Administrasi:** Mengotomatiskan pembuatan RPP, rubrik, dan soal.',
      '  - **Memicu Kreativitas:** Menghasilkan ide-ide segar untuk Proyek Penguatan Profil Pelajar Pancasila (P5).',
      '**Koleksi 20+ Prompt Siap Pakai**',
      'Berikut adalah kumpulan prompt yang telah kami rancang untuk mencakup berbagai kebutuhan Anda sehari-hari. Salin, modifikasi sesuai kebutuhan Anda, dan lihat bagaimana AI dapat mempercepat pekerjaan Anda.',
      '**A. Perencanaan Pembelajaran**',
      '**1. RPP Kurikulum Merdeka (JSON Lengkap)**',
      'Prompt ini akan menghasilkan Rencana Pelaksanaan Pembelajaran (RPP) yang lengkap dan terstruktur dalam format JSON. Cukup sesuaikan topik, jenjang, dan tujuan pembelajaran, dan AI akan menyusun kerangka kerja yang solid untuk satu pertemuan, lengkap dengan kegiatan berdiferensiasi dan asesmen.',
      `JSON_PROMPT:{
  "role": "Ahli Perancangan Kurikulum Merdeka",
  "task": "Buat Rencana Pelaksanaan Pembelajaran (RPP) lengkap untuk satu pertemuan.",
  "topic": "Siklus Air dan Dampaknya pada Kehidupan",
  "grade_level": "Fase C (Kelas 5 SD)",
  "subject": "IPAS",
  "duration": "2 x 35 menit",
  "learning_objectives": [
    "Siswa mampu mengidentifikasi tahapan siklus air (evaporasi, kondensasi, presipitasi).",
    "Siswa mampu menjelaskan dampak siklus air bagi makhluk hidup melalui diagram sederhana."
  ],
  "pancasila_profile_dimensions": ["Bernalar Kritis", "Kreatif"],
  "activities": {
    "opening": "Apersepsi dengan pertanyaan pemantik: 'Dari mana datangnya hujan?' dan menonton video singkat tentang awan.",
    "main_activity": "Pembelajaran berdiferensiasi: 1. Kelompok visual membuat diagram siklus air. 2. Kelompok kinestetik melakukan eksperimen sederhana siklus air dalam toples. 3. Kelompok auditori berdiskusi dan merekam penjelasan tentang dampak siklus air.",
    "closing": "Presentasi hasil kerja kelompok dan refleksi bersama tentang pentingnya air."
  },
  "assessment": {
    "formative": "Observasi saat diskusi kelompok dan penilaian presentasi singkat.",
    "summative": "Tugas menggambar dan memberi label pada diagram siklus air di akhir sesi."
  }
}`,
      '**2. Draf Modul Ajar P5**',
      'Gunakan prompt ini untuk membuat kerangka Modul Ajar Proyek Penguatan Profil Pelajar Pancasila (P5). AI akan membantu Anda menentukan tujuan, alur kegiatan mingguan, dan jenis asesmen yang relevan untuk proyek dengan tema spesifik.',
      'JSON_PROMPT:Anda adalah seorang ahli Kurikulum Merdeka. Buatkan draf Modul Ajar Proyek Penguatan Profil Pelajar Pancasila (P5) untuk Fase D (SMP) dengan tema "Kearifan Lokal". Proyek ini akan berlangsung selama 3 minggu. Tentukan tujuan, alur kegiatan per minggu, dan jenis asesmen formatif yang relevan.',
      '**3. Ide Kegiatan Ice Breaking**',
      'Butuh cara cepat untuk menyegarkan suasana kelas? Prompt ini akan memberikan lima ide ice breaking yang kreatif, singkat, dan relevan dengan mata pelajaran Anda untuk meningkatkan semangat dan fokus siswa.',
      'JSON_PROMPT:Berikan 5 ide ice breaking yang kreatif dan singkat (kurang dari 5 menit) untuk memulai pelajaran Matematika kelas 7 agar siswa lebih bersemangat dan fokus. Setiap ide harus relevan dengan konsep matematika dasar.',
      '**4. Pemetaan Tujuan Pembelajaran dari CP**',
      'Merasa kesulitan mengurai Capaian Pembelajaran (CP) yang kompleks? Cukup salin CP Anda ke dalam prompt ini, dan AI akan membantu memetakannya menjadi beberapa Tujuan Pembelajaran (TP) yang lebih spesifik dan terukur.',
      'JSON_PROMPT:Saya memiliki Capaian Pembelajaran (CP) berikut untuk mata pelajaran Bahasa Indonesia Fase E (Kelas 10): "[Salin CP di sini]". Uraikan CP ini menjadi 5 Tujuan Pembelajaran (TP) yang spesifik, terukur, dan dapat dicapai dalam satu semester.',
      '**5. Menyusun Alur Tujuan Pembelajaran (ATP)**',
      'Setelah memiliki daftar Tujuan Pembelajaran (TP), gunakan prompt ini untuk menyusunnya menjadi Alur Tujuan Pembelajaran (ATP) yang logis dan berurutan untuk satu semester penuh.',
      'JSON_PROMPT:Berdasarkan 5 Tujuan Pembelajaran (TP) berikut: [Sebutkan 5 TP], susunlah menjadi Alur Tujuan Pembelajaran (ATP) yang logis dan berurutan untuk satu semester.',
      '**B. Pembuatan Materi Ajar**',
      '**6. Materi Ajar Berdiferensiasi**',
      'Prompt ini sangat berguna untuk personalisasi. AI akan membuat tiga versi materi ajar yang sama, disesuaikan untuk tiga tingkat pemahaman siswa yang berbeda: dasar, rata-rata, dan tinggi.',
      'JSON_PROMPT:Saya mengajar materi tentang "Kerajaan Hindu-Buddha di Indonesia" untuk kelas 4 SD. Buatkan tiga versi paragraf pengantar untuk materi ini yang disesuaikan untuk tiga tingkat pemahaman siswa: (1) Siswa dengan pemahaman dasar, (2) Siswa dengan pemahaman rata-rata, dan (3) Siswa dengan pemahaman tinggi yang butuh tantangan.',
      '**7. Studi Kasus Kontekstual**',
      'Buat pembelajaran lebih relevan dengan studi kasus yang kontekstual. AI akan menghasilkan narasi singkat tentang masalah nyata di lingkungan sekitar siswa, lengkap dengan pertanyaan pemantik untuk memicu diskusi.',
      'JSON_PROMPT:Buat sebuah studi kasus singkat (sekitar 200 kata) tentang masalah pencemaran sampah plastik di lingkungan sekitar sekolah. Studi kasus ini ditujukan untuk siswa kelas 5 SD mata pelajaran IPAS dan harus mengandung pertanyaan pemantik untuk diskusi kelompok.',
      '**8. Naskah Video Pembelajaran**',
      'Percepat proses pembuatan konten video Anda. Prompt ini akan menghasilkan naskah video pembelajaran berdurasi singkat yang terstruktur, mulai dari pembuka yang menarik hingga rangkuman yang efektif.',
      'JSON_PROMPT:Tuliskan naskah untuk video pembelajaran berdurasi 3 menit dengan topik "Peran Indonesia dalam ASEAN" untuk siswa SMA. Naskah harus mencakup bagian pembuka yang menarik, isi yang informatif, dan penutup berupa rangkuman.',
      '**9. Lembar Kerja Siswa (LKS)**',
      'Buat LKS yang interaktif dalam hitungan menit. AI akan merancang lembar kerja yang berisi berbagai jenis kegiatan, seperti isian singkat, pertanyaan analisis, dan eksperimen sederhana.',
      'JSON_PROMPT:Buat Lembar Kerja Siswa (LKS) interaktif untuk materi "Fotosintesis" kelas 8. LKS harus berisi 3 bagian: (1) Isian singkat untuk label diagram, (2) 2 pertanyaan analisis, dan (3) 1 kegiatan eksperimen sederhana yang bisa dilakukan di rumah.',
      '**10. Cerita Pendek untuk Pembelajaran Karakter**',
      'Integrasikan pendidikan karakter melalui cerita. Gunakan prompt ini untuk menghasilkan cerita pendek yang mengandung nilai moral spesifik, cocok untuk siswa sekolah dasar.',
      'JSON_PROMPT:Tuliskan sebuah cerita pendek (sekitar 300 kata) untuk anak SD yang mengandung nilai moral tentang kejujuran. Tokoh utamanya adalah seekor hewan.',
      '**C. Penilaian dan Asesmen**',
      '**11. Soal HOTS (High Order Thinking Skills)**',
      'Tingkatkan level soal Anda. Dengan prompt ini, AI akan bertindak sebagai spesialis evaluasi untuk membuat soal esai tipe HOTS (C4-C6) berdasarkan tujuan pembelajaran, lengkap dengan kunci jawaban dan pedoman penskoran.',
      'JSON_PROMPT:Bertindaklah sebagai spesialis evaluasi pendidikan. Buat 3 soal esai tipe HOTS (C4-Menganalisis, C5-Mengevaluasi, C6-Mencipta) berdasarkan tujuan pembelajaran: "Siswa mampu menganalisis hubungan antara kegiatan manusia dengan kelestarian ekosistem laut". Sertakan kunci jawaban dan pedoman penskoran untuk setiap soal.',
      '**12. Rubrik Penilaian Proyek**',
      'Hemat waktu dalam membuat instrumen penilaian. Prompt ini akan menghasilkan rubrik penilaian yang komprehensif untuk tugas proyek, mencakup beberapa kriteria dan level skor yang jelas.',
      'JSON_PROMPT:Buat rubrik penilaian yang komprehensif untuk proyek presentasi kelompok tentang "Pahlawan Nasional". Rubrik harus mencakup 4 kriteria: (1) Konten Materi, (2) Keterampilan Presentasi, (3) Kerjasama Tim, dan (4) Kreativitas. Setiap kriteria memiliki 4 level skor (Sangat Baik, Baik, Cukup, Perlu Bimbingan).',
      '**13. Umpan Balik Konstruktif Otomatis**',
      'Berikan umpan balik yang personal dan cepat. Salin jawaban esai siswa ke dalam prompt ini, dan AI akan memberikan analisis konstruktif, menyoroti hal yang sudah baik dan area yang perlu ditingkatkan.',
      'JSON_PROMPT:Saya memiliki jawaban esai siswa berikut ini tentang penyebab Perang Dunia I: "[Salin jawaban siswa di sini]". Berikan umpan balik yang konstruktif dan positif. Fokus pada 2 hal yang sudah baik dan 2 hal yang bisa ditingkatkan, beserta saran perbaikannya.',
      '**14. Soal Kuis Cepat (Kahoot/Quizziz)**',
      'Buat kuis interaktif dengan mudah. AI akan menghasilkan soal-soal pilihan ganda yang menyenangkan, lengkap dengan jawaban benar dan pilihan pengecoh yang masuk akal.',
      'JSON_PROMPT:Buat 5 soal pilihan ganda yang menyenangkan untuk kuis cepat (seperti Kahoot) tentang topik "Tata Surya" untuk kelas 6 SD. Sertakan satu jawaban benar dan tiga jawaban pengecoh yang masuk akal untuk setiap soal.',
      '**15. Asesmen Diagnostik Awal**',
      'Pahami siswa Anda lebih dalam sejak awal. Gunakan prompt ini untuk merancang pertanyaan asesmen diagnostik non-kognitif untuk mengetahui gaya belajar dan minat siswa baru.',
      'JSON_PROMPT:Rancang 3 pertanyaan asesmen diagnostik non-kognitif untuk mengetahui gaya belajar dan minat siswa kelas 10 di awal tahun ajaran baru.',
      '**D. Komunikasi dan Administrasi**',
      '**16. Email kepada Orang Tua**',
      'Komunikasi dengan orang tua menjadi lebih mudah. Prompt ini membantu Anda menyusun draf email yang informatif dan ramah untuk berbagai keperluan, seperti pemberitahuan kegiatan sekolah.',
      'JSON_PROMPT:Tulis draf email yang informatif dan ramah kepada orang tua siswa kelas 4 untuk menginformasikan tentang kegiatan outing class ke museum. Email harus mencakup informasi tentang tujuan, tanggal, biaya, dan barang bawaan yang diperlukan.',
      '**17. Menyusun Notulen Rapat**',
      'Ubah rekaman atau poin-poin rapat menjadi notulen yang terstruktur. Cukup berikan poin utamanya, dan AI akan menyusunnya menjadi dokumen yang ringkas dan profesional.',
      'JSON_PROMPT:Saya memiliki rekaman audio rapat dewan guru. Berikut adalah poin-poin utamanya: [Sebutkan poin-poin utama]. Susunlah menjadi notulen rapat yang ringkas dan terstruktur, mencakup agenda, hasil diskusi, dan tindak lanjut (action items).',
      '**18. Ide Caption Media Sosial Sekolah**',
      'Tingkatkan engagement media sosial sekolah Anda. Dapatkan ide-ide caption yang menarik dan energik untuk berbagai kegiatan sekolah dengan prompt ini.',
      'JSON_PROMPT:Berikan 3 ide caption menarik untuk postingan Instagram sekolah yang menampilkan kegiatan ekstrakurikuler Pramuka. Caption harus energik dan mengajak siswa lain untuk bergabung.',
      '**19. Kerangka Proposal Kegiatan**',
      'Percepat proses pembuatan proposal. AI akan membantu Anda menyusun kerangka proposal yang logis, mencakup semua bagian penting mulai dari latar belakang hingga estimasi anggaran.',
      'JSON_PROMPT:Buat kerangka proposal untuk kegiatan "Pekan Literasi" di sekolah. Kerangka harus mencakup bagian: Latar Belakang, Tujuan Kegiatan, Bentuk Kegiatan, Sasaran, dan Estimasi Anggaran.',
      '**20. Draf Surat Rekomendasi Siswa**',
      'Tulis surat rekomendasi yang kuat dan personal. Berikan informasi kunci tentang siswa, dan AI akan menyusun draf surat yang menonjolkan kualitas dan pencapaian terbaik mereka.',
      'JSON_PROMPT:Tulis draf surat rekomendasi untuk seorang siswa bernama [Nama Siswa] yang mendaftar beasiswa. Siswa ini unggul dalam bidang akademik (khususnya IPA) dan aktif dalam organisasi OSIS. Tonjolkan kualitas kepemimpinan dan rasa ingin tahunya yang tinggi.',
      '**Kesimpulan: Anda adalah Pilotnya, AI Co-Pilot Anda**',
      'Menguasai rekayasa prompt tidak berarti menggantikan peran guru. Sebaliknya, ini memberdayakan Anda untuk fokus pada aspek yang paling penting: interaksi, empati, dan bimbingan langsung kepada siswa. Anggaplah AI sebagai co-pilot cerdas yang menangani navigasi dan tugas rutin, sementara Anda, sebagai pilot utama, tetap memegang kendali penuh atas arah dan tujuan pembelajaran di kelas Anda.'
    ],
    imageUrl: 'https://picsum.photos/seed/ai-for-indonesian-teachers/800/400',
    author: 'awanbyru',
    authorAvatar,
    date: '26 Oktober 2025',
    claps: 157,
    tags: ['Kurikulum Merdeka', 'Prompt Engineering', 'AI untuk Pendidikan', 'RPP AI', 'Tutorial'],
    faq: [
      {
        question: "Apakah aman menggunakan AI untuk membuat RPP dan soal ujian?",
        answer: "Sangat aman dan sangat dianjurkan sebagai draf awal. Kunci utamanya adalah verifikasi dan personalisasi. AI menyediakan kerangka kerja yang solid, tetapi Anda, sebagai guru, harus selalu meninjau, menyesuaikan konten agar relevan dengan konteks siswa Anda, dan memastikan akurasi informasi. Anggap AI sebagai asisten, bukan pengganti."
      },
      {
        question: "Model atau alat AI apa yang gratis dan terbaik untuk guru?",
        answer: "Anda tidak perlu alat berbayar. Model seperti Gemini dari Google sangat kuat dan dapat diakses secara gratis melalui platform seperti Google AI Studio. Fokuslah pada penguasaan teknik prompting yang dijelaskan di artikel ini. Keterampilan Anda dalam memberi perintah jauh lebih berharga daripada alat spesifik yang Anda gunakan."
      }
    ]
  },
  {
    id: '37',
    slug: 'revolusi-konten-ai-untuk-trafik-seo',
    title: 'Revolusi Konten: Cara Menggunakan AI untuk Mendominasi Peringkat SEO dan Meledakkan Trafik',
    excerpt: 'Berhenti menulis konten yang tidak dibaca. Pelajari cara mengubah strategi konten Anda dengan AI, mulai dari riset kata kunci hingga menciptakan artikel yang menduduki peringkat #1 di Google. Ini adalah cetak biru Anda untuk pertumbuhan trafik.',
    summary: 'Panduan praktis tentang memanfaatkan alat AI untuk meningkatkan trafik situs web. Artikel ini mencakup riset kata kunci yang didukung AI, ideasi topik, pembuatan konten, optimasi SEO on-page, dan cara membuat artikel yang menarik dan berperingkat tinggi.',
    type: 'howto',
    content: [
      'Anda telah menghabiskan berjam-jam meneliti, menulis, dan memoles sebuah artikel. Anda menekan tombol "Publikasikan" dengan penuh harap, hanya untuk melihatnya tenggelam di lautan internet, nyaris tanpa pembaca. Kedengarannya akrab? Menciptakan konten berkualitas tinggi hanyalah setengah dari pertempuran; membuatnya ditemukan adalah tantangan yang sebenarnya. Di sinilah Kecerdasan Buatan (AI) masuk bukan sebagai pengganti, tetapi sebagai mitra strategis paling kuat yang pernah Anda miliki.',
      'Lupakan proses manual yang lambat. AI dapat mengotomatiskan bagian-bagian yang paling memakan waktu dari strategi konten, memungkinkan Anda untuk fokus pada apa yang paling penting: keahlian, kreativitas, dan suara unik Anda. Mari kita bedah alur kerja lima langkah untuk mengubah cara Anda membuat konten dan mendatangkan gelombang trafik organik yang konsisten.',
      '**Langkah 1: Riset Kata Kunci Supercharged dengan AI**',
      'Riset kata kunci yang baik adalah fondasi dari setiap strategi SEO yang sukses. Namun, ini bisa menjadi proses yang membosankan. Dengan AI, Anda dapat mengubahnya menjadi sesi brainstorming yang dinamis.',
      '  - **Analisis Kompetitor:** Beri AI URL artikel pesaing yang berperingkat tinggi dan tanyakan, "Analisis artikel ini dan berikan daftar 10 kata kunci semantik dan long-tail yang mungkin ditargetkannya." Anda akan mendapatkan wawasan instan tentang strategi mereka.',
      '  - **Temukan Permata Tersembunyi:** Gunakan prompt seperti, "Bertindaklah sebagai ahli SEO. Hasilkan 20 kata kunci long-tail dengan niat informasional tentang topik [topik Anda] yang memiliki persaingan rendah tetapi volume pencarian yang layak." AI akan menggali ceruk yang mungkin Anda lewatkan.',
      '**Langkah 2: Ideasi & Kerangka Topik Tanpa Batas**',
      'Setelah Anda memiliki kata kunci target, tantangan berikutnya adalah membuat sudut pandang yang menarik. AI dapat menghasilkan lusinan ide dalam hitungan detik.',
      '  - **Hasilkan Judul yang Menarik:** "Berikan 10 judul blog yang menarik dan SEO-friendly untuk kata kunci \'[kata kunci Anda]\'." Pilih yang terbaik atau gabungkan beberapa ide.',
      '  - **Buat Kerangka Terstruktur:** Ini adalah langkah yang mengubah permainan. Dengan kerangka yang solid, proses penulisan menjadi 10x lebih cepat. Gunakan prompt terstruktur untuk hasil terbaik.',
      '**Langkah 3: Menulis Draf Pertama dalam Hitungan Menit (dengan Pengawasan Manusia)**',
      'Dengan kerangka Anda di tangan, sekarang saatnya untuk menghasilkan draf pertama. Berikan AI setiap bagian dari kerangka Anda satu per satu dan minta untuk mengembangkannya menjadi beberapa paragraf. **Peringatan Penting:** Jangan pernah mempublikasikan konten yang dihasilkan AI secara langsung. Anggap ini sebagai draf pertama yang sangat cepat dari seorang penulis junior. Tugas Anda, sebagai ahli, adalah untuk:',
      '  - **Verifikasi Fakta:** Pastikan semua informasi akurat.',
      '  - **Tambahkan Suara & Gaya Unik Anda:** Tulis ulang kalimat agar terdengar seperti Anda.',
      '  - **Suntikkan Pengalaman Pribadi:** Tambahkan anekdot, studi kasus, atau wawasan pribadi yang tidak dimiliki AI. Inilah yang membuat konten Anda berharga.',
      '**Langkah 4: Optimasi SEO On-Page Otomatis**',
      'Setelah draf Anda selesai, AI dapat bertindak sebagai konsultan SEO pribadi Anda. Tempelkan seluruh draf Anda dan gunakan prompt ini:',
      '  - **Prompt Optimasi:** "Analisis teks blog ini. Berikan saran untuk meningkatkan SEO on-page. Fokus pada: 1. Penempatan kata kunci target \'[kata kunci Anda]\'. 2. Penambahan kata kunci LSI (Latent Semantic Indexing) yang relevan. 3. Peningkatan keterbacaan. 4. Saran untuk meta title dan meta description yang menarik." AI akan memberi Anda daftar periksa yang dapat ditindaklanjuti.',
      '**Langkah 5: Memperkuat Sinyal dengan Konten Pendukung**',
      'Sebuah artikel hebat membutuhkan promosi. AI dapat membantu di sini juga.',
      '  - **Promosi Media Sosial:** "Buat 3 tweet dan 1 postingan LinkedIn yang menarik untuk mempromosikan artikel blog ini: [tempelkan judul dan ringkasan singkat]." Anda akan mendapatkan konten promosi instan.',
      '**Prompt JSON untuk Membuat Kerangka Artikel:**',
      'Gunakan prompt terstruktur ini untuk mendapatkan kerangka artikel yang komprehensif dari AI.',
      `JSON_PROMPT:{\n  "task": "Generate a comprehensive blog post outline",\n  "primary_keyword": "AI for SEO content",\n  "target_audience": "Digital marketers and bloggers",\n  "content_goals": {\n    "main_objective": "To teach readers how to use AI to create SEO-optimized content.",\n    "key_takeaways": [\n      "AI for keyword research",\n      "AI for content outlining and drafting",\n      "The importance of human editing"\n    ]\n  },\n  "outline_structure": {\n    "introduction": "Hook readers with the problem of content creation scalability and introduce AI as the solution.",\n    "section_1": {\n      "title": "Step 1: AI-Powered Keyword Research",\n      "points": ["Finding long-tail keywords", "Analyzing competitor keywords"]\n    },\n    "section_2": {\n      "title": "Step 2: Generating Compelling Outlines",\n      "points": ["Creating structured outlines", "Generating multiple title ideas"]\n    },\n    "section_3": {\n      "title": "Step 3: Drafting Content with AI as a Co-pilot",\n      "points": ["Generating first drafts", "The critical role of human editing and fact-checking", "Adding unique voice and experience"]\n    },\n    "conclusion": "Summarize the AI-assisted workflow and emphasize AI as a partner, not a replacement."\n  }\n}`,
      '**Kesimpulan: Anda Tetap Sutradaranya**',
      'Menggunakan AI dalam strategi konten Anda bukan tentang kehilangan kendali; ini tentang mendapatkan kembali waktu Anda. Dengan mengotomatiskan tugas-tugas berat, Anda dapat memfokuskan energi Anda pada strategi tingkat tinggi, kreativitas, dan membangun koneksi otentik dengan audiens Anda. AI adalah kru, tetapi Anda tetap sutradaranya. Sekarang, mulailah berkreasi.'
    ],
    imageUrl: 'https://picsum.photos/seed/ai-content-revolution-seo/800/400',
    author: 'awanbyru',
    authorAvatar,
    date: '25 Oktober 2025',
    claps: 133,
    tags: ['SEO', 'Konten AI', 'Trafik Web', 'Prompt Engineering', 'Tutorial'],
    faq: [
      {
        question: "Apakah konten yang dibuat AI aman untuk SEO?",
        answer: "Sangat aman, selama konten tersebut berkualitas tinggi, bermanfaat bagi pembaca, dan telah diedit secara signifikan oleh manusia. Google dalam pedoman kualitasnya menyatakan bahwa mereka menghargai konten yang bermanfaat, terlepas dari bagaimana konten itu dibuat. Kuncinya adalah menghindari konten spam berkualitas rendah dan fokus pada penyediaan nilai."
      },
      {
        question: "Alat AI apa yang direkomendasikan untuk memulai proses ini?",
        answer: "Anda tidak memerlukan alat berbayar yang mahal untuk memulai. Model bahasa besar seperti seri Gemini dari Google sudah sangat kuat. Anda dapat menggunakan antarmuka seperti Google AI Studio untuk bereksperimen dengan prompt dan alur kerja yang dijelaskan dalam artikel ini secara gratis. Fokuslah pada penguasaan teknik prompting terlebih dahulu."
      }
    ]
  },
  {
    id: '36',
    slug: 'rahasia-membuat-poster-film-sinematik-dengan-ai',
    title: 'Bedah Prompt: Rahasia Membuat Poster Film Sinematik yang Epik dengan AI',
    excerpt: 'AI bisa membuat gambar, tapi bisakah ia membuat poster film yang bercerita? Tentu saja. Kuncinya adalah berhenti memberi perintah dan mulai menyutradarai. Bedah prompt ini akan mengungkap cara menggabungkan komposisi, pencahayaan, dan tipografi untuk menciptakan poster film yang dramatis dan profesional.',
    summary: 'Tutorial mendalam tentang rekayasa prompt untuk membuat poster film sinematik menggunakan AI. Artikel ini membedah elemen-elemen kunci, termasuk membangun konsep naratif, mengarahkan visual utama, menggunakan bahasa sinematografi seperti pencahayaan tiga titik dan suar anamorfik, serta strategi untuk mengintegrasikan tipografi secara efektif.',
    type: 'howto',
    content: [
      'Membuat gambar dengan AI itu mudah. Anda ketik "ksatria melawan naga", dan Anda mendapatkannya. Tetapi membuat *poster film*? Itu adalah tantangan yang berbeda. Poster film bukan hanya gambar; itu adalah janji, sebuah cerita yang diringkas dalam satu frame. Ia harus membangkitkan emosi, membangun ketegangan, dan yang terpenting, membuat Anda ingin menonton filmnya.',
      'Banyak pengguna AI terjebak menghasilkan gambar yang indah secara teknis tetapi hampa secara naratif. Rahasianya adalah mengubah pola pikir Anda dari seorang pemberi perintah menjadi seorang sutradara, desainer grafis, dan sinematografer sekaligus. Mari kita bedah resep prompt untuk menciptakan poster film yang tidak hanya terlihat bagus, tetapi juga terasa "benar".',
      '**Pilar 1: Fondasi - Konsep, Genre, dan Judul**',
      'Setiap poster hebat dimulai dengan ide yang kuat. Sebelum Anda menulis satu kata pun dari prompt, tanyakan pada diri Anda:',
      '  - **Apa genre film ini?** Sci-fi, horor, komedi romantis, drama sejarah? Genre akan menentukan palet warna, pencahayaan, dan mood keseluruhan.',
      '  - **Apa ceritanya dalam satu kalimat?** "Seorang detektif kesepian memburu android pemberontak di kota yang diguyur hujan neon." Ini adalah inti naratif Anda.',
      '  - **Apa judulnya?** Bahkan judul fiksi seperti `ECHOES OF NEON` akan membantu AI memahami fokus tematik.',
      '**Pilar 2: Visual Utama - Sutradarai Aktor Anda**',
      'Poster membutuhkan titik fokus yang menarik. Ini biasanya adalah karakter utama. Jangan hanya mendeskripsikan penampilan mereka; sutradarai mereka.',
      '  - **Pose & Ekspresi:** Alih-alih `seorang wanita`, coba `seorang wanita dengan ekspresi waspada, menatap ke kejauhan, bahunya tegang`.',
      '  - **Interaksi:** Bagaimana mereka berhubungan dengan lingkungan? `Dia memegang artefak bercahaya yang menjadi satu-satunya sumber cahaya di ruangan yang gelap.`',
      '  - **Penempatan:** `Close-up potret dramatis` akan terasa personal, sementara `full body shot, karakter terlihat kecil di hadapan pemandangan kota yang masif` akan menekankan skala epik.',
      '**Pilar 3: Bahasa Sinematik - Cahaya, Lensa, dan Komposisi**',
      'Di sinilah keajaiban sinematik terjadi. Gunakan istilah teknis untuk memberi tahu AI cara "memfilmkan" adegan Anda.',
      '  - **Pencahayaan:** `Dramatic three-point lighting`, `moody chiaroscuro` (kontras tinggi antara terang dan gelap), `soft golden hour light`.',
      '  - **Lensa & Efek:** `Anamorphic lens flare` (suar lensa horizontal yang sinematik), `shallow depth of field` (latar belakang kabur), `shot on 35mm film` (untuk tekstur grainy).',
      '  - **Komposisi:** `Centered composition` untuk dampak ikonik, `rule of thirds` untuk keseimbangan dinamis.',
      '**Pilar 4: Tipografi - Tantangan Terbesar**',
      'AI terkenal buruk dalam menghasilkan teks yang koheren. Meskipun model terbaru semakin baik, pendekatan terbaik adalah pendekatan hibrida:',
      '1.  **Hasilkan Gambar Utama:** Buat poster Anda dengan sengaja meninggalkan ruang negatif (area kosong) di bagian atas atau bawah untuk judul dan kredit.',
      '2.  **Tambahkan Teks di Luar AI:** Gunakan editor gambar sederhana seperti Canva atau Photoshop untuk menambahkan tipografi Anda. Ini memberi Anda kendali penuh.',
      'Prompt Anda harus mencerminkan ini: `...dengan ruang negatif yang cukup di bagian bawah untuk teks judul film.`',
      '**Prompt Lengkap: Fiksi Ilmiah "CHRONOS VEIL"**',
      `JSON_PROMPT:A cinematic, photorealistic movie poster for a sci-fi thriller titled "CHRONOS VEIL".

**Subject:** A dramatic medium close-up of a female scientist in her late 30s. She has a determined yet fearful expression, with one eye reflecting complex data streams. Rain streaks down her face, mingling with tears.

**Environment:** A gritty, rain-slicked futuristic city at night. Towering neon-lit skyscrapers create a claustrophobic background.

**Cinematography:** The scene is captured with a shallow depth of field, making the background beautifully blurred with bokeh. The lighting is moody and dramatic chiaroscuro, primarily lit by the cold blue and magenta glow of the neon signs. A subtle anamorphic lens flare cuts across the frame.

**Style:** Photorealistic 8K, shot on 35mm film with visible film grain to add texture. The overall mood is tense, mysterious, and melancholic. The composition intentionally leaves significant negative space at the bottom for the movie title and credits.`,
      '**Kesimpulan: Anda adalah Visioner**',
      'Membuat poster film yang hebat dengan AI adalah tentang memberikan visi yang jelas dan terstruktur. Dengan menggabungkan narasi, penyutradaraan karakter, bahasa sinematik, dan strategi tipografi, Anda dapat mengubah ide sederhana menjadi sebuah konsep visual yang siap untuk menghiasi bioskop impian Anda. AI adalah kru film Anda; Anda adalah sutradaranya.'
    ],
    imageUrl: 'https://picsum.photos/seed/sci-fi-movie-poster-ai/800/400',
    author: 'awanbyru',
    authorAvatar,
    date: '17 Oktober 2025',
    claps: 98,
    tags: ['Poster Film', 'Sinematik', 'Prompt Engineering', 'Seni AI', 'Tutorial'],
    faq: [
        {
          question: "Apakah AI bisa menghasilkan teks yang sempurna untuk poster?",
          answer: "Saat ini, sebagian besar model AI gambar masih kesulitan menghasilkan teks yang konsisten dan akurat. Pendekatan terbaik adalah membuat gambar dengan ruang kosong yang sengaja disisakan (negative space), lalu menambahkan judul, taglines, dan kredit menggunakan perangkat lunak pengeditan gambar untuk kontrol penuh dan hasil yang profesional."
        },
        {
          question: "Bagaimana cara membuat poster dengan gaya artistik tertentu, seperti poster film retro 80-an?",
          answer: "Sangat bisa! Tambahkan deskriptor gaya yang spesifik ke dalam prompt Anda. Misalnya, untuk gaya retro 80-an, Anda bisa menambahkan kata kunci seperti '80s sci-fi movie poster style', 'airbrushed art', 'vibrant neon colors', 'retro typography', dan 'subtle paper texture' untuk meniru estetika pada masa itu."
        }
    ]
  },
  {
    id: '32',
    slug: 'bedah-prompt-horor-voronoi-rekursif',
    title: 'Bedah Prompt Horor Voronoi: Menciptakan Pusaran Teror Rekursif dengan IMAGEN 4',
    excerpt: 'Bagaimana cara menciptakan horor yang detail, psikedelik, dan terstruktur secara matematis? Kita akan membedah prompt canggih dari Yogi Arfi Prompts yang menggunakan teknik `hypervoronoi` dan `lattice reality` untuk menghasilkan pusaran teror yang tak berujung.',
    summary: 'Analisis mendalam tentang prompt AI untuk menciptakan adegan horor maksimalis menggunakan teknik `hypervoronoi` dan `lattice reality`. Artikel ini memecah cara kerja rekursi wajah, fragmentasi sel voronoi, dan sudut kamera top-down untuk menghasilkan visual yang glossy, psikedelik, dan sangat detail.',
    type: 'howto',
    content: [
      'Seni horor dalam AI generatif sering kali bermain dengan citra yang sudah dikenal: monster, hantu, atau suasana gelap. Namun, untuk mencapai tingkat horor yang benar-benar baru—yang terasa abstrak, matematis, dan tak terhindarkan—diperlukan pendekatan yang lebih canggih. Inilah yang kita temukan dalam sebuah prompt luar biasa yang dibagikan oleh **Yogi Arfi Prompts** (<a href="https://www.facebook.com/share/1EvgPWCkcf/" target="_blank" rel="noopener noreferrer">sumber</a>), sebuah mahakarya dalam rekayasa visual yang dihasilkan dengan IMAGEN 4.',
      'Prompt ini tidak hanya meminta gambar horor; ia membangun sebuah mesin visual psikedelik yang menyeret kita ke dalam pusaran teror rekursif. Mari kita bedah lapis demi lapis.',
      '**Fondasi: Suasana Maksimalis dan Psikedelik**',
      'Prompt ini dibuka dengan menetapkan panggung atmosfer yang jelas:',
      '`A hyper-detailed maximalist horror scene, glossy and psychedelic...`',
      '  - **`hyper-detailed maximalist`**: Ini adalah perintah untuk memenuhi kanvas. AI tidak boleh menyisakan ruang kosong. Setiap piksel harus diisi dengan informasi visual yang rumit, menciptakan perasaan yang luar biasa dan klaustrofobik.',
      '  - **`glossy and psychedelic`**: Kata kunci ini mendefinisikan tekstur dan palet warna. `Glossy` memberikan tampilan yang basah, licin, dan reflektif, sering diasosiasikan dengan horor tubuh (body horror). `Psychedelic` mengarahkan AI untuk menggunakan warna-warna neon yang bergetar dan tidak wajar, meningkatkan disorientasi.',
      '**Struktur Visual Inti: `Hypervoronoi` dan `Lattice Reality`**',
      'Inilah jantung teknis dari prompt ini:',
      '`...rendered in hypervoronoi and lattice reality style.`',
      '  - **`Hypervoronoi`**: Diagram Voronoi adalah partisi ruang menjadi wilayah-wilayah berdasarkan jarak ke titik-titik tertentu. Dalam seni AI, ini menciptakan pola seluler yang organik namun matematis. `Hypervoronoi` meningkatkannya ke tingkat yang lebih kompleks, menghasilkan fragmentasi yang sangat detail dan tak terbatas.',
      '  - **`Lattice reality`**: Ini menginstruksikan AI untuk membangun realitas gambar di atas struktur seperti kisi atau jaring (`lattice`). Ini memberikan kerangka kerja geometris pada kekacauan, membuat adegan terasa terstruktur dan tak terhindarkan.',
      '**Narasi Pusat: Pusaran Wajah yang Menjerit**',
      'Setelah fondasi gaya ditetapkan, prompt memberikan inti naratifnya:',
      '`The central figure is a recursive chain of screaming faces: one hyper-realistic human face... and inside the mouth another screaming face, repeating endlessly like a spiral vortex of agony.`',
      'Ini adalah konsep yang mengerikan. **`Recursive chain`** adalah instruksi yang sangat kuat. AI diminta untuk mengulang sebuah elemen (wajah menjerit) di dalam dirinya sendiri, menciptakan efek fraktal dari penderitaan. Detail seperti `slick and glossy, drenched in sweat, oil, or tears` memperkuat estetika `glossy` yang ditetapkan di awal.',
      '**Fragmentasi dan Koneksi: Dari Wajah ke Sel**',
      'Prompt kemudian dengan cerdas menghubungkan narasi dengan gaya visual:',
      '`The screaming faces fragment into glowing voronoi cells... Lattice grids stretch between faces...`',
      'Di sinilah kejeniusannya. Wajah-wajah tersebut tidak hanya ada; mereka secara aktif *terpecah* menjadi pola `voronoi` yang diminta. Kisi-kisi `lattice` tidak hanya menjadi latar belakang; mereka *menghubungkan* wajah-wajah tersebut. Ini menciptakan adegan yang dinamis di mana setiap elemen terhubung secara logis.',
      '**Arahan Sutradara: Sudut Kamera**',
      'Terakhir, prompt ini bertindak sebagai sutradara, mengunci perspektif yang paling efektif:',
      '`Camera Angle: Top-down view, looking directly at the recursive faces from above.`',
      'Sudut pandang dari atas ke bawah ini sangat penting. Ini mengubah adegan menjadi sebuah pusaran (`vortex`) yang menarik mata pemirsa ke tengah rekursi yang tak berujung, memperkuat perasaan vertigo dan ketakutan.',
      '**Prompt Lengkap:**',
      `JSON_PROMPT:A hyper-detailed maximalist horror scene, glossy and psychedelic, rendered in hypervoronoi and lattice reality style.

The central figure is a recursive chain of screaming faces: one hyper-realistic human face frozen in terror, mouth wide open, and inside the mouth another screaming face, repeating endlessly like a spiral vortex of agony. Each face is slick and glossy, drenched in sweat, oil, or tears. The recursion spirals inward, each layer more distorted, reflective, and surreal.

The screaming faces fragment into glowing voronoi cells, their skin splitting into thousands of polygonal shards reflecting neon colors. Lattice grids stretch between faces, glowing like shattered glass webs. Neon liquid flows through the lattice veins, dripping into voronoi cracks.

Background surfaces ripple into infinite hypervoronoi tessellations, each cell filled with fragments of distorted eyes, mouths, and reflections. Neon liquid and shards spiral downward toward the vortex center, creating a hypnotic, chaotic flow.

Camera Angle: Top-down view, looking directly at the recursive faces from above. Faces, lattice grids, and voronoi shards form a spiral vortex descending into infinite recursion. Neon reflections and glossy textures exaggerate depth, chaos, and psychedelic overload.`
    ],
    imageUrl: 'https://picsum.photos/seed/recursive-horror-vortex/800/400',
    author: 'awanbyru',
    authorAvatar,
    date: '16 Oktober 2025',
    claps: 215,
    tags: ['Horor', 'Prompt Engineering', 'Seni AI', 'Maksimalisme', 'Tutorial'],
    faq: [
      {
        question: "Teknik apa yang membuat gambar ini begitu detail dan rumit?",
        answer: "Kunci dari kerumitan ini adalah kombinasi dari beberapa teknik. 'Maximalist' memberitahu AI untuk mengisi setiap bagian gambar. 'Hypervoronoi' menciptakan pola seluler yang sangat terfragmentasi. 'Recursive chain' (rantai rekursif) adalah instruksi untuk mengulang elemen di dalam dirinya sendiri, seperti wajah di dalam mulut, menciptakan efek tak terbatas yang memusingkan."
      },
      {
        question: "Bisakah saya menggunakan prompt ini dengan model AI lain selain IMAGEN 4?",
        answer: "Anda pasti bisa mencobanya! Model AI yang berbeda akan menafsirkan kata kunci seperti 'hypervoronoi' dan 'lattice reality' secara berbeda. Anda mungkin mendapatkan hasil yang sama-sama menarik tetapi dengan gaya yang unik untuk model tersebut. Bereksperimenlah dan lihat apa yang Anda dapatkan—itulah bagian yang menyenangkan dari seni AI!"
      }
    ]
  }
];
