import Toggle from '../shared/Toggle';

interface NotificationToggleRowProps {
  label: string;
  description?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function NotificationToggleRow({
  label,
  description,
  checked,
  onChange,
}: NotificationToggleRowProps) {
  return (
    <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 dark:border-gray-800">
      <div className="min-w-0 pr-4">
        <p className="text-sm text-gray-800 dark:text-gray-100">{label}</p>
        {description && <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{description}</p>}
      </div>
      <Toggle checked={checked} onChange={onChange} label={label} />
    </div>
  );
}