import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Fingerprint, ChevronRight } from 'lucide-react';
import SettingsIconHeader from '../components/settings/SettingsIconHeader';
import EmptyState from '../components/shared/EmptyState';

const helpLinks = ['Help Center', 'Contact Us', 'Licenses', 'Terms and Privacy Policy'];

export default function HelpPage() {
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
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Help</h1>
        </div>

        <SettingsIconHeader icon={<Fingerprint size={32} />} />

        <div className="flex-1 overflow-y-auto">
          {helpLinks.map((label) => (
            <button
              key={label}
              type="button"
              className="flex items-center justify-between w-full px-4 py-3 border-b border-gray-100 dark:border-gray-800 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              {label}
              <ChevronRight size={16} className="text-gray-300 dark:text-gray-600" />
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 min-w-0 hidden md:flex bg-white dark:bg-gray-950">
        <EmptyState title="Select a conversation or start a" actionLabel="new one" />
      </div>
    </>
  );
}