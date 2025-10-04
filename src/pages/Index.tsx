import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import NewsletterForm from "@/components/NewsletterForm";
import SEO from "@/components/SEO";
import { blogPosts, categories } from "@/data/blogData";

const Index = () => {
  const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3);
  const latestPosts = blogPosts.slice(0, 6);

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Fab Blog - Kenya's Premier Tech & Business Insights"
        description="Explore cutting-edge technology trends, business innovation, and startup insights from Kenya's leading voices. Join 25,000+ professionals staying ahead of the curve."
        keywords={['Kenya tech blog', 'business insights Kenya', 'startup news', 'technology trends', 'innovation Africa']}
        type="website"
      />
      {/* Hero Section */}
      <Hero />

      {/* Featured Posts Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground">Featured</Badge>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Editor's Spotlight
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Curated masterpieces from visionary creators and industry pioneers. 
              These stories spark conversations and drive innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {featuredPosts.map((post, index) => (
              <div 
                key={post.id} 
                className={`${index === 0 ? "lg:col-span-2" : ""} animate-fade-in hover-lift`}
                style={{animationDelay: `${index * 0.2}s`}}
              >
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Explore by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover content tailored to your interests across our carefully curated categories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const categoryPosts = blogPosts.filter(post => post.category === category.name);
              const icons = {
                Technology: BookOpen,
                Design: Users,
                Business: TrendingUp,
                Lifestyle: BookOpen
              };
              const Icon = icons[category.name as keyof typeof icons] || BookOpen;

              return (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Link
                    to={`/categories/${category.slug}`}
                    className="group"
                  >
                    <div className="card-elevated p-6 text-center transition-all duration-300 h-full">
                      <motion.div 
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className="w-12 h-12 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center"
                      >
                        <Icon className="h-6 w-6 text-accent-foreground" />
                      </motion.div>
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
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay up to date with our newest content covering the latest trends and insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {latestPosts.map((post, index) => (
              <motion.div 
                key={post.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="hover-lift"
              >
                <BlogCard post={post} />
              </motion.div>
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
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-featured max-w-4xl mx-auto p-12 text-center"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-4">
              Join the Innovation Network
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with 25,000+ forward-thinking professionals who receive exclusive insights, 
              early access to content, and invitations to virtual events.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm />
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
