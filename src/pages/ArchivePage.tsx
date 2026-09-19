import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import FilteredChatHeader from '../components/chat/FilteredChatHeader';
import ChatList from '../components/chat/ChatList';
import ChatWindow from '../components/chat/ChatWindow';
import SearchBar from '../components/shared/SearchBar';
import EmptyState from '../components/shared/EmptyState';
import { chats as allChats } from '../data/mockData';

export default function ArchivePage() {
  const { chatId } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState('');

  const archivedChats = allChats.filter(
    (chat) =>
      chat.archived &&
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
        <FilteredChatHeader title="Archive" />
        <div className="px-4 pb-2">
          <SearchBar placeholder="Search" value={search} onChange={setSearch} showFilter={false} />
        </div>
        <ChatList
          chats={archivedChats}
          activeChatId={chatId}
          onSelectChat={(id) => navigate(`/archive/${id}`)}
          emptyMessage="No archived chats"
        />
      </div>

      <div className={`flex-1 min-w-0 ${chatId ? 'flex' : 'hidden md:flex'}`}>
        {activeChat ? (
          <ChatWindow chat={activeChat} backTo="/archive" />
        ) : (
          <EmptyState title="Select a conversation to view" />
        )}
      </div>
    </>
  );
}