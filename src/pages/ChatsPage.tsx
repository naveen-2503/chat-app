import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ChatList from '../components/chat/ChatList';
import SearchBar from '../components/shared/SearchBar';
import { ArchiveRestore } from 'lucide-react';
import EmptyState from '../components/shared/EmptyState';
import { chats as allChats } from '../data/mockData';
import ChatWindow from '../components/chat/ChatWindow';

export default function ChatsPage() {
  const { chatId } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const visibleChats = allChats.filter(
    (chat) =>
      !chat.archived &&
      chat.contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const activeChat = allChats.find((c) => c.id === chatId);

  return (
    <>
      {/* Middle pane: chat list */}
      <div
        className={`flex-col w-full md:w-[340px] border-r border-gray-100 dark:border-gray-800 shrink-0 ${
          chatId ? 'hidden md:flex' : 'flex'
        }`}
      >
        <div className="px-4 pt-4 pb-2">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
            Chats
          </h1>
          <SearchBar
  placeholder="Search"
  value={search}
  onChange={setSearch}
  onFilterClick={() => navigate('/unread')}
/>
        </div>
        <button
  type="button"
  onClick={() => navigate('/archive')}
  className="flex items-center gap-2 w-full px-4 py-2.5 text-sm text-blue-600 font-medium border-b border-gray-100 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-800"
>
  <ArchiveRestore size={16} />
  Archived
</button>
        <ChatList
          chats={visibleChats}
          activeChatId={chatId}
          onSelectChat={(id) => navigate(`/chats/${id}`)}
          emptyMessage="No chats found"
        />
      </div>

      {/* Right pane: chat window or empty state */}
      <div className={`flex-1 min-w-0 ${chatId ? 'flex' : 'hidden md:flex'}`}>
        {activeChat ? (
          <ChatWindow chat={activeChat} backTo="/chats" />
     ) : (
       <EmptyState title="Select a conversation or start a" actionLabel="new one" />
      )}
      </div>
    </>
  );
}