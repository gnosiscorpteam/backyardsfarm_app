import * as Notifications from 'expo-notifications';
const appIcon = require('../../assets/icon.png')

// Initialize Expo Notifications
export const initializeNotifications = () => {
    Notifications.setNotificationHandler({
        handleNotification: async () => ({
            shouldShowAlert: true,
            shouldPlaySound: false,
            shouldSetBadge: false,
        }),
    });
};

// Send a notification
export const sendNotification = async (title, body) => {
    try {
        const notificationContent = {
            title,
            body,
            ios: {
                sound: true,
                badge: true,
                icon: appIcon,
            },
            android: {
                channelId: 'default',
                smallIcon: appIcon,
            },

        };

        await Notifications.scheduleNotificationAsync({
            content: notificationContent,
            trigger: null,
        });
    } catch (error) {
        console.error('Error sending notification:', error);
    }
};

// Add a listener for incoming notifications
export const addNotificationListener = (callback) => {
    return Notifications.addNotificationReceivedListener(callback);
};
