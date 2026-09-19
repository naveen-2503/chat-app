import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PrivacyListItem from '../components/settings/PrivacyListItem';
import PrivacyToggleItem from '../components/settings/PrivacyToggleItem';
import EmptyState from '../components/shared/EmptyState';
import { blockedContacts } from '../data/mockData';

export default function PrivacyPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const isSubPage = location.pathname !== '/settings/privacy';

  const [readReceipts, setReadReceipts] = useState(true);

  return (
    <>
      <div
        className={`flex-col w-full md:w-[300px] border-r border-gray-100 dark:border-gray-800 shrink-0 bg-white dark:bg-gray-900 ${
          isSubPage ? 'hidden md:flex' : 'flex'
        }`}
      >
        <div className="flex items-center gap-3 px-4 pt-4 pb-3">
          <button
            type="button"
            onClick={() => navigate('/settings')}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            aria-label="Back to settings"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Privacy</h1>
        </div>

        <div className="flex-1 overflow-y-auto">
          <PrivacyListItem
            label="Last Seen"
            value="Everyone"
            onClick={() => navigate('/settings/privacy/last-seen')}
          />
          <PrivacyListItem
            label="Profile Photo"
            value="Everyone"
            onClick={() => navigate('/settings/privacy/profile-photo')}
          />
          <PrivacyListItem
            label="About"
            value="Everyone"
            onClick={() => navigate('/settings/privacy/about')}
          />
          <PrivacyToggleItem
            label="Read receipts"
            description="If turned off, you won't send or receive read receipts. Read receipts are always sent for group chats."
            checked={readReceipts}
            onChange={setReadReceipts}
          />
          <PrivacyListItem
            label="Groups"
            value="Everyone"
            onClick={() => navigate('/settings/privacy/groups')}
          />
          <PrivacyListItem
            label="Blocked contacts"
            value={String(blockedContacts.length)}
            onClick={() => navigate('/settings/privacy/blocked')}
          />
        </div>
      </div>

      <div className={`flex-1 min-w-0 bg-white dark:bg-gray-950 ${isSubPage ? 'flex' : 'hidden md:flex'}`}>
        <EmptyState title="Select a conversation or start a" actionLabel="new one" />
      </div>
    </>
  );
}