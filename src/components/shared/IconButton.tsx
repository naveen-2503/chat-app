import type { ReactNode, ButtonHTMLAttributes } from 'react';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  active?: boolean;
  variant?: 'default' | 'sidebar' | 'ghost';
}

export default function IconButton({
  icon,
  active = false,
  variant = 'default',
  className = '',
  ...props
}: IconButtonProps) {
  const base = 'flex items-center justify-center rounded-lg transition-colors shrink-0';

  const variants = {
    default:
      'w-9 h-9 text-gray-500 hover:bg-gray-100 hover:text-gray-700',
    sidebar: `w-11 h-11 ${
      active
        ? 'bg-blue-600 text-white'
        : 'text-blue-200 hover:bg-blue-700/50 hover:text-white'
    }`,
    ghost: 'w-8 h-8 text-gray-400 hover:text-gray-600',
  };

  return (
    <button
      type="button"
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {icon}
    </button>
  );
}