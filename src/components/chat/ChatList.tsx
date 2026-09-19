import type { Chat } from '../../types';
import ChatListItem from './ChatListItem';

interface ChatListProps {
  chats: Chat[];
  activeChatId?: string;
  onSelectChat: (chatId: string) => void;
  emptyMessage?: string;
  flat?: boolean;
}

export default function ChatList({
  chats,
  activeChatId,
  onSelectChat,
  emptyMessage = 'No chats yet',
  flat = false,
}: ChatListProps) {
  if (chats.length === 0) {
    return (
      <div className="flex items-center justify-center h-full text-sm text-gray-400 px-4 text-center">
        {emptyMessage}
      </div>
    );
  }

  if (flat) {
    return (
      <div className="flex-1 overflow-y-auto px-2">
        {chats.map((chat) => (
          <ChatListItem
            key={chat.id}
            chat={chat}
            active={chat.id === activeChatId}
            onClick={() => onSelectChat(chat.id)}
          />
        ))}
      </div>
    );
  }

  const pinned = chats.filter((c) => c.pinned);
  const others = chats.filter((c) => !c.pinned);

  return (
    <div className="flex-1 overflow-y-auto px-2">
      {pinned.length > 0 && (
        <div className="mb-2">
          <p className="px-3 py-1.5 text-xs font-medium text-gray-400">Pinned</p>
          {pinned.map((chat) => (
            <ChatListItem
              key={chat.id}
              chat={chat}
              active={chat.id === activeChatId}
              onClick={() => onSelectChat(chat.id)}
            />
          ))}
        </div>
      )}

      {others.length > 0 && (
        <div>
          <p className="px-3 py-1.5 text-xs font-medium text-gray-400">All Chats</p>
          {others.map((chat) => (
            <ChatListItem
              key={chat.id}
              chat={chat}
              active={chat.id === activeChatId}
              onClick={() => onSelectChat(chat.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
}