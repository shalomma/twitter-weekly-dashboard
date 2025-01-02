import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ClerkProvider } from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TweetMetrics - Twitter Analytics Dashboard',
  description: 'Transform your Twitter analytics into actionable insights',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
        <ClerkProvider>
          <body className={inter.className}>{children}
            <Analytics />
            <SpeedInsights />
          </body>
        </ClerkProvider>
    </html>
  );
}
