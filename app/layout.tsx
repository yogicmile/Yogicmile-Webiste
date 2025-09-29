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
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><defs><linearGradient id='grad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' style='stop-color:%237C3AED;stop-opacity:1' /><stop offset='50%' style='stop-color:%236366F1;stop-opacity:1' /><stop offset='100%' style='stop-color:%233B82F6;stop-opacity:1' /></linearGradient></defs><rect width='100' height='100' rx='20' fill='url(%23grad)'/><g transform='translate(20,25)'><path d='M12 4c2.2 0 4 1.8 4 4 0 1.5-.8 2.8-2 3.5v2c1.7.3 3 1.8 3 3.5 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.7 1.3-3.2 3-3.5v-2c-1.2-.7-2-2-2-3.5 0-2.2 1.8-4 4-4z' fill='white'/><ellipse cx='12' cy='24' rx='3' ry='2' fill='white'/><ellipse cx='9' cy='26' rx='1.5' ry='1' fill='white'/><ellipse cx='15' cy='26' rx='1.5' ry='1' fill='white'/><ellipse cx='8' cy='28' rx='1' ry='0.8' fill='white'/><ellipse cx='16' cy='28' rx='1' ry='0.8' fill='white'/></g><g transform='translate(35,30)'><path d='M12 4c2.2 0 4 1.8 4 4 0 1.5-.8 2.8-2 3.5v2c1.7.3 3 1.8 3 3.5 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.7 1.3-3.2 3-3.5v-2c-1.2-.7-2-2-2-3.5 0-2.2 1.8-4 4-4z' fill='white' opacity='0.7'/><ellipse cx='12' cy='24' rx='3' ry='2' fill='white' opacity='0.7'/></g><g transform='translate(50,35)'><path d='M12 4c2.2 0 4 1.8 4 4 0 1.5-.8 2.8-2 3.5v2c1.7.3 3 1.8 3 3.5 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.7 1.3-3.2 3-3.5v-2c-1.2-.7-2-2-2-3.5 0-2.2 1.8-4 4-4z' fill='white' opacity='0.5'/><ellipse cx='12' cy='24' rx='3' ry='2' fill='white' opacity='0.5'/></g></svg>" />
        <meta name="theme-color" content="#7C3AED" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}