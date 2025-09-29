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
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'YogicMile App',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'YogicMile - Walk More. Earn More.',
    description: 'Track your steps, hit your goals, and earn coins you can redeem for rewards.',
    images: ['/favicon.svg'],
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
        <link rel="icon" href="/favicon.ico" sizes="16x16 32x32" type="image/x-icon" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" sizes="180x180" />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta name="theme-color" content="#3B82F6" />
        <meta name="msapplication-TileColor" content="#3B82F6" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}