"use client"

import { ImpressionsChart } from '@/components/charts/ImpressionsChart';
import { EngagementChart } from '@/components/charts/EngagementChart';
import { FollowersChart } from '@/components/charts/FollowersChart';
import { TopContent } from '@/components/dashboard/TopContent';
import { dailyStats, engagementRates, topContent, audienceGrowth, dashboardStats } from '@/lib/mock-data';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import React from "react";

import { Moon, Sun, LogOut } from "lucide-react"
import { useTheme } from "next-themes"
 
import { useNotifications } from '@/components/NotificationsProvider';
import NotificationDropdown from '@/components/NotificationDropdown';

export default function DashboardPage() {
  const { setTheme, theme } = useTheme()
  const { notifications } = useNotifications()
  
  // Transform string array to Notification array
  const formattedNotifications = notifications.map(message => ({ message }))

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      
      <header className="fixed w-full px-4 lg:px-6 h-16 flex items-center justify-center backdrop-blur-sm bg-white/75 dark:bg-gray-900/75 z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="container max-w-6xl flex items-center justify-between">
          <Link className="flex items-center justify-center" href="/">
            <span className="font-bold text-xl">Hive</span>
          </Link>
          <div className="flex items-center gap-2">
            
            
            <NotificationDropdown 
              notifications={formattedNotifications}
              onNotificationClick={(message) => console.log('Notification clicked:', message)}
            />
            
            <Link href="/">
              <Button 
                variant="outline"
                size="icon"              
              >
                <LogOut className="h-[1.2rem] w-[1.2rem] scale-100" />
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

      <main className="container max-w-6xl mx-auto px-4 pt-24 pb-12">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {[
            { title: "Total Tweets", value: dashboardStats.totalTweets },
            { title: "Total Impressions", value: dashboardStats.totalImpressions.toLocaleString() },
            { title: "Total Engagements", value: dashboardStats.totalEngagements.toLocaleString() },
            { title: "Avg. Engagement Rate", value: `${dashboardStats.averageEngagementRate}%` }
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</h3>
              <p className="text-2xl font-bold mt-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-6 grid-cols-1">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <ImpressionsChart data={dailyStats} />
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <EngagementChart data={engagementRates} />
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <FollowersChart data={audienceGrowth} />
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
            <TopContent items={topContent} />
          </div>
        </div>
      </main>
    </div>
  );
}
