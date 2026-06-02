import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { IBM_Plex_Sans, Geist } from 'next/font/google';
import './globals.css';
import TestFooterMenu from '@/components/layout/TestFooterMenu';
import MainHeader from '@/components/layout/MainHeader';
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plex-sans',
});

export const metadata: Metadata = {
  title: 'Japan Driving Test',
  description: 'Make passing your Driving test in Japan a bit easier!',
  themeColor: '#eff2f5',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="bg-primary-400">
        <SpeedInsights />
        <MainHeader />
        <div className="pt-safe-header">
          {children}
        </div>
        <TestFooterMenu />
      </body>
    </html>
  );
}
