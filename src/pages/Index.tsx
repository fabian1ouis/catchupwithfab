import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import { blogPosts, categories } from "@/data/blogData";

const Index = () => {
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);
  const latestPosts = blogPosts.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <Hero />

      {/* Featured Posts Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground">Featured</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Editor's Picks
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Handpicked articles that showcase the best of what we have to offer, 
              featuring insights from industry experts and thought leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {featuredPosts.map((post, index) => (
              <div key={post.id} className={index === 0 ? "lg:col-span-2" : ""}>
                <BlogCard post={post} featured={index === 0} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild className="btn-accent">
              <Link to="/blog">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Explore by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover content tailored to your interests across our carefully curated categories.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => {
              const categoryPosts = blogPosts.filter(post => post.category === category.name);
              const icons = {
                Technology: BookOpen,
                Design: Users,
                Business: TrendingUp,
                Lifestyle: BookOpen
              };
              const Icon = icons[category.name as keyof typeof icons] || BookOpen;

              return (
                <Link
                  key={category.id}
                  to={`/categories/${category.slug}`}
                  className="group"
                >
                  <div className="card-elevated p-6 text-center group-hover:shadow-elevated transition-all duration-300">
                    <div className="w-12 h-12 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3">
                      {category.description}
                    </p>
                    <div className="text-xs text-muted-foreground">
                      {categoryPosts.length} articles
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay up to date with our newest content covering the latest trends and insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          <div className="text-center">
            <Button asChild variant="outline" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
              <Link to="/blog">
                Load More Articles
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA Section */}
      <section className="py-16 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="card-featured max-w-4xl mx-auto p-12 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Never Miss an Update
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of readers who get our best content delivered directly to their inbox. 
              No spam, just quality articles you'll actually want to read.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:border-accent"
              />
              <Button className="btn-accent px-8 py-3">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
