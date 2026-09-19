import { X, Phone, Video, Star, Bell, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Avatar from '../shared/Avatar';
import Toggle from '../shared/Toggle';
import { sharedMedia, groupsInCommon } from '../../data/mockData';
import type { Contact } from '../../types';

interface ContactInfoPanelProps {
  contact: Contact;
  onClose: () => void;
  onOpenMedia: () => void;
  onOpenStarred: () => void;
}

export default function ContactInfoPanel({
  contact,
  onClose,
  onOpenMedia,
  onOpenStarred,
}: ContactInfoPanelProps) {
  const [muted, setMuted] = useState(false);

  return (
    <div className="flex flex-col w-full h-full bg-white border-l border-gray-100">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <h2 className="text-sm font-semibold text-gray-900">Contact Info</h2>
        <button type="button" onClick={onClose} className="text-gray-400 hover:text-gray-600">
          <X size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-5 py-5">
        <div className="flex flex-col items-center gap-3 mb-6">
          <Avatar src={contact.avatarUrl} alt={contact.name} size="xl" />
          <div className="text-center">
            <p className="text-base font-semibold text-gray-900">{contact.name}</p>
            {contact.phone && <p className="text-sm text-gray-400 mt-0.5">{contact.phone}</p>}
          </div>
          <div className="flex items-center gap-8 mt-2">
            <button type="button" className="flex flex-col items-center gap-1 text-blue-600">
              <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center">
                <Phone size={18} />
              </div>
              <span className="text-xs">Audio</span>
            </button>
            <button type="button" className="flex flex-col items-center gap-1 text-blue-600">
              <div className="w-11 h-11 rounded-full bg-blue-50 flex items-center justify-center">
                <Video size={18} />
              </div>
              <span className="text-xs">Video</span>
            </button>
          </div>
        </div>

        {contact.about && (
          <div className="mb-5">
            <p className="text-xs text-gray-400 mb-1">About</p>
            <p className="text-sm text-gray-700">{contact.about}</p>
          </div>
        )}

        <button
          type="button"
          onClick={onOpenMedia}
          className="w-full flex items-center justify-between mb-2"
        >
          <p className="text-xs text-gray-400">Media, links and docs</p>
          <div className="flex items-center gap-1 text-gray-400">
            <span className="text-xs">{sharedMedia.length}</span>
            <ChevronRight size={14} />
          </div>
        </button>
        <div className="grid grid-cols-3 gap-2 mb-5">
          {sharedMedia.slice(0, 3).map((url, i) => (
            <img
              key={i}
              src={url}
              alt="Shared media"
              className="w-full aspect-square object-cover rounded-lg"
            />
          ))}
        </div>

        <button
          type="button"
          onClick={onOpenStarred}
          className="flex items-center justify-between w-full py-3 border-t border-gray-100 text-sm text-gray-700"
        >
          <span className="flex items-center gap-2">
            <Star size={16} className="text-gray-400" />
            Starred Messages
          </span>
          <ChevronRight size={16} className="text-gray-300" />
        </button>

        <div className="flex items-center justify-between w-full py-3 border-t border-gray-100 text-sm text-gray-700">
          <span className="flex items-center gap-2">
            <Bell size={16} className="text-gray-400" />
            Mute Notifications
          </span>
          <Toggle checked={muted} onChange={setMuted} label="Mute notifications" />
        </div>

        {groupsInCommon.length > 0 && (
          <div className="border-t border-gray-100 pt-3 mt-1">
            <p className="text-xs text-gray-400 mb-2">
              {groupsInCommon.length} group in common
            </p>
            {groupsInCommon.map((group) => (
              <div key={group.id} className="flex items-center gap-3 py-1.5">
                <Avatar src={group.avatarUrl} alt={group.name} size="md" />
                <div className="min-w-0">
                  <p className="text-sm text-gray-800 truncate">{group.name}</p>
                  <p className="text-xs text-gray-400 truncate">{group.memberPreview}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-3 px-5 py-4 border-t border-gray-100">
        <button
          type="button"
          className="flex-1 flex items-center justify-center gap-2 border border-gray-200 rounded-lg py-2 text-sm text-gray-600 hover:bg-gray-50"
        >
          Block
        </button>
        <button
          type="button"
          className="flex-1 flex items-center justify-center gap-2 border border-red-200 rounded-lg py-2 text-sm text-red-500 hover:bg-red-50"
        >
          Delete
        </button>
      </div>
    </div>
  );
}