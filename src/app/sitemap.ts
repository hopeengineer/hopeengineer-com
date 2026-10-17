import { MetadataRoute } from 'next';
import { createClient } from '@supabase/supabase-js';

// Rebuild at most hourly so newly published posts show up without a redeploy
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://hopeengineer.com';
  
  // Statically defined core routes
  const staticRoutes = [
    '',
    '/about',
    '/ai-apps',
    '/blog',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  const legalRoutes = ['/privacy', '/terms'].map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: 'yearly' as const,
    priority: 0.3,
  }));

  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    
    // Fetch all published posts directly from Supabase
    const { data: posts } = await supabase
      .from('blog_posts')
      .select('slug, date, updated_at');

    const blogRoutes = (posts || []).map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.updated_at || post.date),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }));

    return [...staticRoutes, ...blogRoutes, ...legalRoutes];
  } catch (error) {
    console.error('Failed to generate sitemap for blog posts:', error);
    // If Supabase fails, return at least the static routes to Google
    return [...staticRoutes, ...legalRoutes];
  }
}
