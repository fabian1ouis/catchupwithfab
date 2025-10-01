import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Save, Eye } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";

interface BlogPostForm {
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  featured_image_url: string;
  author_name: string;
  author_bio: string;
  author_avatar_url: string;
  reading_time: number;
  featured: boolean;
  published: boolean;
  seo_title: string;
  seo_description: string;
  seo_keywords: string[];
  canonical_url: string;
}

const AdminEditor = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user, loading: authLoading } = useAuth();
  const isEditing = Boolean(id);

  const [form, setForm] = useState<BlogPostForm>({
    title: "",
    slug: "",
    excerpt: "",
    content: "",
    category: "Technology",
    tags: [],
    featured_image_url: "",
    author_name: "Fab",
    author_bio: "Content creator and blogger",
    author_avatar_url: "",
    reading_time: 5,
    featured: false,
    published: false,
    seo_title: "",
    seo_description: "",
    seo_keywords: [],
    canonical_url: "",
  });

  const [loading, setLoading] = useState(false);
  const [tagsInput, setTagsInput] = useState("");
  const [keywordsInput, setKeywordsInput] = useState("");

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/auth');
    } else if (isEditing && id && user) {
      fetchPost(id);
    }
  }, [id, isEditing, user, authLoading, navigate]);

  const fetchPost = async (postId: string) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', postId)
        .single();

      if (error) throw error;

      setForm({
        title: data.title || "",
        slug: data.slug || "",
        excerpt: data.excerpt || "",
        content: data.content || "",
        category: data.category || "Technology",
        tags: data.tags || [],
        featured_image_url: data.featured_image_url || "",
        author_name: data.author_name || "Fab",
        author_bio: data.author_bio || "Content creator and blogger",
        author_avatar_url: data.author_avatar_url || "",
        reading_time: data.reading_time || 5,
        featured: data.featured || false,
        published: data.published || false,
        seo_title: data.seo_title || "",
        seo_description: data.seo_description || "",
        seo_keywords: data.seo_keywords || [],
        canonical_url: data.canonical_url || "",
      });

      setTagsInput((data.tags || []).join(", "));
      setKeywordsInput((data.seo_keywords || []).join(", "));
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch post",
        variant: "destructive",
      });
    }
  };

  const handleSave = async (publish = false) => {
    if (!form.title.trim()) {
      toast({
        title: "Error",
        description: "Title is required",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const postData = {
        ...form,
        tags: tagsInput.split(',').map(tag => tag.trim()).filter(Boolean),
        seo_keywords: keywordsInput.split(',').map(keyword => keyword.trim()).filter(Boolean),
        published: publish || form.published,
        published_at: publish && !form.published ? new Date().toISOString() : undefined,
        seo_title: form.seo_title || form.title,
        seo_description: form.seo_description || form.excerpt,
      };

      if (isEditing) {
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', id);
        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .insert([postData]);
        if (error) throw error;
      }

      toast({
        title: "Success",
        description: `Post ${isEditing ? 'updated' : 'created'} successfully`,
      });

      navigate('/admin');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to save post",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const updateForm = (field: keyof BlogPostForm, value: any) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  if (authLoading) {
    return (
      <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[80vh]">
        <p>Loading...</p>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="outline" onClick={() => navigate('/admin')}>
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div>
          <h1 className="text-3xl font-bold">
            {isEditing ? 'Edit Post' : 'New Post'}
          </h1>
          <p className="text-muted-foreground">
            {isEditing ? 'Update your blog post' : 'Create a new blog post'}
          </p>
        </div>
      </div>

      <Tabs defaultValue="content" className="space-y-6">
        <TabsList>
          <TabsTrigger value="content">Content</TabsTrigger>
          <TabsTrigger value="seo">SEO & Metadata</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="content" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Post Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={form.title}
                  onChange={(e) => updateForm('title', e.target.value)}
                  placeholder="Enter post title"
                />
              </div>

              <div>
                <Label htmlFor="slug">URL Slug</Label>
                <Input
                  id="slug"
                  value={form.slug}
                  onChange={(e) => updateForm('slug', e.target.value)}
                  placeholder="Auto-generated from title"
                />
              </div>

              <div>
                <Label htmlFor="excerpt">Excerpt</Label>
                <Textarea
                  id="excerpt"
                  value={form.excerpt}
                  onChange={(e) => updateForm('excerpt', e.target.value)}
                  placeholder="Brief description of the post"
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  value={form.content}
                  onChange={(e) => updateForm('content', e.target.value)}
                  placeholder="Write your post content here (Markdown supported)"
                  rows={15}
                  className="font-mono"
                />
              </div>

              <div>
                <Label htmlFor="featured_image_url">Featured Image URL</Label>
                <Input
                  id="featured_image_url"
                  value={form.featured_image_url}
                  onChange={(e) => updateForm('featured_image_url', e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="seo" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>SEO Optimization</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="seo_title">SEO Title</Label>
                <Input
                  id="seo_title"
                  value={form.seo_title}
                  onChange={(e) => updateForm('seo_title', e.target.value)}
                  placeholder="Optimized title for search engines (60 chars max)"
                  maxLength={60}
                />
                <p className="text-sm text-muted-foreground mt-1">
                  {form.seo_title.length}/60 characters
                </p>
              </div>

              <div>
                <Label htmlFor="seo_description">SEO Description</Label>
                <Textarea
                  id="seo_description"
                  value={form.seo_description}
                  onChange={(e) => updateForm('seo_description', e.target.value)}
                  placeholder="Meta description for search results (160 chars max)"
                  maxLength={160}
                  rows={3}
                />
                <p className="text-sm text-muted-foreground mt-1">
                  {form.seo_description.length}/160 characters
                </p>
              </div>

              <div>
                <Label htmlFor="seo_keywords">SEO Keywords</Label>
                <Input
                  id="seo_keywords"
                  value={keywordsInput}
                  onChange={(e) => setKeywordsInput(e.target.value)}
                  placeholder="keyword1, keyword2, keyword3"
                />
              </div>

              <div>
                <Label htmlFor="canonical_url">Canonical URL</Label>
                <Input
                  id="canonical_url"
                  value={form.canonical_url}
                  onChange={(e) => updateForm('canonical_url', e.target.value)}
                  placeholder="https://catchupwithfab.com/blog/post-slug"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Post Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="category">Category</Label>
                <select
                  id="category"
                  value={form.category}
                  onChange={(e) => updateForm('category', e.target.value)}
                  className="w-full p-2 border rounded-md"
                >
                  <option value="Technology">Technology</option>
                  <option value="Social Events">Social Events</option>
                  <option value="News">News</option>
                  <option value="Business">Business</option>
                  <option value="Lifestyle">Lifestyle</option>
                </select>
              </div>

              <div>
                <Label htmlFor="tags">Tags</Label>
                <Input
                  id="tags"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="tag1, tag2, tag3"
                />
              </div>

              <div>
                <Label htmlFor="reading_time">Reading Time (minutes)</Label>
                <Input
                  id="reading_time"
                  type="number"
                  value={form.reading_time}
                  onChange={(e) => updateForm('reading_time', parseInt(e.target.value) || 5)}
                  min="1"
                  max="60"
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="featured"
                  checked={form.featured}
                  onCheckedChange={(checked) => updateForm('featured', checked)}
                />
                <Label htmlFor="featured">Featured Post</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="published"
                  checked={form.published}
                  onCheckedChange={(checked) => updateForm('published', checked)}
                />
                <Label htmlFor="published">Published</Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Author Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="author_name">Author Name</Label>
                <Input
                  id="author_name"
                  value={form.author_name}
                  onChange={(e) => updateForm('author_name', e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="author_bio">Author Bio</Label>
                <Textarea
                  id="author_bio"
                  value={form.author_bio}
                  onChange={(e) => updateForm('author_bio', e.target.value)}
                  rows={3}
                />
              </div>

              <div>
                <Label htmlFor="author_avatar_url">Author Avatar URL</Label>
                <Input
                  id="author_avatar_url"
                  value={form.author_avatar_url}
                  onChange={(e) => updateForm('author_avatar_url', e.target.value)}
                  placeholder="https://example.com/avatar.jpg"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="flex gap-4 pt-6">
        <Button onClick={() => handleSave(false)} disabled={loading}>
          <Save className="w-4 h-4 mr-2" />
          Save Draft
        </Button>
        <Button onClick={() => handleSave(true)} disabled={loading}>
          <Eye className="w-4 h-4 mr-2" />
          {form.published ? 'Update & Keep Published' : 'Publish Now'}
        </Button>
      </div>
    </div>
  );
};

export default AdminEditor;