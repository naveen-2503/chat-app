import { Phone, Video } from 'lucide-react';
import Avatar from '../shared/Avatar';
import type { CallLogEntry } from '../../types';

interface CallLogItemProps {
  entry: CallLogEntry;
  active?: boolean;
  onClick?: () => void;
}

export default function CallLogItem({ entry, active, onClick }: CallLogItemProps) {
  const isMissed = entry.status === 'missed';
  const isOutgoing = entry.status === 'outgoing';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-left transition-colors ${
        active ? 'bg-blue-50 dark:bg-blue-900/30' : 'hover:bg-gray-50 dark:hover:bg-gray-800'
      }`}
    >
      <Avatar src={entry.contact.avatarUrl} alt={entry.contact.name} size="lg" />
      <div className="flex-1 min-w-0">
        <p className="font-medium text-sm text-gray-900 dark:text-white truncate">{entry.contact.name}</p>
        <div className="flex items-center gap-1 text-xs mt-0.5">
          <span className={isMissed ? 'text-red-500' : 'text-green-500'}>
            {isOutgoing ? '↗' : '↙'}
          </span>
          <span className="text-gray-400 dark:text-gray-500">{entry.timestamp}</span>
        </div>
      </div>
      {entry.type === 'video' ? (
        <Video size={18} className="text-green-500 shrink-0" />
      ) : (
        <Phone size={18} className="text-green-500 shrink-0" />
      )}
    </button>
  );
}