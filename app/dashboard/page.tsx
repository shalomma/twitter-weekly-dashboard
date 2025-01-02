import { ImpressionsChart } from '@/components/charts/ImpressionsChart';
import { EngagementChart } from '@/components/charts/EngagementChart';
import { FollowersChart } from '@/components/charts/FollowersChart';
import { StatsCard } from '@/components/dashboard/StatsCard';
import { TopContent } from '@/components/dashboard/TopContent';
import { dailyStats, engagementRates, topContent, audienceGrowth, dashboardStats } from '@/lib/mock-data';

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Twitter Analytics</h2>
      </div>
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
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ImpressionsChart data={dailyStats} />
        <EngagementChart data={engagementRates} />
        <FollowersChart data={audienceGrowth} />
        <TopContent items={topContent} />
      </div>
    </div>
  );
}
