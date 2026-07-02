import type { Metadata, Viewport } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const display = Space_Grotesk({ subsets: ['latin'], variable: '--font-display', display: 'swap', weight: ['500','600','700'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://burnermedia.in'),
  title: { default: 'Burnermedia — Design. Develop. Grow.', template: '%s | Burnermedia' },
  description: 'Premium creative digital agency in Udaipur building websites, Shopify stores, apps, SEO, branding and digital marketing that convert.',
  keywords: ['Burnermedia','Udaipur digital agency','website design Udaipur','Shopify development India','SEO agency Rajasthan'],
  openGraph: { title: 'Burnermedia — Creative Digital Agency in Udaipur', description: 'Design. Develop. Grow. We build digital experiences that actually convert.', url: 'https://burnermedia.in', siteName: 'Burnermedia', images: [{ url: '/og.svg', width: 1200, height: 630 }], locale: 'en_IN', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Burnermedia — Design. Develop. Grow.', description: 'Creative digital agency based in Udaipur, Rajasthan.', images: ['/og.svg'] },
  alternates: { canonical: '/' },
};
export const viewport: Viewport = { themeColor: '#0A0A0A', width: 'device-width', initialScale: 1 };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en-IN" className={`${inter.variable} ${display.variable}`}><body className="font-sans antialiased">{children}</body></html>; }
