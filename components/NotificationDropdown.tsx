import React, { useState } from 'react';
import styled from 'styled-components';
import { Bell } from "lucide-react";
import { Button } from '@/components/ui/button';

interface Notification {
    message: string;
}

interface NotificationDropdownProps {
    notifications: Notification[];
    onNotificationClick?: (message: string) => void;
}

const DropdownContainer = styled.div`
    position: relative;
    display: inline-block;
`;

interface NotificationPanelProps {
    isOpen: boolean;
}

const NotificationPanel = styled.div<NotificationPanelProps>`
    position: absolute;
    top: 100%;
    right: 0;
    width: 300px;
    background: white;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    display: ${(props: { isOpen: any; }) => props.isOpen ? 'block' : 'none'};
    max-height: 400px;
    overflow-y: auto;
    z-index: 1000;
`;

const NotificationItem = styled.div`
    padding: 12px;
    border-bottom: 1px solid #e1e1e1;
    cursor: pointer;
    
    &:hover {
        background: #f5f5f5;
    }
    
    &:last-child {
        border-bottom: none;
    }
`;

const NotificationMessage = styled.p`
    margin: 0;
    font-size: 14px;
`;

const NotificationBadge = styled.span`
    position: absolute;
    top: -6px;
    right: -6px;
    background: #ff3e00;
    color: white;
    border-radius: 50%;
    padding: 2px 6px;
    font-size: 11px;
    font-weight: 600;
    min-width: 18px;
    height: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 4px rgba(255, 62, 0, 0.3);
`;

const NotificationDropdown: React.FC<NotificationDropdownProps> = ({
    notifications,
    onNotificationClick
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleNotificationClick = (message: string) => {
        onNotificationClick?.(message);
        setIsOpen(false);
    };

    return (
        <DropdownContainer>
            <Button variant="outline" size="icon" onClick={toggleDropdown}>
                <Bell className="h-[1.4rem] w-[1.2rem] scale-100" />
                {notifications.length > 0 && (
                    <NotificationBadge>
                        {notifications.length}
                    </NotificationBadge>
                )}
            </Button>

            <NotificationPanel isOpen={isOpen}>
                {notifications.length === 0 ? (
                    <NotificationItem>
                        <NotificationMessage>No new notifications</NotificationMessage>
                    </NotificationItem>
                ) : (
                    notifications.map((notification, index) => (
                        <NotificationItem
                            key={index}
                            onClick={() => handleNotificationClick(notification.message)}
                        >
                            <NotificationMessage>{notification.message}</NotificationMessage>
                        </NotificationItem>
                    ))
                )}
            </NotificationPanel>
        </DropdownContainer>
    );
};

export default NotificationDropdown;