"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'
import Ably from 'ably';

interface NotificationsContextType {
  notifications: string[]
}

const NotificationsContext = createContext<NotificationsContextType>({
  notifications: []
})

interface NotificationsProviderProps {
  children: React.ReactNode
}

export function NotificationsProvider({ children }: NotificationsProviderProps) {
  const [notifications, setNotifications] = useState<string[]>([])

  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_ABLY_API_KEY;
    if (!apiKey) {
      console.error("NEXT_PUBLIC_ABLY_API_KEY is not defined");
      return;
    }

    const client = new Ably.Realtime(apiKey)
    const channel = client.channels.get("notifications:users", { params: { rewind: '100' } });

    const fetchMessageHistory = async () => {
      try {
        const messages = await channel.history({ limit: 100 });
        const historicalNotifications = messages.items.map(msg => msg.data.message);
        setNotifications(historicalNotifications);
      } catch (error) {
        console.error('Error fetching message history:', error);
      }
    };

    // Call fetchMessageHistory immediately after channel setup
    fetchMessageHistory();

    channel.subscribe('new-notification', (msg) => {
      const notificationMessage = msg.data.message
      setNotifications((prev) => [...prev, notificationMessage])
    })

    return () => {
      channel.unsubscribe('new-notification')
    }
  }, [])

  return (
    <NotificationsContext.Provider value={{ notifications: notifications }}>
      {children}
    </NotificationsContext.Provider>
  )
}

export function useNotifications() {
  return useContext(NotificationsContext)
}