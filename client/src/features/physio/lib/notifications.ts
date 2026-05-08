export type BrowserNotificationPermission =
  | NotificationPermission
  | "unsupported";

function isNotificationAvailable() {
  return typeof window !== "undefined" && "Notification" in window;
}

export async function ensureNotificationPermission(): Promise<BrowserNotificationPermission> {
  if (!isNotificationAvailable()) {
    return "unsupported";
  }

  if (Notification.permission === "granted") {
    return "granted";
  }

  if (Notification.permission === "denied") {
    return "denied";
  }

  return Notification.requestPermission();
}

export async function sendBrowserNotification(
  title: string,
  options?: NotificationOptions,
): Promise<boolean> {
  const permission = await ensureNotificationPermission();
  if (permission !== "granted") {
    return false;
  }

  new Notification(title, options);
  return true;
}
