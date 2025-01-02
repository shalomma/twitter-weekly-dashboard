import { ImpressionsChart } from '@/components/charts/ImpressionsChart';
import { EngagementChart } from '@/components/charts/EngagementChart';
import { FollowersChart } from '@/components/charts/FollowersChart';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { TopContent } from '@/components/dashboard/TopContent';
import { dailyStats, engagementRates, topContent, audienceGrowth, dashboardStats } from '@/lib/mock-data';
import Link from "next/link";
import {Button} from "@/components/ui/button";
import React from "react";

export default function DashboardPage() {
  return (

      <div className="flex min-h-screen flex-col items-center">
          <header className="w-full px-4 lg:px-6 h-14 flex items-center justify-center bg-white dark:bg-gray-800">
              <div className="container max-w-6xl flex items-center justify-between">
                  <Link className="flex items-center justify-center" href="/">
                      <span className="font-bold text-xl">PoliticalPulse</span>
                  </Link>
                  <Link href="/">
                      <Button variant="ghost" size="sm">
                          Sign Out
                      </Button>
                  </Link>
              </div>
          </header>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
              <StatsCard
                  title="Total Tweets"
                  value={dashboardStats.totalTweets}
              />
              <StatsCard
                  title="Total Impressions"
                  value={dashboardStats.totalImpressions.toLocaleString()}
              />
              <StatsCard
                  title="Total Engagements"
                  value={dashboardStats.totalEngagements.toLocaleString()}
              />
              <StatsCard
                  title="Avg. Engagement Rate"
                  value={`${dashboardStats.averageEngagementRate}%`}
              />
          </div>
          <div className="grid gap-4 grid-cols-1 pt-4">
              <ImpressionsChart data={dailyStats}/>
              <EngagementChart data={engagementRates}/>
              <FollowersChart data={audienceGrowth}/>
              <TopContent items={topContent}/>
          </div>
      </div>
  );
}
