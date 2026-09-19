import Avatar from '../shared/Avatar';
import type { Group } from '../../types';

interface GroupListItemProps {
  group: Group;
  active?: boolean;
  onClick?: () => void;
}

export default function GroupListItem({ group, active, onClick }: GroupListItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-left transition-colors ${
        active ? 'bg-blue-600' : 'hover:bg-gray-50 dark:hover:bg-gray-800'
      }`}
    >
      <Avatar src={group.avatarUrl} alt={group.name} size="lg" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className={`font-medium text-sm truncate ${active ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
            {group.name}
          </span>
          <span className={`text-xs shrink-0 ${active ? 'text-blue-100' : 'text-gray-400 dark:text-gray-500'}`}>
            {group.lastMessageTime}
          </span>
        </div>
        <p className={`text-sm truncate ${active ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'}`}>
          {group.lastMessage}
        </p>
      </div>
    </button>
  );
}