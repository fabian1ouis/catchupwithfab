import { useState, useEffect, useMemo } from "react";
import { Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import SEO from "@/components/SEO";
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
  publishedAt: string;
  readingTime: number;
  image: string;
  author: {
    name: string;
    bio: string;
    avatar: string;
  };
}

const categories = [
  { id: "all", name: "All", slug: "all" },
  { id: "technology", name: "Technology", slug: "technology" },
  { id: "social-events", name: "Social Events", slug: "social-events" },
  { id: "news", name: "News", slug: "news" },
  { id: "business", name: "Business", slug: "business" },
  { id: "lifestyle", name: "Lifestyle", slug: "lifestyle" },
];

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      // Transform data to match existing BlogCard interface
      const transformedPosts = (data || []).map(post => ({
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
      
      setPosts(transformedPosts);
    } catch (error) {
      // Silently handle errors for better user experience
    } finally {
      setLoading(false);
    }
  };

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    posts.forEach(post => {
      post.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [posts]);

  // Filter posts based on search and filters
  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      const matchesSearch = !searchQuery || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.author.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = !selectedCategory || post.category === selectedCategory;
      const matchesTag = !selectedTag || post.tags.includes(selectedTag);
      
      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchQuery, selectedCategory, selectedTag, posts]);

  const clearFilters = () => {
    setSelectedCategory(null);
    setSelectedTag(null);
    setSearchQuery("");
  };

  const hasActiveFilters = selectedCategory || selectedTag || searchQuery;

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <section className="bg-subtle py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4">
              All Articles
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Loading articles...
            </p>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog - Latest Articles on Tech, Business & Innovation"
        description="Discover in-depth articles, expert analysis, and trending stories about technology, startups, and business innovation in Kenya and beyond."
        keywords={['tech articles', 'business blog', 'startup insights', 'Kenya innovation', 'technology news']}
      />
      {/* Header */}
      <section className="bg-subtle py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-semibold text-foreground mb-4">
            All Articles
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our collection of articles covering technology, design, business, and lifestyle topics.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        {/* Search and Filters */}
        <div className="bg-card card-elevated rounded-lg p-6 mb-8">
          {/* Search Bar */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="search"
              placeholder="Search articles, authors, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 text-lg h-12 bg-background border-border focus:border-accent"
            />
          </div>

          {/* Category Filters */}
          <div className="mb-6">
            <h3 className="font-semibold text-foreground mb-3 flex items-center">
              <Filter className="h-4 w-4 mr-2" />
              Categories
            </h3>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(null)}
                className={selectedCategory === null ? "btn-accent" : ""}
              >
                All Categories
              </Button>
              {categories.filter(c => c.id !== "all").map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.name)}
                  className={selectedCategory === category.name ? "btn-accent" : ""}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Tag Filters */}
          {allTags.length > 0 && (
            <div className="mb-4">
              <h3 className="font-semibold text-foreground mb-3">Popular Tags</h3>
              <div className="flex flex-wrap gap-2">
                {allTags.slice(0, 10).map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTag === tag ? "default" : "secondary"}
                    className={`cursor-pointer hover:bg-accent hover:text-accent-foreground transition-colors ${
                      selectedTag === tag ? "bg-accent text-accent-foreground" : ""
                    }`}
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Active Filters */}
          {hasActiveFilters && (
            <>
              <Separator className="my-4" />
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <span>Showing {filteredPosts.length} of {posts.length} articles</span>
                  {(selectedCategory || selectedTag) && (
                    <span>
                      • Filtered by: 
                      {selectedCategory && ` ${selectedCategory}`}
                      {selectedTag && ` #${selectedTag}`}
                    </span>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={clearFilters}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Clear Filters
                </Button>
              </div>
            </>
          )}
        </div>

        {/* Results */}
        {filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <div className="w-24 h-24 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
              <Search className="h-12 w-12 text-muted-foreground" />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-foreground mb-2">
              No articles found
            </h3>
            <p className="text-muted-foreground mb-6">
              Try adjusting your search terms or clearing the filters.
            </p>
            <Button onClick={clearFilters} className="btn-accent">
              Clear All Filters
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;