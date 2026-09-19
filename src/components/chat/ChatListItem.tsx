import Avatar from '../shared/Avatar';
import type { Chat } from '../../types';

interface ChatListItemProps {
  chat: Chat;
  active?: boolean;
  onClick?: () => void;
}

export default function ChatListItem({ chat, active, onClick }: ChatListItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-lg text-left transition-colors ${
        active ? 'bg-blue-50 dark:bg-blue-900/30' : 'hover:bg-gray-50 dark:hover:bg-gray-800'
      }`}
    >
      <Avatar src={chat.contact.avatarUrl} alt={chat.contact.name} size="lg" />
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className="font-medium text-sm text-gray-900 dark:text-white truncate">
            {chat.contact.name}
          </span>
          <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0">{chat.lastMessageTime}</span>
        </div>
        <div className="flex items-center justify-between gap-2 mt-0.5">
          <span className="text-sm text-gray-500 dark:text-gray-400 truncate">{chat.lastMessage}</span>
          {!!chat.unreadCount && (
            <span className="flex items-center justify-center min-w-[18px] h-[18px] px-1 rounded-full bg-green-500 text-white text-[10px] font-medium shrink-0">
              {chat.unreadCount}
            </span>
          )}
        </div>
      </div>
    </button>
  );
}