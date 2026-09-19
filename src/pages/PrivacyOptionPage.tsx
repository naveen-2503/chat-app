import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import EmptyState from '../components/shared/EmptyState';
import { visibilityOptions } from '../data/privacyOptions';

const titles: Record<string, string> = {
  'last-seen': 'Last Seen',
  'profile-photo': 'Profile Photo',
  about: 'About',
  groups: 'Groups',
};

const hints: Record<string, string> = {
  'last-seen': "If you don't share your Last Seen, you won't be able to see other people's Last Seen",
  'profile-photo': 'Choose who can see your profile photo',
  about: 'Choose who can see your about info',
  groups: 'Choose who can add you to groups',
};

export default function PrivacyOptionPage() {
  const { option } = useParams<{ option: string }>();
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string>('Everyone');

  const title = (option && titles[option]) || 'Privacy';
  const hint = option ? hints[option] : undefined;

  return (
    <>
      <div className="flex flex-col w-full md:w-[300px] border-r border-gray-100 dark:border-gray-800 shrink-0 bg-white dark:bg-gray-900">
        <div className="flex items-center gap-3 px-4 pt-4 pb-3">
          <button
            type="button"
            onClick={() => navigate('/settings/privacy')}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            aria-label="Back to privacy"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h1>
        </div>

        {hint && <p className="text-xs text-blue-500 dark:text-blue-400 px-4 pb-3">{hint}</p>}

        <div className="flex-1 overflow-y-auto">
          {visibilityOptions.map((opt) => (
            <label
              key={opt}
              className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 dark:border-gray-800 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
            >
              <input
                type="radio"
                name="privacy-option"
                checked={selected === opt}
                onChange={() => setSelected(opt)}
                className="w-4 h-4 accent-blue-600"
              />
              <span className="text-sm text-gray-800 dark:text-gray-100">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex-1 min-w-0 hidden md:flex bg-white dark:bg-gray-950">
        <EmptyState title="Select a conversation or start a" actionLabel="new one" />
      </div>
    </>
  );
}