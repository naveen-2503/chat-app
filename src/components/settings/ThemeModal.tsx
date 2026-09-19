import { useState } from 'react';
import Modal from '../shared/Modal';

export type ThemeChoice = 'light' | 'dark' | 'system';

interface ThemeModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentTheme: ThemeChoice;
  onApply: (theme: ThemeChoice) => void;
}

const options: { value: ThemeChoice; label: string }[] = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
  { value: 'system', label: 'System Default' },
];

export default function ThemeModal({ isOpen, onClose, currentTheme, onApply }: ThemeModalProps) {
  const [selected, setSelected] = useState<ThemeChoice>(currentTheme);

  const handleApply = () => {
    onApply(selected);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} showCloseButton={false}>
      <div className="px-5 pt-5 pb-4">
        <h2 className="text-base font-semibold text-gray-900 mb-3">Choose Theme</h2>
        <div className="flex flex-col gap-3">
          {options.map((opt) => (
            <label key={opt.value} className="flex items-center gap-3 cursor-pointer">
              <input
                type="radio"
                name="theme"
                checked={selected === opt.value}
                onChange={() => setSelected(opt.value)}
                className="w-4 h-4 accent-blue-600"
              />
              <span className="text-sm text-gray-800">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-end gap-3 px-5 pb-5">
        <button
          type="button"
          onClick={onClose}
          className="px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleApply}
          className="px-5 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
        >
          Apply
        </button>
      </div>
    </Modal>
  );
}