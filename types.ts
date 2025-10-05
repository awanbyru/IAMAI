
export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string[];
  imageUrl: string;
  iframeUrl?: string;
  author: string;
  authorAvatar: string;
  date: string;
  claps: number;
  tags: string[];
}