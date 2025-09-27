import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

interface Category {
  name: string;
  count: number;
  description: string;
}

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data: posts } = await supabase
          .from('blog_posts')
          .select('category')
          .eq('published', true);

        if (posts) {
          const categoryMap = new Map<string, number>();
          posts.forEach(post => {
            categoryMap.set(post.category, (categoryMap.get(post.category) || 0) + 1);
          });

          const categoriesData: Category[] = [
            { name: "Technology", count: categoryMap.get("Technology") || 0, description: "Latest tech trends, innovations, and digital transformation stories" },
            { name: "News", count: categoryMap.get("News") || 0, description: "Current events, economic updates, and breaking news from Kenya and beyond" },
            { name: "Social Events", count: categoryMap.get("Social Events") || 0, description: "Cultural happenings, community events, and social movements" },
          ];

          setCategories(categoriesData);
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="animate-pulse">
          <div className="h-8 bg-muted rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-muted rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-foreground mb-4">Categories</h1>
        <p className="text-muted-foreground">
          Explore our content organized by topic and discover articles that interest you most.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card key={category.name} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{category.name}</CardTitle>
                <Badge variant="secondary">{category.count} posts</Badge>
              </div>
              <CardDescription>{category.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <Link 
                to={`/blog?category=${encodeURIComponent(category.name)}`}
                className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
              >
                View Articles →
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Categories;