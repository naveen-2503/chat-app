import { useState } from 'react';
import { Paperclip, Smile, Send } from 'lucide-react';

interface MessageInputProps {
  onSend: (text: string) => void;
}

export default function MessageInput({ onSend }: MessageInputProps) {
  const [value, setValue] = useState('');

  const handleSend = () => {
    const trimmed = value.trim();
    if (!trimmed) return;
    onSend(trimmed);
    setValue('');
  };

  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <button type="button" className="text-gray-400 hover:text-gray-600 shrink-0">
        <Paperclip size={20} />
      </button>
      <div className="flex-1 flex items-center bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2">
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Write a message ..."
          className="flex-1 bg-transparent outline-none text-sm text-gray-900 dark:text-white placeholder:text-gray-400"
        />
        <button type="button" className="text-gray-400 hover:text-gray-600 ml-2">
          <Smile size={18} />
        </button>
      </div>
      <button
        type="button"
        onClick={handleSend}
        className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white hover:bg-blue-700 shrink-0"
      >
        <Send size={16} />
      </button>
    </div>
  );
}