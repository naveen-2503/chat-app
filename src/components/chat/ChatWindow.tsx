import { useState } from 'react';
import ChatHeader from './ChatHeader';
import MessageBubble from './MessageBubble';
import MessageInput from './MessageInput';
import CallOverlay from '../calls/CallOverlay';
import VideoCallOverlay from '../calls/VideoCallOverlay';
import ContactInfoPanel from './ContactInfoPanel';
import SharedContentPanel from './SharedContentPanel';
import StarredMessagesPanel from './StarredMessagesPanel';
import type { Chat } from '../../types';

interface ChatWindowProps {
  chat: Chat;
  backTo?: string;
}

type SidePanel = 'none' | 'info' | 'media' | 'starred';

export default function ChatWindow({ chat, backTo }: ChatWindowProps) {
  const [messages, setMessages] = useState(chat.messages);
  const [isCalling, setIsCalling] = useState(false);
  const [isVideoCalling, setIsVideoCalling] = useState(false);
  const [sidePanel, setSidePanel] = useState<SidePanel>('none');

  const handleSend = (text: string) => {
    setMessages((prev) => [
      ...prev,
      {
        id: `local-${Date.now()}`,
        senderId: 'me',
        text,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isOwn: true,
      },
    ]);
  };

  const todayDividerIndex = 2;

  return (
    <div className="relative flex w-full h-full bg-gray-50 dark:bg-gray-950 overflow-hidden">
      <div className="flex flex-col flex-1 min-w-0">
        <ChatHeader
          contact={chat.contact}
          backTo={backTo}
          onCallClick={() => setIsCalling(true)}
          onVideoClick={() => setIsVideoCalling(true)}
          onInfoClick={() => setSidePanel(sidePanel === 'info' ? 'none' : 'info')}
        />
        <div className="flex-1 overflow-y-auto px-4 py-4">
          {messages.map((message, index) => (
            <div key={message.id}>
              {index === todayDividerIndex && (
                <div className="flex items-center gap-3 my-4">
                  <div className="flex-1 h-px bg-gray-200" />
                  <span className="text-xs text-gray-400">Today</span>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>
              )}
              <MessageBubble message={message} />
            </div>
          ))}
        </div>
        <MessageInput onSend={handleSend} />

        {isCalling && (
          <CallOverlay contact={chat.contact} onHangUp={() => setIsCalling(false)} />
        )}
        {isVideoCalling && (
          <VideoCallOverlay contact={chat.contact} onHangUp={() => setIsVideoCalling(false)} />
        )}
      </div>

      {sidePanel !== 'none' && (
        <div className="hidden lg:block w-[300px] shrink-0">
          {sidePanel === 'info' && (
            <ContactInfoPanel
              contact={chat.contact}
              onClose={() => setSidePanel('none')}
              onOpenMedia={() => setSidePanel('media')}
              onOpenStarred={() => setSidePanel('starred')}
            />
          )}
          {sidePanel === 'media' && (
            <SharedContentPanel onBack={() => setSidePanel('info')} />
          )}
          {sidePanel === 'starred' && (
            <StarredMessagesPanel messages={messages} onBack={() => setSidePanel('info')} />
          )}
        </div>
      )}
    </div>
  );
}