"use client"

import React from 'react';
import { Button } from '@/components/ui/button';
import Link from "next/link";

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 

export default function LandingPage() {
  const { setTheme, theme } = useTheme()

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <header className="fixed w-full px-4 lg:px-6 h-16 flex items-center justify-center backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="container max-w-6xl flex items-center justify-between">
          <Link className="flex items-center justify-center" href="/">
            <span className="font-bold text-xl">Hive</span>
          </Link>
          
          <div className="flex items-center gap-2">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>

            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>

          </div>
        </div>
      </header>

      <main className="flex-1 w-full flex flex-col items-center pt-16">
        <section className="w-full py-24 md:py-32 lg:py-40 flex items-center justify-center">
          <div className="container max-w-6xl px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <div className="space-y-6 max-w-3xl mx-auto">
                <h1 className="text-5xl font-extrabold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                    Master Social Media
                  </span>
                  <br />
                  for Political Impact
                </h1>
                <p className="text-xl text-gray-600 md:text-2xl dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  Advanced analytics and insights for political consultants and campaign managers.
                  Understand public sentiment, track competitors, and optimize your messaging strategy.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center min-w-[200px]">
                <Link href="/dashboard">
                  <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-primary to-purple-600 hover:opacity-90 text-white shadow-lg">
                    Start Strategic Analysis
                  </Button>
                </Link>
                <Link href="#features">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 hover:bg-gray-50 dark:hover:bg-gray-800">
                    View Campaign Tools
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-24 md:py-32 flex items-center justify-center">
          <div className="container max-w-6xl px-4 md:px-6">
            <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Strategic Campaign Intelligence
            </h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {[
                {
                  title: "Sentiment Analysis",
                  description: "Track public opinion on key issues in real-time. Understand how your messaging resonates across different demographic segments.",
                  icon: (
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
                  )
                },
                {
                  title: "Competitor Intelligence",
                  description: "Monitor opposition messaging and engagement. Get alerts on trending topics and emerging narratives in your political space.",
                  icon: (
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
                  )
                },
                {
                  title: "Message Optimization",
                  description: "Get AI-powered recommendations for message framing and timing. Optimize your content for maximum impact across different platforms.",
                  icon: (
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
                  )
                }
              ].map((feature, index) => (
                <div key={index} className="group flex flex-col items-center space-y-4 p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="rounded-full p-4 bg-gradient-to-r from-primary/10 to-purple-600/10 group-hover:from-primary/20 group-hover:to-purple-600/20 transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                  <p className="text-center text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container max-w-6xl mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 Hive. All rights reserved.
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