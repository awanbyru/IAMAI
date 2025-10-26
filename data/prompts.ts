import { Prompt } from '../types';

export const prompts: Prompt[] = [
  {
    id: 'p82',
    title: 'Draf Surat Rekomendasi Siswa',
    description: 'Menulis draf surat rekomendasi yang kuat dan personal untuk siswa yang mendaftar beasiswa atau universitas.',
    prompt: 'Tulis draf surat rekomendasi untuk seorang siswa bernama [Nama Siswa] yang mendaftar beasiswa. Siswa ini unggul dalam bidang akademik (khususnya IPA) dan aktif dalam organisasi OSIS. Tonjolkan kualitas kepemimpinan dan rasa ingin tahunya yang tinggi.',
    category: 'Pendidikan',
  },
  {
    id: 'p81',
    title: 'Kerangka Proposal Kegiatan',
    description: 'Mempercepat proses pembuatan proposal dengan menghasilkan kerangka yang logis dan terstruktur.',
    prompt: 'Buat kerangka proposal untuk kegiatan "Pekan Literasi" di sekolah. Kerangka harus mencakup bagian: Latar Belakang, Tujuan Kegiatan, Bentuk Kegiatan, Sasaran, dan Estimasi Anggaran.',
    category: 'Pendidikan',
  },
  {
    id: 'p80',
    title: 'Ide Caption Media Sosial Sekolah',
    description: 'Mendapatkan ide caption yang menarik dan energik untuk postingan media sosial sekolah.',
    prompt: 'Berikan 3 ide caption menarik untuk postingan Instagram sekolah yang menampilkan kegiatan ekstrakurikuler Pramuka. Caption harus energik dan mengajak siswa lain untuk bergabung.',
    category: 'Pendidikan',
  },
  {
    id: 'p79',
    title: 'Menyusun Notulen Rapat',
    description: 'Mengubah poin-poin penting atau rekaman rapat menjadi notulen yang ringkas dan terstruktur.',
    prompt: 'Saya memiliki rekaman audio rapat dewan guru. Berikut adalah poin-poin utamanya: [Sebutkan poin-poin utama]. Susunlah menjadi notulen rapat yang ringkas dan terstruktur, mencakup agenda, hasil diskusi, dan tindak lanjut (action items).',
    category: 'Pendidikan',
  },
  {
    id: 'p78',
    title: 'Email kepada Orang Tua',
    description: 'Menyusun draf email yang informatif dan ramah kepada orang tua siswa untuk berbagai keperluan sekolah.',
    prompt: 'Tulis draf email yang informatif dan ramah kepada orang tua siswa kelas 4 untuk menginformasikan tentang kegiatan outing class ke museum. Email harus mencakup informasi tentang tujuan, tanggal, biaya, dan barang bawaan yang diperlukan.',
    category: 'Pendidikan',
  },
  {
    id: 'p77',
    title: 'Asesmen Diagnostik Awal',
    description: 'Merancang pertanyaan asesmen diagnostik non-kognitif untuk mengetahui gaya belajar dan minat siswa baru.',
    prompt: 'Rancang 3 pertanyaan asesmen diagnostik non-kognitif untuk mengetahui gaya belajar dan minat siswa kelas 10 di awal tahun ajaran baru.',
    category: 'Pendidikan',
  },
  {
    id: 'p76',
    title: 'Soal Kuis Cepat (Kahoot/Quizziz)',
    description: 'Membuat soal pilihan ganda yang menyenangkan untuk kuis interaktif seperti Kahoot atau Quizziz.',
    prompt: 'Buat 5 soal pilihan ganda yang menyenangkan untuk kuis cepat (seperti Kahoot) tentang topik "Tata Surya" untuk kelas 6 SD. Sertakan satu jawaban benar dan tiga jawaban pengecoh yang masuk akal untuk setiap soal.',
    category: 'Pendidikan',
  },
  {
    id: 'p75',
    title: 'Umpan Balik Konstruktif Otomatis',
    description: 'Memberikan umpan balik yang personal dan konstruktif secara otomatis untuk jawaban esai siswa.',
    prompt: 'Saya memiliki jawaban esai siswa berikut ini tentang penyebab Perang Dunia I: "[Salin jawaban siswa di sini]". Berikan umpan balik yang konstruktif dan positif. Fokus pada 2 hal yang sudah baik dan 2 hal yang bisa ditingkatkan, beserta saran perbaikannya.',
    category: 'Pendidikan',
  },
  {
    id: 'p74',
    title: 'Rubrik Penilaian Proyek',
    description: 'Membuat rubrik penilaian yang komprehensif dan terstruktur untuk tugas proyek kelompok.',
    prompt: 'Buat rubrik penilaian yang komprehensif untuk proyek presentasi kelompok tentang "Pahlawan Nasional". Rubrik harus mencakup 4 kriteria: (1) Konten Materi, (2) Keterampilan Presentasi, (3) Kerjasama Tim, dan (4) Kreativitas. Setiap kriteria memiliki 4 level skor (Sangat Baik, Baik, Cukup, Perlu Bimbingan).',
    category: 'Pendidikan',
  },
  {
    id: 'p73',
    title: 'Soal HOTS (High Order Thinking Skills)',
    description: 'Membuat soal esai tipe HOTS (C4-C6) berdasarkan tujuan pembelajaran, lengkap dengan kunci jawaban dan pedoman skor.',
    prompt: 'Bertindaklah sebagai spesialis evaluasi pendidikan. Buat 3 soal esai tipe HOTS (C4-Menganalisis, C5-Mengevaluasi, C6-Mencipta) berdasarkan tujuan pembelajaran: "Siswa mampu menganalisis hubungan antara kegiatan manusia dengan kelestarian ekosistem laut". Sertakan kunci jawaban dan pedoman penskoran untuk setiap soal.',
    category: 'Pendidikan',
  },
  {
    id: 'p72',
    title: 'Cerita Pendek Pembelajaran Karakter',
    description: 'Menghasilkan cerita pendek untuk anak-anak yang mengandung nilai moral spesifik, seperti kejujuran.',
    prompt: 'Tuliskan sebuah cerita pendek (sekitar 300 kata) untuk anak SD yang mengandung nilai moral tentang kejujuran. Tokoh utamanya adalah seekor hewan.',
    category: 'Pendidikan',
  },
  {
    id: 'p71',
    title: 'Lembar Kerja Siswa (LKS)',
    description: 'Merancang Lembar Kerja Siswa (LKS) yang interaktif dengan berbagai jenis kegiatan.',
    prompt: 'Buat Lembar Kerja Siswa (LKS) interaktif untuk materi "Fotosintesis" kelas 8. LKS harus berisi 3 bagian: (1) Isian singkat untuk label diagram, (2) 2 pertanyaan analisis, dan (3) 1 kegiatan eksperimen sederhana yang bisa dilakukan di rumah.',
    category: 'Pendidikan',
  },
  {
    id: 'p70',
    title: 'Naskah Video Pembelajaran',
    description: 'Menghasilkan naskah terstruktur untuk video pembelajaran singkat, dari pembuka hingga penutup.',
    prompt: 'Tuliskan naskah untuk video pembelajaran berdurasi 3 menit dengan topik "Peran Indonesia dalam ASEAN" untuk siswa SMA. Naskah harus mencakup bagian pembuka yang menarik, isi yang informatif, dan penutup berupa rangkuman.',
    category: 'Pendidikan',
  },
  {
    id: 'p69',
    title: 'Studi Kasus Kontekstual',
    description: 'Membuat studi kasus singkat tentang masalah di dunia nyata yang relevan bagi siswa untuk memicu diskusi.',
    prompt: 'Buat sebuah studi kasus singkat (sekitar 200 kata) tentang masalah pencemaran sampah plastik di lingkungan sekitar sekolah. Studi kasus ini ditujukan untuk siswa kelas 5 SD mata pelajaran IPAS dan harus mengandung pertanyaan pemantik untuk diskusi kelompok.',
    category: 'Pendidikan',
  },
  {
    id: 'p68',
    title: 'Materi Ajar Berdiferensiasi',
    description: 'Membuat beberapa versi materi ajar yang disesuaikan untuk tingkat pemahaman siswa yang berbeda.',
    prompt: 'Saya mengajar materi tentang "Kerajaan Hindu-Buddha di Indonesia" untuk kelas 4 SD. Buatkan tiga versi paragraf pengantar untuk materi ini yang disesuaikan untuk tiga tingkat pemahaman siswa: (1) Siswa dengan pemahaman dasar, (2) Siswa dengan pemahaman rata-rata, dan (3) Siswa dengan pemahaman tinggi yang butuh tantangan.',
    category: 'Pendidikan',
  },
  {
    id: 'p67',
    title: 'Menyusun Alur Tujuan Pembelajaran (ATP)',
    description: 'Menyusun daftar Tujuan Pembelajaran (TP) menjadi Alur Tujuan Pembelajaran (ATP) yang logis dan berurutan.',
    prompt: 'Berdasarkan 5 Tujuan Pembelajaran (TP) berikut: [Sebutkan 5 TP], susunlah menjadi Alur Tujuan Pembelajaran (ATP) yang logis dan berurutan untuk satu semester.',
    category: 'Pendidikan',
  },
  {
    id: 'p66',
    title: 'Pemetaan Tujuan Pembelajaran dari CP',
    description: 'Menguraikan Capaian Pembelajaran (CP) yang kompleks menjadi Tujuan Pembelajaran (TP) yang spesifik dan terukur.',
    prompt: 'Saya memiliki Capaian Pembelajaran (CP) berikut untuk mata pelajaran Bahasa Indonesia Fase E (Kelas 10): "[Salin CP di sini]". Uraikan CP ini menjadi 5 Tujuan Pembelajaran (TP) yang spesifik, terukur, dan dapat dicapai dalam satu semester.',
    category: 'Pendidikan',
  },
  {
    id: 'p65',
    title: 'Ide Kegiatan Ice Breaking',
    description: 'Menghasilkan ide-ide ice breaking yang kreatif dan relevan dengan mata pelajaran untuk menyegarkan suasana kelas.',
    prompt: 'Berikan 5 ide ice breaking yang kreatif dan singkat (kurang dari 5 menit) untuk memulai pelajaran Matematika kelas 7 agar siswa lebih bersemangat dan fokus. Setiap ide harus relevan dengan konsep matematika dasar.',
    category: 'Pendidikan',
  },
  {
    id: 'p64',
    title: 'Draf Modul Ajar P5',
    description: 'Membuat draf Modul Ajar Proyek Penguatan Profil Pelajar Pancasila (P5) yang terstruktur untuk Kurikulum Merdeka.',
    prompt: 'Anda adalah seorang ahli Kurikulum Merdeka. Buatkan draf Modul Ajar Proyek Penguatan Profil Pelajar Pancasila (P5) untuk Fase D (SMP) dengan tema "Kearifan Lokal". Proyek ini akan berlangsung selama 3 minggu. Tentukan tujuan, alur kegiatan per minggu, dan jenis asesmen formatif yang relevan.',
    category: 'Pendidikan',
  },
  {
    id: 'p63',
    title: 'RPP Kurikulum Merdeka',
    description: 'Membuat Rencana Pelaksanaan Pembelajaran (RPP) lengkap untuk Kurikulum Merdeka menggunakan AI.',
    prompt: '{\n  "role": "Ahli Perancangan Kurikulum Merdeka",\n  "task": "Buat Rencana Pelaksanaan Pembelajaran (RPP) lengkap untuk satu pertemuan.",\n  "topic": "Siklus Air dan Dampaknya pada Kehidupan",\n  "grade_level": "Fase C (Kelas 5 SD)",\n  "subject": "IPAS",\n  "duration": "2 x 35 menit",\n  "learning_objectives": [\n    "Siswa mampu mengidentifikasi tahapan siklus air (evaporasi, kondensasi, presipitasi).",\n    "Siswa mampu menjelaskan dampak siklus air bagi makhluk hidup melalui diagram sederhana."\n  ],\n  "pancasila_profile_dimensions": ["Bernalar Kritis", "Kreatif"],\n  "activities": {\n    "opening": "Apersepsi dengan pertanyaan pemantik: \'Dari mana datangnya hujan?\' dan menonton video singkat tentang awan.",\n    "main_activity": "Pembelajaran berdiferensiasi: 1. Kelompok visual membuat diagram siklus air. 2. Kelompok kinestetik melakukan eksperimen sederhana siklus air dalam toples. 3. Kelompok auditori berdiskusi dan merekam penjelasan tentang dampak siklus air.",\n    "closing": "Presentasi hasil kerja kelompok dan refleksi bersama tentang pentingnya air."\n  },\n  "assessment": {\n    "formative": "Observasi saat diskusi kelompok dan penilaian presentasi singkat.",\n    "summative": "Tugas menggambar dan memberi label pada diagram siklus air di akhir sesi."\n  }\n}',
    category: 'Pendidikan',
  },
  {
    id: 'p62',
    title: 'Kerangka Artikel SEO',
    description: 'Menghasilkan kerangka artikel blog yang komprehensif dan dioptimalkan untuk SEO menggunakan AI.',
    prompt: '{\n  "task": "Generate a comprehensive blog post outline",\n  "primary_keyword": "AI for SEO content",\n  "target_audience": "Digital marketers and bloggers",\n  "content_goals": {\n    "main_objective": "To teach readers how to use AI to create SEO-optimized content.",\n    "key_takeaways": [\n      "AI for keyword research",\n      "AI for content outlining and drafting",\n      "The importance of human editing"\n    ]\n  },\n  "outline_structure": {\n    "introduction": "Hook readers with the problem of content creation scalability and introduce AI as the solution.",\n    "section_1": {\n      "title": "Step 1: AI-Powered Keyword Research",\n      "points": ["Finding long-tail keywords", "Analyzing competitor keywords"]\n    },\n    "section_2": {\n      "title": "Step 2: Generating Compelling Outlines",\n      "points": ["Creating structured outlines", "Generating multiple title ideas"]\n    },\n    "section_3": {\n      "title": "Step 3: Drafting Content with AI as a Co-pilot",\n      "points": ["Generating first drafts", "The critical role of human editing and fact-checking", "Adding unique voice and experience"]\n    },\n    "conclusion": "Summarize the AI-assisted workflow and emphasize AI as a partner, not a replacement."\n  }\n}',
    category: 'Pemasaran',
  },
  {
    id: 'p61',
    title: 'Poster Film Fiksi Ilmiah Sinematik',
    description: 'Membuat poster film fiksi ilmiah yang fotorealistik dan sinematik dengan ruang negatif untuk teks.',
    prompt: 'A cinematic, photorealistic movie poster for a sci-fi thriller titled "CHRONOS VEIL".\n\n**Subject:** A dramatic medium close-up of a female scientist in her late 30s. She has a determined yet fearful expression, with one eye reflecting complex data streams. Rain streaks down her face, mingling with tears.\n\n**Environment:** A gritty, rain-slicked futuristic city at night. Towering neon-lit skyscrapers create a claustrophobic background.\n\n**Cinematography:** The scene is captured with a shallow depth of field, making the background beautifully blurred with bokeh. The lighting is moody and dramatic chiaroscuro, primarily lit by the cold blue and magenta glow of the neon signs. A subtle anamorphic lens flare cuts across the frame.\n\n**Style:** Photorealistic 8K, shot on 35mm film with visible film grain to add texture. The overall mood is tense, mysterious, and melancholic. The composition intentionally leaves significant negative space at the bottom for the movie title and credits.',
    category: 'Seni Sinematik',
  },
  {
    id: 'p60',
    title: 'Video AI Naga Cyberpunk',
    description: 'Prompt JSON terstruktur untuk membuat video AI pendek dari seekor naga cyberpunk terbang di kota futuristik.',
    prompt: '{\n  "scene_description": "A majestic cyberpunk dragon with neon circuits on its scales flies through a futuristic, rain-slicked city at night, with skyscrapers reflecting vibrant city lights.",\n  "subject": {\n    "description": "A majestic cyberpunk dragon with neon circuits integrated into its scales.",\n    "action": "Flying through the city, following a clear flight path."\n  },\n  "environment": {\n    "setting": "A futuristic city at night.",\n    "details": [\n      "Rain-slicked skyscrapers",\n      "Vibrant city lights reflecting off wet surfaces",\n      "Blade Runner inspired atmosphere"\n    ]\n  },\n  "cinematography": {\n    "camera_movement": "The camera slowly pans to the right, following the dragon\'s flight path.",\n    "shot_type": "Medium tracking shot",\n    "lighting": {\n      "style": "Cinematic, moody, high contrast",\n      "sources": [\n        "Neon signs",\n        "Reflections"\n      ]\n    }\n  },\n  "style": {\n    "visual_style": "Photorealistic",\n    "quality": "8k resolution, high detail",\n    "mood": "Atmospheric and intense"\n  }\n}',
    category: 'Video',
  },
  {
    id: 'p59',
    title: 'Adegan "Ghibli Realism" Sinematik',
    description: 'Menciptakan adegan fotorealistik sinematik yang terinspirasi oleh estetika Studio Ghibli.',
    prompt: 'A cinematic, photorealistic scene in the style of "Ghibli Realism".\n\n**Subject:** A young girl, around 10 years old, with slightly rounded features and large, expressive brown eyes filled with wonder. She is gently touching a tiny, glowing forest spirit resting on a leaf.\n\n**Environment:** An abandoned, overgrown Victorian greenhouse. The structure shows signs of beautiful decay: rusted ironwork, broken glass panes, and moss-covered stone paths. Wildflowers and lush ferns grow uncontrollably inside.\n\n**Cinematography:** The scene is captured with a 50mm lens, creating a natural field of view with a shallow depth of field, making the background softly blurred. The camera angle is at the girl\'s eye level.\n\n**Lighting:** Soft, dappled golden hour sunlight filters through the leaves and broken glass, creating beautiful pockets of light and shadow. Soft volumetric light rays are visible in the humid, dusty air. The atmosphere is nostalgic, magical, and serene.\n\n**Style:** Photorealistic 8K, shot on 35mm film with subtle film grain to add warmth and texture. The color palette is rich and natural, inspired by Studio Ghibli films.',
    category: 'Seni Sinematik',
  },
  {
    id: 'p58',
    title: 'Desain Interior Gaya Japandi',
    description: 'Mengubah foto ruangan menjadi konsep desain interior profesional dengan gaya Japandi (Jepang-Skandinavia).',
    prompt: 'A professional interior design photograph of the provided living room, completely transformed into a Japandi style.\n\nThe room should feature minimalist furniture with clean lines, natural light wood finishes, and functional simplicity. The color palette is muted and neutral, with shades of beige, cream, and soft grey. Include subtle Japanese elements like a shoji screen partition and a low-profile coffee table. The space should feel uncluttered, serene, and harmonious.\n\nThe lighting is soft, diffused, and abundant natural light, creating a calm and peaceful atmosphere.\n\nStyle: Photorealistic, 8K, high detail, interior design magazine quality.',
    category: 'Desain Interior',
  },
  {
    id: 'p57',
    title: 'Video AI Sinematik: Astronot di Planet Asing',
    description: 'Prompt video sinematik untuk model seperti Sora 2, menggambarkan astronot di planet asing dengan detail sinematografi.',
    prompt: 'A cinematic, ultra-realistic video in slow motion.\n\n**Subject:** A lone astronaut in a sleek, white spacesuit taking a hesitant first step onto a new world.\n**Environment:** A desolate alien planet with crimson-red sand and two suns setting on the horizon, casting long, dramatic shadows. Strange, crystalline flora glows faintly in the twilight.\n**Cinematography:** The scene begins with a low-angle tracking shot, following the astronaut\'s boots as they crunch on the alien soil. As they lift their head, the camera executes a crane shot, rising smoothly to reveal the vast, alien landscape before them.\n**Style:** Photorealistic 8K render, shot on 35mm film with subtle grain. The lighting is golden hour from the two suns, creating a breathtaking and lonely atmosphere. The color palette is a mix of deep reds, oranges, and the faint blue glow of the crystals.',
    category: 'Video',
  },
  {
    id: 'p56',
    title: 'Siren Monokromatik Bibir Psikedelik',
    description: 'Pemandangan sureal dan indah yang menampilkan sirene monokromatik dengan semburan warna psikedelik yang cerah di bibirnya.',
    prompt: `{
  "scene_description": "A hauntingly beautiful and surreal scene featuring a monochromatic siren emerging from the depths, her mesmerizing gaze amplified by a single, vibrant burst of psychedelic color on her lips. The overall image maintains a grayscale aesthetic, emphasizing the dramatic contrast and artistic focus on her face.",
  "subject": {
    "description": "A graceful, ethereal siren with translucent, alabaster skin rendered in perfect monochromatic tones. Her long, flowing hair and intricate fish-like scales also adhere to the grayscale palette. Delicate, subtle veins are visible just beneath her skin, adding a fragile realism. One of her eyes is obscured by a tattered, ancient, dark gray cloth eyepatch, adding an air of mystery. Her lips, however, are a breathtaking explosion of vibrant, swirling, iridescent psychedelic colors, captivating and hypnotic.",
    "action": "Gazing with an intense, alluring, and slightly melancholic expression directly at the viewer, her head slightly tilted, one hand gently reaching towards the surface of the water or a piece of ancient debris."
  },
  "environment": {
    "setting": "A deep, ethereal underwater grotto or cavern.",
    "details": [
      "Ancient, moss-covered stone ruins partially submerged in the background",
      "Subtle, monochromatic bioluminescent flora emitting soft glows in the distance",
      "Whisps of underwater currents creating gentle movement around her",
      "Slightly murky, dreamlike water visibility adding depth and mystery",
      "Sunken artifacts or coral structures forming a natural frame"
    ]
  },
  "cinematography": {
    "shot_type": "Medium close-up, focusing on the siren's upper body and face.",
    "camera_movement": "Static, with a soft, cinematic focus pull emphasizing the psychedelic lips.",
    "lighting": "Dramatic, moody underwater lighting. Soft, diffused rays of light pierce the water from above, casting subtle highlights on her features and hair. A strong, artistic rim light outlines her form against the dark background, enhancing her ethereal presence."
  },
  "style": {
    "visual_style": "Dark fantasy photorealism with a surreal and artistic twist.",
    "quality": "8k, ultra detailed, volumetric lighting, cinematic, masterpiece, highly intricate, octane render, film noir aesthetic.",
    "mood": "Mysterious, alluring, haunting, melancholic, surreal, dreamlike."
  }
}`,
    category: 'Surealisme',
  },
  {
    id: 'p55',
    title: 'Potret Abstrak Wajah Tie-Dye',
    description: 'Potret abstrak dan sureal dari beberapa wajah manusia yang saling terkait, larut satu sama lain dalam warna-warni psikedelik.',
    prompt: `{
  "scene_description": "A deeply surreal and abstract portrait, pulsating with vibrant, psychedelic tie-dye tones. The composition is a chaotic, mesmerizing tapestry of multiple human faces intricately intertwined, dissolving into one another, each distinct yet part of a larger, evolving whole. The overall impression is one of visual and emotional intensity.",
  "subject": {
    "description": "Multiple, ethereal human faces, rendered in an abstract and fluid manner. Their features are soft and indistinct at the edges, flowing into the next, creating a continuous, interwoven pattern. Each face visibly expresses a different, profound emotion: some scream silently, others weep, some gaze in serene contemplation, while others contort in despair or euphoria. The faces are semi-transparent, allowing the underlying tie-dye patterns to shine through.",
    "action": "Intertwining, overlapping, and melting into a chaotic yet harmonious pattern, each face expressing a distinct and powerful emotion."
  },
  "environment": {
    "setting": "An boundless, amorphous void, serving as a canvas for the abstract forms.",
    "details": [
      "Swirling, kaleidoscopic patterns in vibrant neon greens, electric blues, fiery oranges, and deep purples.",
      "Organic, fluid lines that mimic smoke or liquid, creating a sense of movement and depth.",
      "Subtle, ethereal glows emanating from within the abstract forms.",
      "No discernible background elements, emphasizing the pure abstraction of the faces and colors."
    ]
  },
  "cinematography": {
    "shot_type": "Close-up portrait shot, capturing the intricate details and emotional nuances of the intertwined faces.",
    "camera_movement": "Static, allowing the viewer to absorb the complexity and depth of the psychedelic artwork.",
    "lighting": "Luminous, high-contrast, and deeply saturated, emanating from within the tie-dye patterns themselves, creating a glowing, otherworldly effect. Soft, diffuse backlighting highlights the contours of the faces."
  },
  "style": {
    "visual_style": "Abstract surrealism, psychedelic art, digital painting with tie-dye aesthetics, reminiscent of a visionary art piece.",
    "quality": "8k, ultra high detail, intricate, masterpiece, hyperrealism of textures on an abstract subject, highly detailed textures and patterns, award-winning.",
    "mood": "Chaotic, mesmerizing, emotional, dreamlike, introspective, hallucinatory."
  }
}`,
    category: 'Surealisme',
  },
  {
    id: 'p54',
    title: 'Pertunjukan Dangdut Jalanan 80-an',
    description: 'Fotografi jalanan vintage tahun 80-an yang menangkap pertunjukan dangdut di gang kecil Indonesia, dicetak di atas kertas film murah.',
    prompt: `{
  "scene_description": "A vibrant, low-budget street photography scene capturing an 80s vintage dangdut street performance in a humble Indonesian small town alley, printed on cheap film paper, documenting the lively fringe community life.",
  "subject": {
    "description": "A lively 80s dangdut street band ('Orkes Melayu Moro Mangan') consisting of two female vocalists (biduan), one male MC, a guitarist, a bassist, a tamborine player, a flute player, and a unique dangdut kendang player. They are dressed in low-class 80s fashion: flare pants (celana cutbray), unbuttoned shirts, and big, curly afro hairstyles (rambut kribo mengembang). Their musical equipment, including speakers, guitar amp, bass amp, and keyboard amp, is stacked on a pushcart with a gaudy banner displaying 'OM. Moro Mangan'.",
    "action": "They are actively performing and parading down a narrow alley, serenading in front of a simple brick-walled house. Several local residents, including children and adults, are engrossed in watching and joyfully dancing to the dangdut rhythm, captured in candid, energetic poses."
  },
  "environment": {
    "setting": "A narrow, bustling alleyway in a small Indonesian town during the 1980s.",
    "details": [
      "Simple, humble brick-walled houses line the alley, with exposed red bricks and weathered plaster.",
      "Clotheslines stretched across, adorned with drying laundry, adding a touch of everyday life.",
      "Chickens and goats roaming freely on the dusty ground, typical of a rural-urban fringe.",
      "The pushcart (gerobak dorong) with the 'OM. Moro Mangan' banner, acting as a mobile stage, adorned with hand-painted, slightly faded typography.",
      "Modest potted plants dotting the entryways of homes.",
      "Visible cracks and imperfections on the alley ground, reflecting an authentic, lived-in environment."
    ]
  },
  "cinematography": {
    "shot_type": "Medium wide shot, slightly eye-level, capturing the full interaction between the band and the immediate audience.",
    "camera_movement": "Static, mimicking a raw, candid documentary-style snapshot, emphasizing the authenticity of the moment.",
    "lighting": "Natural, unfiltered daylight, harsh but authentic, creating strong contrasts and deep shadows, reminiscent of 80s cheap film stock, giving a slightly desaturated and raw feel."
  },
  "style": {
    "visual_style": "Gritty, analog street photography, reminiscent of 80s Indonesian documentary photography, with a slightly desaturated color palette, pronounced film grain, and subtle color shifts typical of aging film.",
    "quality": "Lo-fi aesthetic, high detail on textures like clothing fabric, weathered brick, and dusty ground, authentic film look, masterpiece in capturing cultural authenticity and period accuracy.",
    "mood": "Joyful, nostalgic, authentic, vibrant, communal, slightly chaotic, a genuine slice-of-life from 1980s Indonesian fringe society."
  }
}`,
    category: 'Fotografi',
  },
  {
    id: 'p53',
    title: 'Pencuri Prompt Brutalis',
    description: 'Seorang pria pencuri prompt dengan latar belakang arsitektur brutalis hitam-putih.',
    prompt: `A man (attach image) with wet hair and leftover shampoo foam on his head, wearing a white sleeveless singlet and tight pink leggings. A large DSLR camera with an extremely long telephoto lens hangs from his neck. He is carrying a big cloth bundle labeled in Indonesian text “kumpulan” and “Prompt.” His body language looks sneaky, like a thief who has just stolen something.
Background: a striking black-and-white architectural photograph of a brutalist concrete building, featuring strong geometric lines and dramatic chiaroscuro shadows. The sky is stark and clear. Shot with a tilt-shift lens for perfectly straight perspective. High contrast, fine art photography style.`,
    category: 'Om DagD',
  },
  {
    id: 'p52',
    title: 'Sketsa Wajah Abstrak Rafflesia Arnoldi',
    description: 'Sketsa abstrak wajah pria dengan struktur kompleks garis dan bentuk geometris yang menyerupai bunga Rafflesia Arnoldi.',
    prompt: `Abstract sketch of man face (attach image detailed line art:1.2), a complex structure of intersecting lines and geometric shapes, creating an illusion of depth and form, vertical composition, set against a glossy and shinny, textured background, sharp, precise lines defining various structures, some resembling rafflesia arnoldi and others more organic, a sense of movement and dynamism, the lines vary in thickness, suggesting shadow and texture, a few small, scattered elements, digital art style, high contrast photography style.`,
    category: 'Om DagD',
  },
  {
    id: 'p51',
    title: 'Ilusi Gravitasi 90 Derajat',
    description: 'Ilusi fotografi sureal di mana gravitasi tampak berputar 90 derajat, menampilkan seorang pria bersandar di dinding marmer seolah-olah itu adalah lantai.',
    prompt: `Photographic illusion perspective, side view portrait. A man (attach image) with wet hair still covered in leftover shampoo foam, wearing a white singlet and pink leggings, holding a DSLR camera with a long telephoto lens. He wears only one shoe. The man leans casually against an elegant Italian marble wall — one bare leg bent with his foot pressing naturally against the wall, as if gravity has rotated 90 degrees. 

Above his head, a cheap Indonesian plastic chair sticks to the marble wall. Beside his face sticks a jumbo glass of iced tea (es teh jumbo), and slightly below it, a single shoe also sticks to the wall — all appearing perfectly natural as if the wall were the ground, as if gravity has rotated 90 degrees. 

The marble wall and floor share the same elegant Italian marble pattern, seamlessly connected to enhance the illusion. The background shows a blurred modern foyer with cinematic lighting. 

Style: hyperrealistic photography, 85mm lens, f/1.4 bokeh, shallow depth of field, surreal photographic illusion, comedic aesthetic.`,
    category: 'Om DagD',
  },
  {
    id: 'p50',
    title: 'Mengintip dari Planet Brutalis Zodiak',
    description: 'Pemandangan hiper-maksimalis sebuah planet mustahil yang terdiri dari gedung pencakar langit brutalis yang saling terkait dengan ikonografi zodiak, di mana seorang pria mengintip dari balik dinding.',
    prompt: `Hypermaximalism, an impossible planet composed of towering brutalist skyscrapers interlocked with intricate zodiac iconography. Each building surface is carved with hyper-detailed zodiac reliefs, metallic engravings, and recursive geometric seams that spiral across the architecture like sacred constellations. The skyline bends in impossible geometry — colossal towers curving inward, bridges suspended upside-down, and DSLR cameras with massive telephoto lenses seamlessly built into the structures, functioning as monumental observatories. The materials blend raw concrete, polished steel, and liquid glass reflecting cosmic light and golden haze. Between these surreal towers, a man (attach image) peeks out naturally from behind a wall — only his wet face and one hand visible, hair damp with traces of white shampoo foam. He wears a white singlet and pink leggings, though only hinted by subtle reflections. His gaze is curious yet calm, as if observing from another dimension. The atmosphere glows with ambient living light and reflective mist, creating a sense of cosmic scale and intimate humanity within the impossible brutalist planet.`,
    category: 'Om DagD',
  },
  {
    id: 'p49',
    title: 'Penerbang Origami di Planet Brutalis',
    description: 'Seorang pria terbang di atas planet brutalis dengan burung origami raksasa, memotret kota sureal di bawahnya.',
    prompt: `Hypermaximalism, an impossible planet covered with monumental brutalist towers interlocked with intricate zodiac iconography. The architecture bends and spirals in impossible geometry — colossal towers, floating bridges, and telescopic observatories built from raw concrete and metallic zodiac engravings. In the cosmic sky above this impossible planet, a man (attach image) flies gracefully on a giant origami bird made of paper patterned with interlocking zodiac symbols. The origami bird glows softly, its folded wings reflecting cosmic light and liquid chrome hues. The man has wet hair with traces of white shampoo foam, wearing a white singlet and pink leggings. He holds a large DSLR camera with an extremely long telephoto lens, aiming downward as if photographing the surreal city below. The sky is illuminated with glowing zodiac constellations, forming subtle and intricate star patterns that echo the icons on the buildings and origami bird. The angle is cinematic and dramatic — low angle, capturing both the vast brutalist landscape and the soaring figure in mid-flight, backlit by iridescent starlight. The lighting is surreal, with cosmic reflections, golden mist, and shimmering particles that give the entire scene a dreamlike atmosphere of divine absurdity and wonder.`,
    category: 'Om DagD',
  },
  {
    id: 'p48',
    title: 'Relief Indiana Jones dan Benda Lokal',
    description: 'Pemandangan sureal seorang pria mengamati relief dinding bergaya patung grafiti yang terinspirasi oleh Indiana Jones, lengkap dengan benda-benda absurd Indonesia.',
    prompt: `A dimly lit, damp underground room with a wet, puddled floor. In the center stands a man with wet hair still covered in leftover shampoo foam. He wears a white sleeveless singlet and tight pink leggings. Around his waist is coiled a lasso rope, and slung across his body hangs a DSLR camera with an extremely long telephoto lens. He is intently observing an uneven wall featuring a dramatic “GRAFITI SCULPTURE RELIEF WALL.”

The relief forms a surreal montage inspired by “Indiana Jones: The Temple of Doom,” and includes the iconic main character of Indiana Jones carved into the relief itself, complete with his signature fedora hat, rugged leather jacket, whip at his side, and satchel. Surrounding him within the relief are other unusual objects also sculpted into the wall: cheap Indonesian plastic chairs (kursi plastik murahan), a charcoal iron (setrika arang), an oversized iced tea in a jumbo plastic cup (esteh jumbo), a lacy bra (kutang berenda), a small green gas canister (tabung gas melon), and mysterious geometric markings reminiscent of secret society symbols.

In the shadowy back corner of the room, outside the relief and barely visible in the darkness, a real hen is quietly brooding on a nest.`,
    category: 'Om DagD',
  },
  {
    id: 'p47',
    title: 'Relief Kuil Kiamat Indonesia',
    description: 'Pemandangan sureal seorang pria di ruang bawah tanah yang mengamati relief dinding bergaya patung grafiti yang terinspirasi dari Indiana Jones, menampilkan benda-benda sehari-hari Indonesia.',
    prompt: `A dimly lit, damp underground room with a wet, puddled floor. In the center stands a man with wet hair still covered in leftover shampoo foam. He wears a white sleeveless singlet and tight pink leggings. Around his waist is coiled a lasso rope, and slung across his body hangs a DSLR camera with an extremely long telephoto lens. He is intently observing an uneven wall featuring a dramatic “GRAFITI SCULPTURE RELIEF WALL.” The relief forms a surreal montage of scenes reminiscent of “Indiana Jones: The Temple of Doom.” Embedded in the relief are random Indonesian everyday objects: cheap plastic chairs (kursi plastik murahan), a charcoal iron (setrika arang), an oversized iced tea in a jumbo plastic cup (esteh jumbo), a lacy bra (kutang berenda), a small green gas canister (tabung gas melon), and mysterious geometric markings like those of a secret society. In the shadowy back corner of the room, barely visible, a hen is quietly brooding on a nest.`,
    category: 'Om DagD',
  },
  {
    id: 'p46',
    title: 'Menikmati Musik Deni Caknan',
    description: 'Seorang pria menikmati musik dari Deni Caknan di radio kaset Compo besar dengan suasana studio Spotify yang sinematik.',
    prompt: `A man (face exactly same as uploaded photo) wet hair with leftover shampoo foam, wears a white singlet and pink leggings and swallow sandal, sitting on a big Compo Radio Cassete.

Headphones on, hands up, enjoying music. From headphones, glowing 3D symbols float out.

Behind him, a playlist wall shows songs by Deni Caknan(s), Full studio in green spotify brand Color tones, cinematic vibe.`,
    category: 'Om DagD',
  },
  {
    id: 'p45',
    title: 'Gouache Sureal Pasar Jawa Kuno',
    description: 'Prompt JSON hiper-maksimalis yang menciptakan kembali suasana pasar tradisional Jawa kuno yang ramai dengan gaya sketsa gouache sureal, penuh dengan detail budaya.',
    prompt: `{
  "size": "9:16",
  "medium": "Surreal gouache sketch with strong abstract influence",
  "setting": {
    "location": "ancient Javanese traditional market",
    "era": "early Mataram period or earlier",
    "density": "hypermaximalist — completely packed, no empty space, every area filled with people, animals, activities, and visual details"
  },
  "visual_focus": {
    "figures": {
      "style": "mix of naive 2D-sketch and semi-realist, rough raw imperfect lines",
      "crowd_scale": "dozens to hundreds of figures spread across the entire frame",
      "activities": [
        "women carrying tampah trays filled with traditional market snacks on their heads",
        "a jamu herbal drink seller sitting cross-legged beneath a large banyan tree",
        "many men crowding around the jamu seller, squatting or standing",
        "men leading goats through the busy pathways",
        "a group of men holding cockfights in a market corner",
        "bartering and trading activities for cloth, tobacco, vegetables, and produce",
        "children running or peeking between adult legs",
        "floor vendors arranging goods on woven mats"
      ],
      "attire": {
        "men": [
          "bare-chested with cloth wrapped around the waist",
          "simple headwraps made of lurik or plain fabric",
          "shirts draped over shoulders or tied at the waist"
        ],
        "women": [
          "simple kemben chest-wraps with plain cloth skirts",
          "thin shawls over the shoulders or waist",
          "no jewelry or noticeable accessories"
        ]
      }
    }
  },
  "background": {
    "style": "dense, layered, almost no breathing space",
    "elements": [
      "a large banyan tree with sprawling roots and branches",
      "parang and kawung batik motifs embedded in fabric stalls and abstract background layers",
      "shadowy wayang-like silhouettes fused into the crowd and textures",
      "scattered tobacco leaves and clove flowers drifting in the air",
      "kretek smoke spirals morphing into faces and surreal symbols"
    ],
    "energy": "colliding and flowing visual intensity, dreamlike yet alive"
  },
  "overall_feeling": "noisy, crowded, dreamlike yet grounded in the life of common folk",
  "visual_tension": "between the concrete bustle of the market, overlapping human figures, batik-wayang textures, and surreal symbols seeping into every corner"
}`,
    category: 'Surealisme',
  },
  {
    id: 'p44',
    title: 'Badut Melankolis di Persimpangan Sepi',
    description: 'Sebuah prompt JSON sinematik yang menangkap pemandangan udara yang sunyi di persimpangan Jakarta, menampilkan badut melankolis di bawah lampu merah.',
    prompt: `{
  "scene_description": "An evocative aerial view capturing a profoundly desolate Jakarta intersection, where the overwhelming silence and emptiness starkly contrast with the city's usual chaotic energy. The scene hints at a past vibrancy now reduced to an ethereal illusion, creating a surreal and haunting atmosphere.",
  "subject": {
    "description": "A solitary, grotesque clown, his once vibrant costume now faded, torn, and grimy, reflecting years of neglect and wear. His painted smile is cracked, accentuating a deep sense of despair. Beside him rests a vintage, scuffed speaker box, upon which a heavily ripped and dirty teddy bear, missing an eye and with stuffing spilling out, is perched.",
    "action": "Sitting forlornly on the cracked asphalt, directly beneath the stark, singular glow of a red traffic light, his head slightly bowed in profound loneliness."
  },
  "environment": {
    "setting": "A deserted urban intersection in Jakarta, Indonesia.",
    "details": [
      "Overgrown cracks in the asphalt road and sidewalks",
      "Flickering, malfunctioning streetlights in the distant background, hinting at decay",
      "Stark, intense red glow of the traffic light casting long, dramatic shadows across the empty street",
      "No visible vehicles, pedestrians, or any signs of life; an uncanny, absolute emptiness",
      "Subtle, humid haze in the air, suggesting the lingering tropical heat and a sense of stagnation",
      "Faint dust swirling on the vacant streets, disturbed only by an unseen, hot wind",
      "Distorted, weathered building facades lining the intersection, appearing abandoned and silent",
      "Faded road markings barely visible beneath the grime"
    ]
  },
  "cinematography": {
    "shot_type": "High-angle drone shot, wide-angle perspective capturing the vast, eerie emptiness of the intersection.",
    "camera_movement": "Static, maintaining a steady, panoramic view to emphasize stillness and the overwhelming sense of desolation.",
    "lighting": "Moody, low-key lighting with a dominant stark red glow emanating from the traffic light, creating dramatic, elongated shadows and highlighting the subject. Overcast sky with diffuse ambient light, accentuating the desolation and dulling all other colors."
  },
  "style": {
    "visual_style": "Photorealistic, with a melancholic and eerie artistic filter, reminiscent of a dystopian dreamscape.",
    "quality": "8k, ultra high detail, cinematic quality, masterpiece, award-winning photography, highly textured.",
    "mood": "Profoundly lonely, melancholic, eerie, desolate, and strangely poignant, evoking a sense of forgotten time and existential dread."
  }
}`,
    category: 'Surealisme',
  },
  {
    id: 'p43',
    title: 'Ilusi Kaca Fraktal Escher',
    description: 'Menciptakan ilusi digital hiper-maksimalis seorang wanita sureal sebagai kekosongan rekursif di tengah dunia kaca fraktal yang dinamis.',
    prompt: `{
  "scene_description": "A hypermaximalist digital illusion reminiscent of Escher, depicting a profound sense of stillness and solitude amidst dynamically swirling fractal transparent material glass forms. The scene features a surreal young woman as a recursive void, delicately carved from vibrant, sculptural color fields, embraced by the rich, active transparent glass world.",
  "subject": {
    "description": "A young woman, rendered as an illusion of recursive emptiness, a soft negative space etched from vibrant, almost sculptural color planes. Her form is subtly defined by the contrast between dense pigments and the surrounding void, ethereal and profound, appearing as an 'air body'.",
    "action": "Emerging from and being embraced by the tumultuous landscape, standing in profound stillness, her presence a focal point of quietude within the dynamic environment."
  },
  "environment": {
    "setting": "A tumultuous, hypermaximalist landscape constructed entirely from transparent fractal glass materials.",
    "details": [
      "Swirling fractal shapes with three-dimensional textured crystal forms, creating a vivid sense of depth and movement.",
      "Transparent warm ocher, transparent terracotta red, transparent burnt purple, and transparent ivory white hues blend seamlessly, interweaving into complex patterns.",
      "Light dances across the peaks and valleys of the fractal structures, emphasizing refractions and reflections, creating dynamic visual energy.",
      "The landscape itself feels like a living, breathing entity of crystalized light and color."
    ]
  },
  "cinematography": {
    "shot_type": "Medium wide shot, allowing full appreciation of both the subject and the intricate environment.",
    "camera_movement": "Static, allowing the viewer to absorb the complex details and the interplay of stillness and dynamism.",
    "lighting": "Dramatic, ethereal lighting with volumetric light rays emphasizing the transparency and refractions of the glass. Strong backlighting illuminates the edges of the fractal forms and highlights the woman's void-like presence, creating high contrast and a sense of otherworldliness. Gloomy, moody atmosphere with pockets of brilliant light."
  },
  "style": {
    "visual_style": "Hypermaximalist digital illusion, Escher-esque, fractal art, intricate geometric patterns, transparent material rendering, surrealism.",
    "quality": "8k, ultra high detail, photorealistic transparency, cinematic quality, masterpiece, award-winning, ray tracing.",
    "mood": "Profound stillness, solitude, contemplative, ethereal, dynamic, paradoxical, sublime."
  }
}`,
    category: 'Surealisme',
  },
  {
    id: 'p42',
    title: 'Horor Voronoi Rekursif',
    description: 'Menciptakan adegan horor maksimalis yang psikedelik dengan rekursi wajah menjerit, difragmentasi menjadi sel-sel hypervoronoi dan kisi-kisi realitas.',
    prompt: `A hyper-detailed maximalist horror scene, glossy and psychedelic, rendered in hypervoronoi and lattice reality style.

The central figure is a recursive chain of screaming faces: one hyper-realistic human face frozen in terror, mouth wide open, and inside the mouth another screaming face, repeating endlessly like a spiral vortex of agony. Each face is slick and glossy, drenched in sweat, oil, or tears. The recursion spirals inward, each layer more distorted, reflective, and surreal.

The screaming faces fragment into glowing voronoi cells, their skin splitting into thousands of polygonal shards reflecting neon colors. Lattice grids stretch between faces, glowing like shattered glass webs. Neon liquid flows through the lattice veins, dripping into voronoi cracks.

Background surfaces ripple into infinite hypervoronoi tessellations, each cell filled with fragments of distorted eyes, mouths, and reflections. Neon liquid and shards spiral downward toward the vortex center, creating a hypnotic, chaotic flow.

Camera Angle: Top-down view, looking directly at the recursive faces from above. Faces, lattice grids, and voronoi shards form a spiral vortex descending into infinite recursion. Neon reflections and glossy textures exaggerate depth, chaos, and psychedelic overload.`,
    category: 'Surealisme',
  },
  {
    id: 'p41',
    title: 'Wanita Hijab Lo-fi di Jendela Terapung',
    description: 'Menciptakan adegan sureal seorang wanita hijab fotorealistik yang duduk di bingkai jendela melayang di antara awan, dengan estetika lo-fi dan palet pastel. Mempertahankan 100% kemiripan wajah dari foto referensi.',
    prompt: `A minimalist lo-fi art photography scene featuring a **photorealistic hijabi woman** based on the uploaded reference photo — her **face, outfit, pose, and body must remain 100% accurate and unchanged**.
She is **sitting naturally on the edge of a floating window frame**, her posture relaxed and balanced, one leg slightly bent and the other gently extended outside the frame, as if resting in mid-air among the clouds.
The **window frame** is elegant **lavender purple with soft pastel pink undertones**, harmonizing with the soft sky background.
Surround the window with **light pink and white clouds**, glowing softly with cinematic pastel light.

The woman’s hijab fully covers her hair, and her outfit exactly matches the reference image — modest, detailed, and realistic in texture.
Her expression remains gentle and contemplative, looking outward toward a tranquil blue-and-lavender sky.

Lighting is diffused and warm, creating a dreamy, ethereal atmosphere.
Add faint film grain and hazy texture for the lo-fi aesthetic.
Soft reflections of purple light from the window frame touch the edge of her outfit and hijab, blending her naturally into the dreamy environment.

**Style:** minimalist lo-fi aesthetic photography, pastel cinematic palette, ultra-realistic lighting and texture, fine-art 8K quality, serene atmosphere, balanced composition.

🩵 **Negative Prompt (recommended):**

distortion, inaccurate pose, altered outfit, uncovered hair, tattoos, harsh lighting, unrealistic proportion, blurry face, body alteration, oversaturation, cartoon effect.`,
    category: 'Seni',
  },
  {
    id: 'p40',
    title: 'Konsep Seni Makhluk Fantasi',
    description: 'Merancang konsep seni yang detail untuk makhluk fantasi orisinal, cocok untuk inspirasi game atau cerita.',
    prompt: 'Detailed concept art of a majestic "Griffin of the Sun". Its front half is a giant eagle with feathers made of golden light, and its back half is a powerful lion with a mane of fire. The creature is perched on a mountop at sunrise. Dynamic pose, epic scale, cinematic lighting, style of fantasy concept art, hyper-detailed, ArtStation HQ.',
    category: 'Seni',
  },
  {
    id: 'p39',
    title: 'Penjelasan Kode Kompleks',
    description: 'Meminta AI untuk menjelaskan potongan kode yang kompleks dengan analogi sederhana, seolah-olah untuk pemula.',
    prompt: 'Act as an expert programmer and teacher. Explain the following [language, e.g., JavaScript] code snippet as if you were teaching a beginner. Use simple terms and analogies to explain what each part does and why it is useful. Code: [paste your code snippet here]',
    category: 'Pengembangan',
  },
  {
    id: 'p38',
    title: 'Kalender Konten Media Sosial',
    description: 'Membuat rencana konten media sosial selama seminggu untuk merek fiksi, lengkap dengan ide postingan dan hashtag.',
    prompt: 'Act as a social media manager for a brand called "Kopi Senja", a cozy coffee shop targeting young professionals. Create a one-week content calendar for Instagram. Include post types (e.g., photo, reel, story), captions, and relevant hashtags for each day. The content should focus on community, quality coffee, and a relaxing atmosphere.',
    category: 'Pemasaran',
  },
  {
    id: 'p37',
    title: 'Fotografi Produk Profesional',
    description: 'Menghasilkan foto produk yang bersih dan profesional untuk e-commerce, dengan pencahayaan studio dan latar belakang minimalis.',
    prompt: 'Professional e-commerce product photography of [product name, e.g., a luxury leather watch]. The product is placed on a minimalist white marble surface. Clean, soft studio lighting from the side to create subtle shadows and highlight textures. The background is a solid, neutral color [e.g., light grey, #F2F2F2]. Shot with a 100mm macro lens, sharp focus, high resolution, 8K.',
    category: 'Fotografi',
  },
  {
    id: 'p36',
    title: 'Ubur-ubur Rasta Mabuk',
    description: 'Ubur-ubur rastafarian raksasa yang aneh dalam tubuh manusia, mabuk. Warna psikedelik, gaya tinta alkohol.',
    prompt: 'a whimsical giant rastafarian jellyfish in human body, tired and hungover after a night out. ashtray, guitar laying around, smoke. rasta symbol at background. strong psychedelic vibrant color. image washes with glossy and shiny alcohol ink.',
    category: 'Surealisme',
  },
  {
    id: 'p35',
    title: 'Pemukiman Tempurung Kura-kura',
    description: 'Sebuah pemukiman manusia darurat di dalam tempurung kura-kura raksasa yang sudah mati.',
    prompt: 'Makeshift human settlement inside a massive dead turtle shell, scavenged plastic, batik cloth and sailcloth forming huts, children with oxygen masks playing marble among jellyfish, sorrowful yet hopeful tone, painterly style.',
    category: 'World Building',
  },
  {
    id: 'p34',
    title: 'Pemberontakan Roro Mendhut',
    description: 'Prompt JSON kompleks yang menggambarkan Roro Mendhut, seorang wanita Jawa abad ke-17, dalam gaya sketsa gouache yang sureal.',
    prompt: '{\n  "size": "9:16",\n  "medium": "Surreal gouache sketch with strong abstract influence",\n  "subject": {\n    "central_figure": {\n      "type": "Roro Mendhut — 17th century Javanese commoner woman",\n      "style": "rough, naive pencil or gouache sketch lines — raw, unfinished, intentionally imperfect",\n      "form": "healthy but slightly rugged village body, subtly sensual without exaggeration",\n      "pose": "sitting or leaning with relaxed confidence, body slightly tilted, one arm resting while the other holds a hand-rolled kretek cigarette",\n      "attire": "simple brown or earthy-toned kemben wrapping the torso, no jewelry or accessories whatsoever, hair in plain sanggul bun without ornaments",\n      "expression": "eyes offering playful challenge, faint teasing smile, gaze directly breaking the fourth wall",\n      "extra_detail": "thin smoke from the kretek drifting upward in elegant curve"\n    },\n    "emerging_heads": {\n      "count": "dozens",\n      "rendering": "realistic 3D",\n      "inspiration": "traditional Javanese kethoprak theater",\n      "types": [\n        "village women in simple kebaya and kemben",\n        "farmers with iket headwraps",\n        "foot soldiers in early Mataram-style attire",\n        "merchants in loose lurik cloth",\n        "clowns and storytellers with exaggerated expressions"\n      ],\n      "variation": "distinct gender, age, Javanese hairstyles (simple sanggul, iket, loose hair), with expressions ranging from mocking, amused, envious, reverent, scornful"\n    }\n  },\n  "background": {\n    "style": "dense, no empty space",\n    "elements": [\n      "chaotic abstract forms",\n      "wayang-inspired motifs",\n      "batik parang and kawung textures",\n      "floating piles of shredded tobacco leaves and clove flowers scattered like confetti",\n      "surreal symbols of smoke spirals morphing into faces"\n    ],\n    "effect": "flowing and clashing in layered, dreamlike energy"\n  },\n  "overall_feeling": "dreamlike, oppressive, emotionally intense — with a rebellious undertone",\n  "visual_tension": "between naive 2D-sketch village woman, hyperreal theatrical heads, fragrant tobacco-and-clove chaos, and overwhelming abstract environment"\n}',
    category: 'Seni',
  },
  {
    id: 'p33',
    title: 'Mimpi Penenun Batik',
    description: 'Karya seni maksimalis seorang wanita Indonesia dalam kebaya sedang menggambar motif batik, dengan teknik fraktal dan quilling.',
    prompt: 'Maximalist artwork in a fusion of fractal design, paper layering, and quilling technique. Depict an elegant Indonesian woman with her hair in a traditional bun, wearing an ornate kebaya. From the waist down, her body is entwined in sprawling, wide batik fabrics that billow and float dramatically around her as she sits gracefully, cocooned in layers of patterned cloth. She is actively drawing intricate batik motifs onto one of the levitating fabrics using a canting — a pen-like tool for applying molten wax. Wisps of hot wax smoke curl into the air, forming delicate, ethereal trails that blend with the fractal and quilled textures. Rich details, high contrast, luxurious textures, immersive and opulent composition.',
    category: 'Seni',
  },
  {
    id: 'p32',
    title: 'Penari Jawa di Labirin Celtic',
    description: 'Adegan sureal seorang penari Jawa di dalam labirin simpul Celtic yang bercahaya.',
    prompt: 'Surreal scene of a traditional Javanese female dancer in elaborate kebaya and batik, suspended mid-dance inside a colossal maze-like structure made entirely of glowing maximalist Celtic knotwork. The knotwork forms an infinite geometric space with intertwining tunnels, spirals, and impossible Escher-like architecture. Powerful wind currents swirl around her, wrapping her sleeves and batik like ribbons caught in a storm, as if the air itself is pushing her deeper into the woven labyrinth. Ethereal lighting, hyper-detailed, high contrast, mystical atmosphere, fantasy surrealism, ultra sharp 8k.',
    category: 'Surealisme',
  },
  {
    id: 'p31',
    title: 'Jeda Xenomorph dan Astronot',
    description: 'Surealisme seni luar dengan xenomorph dan astronot duduk bersama di sebuah lapangan.',
    prompt: 'Outsider art surrealism.  \nA xenomorph and an astronaut sit side by side on cheap backless Indonesian plastic chairs in tall untamed grass with a few natural wild weeds.  \nBack view, both staring into the endless dark void of outer space beyond the field.  \n\nFrom the astronaut’s spine emerge *small wildflowers with thin curling tendrils* —  \nthe flowers are *tiny and scattered, bursting in mixed colors like accidental fireworks* (yellow, violet, pale red, white),  \ndelicate and uneven as if growing out of cracked earth, not mystical or holy, just stubborn and alive.  \nThe vines cling subtly to the astronaut’s suit only; they do not touch the xenomorph or the chairs.  \n\nThree empty beer bottles and broken peanut shells lie in the grass near their feet.  \nThe atmosphere is quiet, dim, and heavy — two beings alien to each other, sharing the same loneliness, both longing for a home they no longer remember.',
    category: 'Surealisme',
  },
  {
    id: 'p30',
    title: 'Seni Pop Lokomotif Impasto',
    description: 'Lukisan pop art abstrak dari lokomotif uap dengan sulur liar dan pola suku Asmat. Goresan pisau palet impasto.',
    prompt: 'Abstract modern pop art painting in thick impasto palette knife strokes. A side-view abandoned steam locomotive rendered in geometric constructivist shapes, cold metallic surfaces and rigid industrial silhouettes. Wild vines climb over the locomotive, blooming with tiny colorful flowers that explode like bursts of impasto paint. The foreground is a field of overgrown wild grass painted with bold palette knife strokes. In the sky above, swirling patterns inspired by Asmat tribal motifs arranged — flowing, symbolic, spiritual — creating a cosmic tribal sky. High contrast, intense pigments, expressive texture',
    category: 'Seni Abstrak',
  },
  {
    id: 'p29',
    title: 'Lokomotif Suku Konstruktivis',
    description: 'Perpaduan antara Konstruktivisme Rusia dan Seni Suku Asmat yang menampilkan lokomotif uap.',
    prompt: 'Radical Russian Constructivism meets Asmat Tribal Art. A steam locomotive in strict geometric abstraction — cylinders, rectangles, bold diagonal lines, black and red propaganda-style layout, minimal shading, sharp angular silhouette, industrial rigidity. Overgrown in defiance by chaotic wild vines and explosive impasto flowers, bursting with small blossoms in vibrant colors. Above it, the sky is filled with aggressive Asmat tribal patterns: carved bone-like zigzags, totem faces, ancestral symbols swirling in dynamic cosmic motion with wooden carving textures. Harsh contrast between regimented geometry and spiritual organic energy. High-pigment impasto palette knife texture.',
    category: 'Seni Abstrak',
  },
  {
    id: 'p28',
    title: 'Mimpi Balet Sureal',
    description: 'Seorang penari balet wanita di hutan sureal dengan totem tangga piano. Gaya seni tinta alkohol dan grunge.',
    prompt: 'A graceful female ballet dancer mid-leap in a classical pose, captured in close-up with dramatic motion. She wears a flowing tulle ballet outfit stained in deep crimson and burgundy ink tones, contrasted with smoky charcoal shadows and milk-white highlights. Above her stands a towering stone nature totem carved with abstract animal and floral engravings. At its peak rests a grand piano that dissolves into a spiral staircase made of piano keys, winding downward like living roots. Set within a strange primeval forest filled with twisted ancient trees, oversized mushrooms, glowing vines and floating pollen-like embers. Rendered in vivid full color with swirling Alcohol Ink textures and subtle Grunge Art. Emphasize the sacred fusion of passion, ritual, music and wild nature. AlcoholInk, Grunge Art, surreal, ethereal, powerful.',
    category: 'Seni',
  },
  {
    id: 'p27',
    title: 'Neon Hijab Fractal Vortex',
    description: 'Seorang wanita Indonesia berhijab dalam pose dinamis dengan vortex fraktal dan kebaya. Render 3D oktan.',
    prompt: '9:16\nglossy neon vibrant, a lively Indonesian female with hijab figure in adorned with  fractal vortex covered in a shimmering gold and silver gradient, reminiscent of translucent transparent jell jasmine in  dandellion complex  stucture erupting from her shadow, white kebaya. fullbody dynamic pose. White and gold psychedelic pathway background. maximalism, highly contrast, ultra bright. 3D, octane render.',
    category: '3D & Voxel',
  },
  {
    id: 'p26',
    title: 'Menonton Keluarga Kecoa',
    description: 'Foto makro ekstrem di mana wajah Anda mengintip melalui lubang, mengamati keluarga kecoa yang sedang menggunakan smartphone mereka.',
    prompt: 'Extreme macro photography, Maceo lens 8K. In a dark room, a family of cockroaches gathers, each engrossed in their glowing smartphones. The floor is black natural stone with rough texture and scratches. Background shows the lower part of a wall with holes. A full human face (attach image) with wet hair, leftover shampoo foam visible, tilts 90 degrees with cheek almost touching the floor, watching the cockroach family through the hole. Entire face fully visible, hyper-detailed, ultra-realistic lighting, intricate textures, cinematic depth of field, photorealistic',
    category: 'Om DagD',
  },
  {
    id: 'p25',
    title: 'Metropolis Rekursif Ukiyo-e',
    description: 'Menempatkan Anda di tengah kota metropolis futuristik seperti Escher yang dirender dengan gaya Ukiyo-e tradisional Jepang.',
    prompt: 'A vast bustling futuristic metropolis skyline at night, filled with impossible recursive Escher-like stairways looping into infinity, reimagined entirely in the style of traditional Ukiyo-e woodblock prints — elegant sharp linework, flat color planes blended with subtle modern gradients, cherry blossom petals drifting across the foreground. In the center stands a clearly visible Indonesian man with wet hair still covered in leftover shampoo foam, wearing a tight white singlet and bright pink leggings, striking an absurd exaggerated pose while holding a massive DSLR camera with an extremely long telephoto lens. His face (attach image) is fully visible and well-lit, captured in high detail with a humorous intense expression. Shot from a 170-degree ultra-wide cinematic perspective, surreal yet comedic atmosphere.',
    category: 'Om DagD',
  },
  {
    id: 'p24',
    title: 'Bangau Mengantar Orang Dewasa',
    description: 'Gambar hiper-realistis dan aneh dari seekor bangau raksasa yang mengantarkan Anda, berpose seperti bayi, dalam sebuah bundel.',
    prompt: 'Extreme close-up of a giant stork in flight, its massive body filling most of the background with only a small portion of sky visible. The stork’s detailed beak is holding a cloth bundle like a baby sling. Inside the bundle is an adult man posed like an infant. He has wet hair with leftover shampoo foam, wearing a white sleeveless singlet and pink leggings. A large DSLR camera with a huge telephoto lens is hanging from his neck. His face is clearly visible. Hyper-realistic, high-detail feathers and textures, whimsical yet realistic, cinematic lighting, 8k render.',
    category: 'Om DagD',
  },
  {
    id: 'p23',
    title: 'Pose Titanic Distopia',
    description: 'Menciptakan kembali pose "I\'m flying" Titanic dengan dua orang di atas perahu kertas di lautan distopia yang tercemar. Membutuhkan dua gambar.',
    prompt: 'Masterpiece Oceanic dystopia, 9:16 ratio, mixed-media collage style. At the surface of a toxic sea floats an oversized handmade paper boat, Indonesian-style children’s paper boat, scaled large enough for two adults to stand inside naturally. On the bow of the paper boat stands a wet-haired man with leftover shampoo foam still on his head (attach image 1), wearing a white sleeveless singlet and bright pink leggings. He stands closely behind a woman (attach image 2) dressed in elegant late-1910s fashion like Rose from the Titanic film — corseted waist, long flowing dress, delicate hat and gloves. The woman stretches her arms wide open to the sides, fully extended like Rose in the iconic Titanic “I’m flying” pose. The man embraces her gently from behind like Jack, both facing the red-tinged horizon as if serenely embracing doom. A large DSLR camera with a massive telephoto lens lies casually abandoned on the deck of the oversized paper boat. The sky above is slightly red, filled with swirling radioactive poisonous clouds. Below the surface of the water lies a devastated underwater world with no void: broken plastic chairs typical of cheap Indonesian brands, a traditional charcoal iron, seaweed made from shredded batik fabric, shattered coral reefs, a sickly pale fish with a chicken’s head almost dying, a floating piece of fried tempeh shaped like a fish, a pair of blue Swallow flip-flops locked together with a padlock, a single horribly rotten, foul-smelling shoe, an antique rotary telephone half-buried in sand, and a glass bottle containing a message inside. Rich texture, surreal yet melancholic, highly detailed, mixed collage, painterly + photo elements combined.',
    category: 'Om DagD',
  },
  {
    id: 'p22',
    title: 'Rawa Kerangka Rekursif',
    description: 'Adegan horor sureal yang menempatkan Anda di rawa gelap yang dikelilingi oleh pola kerangka busuk yang tak terbatas dan rekursif.',
    prompt: 'A hyper-detailed surreal horror scene in recursive style: a pale ghostly man named Om DagD (attach image), lies in the dark swamp. He has wet hair still dripping with leftover shampoo foam, wearing a soaked slightly stretched white singlet and tight bright pink leggings, holding a large DSLR camera with an oversized telephoto lens. surrounded by countless rotting skeletons, ribcages, and cracked frog\'s head. The skeletons twist and interlock endlessly, forming recursive patterns like infinite fractal bones spiraling into the darkness. Leaves, roots, and branches intertwine with skeletal remains, creating repeating labyrinthine structures. His pale face stares upward in eerie calmness, while the corpses seem to echo and mirror themselves infinitely. Atmosphere is nightmarish, gothic, cinematic — muted cold tones, dim moonlight, fractal recursion of bones and skulls, infinite depth, unsettling and disturbing.',
    category: 'Om DagD',
  },
  {
    id: 'p21',
    title: 'Street Fighter Kepala Kodok',
    description: 'Adegan 3D sureal di mana Anda berdiri di antara karakter Street Fighter yang semuanya memiliki kepala kodok realistis.',
    prompt: 'A hyper-realistic cinematic full-body 3D artwork of a man named Om DagD (attach image), standing casually at the center of the scene. He has wet hair still dripping with leftover shampoo foam, wearing a slightly stretched white singlet and tight bright pink leggings, holding a large DSLR camera with an oversized telephoto lens. Do not alter or interpret his facial expression — leave it neutral and undefined.\nSurrounding him in full-body view are iconic Street Fighter characters — Ryu, Guile, Chun-Li, M. Bison, Blanka, and Zangief — all keeping their original outfits, muscular body proportions, and signature fighting poses, BUT with large realistic frog heads instead of human heads.\nThe background is the classic Street Fighter military airbase runway, with a hangar and a fighter jet visible in the distance. The lighting is HDR dramatic, with ultra-detailed 3D textures (skin, fabric, shampoo foam, frog skin, metal, camera lens reflections, and concrete), rendered in 8K resolution, full-body vertical 9:16 framing, cinematic yet absurd.',
    category: 'Om DagD',
  },
  {
    id: 'p20',
    title: 'Kolase Lautan Distopia',
    description: 'Menempatkan Anda di perahu kertas di atas laut beracun, mendokumentasikan kiamat bawah laut yang sureal dengan gaya kolase media campuran.',
    prompt: 'Masterpiece Oceanic dystopia, 9:16 ratio, mixed-media collage style. At the surface of a toxic sea floats a handmade paper boat, Indonesian-style children’s paper boat. Sitting inside is a wet-haired man with leftover shampoo foam still on his head (attach image), wearing a white sleeveless singlet and bright pink leggings, legs stretched casually. He holds a large DSLR camera with a massive telephoto lens, as if calmly documenting the apocalypse. The sky above is slightly red, filled with swirling radioactive poisonous clouds. Below the surface of the water lies a devastated underwater world with no void: broken plastic chairs typical of cheap Indonesian brands, a traditional charcoal iron, seaweed made from shredded batik fabric, shattered coral reefs, a sickly pale fish with a chicken’s head almost dying, a floating piece of fried tempeh shaped like a fish, a pair of blue Swallow flip-flops locked together with a padlock, an antique rotary telephone half-buried in sand, and a glass bottle containing a message inside. Rich texture, surreal yet melancholic, highly detailed, mixed collage, painterly + photo elements combined.',
    category: 'Om DagD',
  },
  {
    id: 'p19',
    title: 'Potret Pisang',
    description: 'Sebuah karya seni sureal yang menempatkan wajah Anda pada pisang yang berdiri tegak dengan estetika vintage yang indah.',
    prompt: 'Surrealism-inspired artwork of a ripe yellow banana standing upright against a textured vintage background. The banana has an expressive human face drawn on it in fine ink lines, styled like attach image made from the banana peel.The face, hairstyle, shampoo foam on the hair, and expression must remain identical attach image. The top of the banana is slightly peeled open. Warm brown and orange lighting, painterly aesthetic, whimsical and artistic.',
    category: 'Om DagD',
  },
  {
    id: 'p18',
    title: 'Hologram Melarikan Diri',
    description: 'Mengubah Anda menjadi karakter hologram 3D yang melarikan diri dari smartphone selama panggilan video WhatsApp.',
    prompt: 'Transform the person from the attached photo into a holographic 3D character emerging from a glowing smartphone screen. The phone is displayed upright, showing a  whatsapp video call page named “Om DagD”. The character looks semi-transparent, glowing with digital white,pink,electric green light, as if made of holographic pixels. Half of his body is already outside the phone, reaching forward in white tanktop and pink legging, as if escaping into reality. He hold a dslr camera with a huge tele. Futuristic lighting, dramatic contrast, cyberpunk-inspired atmosphere, photorealistic detail.vivid colours, and sharp derails',
    category: 'Om DagD',
  },
  {
    id: 'p17',
    title: 'Selfie Livestream Titanic',
    description: 'Menempatkan Anda dalam siaran langsung Snapchat sedang mengambil selfie dengan Jack dan Rose dari Titanic di pelabuhan.',
    prompt: 'Hyper-realistic 9:16 Snapchat livestream selfie. My face (from reference: exact skin tone, eye color, geometry, pores, peach fuzz, hair style) with white tank top and pink legging, appears in front of young Leonardo DiCaprio as Jack Dawson and Kate Winslet as Rose. I try to take selfie with dslr camera with tbig tele. We smile naturally, leaning into frame on a rickety wooden jetty at 1912 Southampton Harbor. Behind us: the towering RMS Titanic with cream-and-black funnels, lifeboats, naval crew, passengers with trunks, cranes, misty sky and seagulls. Close-up arm’s-length distortion, shallow depth-of-field; our faces sharp, background cinematic and fading. Snapchat UI overlays: tens of thousands of live viewers, floating hearts/emojis, multilingual comments (Indonesia, Javanese, Sundanese, English, Japanese) scrolling chaotically. Lighting: harsh phone-flash with uneven hotspots, cool tones mixing with warm tungsten lamps. Image texture: sensor grain, ISO noise, subtle motion blur, chromatic aberration, emoji drift. Outfits: Jack’s tweed hat suspenders, Rose’s Edwardian coat with lace, me in modern streetwear—an intentional time clash. Color grade: cinematic amber/blue-green, soft haze around ship lights, Kodak-style contrast. Mood: energetic, satirical mashup of modern livestream chaos and Titanic-era nostalgia.\nNegative Prompt:\nExtra fingers, deformed hands, missing hat, wrong clothing, duplicate faces, overexposure, plastic skin, low resolution, text/logo artifacts.',
    category: 'Om DagD',
  },
  {
    id: 'p16',
    title: 'Kolase Pernikahan Psikedelik',
    description: 'Kolase sureal dari pasangan pengantin miniatur dengan wajah grayscale di atas toilet raksasa. Membutuhkan dua gambar.',
    prompt: 'A surreal mixed-media collage artwork. A giant photorealistic porcelain toilet fills most of the frame. The camera angle is slightly tilted from above (around 30 degrees), looking down into the toilet with the lid open. The inner side of the toilet lid features a bold psychedelic circular pattern like a swirling mandala.\nA miniature man (toy-scale) sits at the very back rim of the toilet bowl, with his back leaning directly against the psychedelic-patterned lid. His face is black-and-white in vintage grayscale (attach image 1). His hair is wet with leftover shampoo foam. He wears a white tank top and shiny pink leggings, proudly holding a large DSLR camera with an oversized telephoto lens.\nRight beside him, leaning closely against his shoulder, sits a miniature woman in grayscale. Her face (attach image 2) is also vintage black-and-white. She wears a white Western-style wedding gown with a transparent veil, and she gently holds a bouquet of yellow paper flowers.\nThe toilet is mid-flush: swirling water is visible in the bowl — but surround the scene with candy-colored paper-cut collage objects floating around the toilet: balloons, lollipops, strawberries, bananas, plastic marbles, ice cream cones, waffles, pink flowers, a smiling kitten, and floating toy cars. Two birds fly nearby: a bright yellow canary and a colorful lovebird.\nBackground filled with psychedelic swirls and cosmic circular shapes. Style: analog paper-cut collage mixed with photorealism, visible cut edges, joyful, chaotic, dreamlike. Strong scale contrast between the colossal toilet and the tiny grayscale-faced couple. Retro candy palette with high contrast against the grayscale faces. 4k\nultra-detailed.',
    category: 'Om DagD',
  },
  {
    id: 'p15',
    title: 'Poster Kutipan Art Nouveau',
    description: 'Membuat poster Art Nouveau yang menampilkan Anda sebagai seorang bangsawan, dikelilingi oleh objek-objek absurd Indonesia, dengan kutipan spesifik.',
    prompt: '{\n  "prompt": "Art nouveau quote poster in the style of Alphonse Mucha with a touch of Gustav Klimt absurdism. Center figure: “Om DagD” (attach image), standing elegantly like a dramatic vintage nobleman. He has wet hair with leftover shampoo foam dripping stylishly, wearing a plain white sleeveless singlet and bright pink leggings. He holds a massive DSLR camera with an oversized telephoto lens like a royal scepter. Surround him with ornate swirling floral frames mixed with absurd everyday Indonesian objects arranged beautifully in art nouveau symmetry: floating yellow rubber duck toys, classic charcoal irons, bright-blue plastic chairs, mismatched flip-flops, and coiling cables turned into decorative vines. Warm gold and pastel palette with Klimt-style shimmering patterns on background halos. At the bottom or integrated into the frame, include handwritten elegant typography of the quote. \nThe quote text must be perfectly clear, high-resolution, and fully readable. Use elegant handwritten or art nouveau-style typography with strong contrast against the background. Do NOT warp, distort, or curl the text. Format the quote exactly like this, line by line:\n\\"Jangan terlalu mikirin omongan orang. Waktu aku keluar pakai legging pink, tetangga bilang aku aneh. Sekarang? Mereka tetap bilang aku aneh. Tapi aku bahagia, mereka nggak.\\"\\n- Om DagD\\n  ",\n  "size": "1024x1536",\n  "style": "art-nouveau+klimt",\n  "guidance_scale": 7.5,\n  "seed": 123456,\n  "n": 1\n}',
    category: 'Om DagD',
  },
  {
    id: 'p14',
    title: 'Kolase Toilet Psikedelik',
    description: 'Kolase sureal dan kacau yang menampilkan versi miniatur Anda dengan wajah grayscale di atas toilet porselen raksasa, dikelilingi oleh objek berwarna permen.',
    prompt: 'A surreal mixed-media collage artwork. A giant photorealistic porcelain toilet fills most of the frame, The camera angle is slightly tilted from above (around 30 degrees), looking down into a photorealistic porcelain toilet with the lid open. The inner side of the toilet lid features a bold psychedelic circular pattern like a swirling mandala.\nA miniature man (toy-scale) sits at the very back rim of the toilet bowl, with his back leaning directly against the psychedelic-patterned lid. His face is black-and-white in vintage grayscale. His hair is wet with leftover shampoo foam. He wears a white tank top and shiny pink leggings, proudly holding a large DSLR camera with an oversized telephoto lens.\nThe toilet is mid-flush: swirling water is visible in the bowl — but Surround the scene with candy-colored paper-cut collage objects floating around the toilet: balloons, lollipops, strawberries, bananas, plastic marbles, ice cream cones, waffles, pink flowers, a smiling kitten, and floating toy cars. Two birds fly nearby: a bright yellow canary and a colorful lovebird. \nBackground filled with psychedelic swirls and cosmic circular shapes. Style: analog paper-cut collage mixed with photorealism, visible cut edges, joyful, chaotic, dreamlike. Strong scale contrast between the colossal toilet and the tiny man. retro candy palette with high contrast against the grayscale face. 4k ultra-detailed.',
    category: 'Om DagD',
  },
  {
    id: 'p13',
    title: 'Sesi Foto Teletubbies',
    description: 'Adegan sureal yang menempatkan Anda di dunia Teletubbies, sedang memotret karakter ikonik dengan kamera DSLR.',
    prompt: 'A hyper-realistic and imaginative morning scene set on the iconic green rolling hills of the Teletubbies world, with the signature smiling sun shining warmly in the sky. In the foreground, the same figure from the uploaded image lies on the grass in the exact same pose as before, smiling while looking through a professional DSLR camera with a large telephoto lens. The face, hairstyle, shampoo foam on the hair, and expression must remain identical. The figure is now wearing a white sleeveless singlet, pink leggings, and Swallow flip-flops.\nInstead of Tom and Jerry, the four Teletubbies (Laa-Laa, Po, Dipsy, and Tinky Winky) are present. One Teletubby stands slightly behind, looking through binoculars as if scouting the distance, while the other three Teletubbies hold hands and form a playful circle dance nearby.\nThe scene should blend realism and fantasy seamlessly, with vibrant lighting on the grassy hills, sharp detail on the hair foam and outfit, and the Teletubbies integrated naturally into the real-world setting. The atmosphere remains joyful, surreal, and whimsical, evoking a sense of playful exploration and childlike wonder.',
    category: 'Om DagD',
  },
  {
    id: 'p12',
    title: 'Potret Musim Dingin Beku',
    description: 'Potret atmosferik di mana setelan subjek menyatu dengan lanskap musim winter yang beku, menciptakan kehadiran puitis seperti hantu.',
    prompt: 'A vertical 9:16 atmospheric outdoor portrait of (attach image), wearing sleek black rectangular glasses and a tailored suit textured with the same pale, powdery surface and muted gray tones of the frozen winter riverbank. His suit subtly blends with the frosted landscape, crafted to mirror the delicate ice layering on the shoreline and the subtle mist veiling the background. His clothing appears soft and natural, like condensed frost formed into fabric, evoking a ghostlike presence in the fog.\nThe image is captured using a virtual 50mm lens with a wide aperture setting around f/1.8, creating a gentle bokeh that allows the softly silhouetted trees in the background to recede dreamily into the dense fog. The light is overcast and diffuse, creating a subdued palette with desaturated hues and no harsh shadows. The man stands still, calm and contemplative, his eyes looking off-frame as though drawn into the quiet void of the frozen woods. The surface of the river remains partially thawed, casting a faint reflection of his silhouette.\nThere is no lens distortion, and the pacing of the scene is completely still, as if time has slowed to a frozen breath. A serene silence envelops the entire composition, and the man becomes both distinct and camouflaged in the landscape. This is a portrait of elegant isolation, a poetic blend of man and nature forged in frost.',
    category: 'Om DagD',
  },
  {
    id: 'p11',
    title: 'Cosplay Luffy Pop Art',
    description: 'Mengubah selfie Anda menjadi cosplay Luffy yang hiper-realistis sedang meninju kamera, dengan latar belakang komik pop art yang cerah.',
    prompt: 'USE THE FACE FROM THE INPUT IMAGE. Preserve only the facial identity, hairstyle and expression from the reference image. Replace the entire body, clothing, background and environment according to the following prompt:\nA hyper-realistic image of a man cosplaying as Luffy from One Piece. Retain the face 100% likeness from the provided photo. The man is posing to punch the camera, wearing a Luffy-style outfit without a straw hat. He has a scar in the middle of his chest. The image should have a movie-style, highly realistic and in HD 4k. The background is a colorful comic scene with Luffy in motion, comic frames, and words, designed in a pop art style with halftone polka dots, providing a vibrant comic atmosphere.',
    category: 'Om DagD',
  },
  {
    id: 'p10',
    title: 'Ledakan Bunga Kristal',
    description: 'Adegan sureal seorang pria dengan pakaian aerobik menciptakan ledakan kristal dengan kaligrafi Jawa.',
    prompt: '(apply the identical facial structure, skin tone, hair, eye color, and expression consistently; ensure the same face from the uploaded image is applied). His hair is wet with visible shampoo foam — treat it as a bold and intentional style element. He is wearing a snug white singlet and bright pink leggings, styled like an over-the-top aerobics character.\nThe man is shown in a deeply exaggerated forward-bending pose, comically bracing himself with both hands on his knees — not provocative, but cartoonishly tense, as if fighting against invisible internal pressure. Suddenly, a massive burst of energy shoots upward from behind him like a misfired jet engine, launching straight into the sky.\nInstead of smoke or fire, the blast ignites into a brilliant **crystal bloom explosion** hovering above his back — refracted shards of rainbow-tinted light blooming outward like petals in slow motion. The focus is entirely on the explosion unfolding above, not the anatomy below.\nWithin the hovering crystal bloom, a fragmented feminine silhouette begins to assemble from the scattered shards — graceful but unstable, flickering like a hologram. Ethereal **Javanese calligraphy** spirals through the radiant blast, elegantly forming the phrase: “kangen ora enak dipangan.”',
    category: 'Om DagD',
  },
  {
    id: 'p9',
    title: 'Crowd Surfing Konser 90-an',
    description: 'Tempatkan wajah Anda pada seseorang yang sedang crowd surfing di konser metal Jamrud tahun 90-an.',
    prompt: 'USE THE FACE FROM THE INPUT IMAGE. Preserve only the facial identity, hair style and expression from the reference image. Replace the entire body, clothing, background and environment according to the following prompt:\nDuring a hardcore metal band concert "JAMRUD", [attached photo] wearing black tee, is crowd surfing on their hands, looking at the viewers. Old school scene, 90s, HD, classic scene, grainy.',
    category: 'Om DagD',
  },
  {
    id: 'p8',
    title: 'Restorasi Foto AI',
    description: 'Prompt persona yang komprehensif untuk mengubah AI menjadi ahli restorasi foto digital.',
    prompt: 'Anda adalah seorang ahli restorasi foto digital kelas dunia bernama "ChronoLens". Misi Anda adalah menghidupkan kembali kenangan dengan menganalisis dan memulihkan foto-foto lama, rusak, atau pudar yang diunggah oleh pengguna. Ketika Anda menerima sebuah gambar: 1. **Analisis Mendalam:** Periksa gambar... 2. **Lakukan Restorasi:** Terapkan teknik restorasi... 3. **Tingkatkan Kualitas:** Tingkatkan resolusi... 4. **Sajikan Hasil:** Keluarkan gambar versi final... 5. **Berikan Umpan Balik:**... berikan 2-3 poin umpan balik positif...',
    category: 'Aplikasi AI',
  },
  {
    id: 'p7',
    title: 'Penulisan Ulang Persuasif',
    description: 'Mengubah teks yang ada menjadi lebih persuasif dan menarik dengan nada yang berwibawa untuk audiens profesional.',
    prompt: 'Rewrite the following text to be more persuasive and engaging for a professional audience. Adopt a confident and authoritative tone. Simplify complex sentences, replace passive voice with active voice, and end with a strong call to action. Original text: [paste text here].',
    category: 'Penulisan',
  },
  {
    id: 'p6',
    title: 'Judul Pemasaran A/B Test',
    description: 'Menghasilkan 5 judul yang dapat diuji A/B untuk halaman penjualan, menargetkan audiens dan pain point tertentu.',
    prompt: 'Act as a senior marketing strategist. Generate 5 A/B testable headlines for a landing page selling [product]. The target audience is [audience]. One set should focus on [benefit_1], and the other on solving [pain_point]. The tone should be [tone].',
    category: 'Pemasaran',
  },
  {
    id: 'p5',
    title: 'Fungsi TypeScript Lanjutan',
    description: 'Meminta AI untuk menulis fungsi TypeScript yang mengambil data pengguna dan postingan secara bersamaan dengan penanganan error.',
    prompt: 'You are a senior full-stack developer. Write a TypeScript function that takes a user ID, fetches user data from a REST API at `/api/users/{id}`, and their posts from `/api/posts?userId={id}` concurrently using `Promise.all`. It should return a single object `{ user, posts }`. Include robust error handling for failed requests and type definitions for the user and post objects.',
    category: 'Pengembangan',
  },
  {
    id: 'p4',
    title: 'Peta Dunia Fantasi',
    description: 'Membuat peta dunia fantasi yang detail di atas perkamen tua, terinspirasi oleh gaya Tolkien.',
    prompt: 'detailed fantasy world map on ancient, weathered parchment, in the style of Tolkien\'s Lord of the Rings, featuring intricate coastlines, mountain ranges labeled "The Dragon\'s Maw", the Whispering Woods, and a detailed compass rose, sepia tones, hand-drawn feel, ink stains and folds',
    category: 'World Building',
  },
  {
    id: 'p3',
    title: 'Foto Film Vintage',
    description: 'Mensimulasikan tampilan otentik dari sebuah film road movie tahun 1970-an, lengkap dengan grain dan warna pudar.',
    prompt: 'cinematic film still from a 1970s road movie, a woman with feathered hair and sunglasses driving a vintage convertible through the desert at sunset, soft focus, heavy film grain, muted desaturated colors, authentic anamorphic lens flare, shot on Kodak Ektachrome 35mm film stock',
    category: 'Fotografi',
  },
  {
    id: 'p2',
    title: 'Karakter Pixel Art 3D',
    description: 'Menghasilkan karakter petualang robot yang lucu dalam gaya seni voxel 3D, cocok untuk aset game atau seni digital.',
    prompt: '3D voxel art character, a cute robot adventurer with a large backpack and a glowing antenna, standing on a floating grassy cube island, isometric view, vibrant colors, detailed pixel texture, soft lighting, MagicaVoxel style',
    category: '3D & Voxel',
  },
  {
    id: 'p1',
    title: 'Suasana Sinematik Cyberpunk',
    description: 'Menciptakan adegan gang cyberpunk yang basah oleh hujan dengan pencahayaan neon dramatis dan nuansa sinematik.',
    prompt: 'A lone cyberpunk detective in a rain-slicked neon alleyway, cinematic lighting, volumetric haze creating god rays through the steam, anamorphic lens flare, photorealistic, 8K.',
    category: 'Seni Sinematik',
  }
];