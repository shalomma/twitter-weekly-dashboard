import { DailyStats, EngagementRate, TopContent, AudienceGrowth, DashboardStats } from './types';

export const dailyStats: DailyStats[] = [
  { date: '2024-03-01', tweets: 5, impressions: 1200, engagements: 150, followers: 1000 },
  { date: '2024-03-02', tweets: 3, impressions: 800, engagements: 100, followers: 1020 },
  { date: '2024-03-03', tweets: 7, impressions: 2000, engagements: 300, followers: 1050 },
  { date: '2024-03-04', tweets: 4, impressions: 1500, engagements: 200, followers: 1080 },
  { date: '2024-03-05', tweets: 6, impressions: 1800, engagements: 250, followers: 1100 },
  { date: '2024-03-06', tweets: 8, impressions: 2500, engagements: 400, followers: 1150 },
  { date: '2024-03-07', tweets: 5, impressions: 1600, engagements: 180, followers: 1200 },
];

export const engagementRates: EngagementRate[] = [
  { type: 'Likes', rate: 2.8 },
  { type: 'Retweets', rate: 1.2 },
  { type: 'Replies', rate: 0.9 },
  { type: 'Clicks', rate: 1.5 },
];

export const topContent: TopContent[] = [
  {
    id: '1',
    content: 'Exciting news! Just launched our new feature...',
    engagement: 520,
    type: 'tweet',
  },
  {
    id: '2',
    content: 'Thanks for the feedback! We\'re working on it...',
    engagement: 320,
    type: 'reply',
  },
  {
    id: '3',
    content: 'Check out this amazing development in tech...',
    engagement: 480,
    type: 'tweet',
  },
];

export const audienceGrowth: AudienceGrowth[] = [
  { date: '2024-03-01', followers: 1000, following: 500 },
  { date: '2024-03-02', followers: 1020, following: 505 },
  { date: '2024-03-03', followers: 1050, following: 510 },
  { date: '2024-03-04', followers: 1080, following: 515 },
  { date: '2024-03-05', followers: 1100, following: 520 },
  { date: '2024-03-06', followers: 1150, following: 525 },
  { date: '2024-03-07', followers: 1200, following: 530 },
];

export const dashboardStats: DashboardStats = {
  totalTweets: 38,
  totalImpressions: 11400,
  totalEngagements: 1580,
  averageEngagementRate: 13.86,
};
