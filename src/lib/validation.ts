import { z } from 'zod';

// Authentication validation schemas
export const authSchema = z.object({
  email: z
    .string()
    .trim()
    .email('Please enter a valid email address')
    .min(1, 'Email is required')
    .max(255, 'Email must be less than 255 characters'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(128, 'Password must be less than 128 characters'),
});

// Blog post validation schema
export const blogPostSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, 'Title is required')
    .max(200, 'Title must be less than 200 characters'),
  excerpt: z
    .string()
    .trim()
    .max(500, 'Excerpt must be less than 500 characters')
    .optional(),
  content: z
    .string()
    .trim()
    .min(1, 'Content is required')
    .max(50000, 'Content must be less than 50,000 characters'),
  category: z
    .string()
    .trim()
    .min(1, 'Category is required')
    .max(50, 'Category must be less than 50 characters'),
  tags: z
    .array(z.string().trim().max(30, 'Tag must be less than 30 characters'))
    .max(10, 'Maximum 10 tags allowed')
    .optional(),
  featured_image_url: z
    .string()
    .url('Please enter a valid URL')
    .max(500, 'URL must be less than 500 characters')
    .optional()
    .or(z.literal('')),
  seo_title: z
    .string()
    .trim()
    .max(60, 'SEO title must be less than 60 characters')
    .optional(),
  seo_description: z
    .string()
    .trim()
    .max(160, 'SEO description must be less than 160 characters')
    .optional(),
  seo_keywords: z
    .array(z.string().trim().max(30, 'Keyword must be less than 30 characters'))
    .max(10, 'Maximum 10 keywords allowed')
    .optional(),
  canonical_url: z
    .string()
    .url('Please enter a valid canonical URL')
    .max(500, 'URL must be less than 500 characters')
    .optional()
    .or(z.literal('')),
  author_name: z
    .string()
    .trim()
    .min(1, 'Author name is required')
    .max(100, 'Author name must be less than 100 characters'),
  author_bio: z
    .string()
    .trim()
    .max(500, 'Author bio must be less than 500 characters')
    .optional(),
  author_avatar_url: z
    .string()
    .url('Please enter a valid avatar URL')
    .max(500, 'URL must be less than 500 characters')
    .optional()
    .or(z.literal('')),
});

export type AuthForm = z.infer<typeof authSchema>;
export type BlogPostForm = z.infer<typeof blogPostSchema>;