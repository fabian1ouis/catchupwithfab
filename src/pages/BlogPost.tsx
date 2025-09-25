import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ArrowLeft, Clock, Calendar, Share2, Twitter, Facebook, Linkedin, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import BlogCard from "@/components/BlogCard";
import { supabase } from "@/integrations/supabase/client";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featured_image_url: string;
  category: string;
  tags: string[];
  author_name: string;
  author_bio: string;
  author_avatar_url: string;
  reading_time: number;
  featured: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
  seo_title?: string;
  seo_description?: string;
  published_at?: string;
  publishedAt: string;
  readingTime: number;
  image: string;
  author: {
    name: string;
    bio: string;
    avatar: string;
  };
}

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchPost(slug);
    }
  }, [slug]);

  const fetchPost = async (postSlug: string) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', postSlug)
        .eq('published', true)
        .single();

      if (error) throw error;
      
      // Transform data to match existing interface
      const transformedPost = {
        ...data,
        publishedAt: data.published_at || data.created_at,
        readingTime: data.reading_time,
        image: data.featured_image_url || '/assets/post-tech.jpg',
        author: {
          name: data.author_name,
          bio: data.author_bio,
          avatar: data.author_avatar_url || '/assets/post-tech.jpg'
        }
      };
      
      setPost(transformedPost);

      // Fetch related posts
      const { data: related, error: relatedError } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .neq('id', data.id)
        .or(`category.eq.${data.category},tags.ov.{${data.tags.join(',')}}`)
        .limit(3);

      if (!relatedError && related) {
        const transformedRelated = related.map(post => ({
          ...post,
          publishedAt: post.published_at || post.created_at,
          readingTime: post.reading_time,
          image: post.featured_image_url || '/assets/post-tech.jpg',
          author: {
            name: post.author_name,
            bio: post.author_bio,
            avatar: post.author_avatar_url || '/assets/post-tech.jpg'
          }
        }));
        setRelatedPosts(transformedRelated);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long", 
      day: "numeric",
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Loading...</h1>
          <p className="text-muted-foreground mb-6">Fetching article content...</p>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The article you're looking for doesn't exist.</p>
          <Button asChild className="btn-accent">
            <Link to="/blog">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Check out this article: ${post.title}`;

  const socialShares = [
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: "Facebook", 
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Meta Tags - would be handled by a proper SEO component in production */}
      {typeof document !== 'undefined' && (
        <>
          {post.seo_title && (document.title = post.seo_title)}
          {post.seo_description && document.querySelector('meta[name="description"]')?.setAttribute('content', post.seo_description)}
        </>
      )}
      
      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Button asChild variant="ghost" className="mb-6">
          <Link to="/blog">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Link>
        </Button>
      </div>

      {/* Hero Image */}
      <div className="relative h-64 md:h-96 mb-8 overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
      </div>

      {/* Article Content */}
      <article className="container mx-auto px-4 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Article Header */}
          <header className="mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <Badge className="bg-accent text-accent-foreground">
                {post.category}
              </Badge>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{formatDate(post.publishedAt)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{post.readingTime} min read</span>
                </div>
              </div>
            </div>

            <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              {post.title}
            </h1>

            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  #{tag}
                </Badge>
              ))}
            </div>
          </header>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Article Body */}
              <div className="prose prose-lg max-w-none mb-12">
                {post.content.split('\n').map((paragraph, index) => {
                  if (paragraph.startsWith('# ')) {
                    return (
                      <h1 key={index} className="text-3xl md:text-4xl font-heading font-semibold text-foreground mb-6 mt-8">
                        {paragraph.replace('# ', '')}
                      </h1>
                    );
                  }
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={index} className="text-2xl md:text-3xl font-heading font-medium text-foreground mb-4 mt-8">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={index} className="text-xl md:text-2xl font-heading font-medium text-foreground mb-3 mt-6">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('> ')) {
                    return (
                      <blockquote key={index} className="border-l-4 border-accent pl-6 my-6 text-lg italic text-muted-foreground">
                        {paragraph.replace('> ', '')}
                      </blockquote>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    return (
                      <li key={index} className="text-muted-foreground mb-2">
                        {paragraph.replace('- ', '')}
                      </li>
                    );
                  }
                  if (paragraph.trim() === '') {
                    return <br key={index} />;
                  }
                  return (
                    <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Social Share */}
              <Card className="card-elevated mb-8">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Share2 className="h-5 w-5 text-muted-foreground" />
                      <span className="font-medium text-foreground">Share this article</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      {socialShares.map((share) => {
                        const Icon = share.icon;
                        return (
                          <Button
                            key={share.name}
                            asChild
                            variant="outline"
                            size="sm"
                            className="hover:bg-accent hover:text-accent-foreground"
                          >
                            <a
                              href={share.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Share on ${share.name}`}
                            >
                              <Icon className="h-4 w-4" />
                            </a>
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Author Bio */}
              <Card className="card-elevated">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                        {post.author.name}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {post.author.bio}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Reading Progress - This would need JavaScript to work */}
                <Card className="card-elevated">
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <BookOpen className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground">Reading Progress</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full" style={{ width: '45%' }} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-2">
                      Estimated {post.readingTime} minutes remaining
                    </p>
                  </CardContent>
                </Card>

                {/* Newsletter Signup */}
                <Card className="card-elevated">
                  <CardContent className="p-4 text-center">
                    <h3 className="font-heading font-semibold text-foreground mb-2">
                      Enjoyed this article?
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Subscribe to get more insights delivered to your inbox.
                    </p>
                    <Button className="btn-accent w-full" size="sm">
                      Subscribe Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-subtle py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-heading text-3xl font-semibold text-foreground mb-8 text-center">
                Related Articles
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;