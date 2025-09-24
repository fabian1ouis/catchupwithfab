-- Create blog posts table
CREATE TABLE public.blog_posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  excerpt TEXT,
  content TEXT NOT NULL,
  featured_image_url TEXT,
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  author_name TEXT NOT NULL DEFAULT 'Fab',
  author_bio TEXT DEFAULT 'Content creator and blogger',
  author_avatar_url TEXT,
  reading_time INTEGER DEFAULT 5,
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT false,
  seo_title TEXT,
  seo_description TEXT,
  seo_keywords TEXT[],
  canonical_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  published_at TIMESTAMP WITH TIME ZONE
);

-- Create index for better performance
CREATE INDEX idx_blog_posts_slug ON public.blog_posts(slug);
CREATE INDEX idx_blog_posts_category ON public.blog_posts(category);
CREATE INDEX idx_blog_posts_published ON public.blog_posts(published);
CREATE INDEX idx_blog_posts_featured ON public.blog_posts(featured);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Create function to auto-generate slug from title
CREATE OR REPLACE FUNCTION public.generate_slug(title TEXT)
RETURNS TEXT AS $$
BEGIN
  RETURN lower(
    regexp_replace(
      regexp_replace(
        regexp_replace(title, '[^a-zA-Z0-9\s-]', '', 'g'),
        '\s+', '-', 'g'
      ),
      '-+', '-', 'g'
    )
  );
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-generate slug if not provided
CREATE OR REPLACE FUNCTION public.set_blog_post_slug()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.slug IS NULL OR NEW.slug = '' THEN
    NEW.slug = public.generate_slug(NEW.title);
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_blog_post_slug_trigger
  BEFORE INSERT OR UPDATE ON public.blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.set_blog_post_slug();

