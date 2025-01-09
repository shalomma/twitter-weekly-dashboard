import React, { useState } from 'react';
import styled from 'styled-components';

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

const DropdownButton = styled.button`
    background: #ffffff;
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    padding: 8px 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
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
            <DropdownButton onClick={toggleDropdown}>
                <span>Notifications</span>
                {notifications.length > 0 && (
                    <span style={{ 
                        background: '#ff3e00', 
                        color: 'white', 
                        borderRadius: '50%', 
                        padding: '2px 6px', 
                        fontSize: '12px' 
                    }}>
                        {notifications.length}
                    </span>
                )}
            </DropdownButton>

            <NotificationPanel isOpen={isOpen}>
                {notifications.length === 0 ? (
                    <NotificationItem>
                        <NotificationMessage>No notifications</NotificationMessage>
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