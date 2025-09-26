-- Remove the dangerous "Allow all operations" policy
DROP POLICY IF EXISTS "Allow all operations on blog posts" ON public.blog_posts;

-- Create proper admin access policies
-- First, create a function to check if user is admin (placeholder for now)
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  -- For now, return false until we implement proper user roles
  -- This will be updated once authentication is implemented
  SELECT false;
$$;

-- Policy for admin operations (insert, update, delete)
CREATE POLICY "Admins can manage all blog posts"
ON public.blog_posts
FOR ALL
USING (public.is_admin())
WITH CHECK (public.is_admin());

-- Keep the existing policy for public reading of published posts
-- (This should already exist: "Published blog posts are publicly readable")