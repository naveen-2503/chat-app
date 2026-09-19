import Modal from '../shared/Modal';

interface Shortcut {
  label: string;
  keys: string[];
}

const leftColumn: Shortcut[] = [
  { label: 'Mark as unread', keys: ['Cmd', 'Shift', 'U'] },
  { label: 'Archive chat', keys: ['Cmd', 'Shift', 'E'] },
  { label: 'Pin chat', keys: ['Cmd', 'Shift', 'P'] },
  { label: 'Search Chat', keys: ['Cmd', 'Shift', 'F'] },
  { label: 'Next Chat', keys: ['Ctrl', 'Tab'] },
  { label: 'New Group', keys: ['Cmd', 'Shift', 'N'] },
  { label: 'Increase speed of voice message', keys: ['Shift', '.'] },
  { label: 'Settings', keys: ['Shift', ','] },
  { label: 'Settings', keys: ['Cmd', 'G'] },
];

const rightColumn: Shortcut[] = [
  { label: 'Mute', keys: ['Cmd', 'Shift', 'M'] },
  { label: 'Delete chat', keys: ['Cmd', 'Shift', 'D'] },
  { label: 'Search', keys: ['Cmd', 'F'] },
  { label: 'New Chat', keys: ['Cmd', 'N'] },
  { label: 'Previous Chat', keys: ['Ctrl', 'Shift', 'Tab'] },
  { label: 'Profile & About', keys: ['Cmd', 'P'] },
  { label: 'Decrease speed of voice message', keys: ['Shift', ','] },
  { label: 'Emoji Panel', keys: ['Cmd', 'E'] },
  { label: 'Sticker Panel', keys: ['Cmd', 'S'] },
];

function ShortcutRow({ shortcut }: { shortcut: Shortcut }) {
  return (
    <div className="flex items-center justify-between gap-3 py-2">
      <span className="text-sm text-gray-700">{shortcut.label}</span>
      <div className="flex items-center gap-1 shrink-0">
        {shortcut.keys.map((key, i) => (
          <kbd
            key={i}
            className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded"
          >
            {key}
          </kbd>
        ))}
      </div>
    </div>
  );
}

interface KeyboardShortcutsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function KeyboardShortcutsModal({ isOpen, onClose }: KeyboardShortcutsModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} showCloseButton={false} size="lg">
      <div className="px-5 pt-5 pb-2 max-w-2xl">
        <h2 className="text-base font-semibold text-gray-900 mb-3">Keyboard Shortcuts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 divide-y sm:divide-y-0 divide-gray-100 max-h-[60vh] overflow-y-auto">
          <div className="divide-y divide-gray-100">
            {leftColumn.map((s, i) => (
              <ShortcutRow key={i} shortcut={s} />
            ))}
          </div>
          <div className="divide-y divide-gray-100">
            {rightColumn.map((s, i) => (
              <ShortcutRow key={i} shortcut={s} />
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end px-5 py-4">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
        >
          OK
        </button>
      </div>
    </Modal>
  );
}