import type { ReactNode } from 'react';
import { ChevronRight } from 'lucide-react';

interface SettingsListItemProps {
  icon: ReactNode;
  label: string;
  onClick?: () => void;
}

export default function SettingsListItem({ icon, label, onClick }: SettingsListItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center gap-3 w-full px-4 py-3 border-b border-gray-100 dark:border-gray-800 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
    >
      <span className="text-gray-500 dark:text-gray-400 shrink-0">{icon}</span>
      <span className="flex-1 text-sm text-gray-800 dark:text-gray-100">{label}</span>
      <ChevronRight size={16} className="text-gray-300 dark:text-gray-600 shrink-0" />
    </button>
  );
}