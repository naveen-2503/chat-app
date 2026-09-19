import { ChevronRight } from 'lucide-react';

interface PrivacyListItemProps {
  label: string;
  value: string;
  onClick?: () => void;
}

export default function PrivacyListItem({ label, value, onClick }: PrivacyListItemProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-between w-full px-4 py-3 border-b border-gray-100 dark:border-gray-800 text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
    >
      <div>
        <p className="text-sm text-gray-800 dark:text-gray-100">{label}</p>
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{value}</p>
      </div>
      <ChevronRight size={16} className="text-gray-300 dark:text-gray-600 shrink-0" />
    </button>
  );
}