'use client';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AudienceGrowth } from '@/lib/types';

interface FollowersChartProps {
  data: AudienceGrowth[];
}

export function FollowersChart({ data }: FollowersChartProps) {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Audience Growth</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="followers" fill="hsl(var(--primary))" stroke="hsl(var(--primary))" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
