import { Search, MoreVertical, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Avatar from '../shared/Avatar';
import type { Group, Contact } from '../../types';

interface GroupHeaderProps {
  group: Group;
  members: Contact[];
  backTo?: string;
}

export default function GroupHeader({ group, members, backTo }: GroupHeaderProps) {
  const navigate = useNavigate();

  const memberNames = members.map((m) => (m.id === 'me' ? 'You' : m.name));
  const preview =
    memberNames.length > 2
      ? `${memberNames.slice(0, 2).join(', ')}, ${memberNames.length - 2} others`
      : memberNames.join(', ');

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shrink-0">
      <div className="flex items-center gap-3">
        {backTo && (
          <button
            type="button"
            onClick={() => navigate(backTo)}
            className="md:hidden text-gray-500 dark:text-gray-400"
          >
            <ArrowLeft size={20} />
          </button>
        )}
        <Avatar src={group.avatarUrl} alt={group.name} size="md" />
        <div>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">{group.name}</p>
          <p className="text-xs text-gray-400 dark:text-gray-500 truncate max-w-[200px]">{preview}</p>
        </div>
      </div>
      <div className="flex items-center gap-4 text-gray-400 dark:text-gray-500">
        <button type="button" className="hover:text-gray-600 dark:hover:text-gray-300">
          <Search size={18} />
        </button>
        <button type="button" className="hover:text-gray-600 dark:hover:text-gray-300">
          <MoreVertical size={18} />
        </button>
      </div>
    </div>
  );
}