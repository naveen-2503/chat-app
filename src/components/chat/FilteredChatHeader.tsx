import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface FilteredChatHeaderProps {
  title: string;
}

export default function FilteredChatHeader({ title }: FilteredChatHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-3 px-4 pt-4 pb-2">
      <button
        type="button"
        onClick={() => navigate('/chats')}
        className="text-gray-500 hover:text-gray-700"
        aria-label="Back to chats"
      >
        <ArrowLeft size={20} />
      </button>
      <h1 className="text-xl font-semibold text-gray-900">{title}</h1>
    </div>
  );
}