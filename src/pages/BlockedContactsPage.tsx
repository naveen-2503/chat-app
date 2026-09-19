import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Plus, X } from 'lucide-react';
import Avatar from '../components/shared/Avatar';
import EmptyState from '../components/shared/EmptyState';
import BlockNewContactModal from '../components/settings/BlockNewContactModal';
import { blockedContacts as initialBlocked, contacts } from '../data/mockData';

export default function BlockedContactsPage() {
  const navigate = useNavigate();
  const [blocked, setBlocked] = useState(initialBlocked);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleUnblock = (id: string) => {
    setBlocked((prev) => prev.filter((b) => b.id !== id));
  };

  const handleBlock = (contactId: string) => {
    const contact = contacts.find((c) => c.id === contactId);
    if (!contact) return;
    setBlocked((prev) => [
      ...prev,
      {
        id: `b-${contactId}-${Date.now()}`,
        name: contact.name,
        avatarUrl: contact.avatarUrl,
        note: contact.about ?? '',
      },
    ]);
  };

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
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Blocked Contacts</h1>
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-between w-full px-4 py-2.5 text-sm text-blue-600 dark:text-blue-400 font-medium border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          Block New Contact
          <Plus size={16} />
        </button>

        <div className="flex-1 overflow-y-auto px-2 pt-1">
          {blocked.length === 0 ? (
            <p className="text-sm text-gray-400 dark:text-gray-500 text-center px-4 pt-6">No blocked contacts</p>
          ) : (
            blocked.map((contact) => (
              <div
                key={contact.id}
                className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                <Avatar src={contact.avatarUrl} alt={contact.name} size="lg" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-gray-900 dark:text-white truncate">{contact.name}</p>
                  <p className="text-xs text-gray-400 dark:text-gray-500 truncate">{contact.note}</p>
                </div>
                <button
                  type="button"
                  onClick={() => handleUnblock(contact.id)}
                  className="text-gray-400 hover:text-red-500 shrink-0"
                  aria-label={`Unblock ${contact.name}`}
                >
                  <X size={16} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="flex-1 min-w-0 hidden md:flex bg-white dark:bg-gray-950">
        <EmptyState title="Select a conversation or start a" actionLabel="new one" />
      </div>

      <BlockNewContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onBlock={handleBlock}
        excludeNames={blocked.map((b) => b.name)}
      />
    </>
  );
}