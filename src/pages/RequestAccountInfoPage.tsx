import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ClipboardList } from 'lucide-react';
import SettingsIconHeader from '../components/settings/SettingsIconHeader';
import EmptyState from '../components/shared/EmptyState';

export default function RequestAccountInfoPage() {
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
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Request Account Info</h1>
        </div>

        <SettingsIconHeader icon={<ClipboardList size={32} />} />

        <div className="px-4 py-4 border-b border-gray-100 dark:border-gray-800">
          <button
            type="button"
            className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
          >
            Request Report
          </button>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
            Create a report of your Talk Account information and settings, which you can access or port to another
            app. This report does not include your messages.
          </p>
        </div>
      </div>

      <div className="flex-1 min-w-0 hidden md:flex bg-white dark:bg-gray-950">
        <EmptyState title="Select a conversation or start a" actionLabel="new one" />
      </div>
    </>
  );
}