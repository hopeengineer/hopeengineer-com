import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://hopeengineer.com';
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin', 
        '/blog/create', 
        '/blog/*/edit', 
        '/login', 
        '/signup',
        '/inbox',
        '/profile',
        '/api/',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
