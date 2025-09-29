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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%232BB673;stop-opacity:1' /><stop offset='100%' style='stop-color:%230F62FE;stop-opacity:1' /></linearGradient></defs><rect width='100' height='100' rx='20' fill='url(%23grad)'/><g transform='translate(25,30)'><path d='M12 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-1 18c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm3-2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z' fill='white'/><path d='M25 8c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-1 18c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm3-2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z' fill='%23FFD166'/><path d='M38 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-1 18c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5zm3-2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z' fill='white'/></g></svg>" />
        <meta name="theme-color" content="#2BB673" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}