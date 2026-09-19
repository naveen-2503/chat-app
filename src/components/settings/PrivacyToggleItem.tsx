interface PrivacyToggleItemProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function PrivacyToggleItem({
  label,
  description,
  checked,
  onChange,
}: PrivacyToggleItemProps) {
  return (
    <div className="flex items-start justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800">
      <div className="pr-4">
        <p className="text-sm text-gray-800 dark:text-gray-100">{label}</p>
        {description && <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{description}</p>}
      </div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="w-4 h-4 mt-1 accent-blue-600 shrink-0"
      />
    </div>
  );
}