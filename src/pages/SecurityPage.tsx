import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, MessageSquare, Phone, FileText, MapPin, Radio } from 'lucide-react';
import SettingsIconHeader from '../components/settings/SettingsIconHeader';
import EmptyState from '../components/shared/EmptyState';

const protectedItems = [
  { icon: <MessageSquare size={16} />, label: 'Text and voice messages' },
  { icon: <Phone size={16} />, label: 'Audio & Video Calls' },
  { icon: <FileText size={16} />, label: 'Photos, videos & documents' },
  { icon: <MapPin size={16} />, label: 'Location sharing' },
  { icon: <Radio size={16} />, label: 'Status Updates' },
];

export default function SecurityPage() {
  const navigate = useNavigate();

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
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Security</h1>
        </div>

        <SettingsIconHeader
          icon={<ShieldCheck size={32} />}
          description="Your Chats and calls are private End-to-end encryption keeps your personal messages & call between you and person you choose to communicate with. Not even talk can read or listen to them. This includes your"
        />

        <div className="flex-1 overflow-y-auto">
          {protectedItems.map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 dark:border-gray-800 text-sm text-gray-700 dark:text-gray-200"
            >
              <span className="text-gray-400 dark:text-gray-500">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 min-w-0 hidden md:flex bg-white dark:bg-gray-950">
        <EmptyState title="Select a conversation or start a" actionLabel="new one" />
      </div>
    </>
  );
}