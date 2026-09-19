import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Bell,
  Lock,
  ShieldCheck,
  Palette,
  Image,
  UserCog,
  Keyboard,
  HelpCircle,
} from 'lucide-react';
import SettingsListItem from '../components/settings/SettingsListItem';
import EmptyState from '../components/shared/EmptyState';
import Avatar from '../components/shared/Avatar';
import ThemeModal, { type ThemeChoice } from '../components/settings/ThemeModal';
import KeyboardShortcutsModal from '../components/settings/KeyboardShortcutsModal';
import { currentUser } from '../data/mockData';

export default function SettingsPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isSubPage = location.pathname !== '/settings';

  const [isThemeModalOpen, setIsThemeModalOpen] = useState(false);
  const [isShortcutsModalOpen, setIsShortcutsModalOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeChoice>('light');

  const settingsItems = [
    { icon: <Bell size={18} />, label: 'Notifications', onClick: () => navigate('/settings/notifications') },
    { icon: <Lock size={18} />, label: 'Privacy', onClick: () => navigate('/settings/privacy') },
    { icon: <ShieldCheck size={18} />, label: 'Security', onClick: () => navigate('/settings/security') },
    { icon: <Palette size={18} />, label: 'Theme', onClick: () => setIsThemeModalOpen(true) },
    { icon: <Image size={18} />, label: 'Chat Wallpaper', onClick: () => navigate('/settings/wallpaper') },
    { icon: <UserCog size={18} />, label: 'Request Account Info', onClick: () => navigate('/settings/account-info') },
    { icon: <Keyboard size={18} />, label: 'Keyboard Shortcuts', onClick: () => setIsShortcutsModalOpen(true) },
    { icon: <HelpCircle size={18} />, label: 'Help', onClick: () => navigate('/settings/help') },
  ];

  return (
    <>
      <div
        className={`flex-col w-full md:w-[300px] border-r border-gray-100 dark:border-gray-800 shrink-0 bg-white dark:bg-gray-900 ${
          isSubPage ? 'hidden md:flex' : 'flex'
        }`}
      >
        <div className="px-4 pt-4 pb-3">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Settings</h1>
        </div>

        <div className="flex items-center gap-3 px-4 pb-4">
          <Avatar src={currentUser.avatarUrl} alt={currentUser.name} size="lg" />
          <div className="min-w-0">
            <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{currentUser.name}</p>
            <p className="text-xs text-gray-400 dark:text-gray-500 truncate">{currentUser.about}</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {settingsItems.map((item) => (
            <SettingsListItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              onClick={item.onClick}
            />
          ))}
        </div>
      </div>

      <div className={`flex-1 min-w-0 bg-white dark:bg-gray-950 ${isSubPage ? 'flex' : 'hidden md:flex'}`}>
        <EmptyState title="Select a conversation or start a" actionLabel="new one" />
      </div>

      <ThemeModal
        isOpen={isThemeModalOpen}
        onClose={() => setIsThemeModalOpen(false)}
        currentTheme={theme}
        onApply={setTheme}
      />
      <KeyboardShortcutsModal
        isOpen={isShortcutsModalOpen}
        onClose={() => setIsShortcutsModalOpen(false)}
      />
    </>
  );
}