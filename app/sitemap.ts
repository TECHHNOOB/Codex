import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap { return [{ url: 'https://burnermedia.in', lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }]; }
