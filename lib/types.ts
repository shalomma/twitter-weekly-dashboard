export interface Tweet {
  id: string;
  content: string;
  likes: number;
  retweets: number;
  replies: number;
  impressions: number;
  timestamp: string;
}

export interface DailyStats {
  date: string;
  tweets: number;
  impressions: number;
  engagements: number;
  followers: number;
}

export interface EngagementRate {
  type: string;
  rate: number;
}

export interface TopContent {
  id: string;
  content: string;
  engagement: number;
  type: 'tweet' | 'reply' | 'retweet';
}

export interface AudienceGrowth {
  date: string;
  followers: number;
  following: number;
}

export interface DashboardStats {
  totalTweets: number;
  totalImpressions: number;
  totalEngagements: number;
  averageEngagementRate: number;
}
