import { useState } from 'react';
import GroupHeader from './GroupHeader';
import MessageBubble from '../chat/MessageBubble';
import MessageInput from '../chat/MessageInput';
import type { Group, Contact } from '../../types';

interface GroupChatWindowProps {
  group: Group;
  members: Contact[];
  backTo?: string;
}

export default function GroupChatWindow({ group, members, backTo }: GroupChatWindowProps) {
  const [messages, setMessages] = useState(group.messages);

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

  return (
    <div className="flex flex-col w-full h-full bg-gray-50 dark:bg-gray-950">
      <GroupHeader group={group} members={members} backTo={backTo} />
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))}
      </div>
      <MessageInput onSend={handleSend} />
    </div>
  );
}