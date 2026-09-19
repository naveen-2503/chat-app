import { Search, SlidersHorizontal } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  showFilter?: boolean;
  onFilterClick?: () => void;
}

export default function SearchBar({
  placeholder = 'Search',
  value,
  onChange,
  showFilter = true,
  onFilterClick,
}: SearchBarProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center flex-1 bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2 gap-2">
        <Search size={16} className="text-gray-400 shrink-0" />
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="bg-transparent outline-none text-sm w-full text-gray-900 dark:text-white placeholder:text-gray-400"
        />
      </div>
      {showFilter && (
        <button
          type="button"
          onClick={onFilterClick}
          className="flex items-center justify-center w-9 h-9 rounded-lg bg-gray-100 text-gray-500 hover:bg-gray-200 shrink-0"
        >
          <SlidersHorizontal size={16} />
        </button>
      )}
    </div>
  );
}