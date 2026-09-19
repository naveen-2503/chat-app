import { useState } from 'react';
import { X } from 'lucide-react';
import Modal from '../shared/Modal';
import Avatar from '../shared/Avatar';
import { contacts } from '../../data/mockData';
import type { Contact } from '../../types';

interface CreateGroupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (name: string, memberIds: string[]) => void;
}

export default function CreateGroupModal({ isOpen, onClose, onCreate }: CreateGroupModalProps) {
  const [groupName, setGroupName] = useState('');
  const [selectedMembers, setSelectedMembers] = useState<Contact[]>([]);
  const [search, setSearch] = useState('');

  const availableContacts = contacts.filter(
    (c) =>
      !selectedMembers.some((m) => m.id === c.id) &&
      c.name.toLowerCase().includes(search.toLowerCase())
  );

  const addMember = (contact: Contact) => {
    setSelectedMembers((prev) => [...prev, contact]);
    setSearch('');
  };

  const removeMember = (id: string) => {
    setSelectedMembers((prev) => prev.filter((m) => m.id !== id));
  };

  const handleCreate = () => {
    if (!groupName.trim() || selectedMembers.length === 0) return;
    onCreate(groupName.trim(), selectedMembers.map((m) => m.id));
    setGroupName('');
    setSelectedMembers([]);
    setSearch('');
    onClose();
  };

  const handleClose = () => {
    setGroupName('');
    setSelectedMembers([]);
    setSearch('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose} title="Create New Group">
      <div className="px-5 pb-5 flex flex-col gap-3">
        <div>
          <label className="text-xs text-gray-500 mb-1 block">Name</label>
          <input
            type="text"
            value={groupName}
            onChange={(e) => setGroupName(e.target.value)}
            placeholder="Group Name"
            className="w-full border border-blue-200 rounded-lg px-3 py-2 text-sm outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label className="text-xs text-gray-500 mb-1 block">Members</label>
          <div className="flex flex-wrap items-center gap-2 border border-gray-200 rounded-lg px-2 py-2 min-h-[42px]">
            {selectedMembers.map((member) => (
              <span
                key={member.id}
                className="flex items-center gap-1.5 bg-gray-100 rounded-full pl-1 pr-2 py-1 text-xs text-gray-700"
              >
                <Avatar src={member.avatarUrl} alt={member.name} size="sm" />
                {member.name}
                <button type="button" onClick={() => removeMember(member.id)}>
                  <X size={12} className="text-gray-400 hover:text-gray-600" />
                </button>
              </span>
            ))}
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder={selectedMembers.length === 0 ? 'Type a contact name...' : ''}
              className="flex-1 min-w-[100px] outline-none text-sm bg-transparent"
            />
          </div>

          {search && availableContacts.length === 0 && (
            <p className="text-xs text-gray-400 mt-1 px-1">No matching contacts</p>
          )}

          {search && availableContacts.length > 0 && (
            <div className="mt-1 border border-gray-100 rounded-lg shadow-sm max-h-40 overflow-y-auto">
              {availableContacts.map((contact) => (
                <button
                  key={contact.id}
                  type="button"
                  onClick={() => addMember(contact)}
                  className="flex items-center gap-2 w-full px-3 py-2 text-left hover:bg-gray-50 text-sm"
                >
                  <Avatar src={contact.avatarUrl} alt={contact.name} size="sm" />
                  {contact.name}
                </button>
              ))}
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={handleCreate}
          disabled={!groupName.trim() || selectedMembers.length === 0}
          className="w-full bg-blue-600 text-white rounded-lg py-2.5 text-sm font-medium mt-2 hover:bg-blue-700 disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          Create
        </button>
      </div>
    </Modal>
  );
}