import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import NotificationToggleRow from '../components/settings/NotificationToggleRow';
import EmptyState from '../components/shared/EmptyState';

export default function NotificationsPage() {
  const navigate = useNavigate();
  const [settings, setSettings] = useState({
    notifications: true,
    showPreviews: true,
    showReactionNotifications: false,
    incomingCallRingtone: false,
    sounds: true,
  });

  const update = (key: keyof typeof settings) => (value: boolean) =>
    setSettings((prev) => ({ ...prev, [key]: value }));

  return (
    <>
      <div className="flex flex-col w-full md:w-[300px] border-r border-gray-100 dark:border-gray-800 shrink-0 bg-white dark:bg-gray-900">
        <div className="flex items-center gap-3 px-4 pt-4 pb-3">
          <button
            type="button"
            onClick={() => navigate('/settings')}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            aria-label="Back to settings"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Notifications</h1>
        </div>

        <div className="flex-1 overflow-y-auto">
          <NotificationToggleRow
            label="Notifications"
            description="Show notifications for new messages"
            checked={settings.notifications}
            onChange={update('notifications')}
          />
          <NotificationToggleRow
            label="Show Previews"
            checked={settings.showPreviews}
            onChange={update('showPreviews')}
          />
          <NotificationToggleRow
            label="Show Reaction Notifications"
            checked={settings.showReactionNotifications}
            onChange={update('showReactionNotifications')}
          />
          <NotificationToggleRow
            label="Incoming call ringtone"
            checked={settings.incomingCallRingtone}
            onChange={update('incomingCallRingtone')}
          />
          <NotificationToggleRow
            label="Sounds"
            description="Play sounds for incoming messages"
            checked={settings.sounds}
            onChange={update('sounds')}
          />
        </div>
      </div>

      <div className="flex-1 min-w-0 hidden md:flex bg-white dark:bg-gray-950">
        <EmptyState title="Select a conversation or start a" actionLabel="new one" />
      </div>
    </>
  );
}