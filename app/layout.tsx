import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'YogicMile - Walk More. Earn More.',
  description: 'Track your steps, hit your goals, and earn coins you can redeem for rewards. Fitness meets motivation with YogicMile.',
  keywords: 'fitness app, step tracking, rewards, health, walking, gamification, mobile app',
  authors: [{ name: 'YogicMile Team' }],
  creator: 'YogicMile',
  publisher: 'YogicMile',
  openGraph: {
    title: 'YogicMile - Walk More. Earn More.',
    description: 'Track your steps, hit your goals, and earn coins you can redeem for rewards. Fitness meets motivation with YogicMile.',
    url: 'https://www.yogicmile.com',
    siteName: 'YogicMile',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YogicMile - Walk More. Earn More.',
    description: 'Track your steps, hit your goals, and earn coins you can redeem for rewards.',
  },
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%23a855f7;stop-opacity:1' /><stop offset='50%' style='stop-color:%237c3aed;stop-opacity:1' /><stop offset='100%' style='stop-color:%232563eb;stop-opacity:1' /></linearGradient></defs><rect width='100' height='100' rx='20' fill='url(%23grad)'/><text x='50' y='60' font-family='Arial,sans-serif' font-size='40' font-weight='bold' text-anchor='middle' fill='white'>YM</text></svg>" />
        <meta name="theme-color" content="#3B82F6" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}