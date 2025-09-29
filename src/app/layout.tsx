import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import TestFooterMenu from '@/components/layout/TestFooterMenu';
import MainHeader from '@/components/layout/MainHeader';

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plex-sans',
});

export const metadata: Metadata = {
  title: 'Japan Driving Test',
  description: 'Make passing your Driving test in Japan a bit easier!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={plexSans.variable}>
      <body className="bg-primary-400 pt-safe-header">
        <SpeedInsights />
        <MainHeader />
        {children}
        <TestFooterMenu />
      </body>
    </html>
  );
}
