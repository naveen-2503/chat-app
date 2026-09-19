import { Video, Phone, Search, ChevronDown, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Avatar from '../shared/Avatar';
import type { Contact } from '../../types';

interface ChatHeaderProps {
  contact: Contact;
  backTo?: string;
  onCallClick?: () => void;
  onVideoClick?: () => void;
  onInfoClick?: () => void;
}

export default function ChatHeader({
  contact,
  backTo,
  onCallClick,
  onVideoClick,
  onInfoClick,
}: ChatHeaderProps) {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-between px-4 py-3 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 shrink-0">
      <div className="flex items-center gap-3">
        {backTo && (
          <button
            type="button"
            onClick={() => navigate(backTo)}
            className="md:hidden text-gray-500"
          >
            <ArrowLeft size={20} />
          </button>
        )}
        <button type="button" onClick={onInfoClick} className="flex items-center gap-3">
          <Avatar src={contact.avatarUrl} alt={contact.name} size="md" />
          <div className="text-left">
            <p className="text-sm font-semibold text-gray-900 dark:text-white">{contact.name}</p>
<p className="text-xs text-gray-400 dark:text-gray-500">
  {contact.isOnline ? 'Online' : 'Offline'}
</p>
          </div>
        </button>
      </div>
      <div className="flex items-center gap-8 text-gray-400">
        <button type="button" onClick={onVideoClick} className="hover:text-gray-600">
          <Video size={18} />
        </button>
        <button type="button" onClick={onCallClick} className="hover:text-gray-600">
          <Phone size={18} />
        </button>
        <button type="button" className="hover:text-gray-600">
          <Search size={18} />
        </button>
        <button type="button" onClick={onInfoClick} className="hover:text-gray-600">
          <ChevronDown size={18} />
        </button>
      </div>
    </div>
  );
}