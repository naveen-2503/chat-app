import { useState } from 'react';
import { Search, Phone, Video } from 'lucide-react';
import Modal from '../shared/Modal';
import Avatar from '../shared/Avatar';
import { callLogs } from '../../data/mockData';

interface StartConversationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectContact: (contactId: string) => void;
}

export default function StartConversationModal({
  isOpen,
  onClose,
  onSelectContact,
}: StartConversationModalProps) {
  const [search, setSearch] = useState('');

  // Reuse call log contacts as the selectable list, deduplicated by contact id
  const uniqueContacts = Array.from(
    new Map(callLogs.map((entry) => [entry.contact.id, entry])).values()
  );

  const filtered = uniqueContacts.filter((entry) =>
    entry.contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} showCloseButton>
      <div className="px-5 pb-2">
        <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 gap-2">
          <Search size={16} className="text-gray-400 shrink-0" />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            autoFocus
            className="bg-transparent outline-none text-sm w-full placeholder:text-gray-400"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-2 pb-4">
        {filtered.length === 0 ? (
          <p className="text-sm text-gray-400 text-center px-4 pt-6">No contacts found</p>
        ) : (
          filtered.map((entry) => (
            <div
              key={entry.contact.id}
              className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg hover:bg-gray-50"
            >
              <Avatar src={entry.contact.avatarUrl} alt={entry.contact.name} size="lg" />
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm text-gray-900 truncate">
                  {entry.contact.name}
                </p>
                <p className="text-xs text-gray-400">{entry.timestamp}</p>
              </div>
              <div className="flex items-center gap-3 text-blue-500 shrink-0">
                <button
                  type="button"
                  onClick={() => onSelectContact(entry.contact.id)}
                  aria-label={`Audio call ${entry.contact.name}`}
                >
                  <Phone size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => onSelectContact(entry.contact.id)}
                  aria-label={`Video call ${entry.contact.name}`}
                >
                  <Video size={18} />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </Modal>
  );
}