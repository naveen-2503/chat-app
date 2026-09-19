import { useState } from 'react';
import { Phone } from 'lucide-react';
import SearchBar from '../components/shared/SearchBar';
import CallLogItem from '../components/calls/CallLogItem';
import ChatWindow from '../components/chat/ChatWindow';
import EmptyState from '../components/shared/EmptyState';
import StartConversationModal from '../components/calls/StartConversationModal';
import { callLogs, chats } from '../data/mockData';

export default function CallsPage() {
  const [search, setSearch] = useState('');
  const [activeContactId, setActiveContactId] = useState<string | null>(chats[0]?.id ?? null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredLogs = callLogs.filter((entry) =>
    entry.contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const activeChat = chats.find((c) => c.contact.id === activeContactId) ?? chats[0];

  const handleSelectContact = (contactId: string) => {
    setActiveContactId(contactId);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="flex flex-col w-full md:w-[340px] border-r border-gray-100 dark:border-gray-800 shrink-0 bg-white dark:bg-gray-900">
        <div className="px-4 pt-4 pb-2">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Call Log</h1>
          <SearchBar placeholder="Search" value={search} onChange={setSearch} showFilter={false} />
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-between w-full px-4 py-2.5 text-sm text-blue-600 dark:text-blue-400 font-medium border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          Start new conversation
          <Phone size={16} />
        </button>

        <div className="flex-1 overflow-y-auto px-2 pt-1">
          {filteredLogs.length === 0 ? (
            <p className="text-sm text-gray-400 dark:text-gray-500 text-center px-4 pt-6">No call logs found</p>
          ) : (
            filteredLogs.map((entry) => (
              <CallLogItem
                key={entry.id}
                entry={entry}
                active={entry.contact.id === activeContactId}
                onClick={() => setActiveContactId(entry.contact.id)}
              />
            ))
          )}
        </div>
      </div>

      <div className="flex-1 min-w-0 bg-white dark:bg-gray-950">
        {activeChat ? (
          <ChatWindow chat={activeChat} />
        ) : (
          <EmptyState title="Select a contact to see conversation" />
        )}
      </div>

      <StartConversationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSelectContact={handleSelectContact}
      />
    </>
  );
}