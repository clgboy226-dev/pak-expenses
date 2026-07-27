import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/ThemeProvider';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: 'Fashion Vault by Sami | Premium Fashion Affiliate Marketplace',
  description: 'Discover the latest fashion trends, deals, and curated collections from top brands. Your premium destination for women\'s fashion, men\'s fashion, shoes, bags, jewelry, and more.',
  keywords: ['fashion', 'affiliate', 'shopping', 'deals', 'trends', 'luxury', 'style', 'clothing', 'accessories'],
  authors: [{ name: 'Sami' }],
  creator: 'Sami',
  publisher: 'Fashion Vault',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://fashionvault.com',
    siteName: 'Fashion Vault by Sami',
    title: 'Fashion Vault by Sami | Premium Fashion Affiliate Marketplace',
    description: 'Discover the latest fashion trends, deals, and curated collections from top brands.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fashion Vault by Sami',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fashion Vault by Sami | Premium Fashion Affiliate Marketplace',
    description: 'Discover the latest fashion trends, deals, and curated collections from top brands.',
    images: ['/og-image.jpg'],
    creator: '@fashionvault',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
