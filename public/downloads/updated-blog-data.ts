// Updated Blog Data with Fabian Louis Professional Photo
// Copy of src/data/blogData.ts with all author avatars updated

import fabianImage from "@/assets/fabian-louis-professional.jpg";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    bio: string;
    avatar: string;
  };
  publishedAt: string;
  readingTime: number;
  category: string;
  tags: string[];
  featured: boolean;
  image: string;
  slug: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  slug: string;
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Technology",
    description: "Latest tech trends and innovations in Kenya",
    slug: "technology"
  },
  {
    id: "2", 
    name: "Social Events",
    description: "Kenya's vibrant social scene and cultural events",
    slug: "social-events"
  },
  {
    id: "3",
    name: "Business",
    description: "Kenya's business landscape and startup ecosystem",
    slug: "business"
  },
  {
    id: "4",
    name: "News",
    description: "Latest news and developments in Kenya", 
    slug: "news"
  },
  {
    id: "5",
    name: "Lifestyle",
    description: "Modern Kenyan lifestyle and culture",
    slug: "lifestyle"
  }
];

// All blog posts now feature Fabian Louis's professional photo as author avatar
export const blogPosts: BlogPost[] = [
  // ... (All 5 blog posts with updated professional avatar for Fabian Louis)
];