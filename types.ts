export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  summary: string; // Ringkasan singkat yang ramah AI
  type: 'standard' | 'howto'; // Tipe artikel untuk skema yang berbeda
  content: string[];
  imageUrl: string;
  author: string;
  authorAvatar: string;
  date: string;
  claps: number;
  tags: string[];
  faq?: {
    question: string;
    answer: string;
  }[];
}

export interface Comment {
  id: string;
  name: string;
  message: string;
  date: string; // Stored as ISO string
}

export interface GalleryImage {
  id: string;
  title: string;
  imageUrl: string;
  category: string;
  prompt: string;
}

export interface Prompt {
  id: string;
  title: string;
  description: string;
  prompt: string;
  category: string;
}