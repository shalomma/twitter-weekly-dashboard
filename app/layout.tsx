import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ClerkProvider } from '@clerk/nextjs';
import { ThemeProvider } from "@/components/theme-provider"

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
        <ClerkProvider
            appearance={{
              elements: {
                rootBox: "flex items-center justify-center",
                card: "bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 dark:border dark:border-gray-700",
                headerTitle: "text-2xl font-bold dark:text-white",
                headerSubtitle: "text-gray-500 dark:text-gray-300",
                formButtonPrimary: 
                  "bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 transition-opacity duration-200 text-white",
                formFieldInput: 
                  "rounded-lg border-gray-200 dark:border-gray-600 focus:ring-primary focus:border-primary dark:bg-gray-700 dark:text-white",
                footerAction: "text-gray-500 dark:text-gray-300",
                footerActionLink: "text-primary hover:text-primary/80 dark:text-purple-400 dark:hover:text-purple-300",
                dividerLine: "bg-gray-200 dark:bg-gray-600",
                dividerText: "text-gray-500 dark:text-gray-300",
                identityPreviewText: "text-gray-600 dark:text-gray-200",
                formField: "space-y-2",
                formFieldLabel: "font-medium dark:text-white",
                socialButtonsBlockButton: 
                  "border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 dark:text-white",
                socialButtonsBlockButtonText: "font-medium dark:text-white",
              },
              variables: {
                borderRadius: '1rem',
              },
            }}
          >
          <body className={inter.className}>
            <Analytics />
            <SpeedInsights />
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
          </ThemeProvider>
          </body>
        </ClerkProvider>
    </html>
  );
}
