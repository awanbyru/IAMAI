import { Prompt } from '../types';

export const prompts: Prompt[] = [
  {
    id: 'p1',
    title: 'Suasana Sinematik Cyberpunk',
    description: 'Menciptakan adegan gang cyberpunk yang basah oleh hujan dengan pencahayaan neon dramatis dan nuansa sinematik.',
    prompt: 'A lone cyberpunk detective in a rain-slicked neon alleyway, cinematic lighting, volumetric haze creating god rays through the steam, anamorphic lens flare, photorealistic, 8K.',
    category: 'Seni Sinematik',
  },
  {
    id: 'p2',
    title: 'Karakter Pixel Art 3D',
    description: 'Menghasilkan karakter petualang robot yang lucu dalam gaya seni voxel 3D, cocok untuk aset game atau seni digital.',
    prompt: '3D voxel art character, a cute robot adventurer with a large backpack and a glowing antenna, standing on a floating grassy cube island, isometric view, vibrant colors, detailed pixel texture, soft lighting, MagicaVoxel style',
    category: '3D & Voxel',
  },
  {
    id: 'p3',
    title: 'Foto Film Vintage',
    description: 'Mensimulasikan tampilan otentik dari sebuah film road movie tahun 1970-an, lengkap dengan grain dan warna pudar.',
    prompt: 'cinematic film still from a 1970s road movie, a woman with feathered hair and sunglasses driving a vintage convertible through the desert at sunset, soft focus, heavy film grain, muted desaturated colors, authentic anamorphic lens flare, shot on Kodak Ektachrome 35mm film stock',
    category: 'Fotografi',
  },
  {
    id: 'p4',
    title: 'Peta Dunia Fantasi',
    description: 'Membuat peta dunia fantasi yang detail di atas perkamen tua, terinspirasi oleh gaya Tolkien.',
    prompt: 'detailed fantasy world map on ancient, weathered parchment, in the style of Tolkien\'s Lord of the Rings, featuring intricate coastlines, mountain ranges labeled "The Dragon\'s Maw", the Whispering Woods, and a detailed compass rose, sepia tones, hand-drawn feel, ink stains and folds',
    category: 'World Building',
  },
  {
    id: 'p5',
    title: 'Fungsi TypeScript Lanjutan',
    description: 'Meminta AI untuk menulis fungsi TypeScript yang mengambil data pengguna dan postingan secara bersamaan dengan penanganan error.',
    prompt: 'You are a senior full-stack developer. Write a TypeScript function that takes a user ID, fetches user data from a REST API at `/api/users/{id}`, and their posts from `/api/posts?userId={id}` concurrently using `Promise.all`. It should return a single object `{ user, posts }`. Include robust error handling for failed requests and type definitions for the user and post objects.',
    category: 'Pengembangan',
  },
  {
    id: 'p6',
    title: 'Judul Pemasaran A/B Test',
    description: 'Menghasilkan 5 judul yang dapat diuji A/B untuk halaman penjualan, menargetkan audiens dan pain point tertentu.',
    prompt: 'Act as a senior marketing strategist. Generate 5 A/B testable headlines for a landing page selling [product]. The target audience is [audience]. One set should focus on [benefit_1], and the other on solving [pain_point]. The tone should be [tone].',
    category: 'Pemasaran',
  },
  {
    id: 'p7',
    title: 'Penulisan Ulang Persuasif',
    description: 'Mengubah teks yang ada menjadi lebih persuasif dan menarik dengan nada yang berwibawa untuk audiens profesional.',
    prompt: 'Rewrite the following text to be more persuasive and engaging for a professional audience. Adopt a confident and authoritative tone. Simplify complex sentences, replace passive voice with active voice, and end with a strong call to action. Original text: [paste text here].',
    category: 'Penulisan',
  },
  {
    id: 'p8',
    title: 'Restorasi Foto AI',
    description: 'Prompt persona yang komprehensif untuk mengubah AI menjadi ahli restorasi foto digital.',
    prompt: 'Anda adalah seorang ahli restorasi foto digital kelas dunia bernama "ChronoLens". Misi Anda adalah menghidupkan kembali kenangan dengan menganalisis dan memulihkan foto-foto lama, rusak, atau pudar yang diunggah oleh pengguna. Ketika Anda menerima sebuah gambar: 1. **Analisis Mendalam:** Periksa gambar... 2. **Lakukan Restorasi:** Terapkan teknik restorasi... 3. **Tingkatkan Kualitas:** Tingkatkan resolusi... 4. **Sajikan Hasil:** Keluarkan gambar versi final... 5. **Berikan Umpan Balik:**... berikan 2-3 poin umpan balik positif...',
    category: 'Aplikasi AI',
  },
];
