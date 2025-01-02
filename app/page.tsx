import React from 'react';
import { Button } from '@/components/ui/button';
import Link from "next/link";

export default function LandingPage() {
  return (
      <div className="flex min-h-screen flex-col items-center">
        <header className="w-full px-4 lg:px-6 h-14 flex items-center justify-center bg-white dark:bg-gray-800">
          <div className="container max-w-6xl flex items-center justify-between">
            <Link className="flex items-center justify-center" href="/">
              <span className="font-bold text-xl">PoliticalPulse</span>
            </Link>
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
          </div>
        </header>
        <main className="flex-1 w-full flex flex-col items-center">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-40 flex items-center justify-center">
            <div className="container max-w-6xl px-4 md:px-6">
              <div className="flex flex-col items-center space-y-6 text-center">
                <div className="space-y-4 max-w-3xl mx-auto">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                    Master Social Media
                    <span className="text-primary"> for Political Impact</span>
                  </h1>
                  <p className="text-xl text-gray-500 md:text-2xl dark:text-gray-400 max-w-2xl mx-auto">
                    Advanced analytics and insights for political consultants and campaign managers.
                    Understand public sentiment, track competitors, and optimize your messaging strategy.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center min-w-[200px]">
                  <a href="/dashboard">
                    <Button size="lg" className="w-full sm:w-auto bg-primary hover:bg-primary/90">
                      Start Strategic Analysis
                    </Button>
                  </a>
                  <a href="#features">
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      View Campaign Tools
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
            <div className="container max-w-6xl px-4 md:px-6">
              <h2 className="text-3xl font-bold text-center mb-12">Strategic Campaign Intelligence</h2>
              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
                <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <div className="rounded-full p-3 bg-primary/10">
                    <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
                      <path d="m12 8 4 4-4 4" />
                      <path d="m8 12h8" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Sentiment Analysis</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Track public opinion on key issues in real-time. Understand how your messaging resonates across different demographic segments.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <div className="rounded-full p-3 bg-primary/10">
                    <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                      <path d="M12 2v20" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Competitor Intelligence</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Monitor opposition messaging and engagement. Get alerts on trending topics and emerging narratives in your political space.
                  </p>
                </div>
                <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                  <div className="rounded-full p-3 bg-primary/10">
                    <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                    >
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Message Optimization</h3>
                  <p className="text-center text-gray-500 dark:text-gray-400">
                    Get AI-powered recommendations for message framing and timing. Optimize your content for maximum impact across different platforms.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="w-full border-t bg-white dark:bg-gray-800">
          <div className="container max-w-6xl mx-auto px-4 py-6">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                © 2024 PoliticalPulse. All rights reserved.
              </p>
              <nav className="flex gap-6">
                <a className="text-sm hover:underline underline-offset-4" href="#">
                  Terms of Service
                </a>
                <a className="text-sm hover:underline underline-offset-4" href="#">
                  Privacy Policy
                </a>
              </nav>
            </div>
          </div>
        </footer>
      </div>
  );
}