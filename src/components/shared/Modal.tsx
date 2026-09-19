import { useEffect, type ReactNode } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  showCloseButton?: boolean;
  size?: 'sm' | 'lg';
}

const sizeClasses = {
  sm: 'max-w-sm',
  lg: 'max-w-2xl',
};

export default function Modal({
  isOpen,
  onClose,
  children,
  title,
  showCloseButton = true,
  size = 'sm',
}: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4"
      onClick={onClose}
    >
      <div
        className={`bg-white rounded-2xl shadow-xl w-full ${sizeClasses[size]} max-h-[85vh] overflow-hidden flex flex-col`}
        onClick={(e) => e.stopPropagation()}
      >
        {(title || showCloseButton) && (
          <div className="flex items-center justify-between px-5 pt-5 pb-2">
            {title && <h2 className="text-base font-semibold text-gray-900">{title}</h2>}
            {showCloseButton && (
              <button
                type="button"
                onClick={onClose}
                className="ml-auto text-gray-400 hover:text-gray-600"
              >
                <X size={18} />
              </button>
            )}
          </div>
        )}
        {children}
      </div>
    </div>
  );
}