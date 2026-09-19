import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Plus } from 'lucide-react';
import SearchBar from '../components/shared/SearchBar';
import GroupListItem from '../components/groups/GroupListItem';
import GroupChatWindow from '../components/groups/GroupChatWindow';
import EmptyState from '../components/shared/EmptyState';
import CreateGroupModal from '../components/groups/CreateGroupModal';
import { groups as initialGroups, contacts, currentUser } from '../data/mockData';
import type { Group } from '../types';

export default function GroupsPage() {
  const { groupId } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [groups, setGroups] = useState<Group[]>(initialGroups);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const visibleGroups = groups.filter((g) =>
    g.name.toLowerCase().includes(search.toLowerCase())
  );

  const activeGroup = groups.find((g) => g.id === groupId);

  const activeMembers = activeGroup
    ? [currentUser, ...contacts.filter((c) => activeGroup.memberIds.includes(c.id))]
    : [];

  const handleCreateGroup = (name: string, memberIds: string[]) => {
    const newGroup: Group = {
      id: `g${Date.now()}`,
      name,
      avatarUrl: 'https://picsum.photos/seed/' + encodeURIComponent(name) + '/150/150',
      memberIds: ['me', ...memberIds],
      pinned: false,
      lastMessage: 'Group created',
      lastMessageTime: 'now',
      messages: [],
    };
    setGroups((prev) => [newGroup, ...prev]);
    navigate(`/groups/${newGroup.id}`);
  };

  const pinned = visibleGroups.filter((g) => g.pinned);
  const others = visibleGroups.filter((g) => !g.pinned);

  return (
    <>
      <div
        className={`flex-col w-full md:w-[340px] border-r border-gray-100 dark:border-gray-800 shrink-0 bg-white dark:bg-gray-900 ${
          groupId ? 'hidden md:flex' : 'flex'
        }`}
      >
        <div className="px-4 pt-4 pb-2">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Groups</h1>
          <SearchBar placeholder="Search" value={search} onChange={setSearch} showFilter={false} />
        </div>

        <button
          type="button"
          onClick={() => setIsModalOpen(true)}
          className="flex items-center justify-between w-full px-4 py-2.5 text-sm text-blue-600 dark:text-blue-400 font-medium border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
        >
          Create New Group
          <Plus size={16} />
        </button>

        <div className="flex-1 overflow-y-auto px-2 pt-1">
          {pinned.length > 0 && (
            <div className="mb-2">
              <p className="px-3 py-1.5 text-xs font-medium text-gray-400 dark:text-gray-500">Pinned</p>
              {pinned.map((group) => (
                <GroupListItem
                  key={group.id}
                  group={group}
                  active={group.id === groupId}
                  onClick={() => navigate(`/groups/${group.id}`)}
                />
              ))}
            </div>
          )}
          {others.length > 0 && (
            <div>
              <p className="px-3 py-1.5 text-xs font-medium text-gray-400 dark:text-gray-500">All Chats</p>
              {others.map((group) => (
                <GroupListItem
                  key={group.id}
                  group={group}
                  active={group.id === groupId}
                  onClick={() => navigate(`/groups/${group.id}`)}
                />
              ))}
            </div>
          )}
          {visibleGroups.length === 0 && (
            <p className="text-sm text-gray-400 dark:text-gray-500 text-center px-4 pt-6">No groups found</p>
          )}
        </div>
      </div>

      <div className={`flex-1 min-w-0 bg-white dark:bg-gray-950 ${groupId ? 'flex' : 'hidden md:flex'}`}>
        {activeGroup ? (
          <GroupChatWindow group={activeGroup} members={activeMembers} backTo="/groups" />
        ) : (
          <EmptyState title="Select a group or create a new one" />
        )}
      </div>

      <CreateGroupModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onCreate={handleCreateGroup}
      />
    </>
  );
}