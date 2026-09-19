import emptyStateIllustration from '../../assets/empty-states-illustration.svg';

interface EmptyStateProps {
  title: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({ title, actionLabel, onAction }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-4 px-4 text-center">
      <img
        src={emptyStateIllustration}
        alt=""
        className="w-40 h-40 object-contain"
      />
      <p className="text-sm text-gray-500 dark:text-gray-400">
        {title}
        {actionLabel && (
          <>
            {' '}
            <button
              type="button"
              onClick={onAction}
              className="text-blue-600 font-medium hover:underline"
            >
              {actionLabel}
            </button>
          </>
        )}
      </p>
    </div>
  );
}