import { Trash2, X, Plus, Send } from 'lucide-react';
import { useState } from 'react';

interface CreateEditUpdateViewProps {
  photos: string[];
  onClose: () => void;
  onDelete?: () => void;
}

export default function CreateEditUpdateView({ photos, onClose, onDelete }: CreateEditUpdateViewProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [photoList, setPhotoList] = useState(photos);
  const activePhoto = photoList[activeIndex];

  const removePhoto = (index: number) => {
    setPhotoList((prev) => prev.filter((_, i) => i !== index));
    if (activeIndex >= index && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col w-full h-full bg-white">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <p className="text-sm font-semibold text-gray-900">Pink Panda (Me)</p>
        <div className="flex items-center gap-3 text-gray-400">
          <button type="button" onClick={onDelete} className="hover:text-red-500" aria-label="Delete update">
            <Trash2 size={18} />
          </button>
          <button type="button" onClick={onClose} className="hover:text-gray-600" aria-label="Close">
            <X size={18} />
          </button>
        </div>
      </div>

      <div className="flex-1 w-full flex items-center justify-center px-4 py-4 min-h-0">
        <div className="relative h-full max-h-full aspect-[9/16] rounded-2xl overflow-hidden bg-gray-100">
          {activePhoto && (
            <img src={activePhoto} alt="My update" className="w-full h-full object-cover" />
          )}
        </div>
      </div>

      <div className="flex items-center gap-3 px-4 py-4 border-t border-gray-100 overflow-x-auto">
        <button
          type="button"
          className="flex items-center justify-center w-12 h-12 rounded-xl border-2 border-dashed border-gray-300 text-gray-400 hover:border-blue-400 hover:text-blue-400 shrink-0"
          aria-label="Add photo"
        >
          <Plus size={18} />
        </button>
        {photoList.map((photo, index) => (
          <div key={photo + index} className="relative shrink-0">
            <button
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`w-12 h-12 rounded-xl overflow-hidden block ${
                index === activeIndex ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <img src={photo} alt="" className="w-full h-full object-cover" />
            </button>
            <button
              type="button"
              onClick={() => removePhoto(index)}
              className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-white shadow flex items-center justify-center text-gray-500 hover:text-red-500"
              aria-label="Remove photo"
            >
              <X size={10} />
            </button>
          </div>
        ))}
        <button
          type="button"
          className="ml-auto flex items-center justify-center w-9 h-9 rounded-full bg-blue-600 text-white shrink-0"
          aria-label="Post update"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
}