-- Insert sample data from existing blog posts
INSERT INTO public.blog_posts (
  title, slug, excerpt, content, category, tags, featured_image_url, featured, published, reading_time, seo_title, seo_description
) VALUES 
(
  'Kenya''s Digital Revolution: Leading Africa''s Tech Renaissance',
  'kenya-digital-revolution-2025',
  'Exploring how Kenya is positioning itself as the silicon valley of Africa with groundbreaking innovations in fintech, agritech, and digital infrastructure.',
  'Kenya continues to solidify its position as Africa''s technology hub in 2025, with remarkable developments across multiple sectors that are reshaping not just the local economy, but influencing the entire continent.

## The Fintech Boom

Kenya''s fintech sector has experienced unprecedented growth, building on the success of M-Pesa. New innovations include blockchain-based payment systems, AI-driven credit scoring, and cross-border payment solutions that are making financial services more accessible to millions of Africans.

## Agricultural Technology Revolution

The integration of IoT sensors, satellite imagery, and AI in agriculture is transforming how Kenyan farmers operate. Smart farming solutions are optimizing crop yields while reducing resource consumption, contributing to food security across the region.

## Digital Infrastructure Expansion

The government''s commitment to digital infrastructure has resulted in improved internet connectivity, with 5G networks expanding beyond Nairobi to rural areas. This connectivity is enabling new opportunities in remote work, e-learning, and digital entrepreneurship.

## The Startup Ecosystem

Nairobi''s startup ecosystem is thriving, with record venture capital investments flowing into local companies. The city has become a launching pad for pan-African solutions, with many startups expanding across the continent.

Kenya''s digital transformation is not just about technology—it''s about creating opportunities, improving lives, and building a foundation for sustainable economic growth.',
  'Technology',
  ARRAY['Kenya', 'Technology', 'Fintech', 'Startups', 'Digital Transformation', 'Africa'],
  '/assets/post-tech.jpg',
  true,
  true,
  8,
  'Kenya''s Digital Revolution 2025: Leading Africa''s Tech Renaissance',
  'Discover how Kenya is spearheading Africa''s digital transformation with innovations in fintech, agritech, and digital infrastructure in 2025.'
),
(
  'Nairobi Cultural Renaissance: Art, Music, and Creative Expression',
  'nairobi-cultural-renaissance-2025',
  'Discovering the vibrant cultural scene emerging in Nairobi, from contemporary art galleries to innovative music festivals and creative spaces.',
  'Nairobi''s cultural landscape is experiencing a remarkable renaissance in 2025, with a new generation of artists, musicians, and creators reshaping the city''s identity and putting Kenyan creativity on the global map.

## The Art Scene Revolution

Contemporary art galleries are flourishing across Nairobi, showcasing works that blend traditional African aesthetics with modern themes. The annual Nairobi Art Fair has become a continental showcase, attracting collectors and enthusiasts from around the world.

## Music and Sound Innovation

From Gengetone to Afrobeats fusion, Nairobi''s music scene is more diverse than ever. Local artists are collaborating with international stars, while innovative music festivals are creating new platforms for emerging talent.

## Creative Spaces and Hubs

The city has seen a proliferation of creative co-working spaces, maker labs, and cultural centers. These hubs are fostering collaboration between artists, tech innovators, and social entrepreneurs.

## Fashion and Design

Nairobi''s fashion week has gained international recognition, with local designers creating sustainable fashion that celebrates African heritage while addressing global market demands.

## Digital Art and NFTs

The intersection of technology and art has opened new frontiers, with Kenyan digital artists making waves in the global NFT market and creating innovative digital experiences.

This cultural renaissance is not just entertainment—it''s economic empowerment, social commentary, and a celebration of Kenya''s rich heritage in contemporary forms.',
  'Social Events',
  ARRAY['Nairobi', 'Culture', 'Art', 'Music', 'Fashion', 'Creative Economy'],
  '/assets/post-design.jpg',
  false,
  true,
  6,
  'Nairobi Cultural Renaissance 2025: Art, Music & Creative Expression',
  'Explore Nairobi''s thriving cultural scene in 2025, featuring contemporary art, innovative music, and creative spaces reshaping Kenya''s identity.'
),
(
  'Kenya Economic Outlook 2025: Growth, Opportunities, and Challenges',
  'kenya-economic-outlook-2025',
  'An in-depth analysis of Kenya''s economic landscape, investment opportunities, and the challenges facing the nation as it strives for sustainable growth.',
  'Kenya''s economy in 2025 presents a complex picture of significant opportunities alongside persistent challenges, as the nation continues its journey toward becoming a middle-income country.

## Economic Growth Drivers

The Kenyan economy has shown resilience, with key sectors driving growth including technology, agriculture, manufacturing, and tourism. The Big Four Agenda continues to shape policy direction, focusing on food security, affordable housing, manufacturing, and universal healthcare.

## Investment Climate

Foreign direct investment has increased, particularly in renewable energy, infrastructure, and technology sectors. The government''s commitment to ease of doing business reforms has improved Kenya''s global competitiveness ranking.

## Infrastructure Development

Major infrastructure projects, including the Standard Gauge Railway expansion and port modernization, are enhancing regional connectivity and trade capabilities. These investments are positioning Kenya as a regional logistics hub.

## Challenges and Solutions

Currency stability, debt management, and youth unemployment remain key challenges. However, innovative solutions including digital lending platforms, skills development programs, and entrepreneurship support are addressing these issues.

## Regional Integration

Kenya''s role in the East African Community and the African Continental Free Trade Area is creating new opportunities for trade and economic cooperation across the continent.

## Sustainable Development

The focus on green economy initiatives, renewable energy adoption, and sustainable agriculture practices is aligning economic growth with environmental conservation goals.

Kenya''s economic future depends on continued reforms, innovation, and strategic partnerships that leverage the country''s strengths while addressing structural challenges.',
  'News',
  ARRAY['Kenya', 'Economy', 'Investment', 'Growth', 'Development', 'Business'],
  '/assets/post-startup.jpg',
  false,
  true,
  7,
  'Kenya Economic Outlook 2025: Growth Opportunities & Investment Climate',
  'Comprehensive analysis of Kenya''s economic landscape in 2025, covering growth drivers, investment opportunities, and development challenges.'
);

-- Enable Row Level Security (though not strictly necessary for public blog)
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to published posts
CREATE POLICY "Published blog posts are publicly readable" 
ON public.blog_posts 
FOR SELECT 
USING (published = true);

-- Create policy to allow all operations for admin (since no auth, we'll make it open for now)
CREATE POLICY "Allow all operations on blog posts" 
ON public.blog_posts 
FOR ALL 
USING (true);