import { NotificationsProvider } from '@/components/NotificationsProvider';


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <NotificationsProvider>
        {children}
      </NotificationsProvider>
    </div>
  );
}
