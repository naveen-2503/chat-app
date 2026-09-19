import { useState } from 'react';
import { Search } from 'lucide-react';
import Modal from '../shared/Modal';
import Avatar from '../shared/Avatar';
import { contacts } from '../../data/mockData';

interface BlockNewContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBlock: (contactId: string) => void;
  excludeNames: string[];
}

export default function BlockNewContactModal({
  isOpen,
  onClose,
  onBlock,
  excludeNames,
}: BlockNewContactModalProps) {
  const [search, setSearch] = useState('');

  const availableContacts = contacts.filter(
    (c) =>
      !excludeNames.includes(c.name) &&
      c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Block New Contact">
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

      <div className="flex-1 overflow-y-auto px-2 pb-4 max-h-80">
        {availableContacts.length === 0 ? (
          <p className="text-sm text-gray-400 text-center px-4 pt-6">No contacts found</p>
        ) : (
          availableContacts.map((contact) => (
            <button
              key={contact.id}
              type="button"
              onClick={() => {
                onBlock(contact.id);
                onClose();
              }}
              className="flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-left hover:bg-gray-50"
            >
              <Avatar src={contact.avatarUrl} alt={contact.name} size="lg" />
              <div className="min-w-0">
                <p className="font-medium text-sm text-gray-900 truncate">{contact.name}</p>
                <p className="text-xs text-gray-400 truncate">{contact.about}</p>
              </div>
            </button>
          ))
        )}
      </div>
    </Modal>
  );
}