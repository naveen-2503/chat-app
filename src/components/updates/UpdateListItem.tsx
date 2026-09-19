import Avatar from '../shared/Avatar';
import type { UpdateItem } from '../../types';

interface UpdateListItemProps {
  update: UpdateItem;
  active?: boolean;
  onClick?: () => void;
}

export default function UpdateListItem({ update, active, onClick }: UpdateListItemProps) {
  const showEditLabel = active && update.isOwn;

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-left transition-colors ${
        active ? 'bg-blue-600' : 'hover:bg-gray-50'
      }`}
    >
      <div className={`rounded-full ${!update.seen ? 'ring-2 ring-offset-2 ring-blue-500' : ''}`}>
        <Avatar src={update.contact.avatarUrl} alt={update.contact.name} size="lg" />
      </div>
      <div className="flex-1 min-w-0">
        <p className={`font-medium text-sm truncate ${active ? 'text-white' : 'text-gray-900'}`}>
          {update.isOwn ? `${update.contact.name} (Me)` : update.contact.name}
        </p>
        <p className={`text-xs truncate ${active ? 'text-blue-100' : 'text-gray-400'}`}>
          {showEditLabel ? 'Edit' : update.timestamp}
        </p>
      </div>
    </button>
  );
}