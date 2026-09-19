import { ArrowLeft } from 'lucide-react';
import MessageBubble from './MessageBubble';
import type { Message } from '../../types';

interface StarredMessagesPanelProps {
  messages: Message[];
  onBack: () => void;
}

export default function StarredMessagesPanel({ messages, onBack }: StarredMessagesPanelProps) {
  const starred = messages.filter((m) => m.starred);

  return (
    <div className="flex flex-col w-full h-full bg-white border-l border-gray-100">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
        <button type="button" onClick={onBack} className="text-gray-500 hover:text-gray-700">
          <ArrowLeft size={18} />
        </button>
        <h2 className="text-sm font-semibold text-gray-900">Starred Messages</h2>
      </div>
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {starred.length === 0 ? (
          <p className="text-sm text-gray-400 text-center pt-6">No starred messages yet</p>
        ) : (
          <>
            <p className="text-xs text-gray-400 mb-3">27th Oct 22</p>
            {starred.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
          </>
        )}
      </div>
    </div>
  );
}