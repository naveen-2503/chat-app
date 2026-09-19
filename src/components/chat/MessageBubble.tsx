import { Download, FileImage } from 'lucide-react';
import type { Message } from '../../types';

interface MessageBubbleProps {
  message: Message;
}

export default function MessageBubble({ message }: MessageBubbleProps) {
  const { isOwn, text, attachment, timestamp, reaction } = message;

  return (
    <div className={`flex ${isOwn ? 'justify-end' : 'justify-start'} mb-3`}>
      <div className={`flex flex-col ${isOwn ? 'items-end' : 'items-start'} max-w-[70%]`}>
        {text && (
          <div
            className={`px-4 py-2.5 rounded-2xl text-sm ${
              isOwn
                ? 'bg-blue-600 text-white rounded-br-sm'
                : 'bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-bl-sm shadow-sm'
            }`}
          >
            {text}
          </div>
        )}

        {attachment?.type === 'image' && (
          <img
            src={attachment.url}
            alt="Shared attachment"
            className="w-56 h-40 object-cover rounded-xl mt-1"
          />
        )}

        {attachment?.type === 'file' && (
          <div className="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl px-4 py-3 mt-1 shadow-sm min-w-[220px]">
            <div className="w-9 h-9 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 shrink-0">
              <FileImage size={18} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-800 dark:text-gray-100 truncate">{attachment.fileName}</p>
              {attachment.fileSize && (
                <p className="text-xs text-gray-400">{attachment.fileSize}</p>
              )}
            </div>
            <button type="button" className="text-gray-400 hover:text-gray-600 shrink-0">
              <Download size={16} />
            </button>
          </div>
        )}

        {reaction && (
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white shadow-sm text-xs mt-1 -translate-y-2">
            {reaction}
          </span>
        )}

        <span className="text-[11px] text-gray-400 dark:text-gray-500 mt-1">{timestamp}</span>
      </div>
    </div>
  );
}