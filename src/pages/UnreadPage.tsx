import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FilteredChatHeader from '../components/chat/FilteredChatHeader';
import ChatList from '../components/chat/ChatList';
import ChatWindow from '../components/chat/ChatWindow';
import SearchBar from '../components/shared/SearchBar';
import EmptyState from '../components/shared/EmptyState';
import { chats as allChats } from '../data/mockData';

export default function UnreadPage() {
  const { chatId } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const unreadChats = allChats.filter(
    (chat) =>
      !!chat.unreadCount &&
      chat.contact.name.toLowerCase().includes(search.toLowerCase())
  );

  const activeChat = allChats.find((c) => c.id === chatId);

  return (
    <>
      <div
        className={`flex-col w-full md:w-[340px] border-r border-gray-100 shrink-0 ${
          chatId ? 'hidden md:flex' : 'flex'
        }`}
      >
        <FilteredChatHeader title="Unread" />
        <div className="px-4 pb-2">
          <SearchBar placeholder="Search" value={search} onChange={setSearch} showFilter={false} />
        </div>
        <ChatList
  chats={unreadChats}
  activeChatId={chatId}
  onSelectChat={(id) => navigate(`/unread/${id}`)}
  emptyMessage="No Unread Messages"
  flat
/>
      </div>

      <div className={`flex-1 min-w-0 ${chatId ? 'flex' : 'hidden md:flex'}`}>
        {activeChat ? (
          <ChatWindow chat={activeChat} backTo="/unread" />
        ) : (
          <EmptyState title="Select a conversation to view" />
        )}
      </div>
    </>
  );
}