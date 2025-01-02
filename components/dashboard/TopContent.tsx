import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TopContent as TopContentType } from '@/lib/types';

interface TopContentProps {
  items: TopContentType[];
}

export function TopContent({ items }: TopContentProps) {
  return (
    <Card className="col-span-3">
      <CardHeader>
        <CardTitle>Top Performing Content</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex items-center justify-between border-b pb-4">
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">{item.content}</p>
                <p className="text-sm text-muted-foreground">Type: {item.type}</p>
              </div>
              <div className="text-sm font-medium">{item.engagement} engagements</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
