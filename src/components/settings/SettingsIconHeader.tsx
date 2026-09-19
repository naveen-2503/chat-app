import type { ReactNode } from 'react';

interface SettingsIconHeaderProps {
  icon: ReactNode;
  description?: ReactNode;
}

export default function SettingsIconHeader({ icon, description }: SettingsIconHeaderProps) {
  return (
    <div className="flex flex-col items-center text-center px-6 py-6 border-b border-gray-100 dark:border-gray-800">
      <div className="w-20 h-20 rounded-full bg-blue-500 text-white flex items-center justify-center mb-4">
        {icon}
      </div>
      {description && (
        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
      )}
    </div>
  );
}