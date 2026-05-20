import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Impact - Premium SaaS Landing Page',
  description: 'An ultra-premium Awwwards-worthy SaaS landing page.',
  openGraph: {
    title: 'Impact - Premium SaaS Landing Page',
    description: 'An ultra-premium Awwwards-worthy SaaS landing page.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 800,
        height: 600,
        alt: 'Impact SaaS Landing Page',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
