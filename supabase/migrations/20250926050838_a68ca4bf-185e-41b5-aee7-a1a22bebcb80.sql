-- Fix the is_admin() function to return true for authenticated users
-- This enables admin functionality for authenticated users
CREATE OR REPLACE FUNCTION public.is_admin()
 RETURNS boolean
 LANGUAGE sql
 STABLE SECURITY DEFINER
 SET search_path TO 'public'
AS $function$
  -- Return true if user is authenticated (has a valid session)
  SELECT auth.uid() IS NOT NULL;
$function$;