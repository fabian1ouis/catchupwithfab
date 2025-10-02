import { useState, useEffect } from "react";
import { Plus, Edit, Trash2, Eye, EyeOff, Mail, MessageSquare } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  featured: boolean;
  published: boolean;
  created_at: string;
  updated_at: string;
  reading_time: number;
  seo_title?: string;
  seo_description?: string;
}

interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribed_at: string;
}

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  submitted_at: string;
}

const Admin = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, signOut, loading: authLoading } = useAuth();

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    } else if (user) {
      fetchPosts();
      fetchSubscribers();
      fetchContacts();
    }
  }, [user, authLoading, navigate]);

  const handleSignOut = async () => {
    await signOut();
  };

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch blog posts",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const fetchSubscribers = async () => {
    try {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .order('subscribed_at', { ascending: false });

      if (error) throw error;
      setSubscribers(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch subscribers",
        variant: "destructive",
      });
    }
  };

  const fetchContacts = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('submitted_at', { ascending: false });

      if (error) throw error;
      setContacts(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch contact submissions",
        variant: "destructive",
      });
    }
  };

  const togglePublished = async (id: string, published: boolean) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ 
          published: !published,
          published_at: !published ? new Date().toISOString() : null
        })
        .eq('id', id);

      if (error) throw error;
      
      await fetchPosts();
      toast({
        title: "Success",
        description: `Post ${!published ? 'published' : 'unpublished'} successfully`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update post status",
        variant: "destructive",
      });
    }
  };

  const toggleFeatured = async (id: string, featured: boolean) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .update({ featured: !featured })
        .eq('id', id);

      if (error) throw error;
      
      await fetchPosts();
      toast({
        title: "Success",
        description: `Post ${!featured ? 'featured' : 'unfeatured'} successfully`,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update featured status",
        variant: "destructive",
      });
    }
  };

  const deletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      await fetchPosts();
      toast({
        title: "Success",
        description: "Post deleted successfully",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete post",
        variant: "destructive",
      });
    }
  };

  if (loading || authLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your blog, subscribers, and messages</p>
        </div>
        <div className="flex gap-2">
          <Link to="/admin/new">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              New Post
            </Button>
          </Link>
          <Button variant="outline" onClick={handleSignOut}>
            Sign Out
          </Button>
        </div>
      </div>

      <Tabs defaultValue="posts" className="space-y-6">
        <TabsList>
          <TabsTrigger value="posts">Blog Posts</TabsTrigger>
          <TabsTrigger value="subscribers">
            <Mail className="w-4 h-4 mr-2" />
            Subscribers ({subscribers.length})
          </TabsTrigger>
          <TabsTrigger value="contacts">
            <MessageSquare className="w-4 h-4 mr-2" />
            Messages ({contacts.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="posts" className="space-y-6">
          <div className="grid gap-6">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                      <p className="text-muted-foreground text-sm mb-3">{post.excerpt}</p>
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="outline">{post.category}</Badge>
                        {post.featured && <Badge variant="secondary">Featured</Badge>}
                        <Badge variant={post.published ? "default" : "destructive"}>
                          {post.published ? "Published" : "Draft"}
                        </Badge>
                        <Badge variant="outline">{post.reading_time} min read</Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <div className="text-sm text-muted-foreground">
                      <p>Created: {new Date(post.created_at).toLocaleDateString()}</p>
                      <p>Updated: {new Date(post.updated_at).toLocaleDateString()}</p>
                      {post.seo_title && <p>SEO Title: ✓</p>}
                      {post.seo_description && <p>SEO Description: ✓</p>}
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => togglePublished(post.id, post.published)}
                      >
                        {post.published ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleFeatured(post.id, post.featured)}
                      >
                        ⭐
                      </Button>
                      <Link to={`/admin/edit/${post.id}`}>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => deletePost(post.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">No posts yet</h3>
              <p className="text-muted-foreground mb-4">Create your first blog post to get started</p>
              <Link to="/admin/new">
                <Button>
                  <Plus className="w-4 h-4 mr-2" />
                  Create First Post
                </Button>
              </Link>
            </div>
          )}
        </TabsContent>

        <TabsContent value="subscribers" className="space-y-4">
          {subscribers.map((subscriber) => (
            <Card key={subscriber.id}>
              <CardContent className="flex justify-between items-center py-4">
                <div>
                  <p className="font-medium">{subscriber.email}</p>
                  <p className="text-sm text-muted-foreground">
                    Subscribed: {new Date(subscriber.subscribed_at).toLocaleDateString()}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
          {subscribers.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">No subscribers yet</h3>
              <p className="text-muted-foreground">Newsletter subscribers will appear here</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="contacts" className="space-y-4">
          {contacts.map((contact) => (
            <Card key={contact.id}>
              <CardHeader>
                <CardTitle className="text-lg">{contact.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{contact.email}</p>
              </CardHeader>
              <CardContent>
                <p className="mb-2">{contact.message}</p>
                <p className="text-sm text-muted-foreground">
                  Submitted: {new Date(contact.submitted_at).toLocaleDateString()}
                </p>
              </CardContent>
            </Card>
          ))}
          {contacts.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-semibold mb-2">No messages yet</h3>
              <p className="text-muted-foreground">Contact form submissions will appear here</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Admin;