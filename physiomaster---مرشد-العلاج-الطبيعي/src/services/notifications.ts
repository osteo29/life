/**
 * Notification Service for PhysioMaster
 */

import { messaging, getToken, onMessage } from '../firebase';

export const requestNotificationPermission = async (): Promise<boolean> => {
  if (!("Notification" in window)) {
    console.log("This browser does not support desktop notification");
    return false;
  }

  if (Notification.permission === "granted") {
    return true;
  }

  if (Notification.permission !== "denied") {
    const permission = await Notification.requestPermission();
    return permission === "granted";
  }

  return false;
};

export const sendNotification = (title: string, options?: NotificationOptions) => {
  if (Notification.permission === "granted") {
    new Notification(title, {
      icon: "/favicon.ico", // Assuming there's a favicon
      ...options,
    });
  }
};

export const scheduleReminder = (time: string, onReminder: () => void) => {
  const [hours, minutes] = time.split(':').map(Number);
  
  const checkTime = () => {
    const now = new Date();
    if (now.getHours() === hours && now.getMinutes() === minutes) {
      onReminder();
    }
  };

  // Check every minute
  const intervalId = setInterval(checkTime, 60000);
  
  // Also check immediately
  checkTime();

  return () => clearInterval(intervalId);
};

export const getFCMToken = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: 'BPTxfaFFqBPTnmJptWqAIKjKKThOP4P2XEUsc4lw9PiCfyTJNFZQ1Soodtu23dPTKfNSrGctfagH6hs79dyEQHM'
      });
      return token;
    }
  } catch (error) {
    console.error('Error getting FCM token:', error);
  }
  return null;
};

export const onMessageListener = (callback: (payload: any) => void) => {
  return onMessage(messaging, (payload) => {
    callback(payload);
  });
};
