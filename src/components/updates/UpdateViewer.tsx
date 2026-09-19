import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { useState } from 'react';
import type { UpdateItem } from '../../types';

interface UpdateViewerProps {
  update: UpdateItem;
  onClose: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev?: boolean;
  hasNext?: boolean;
}

export default function UpdateViewer({
  update,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}: UpdateViewerProps) {
  const [reply, setReply] = useState('');

  return (
    <div className="flex flex-col w-full h-full bg-white">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <p className="text-sm font-semibold text-gray-900">
          {update.isOwn ? `${update.contact.name} (Me)` : update.contact.name}
        </p>
        <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X size={18} />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center gap-4 px-4 py-4 min-h-0">
        <button
          type="button"
          onClick={onPrev}
          disabled={!hasPrev}
          className="text-gray-300 hover:text-gray-500 disabled:opacity-0 disabled:pointer-events-none shrink-0"
          aria-label="Previous update"
        >
          <ChevronLeft size={28} />
        </button>

        <div className="relative h-full max-h-full aspect-[9/16] rounded-2xl overflow-hidden bg-gray-100">
          <div className="absolute top-2 left-2 right-2 h-1 bg-white/40 rounded-full overflow-hidden">
            <div className="h-full w-full bg-white" />
          </div>
          <img
            src={update.imageUrl}
            alt="Status update"
            className="w-full h-full object-cover"
          />
        </div>

        <button
          type="button"
          onClick={onNext}
          disabled={!hasNext}
          className="text-gray-300 hover:text-gray-500 disabled:opacity-0 disabled:pointer-events-none shrink-0"
          aria-label="Next update"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {!update.isOwn && (
        <div className="flex items-center gap-2 px-4 py-3 border-t border-gray-100">
          <input
            type="text"
            value={reply}
            onChange={(e) => setReply(e.target.value)}
            placeholder="Write a message ..."
            className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm outline-none placeholder:text-gray-400"
          />
          <button
            type="button"
            onClick={() => setReply('')}
            className="flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white shrink-0"
          >
            <ChevronRight size={16} className="-rotate-45" />
          </button>
        </div>
      )}
    </div>
  );
}