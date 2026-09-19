import { PhoneOff } from 'lucide-react';
import type { Contact } from '../../types';

interface VideoCallOverlayProps {
  contact: Contact;
  onHangUp: () => void;
}

export default function VideoCallOverlay({ contact, onHangUp }: VideoCallOverlayProps) {
  return (
    <div className="absolute top-4 right-4 z-40 w-[420px] max-w-[calc(100%-2rem)] h-72 rounded-2xl overflow-hidden shadow-xl">
      {/* Main video feed - the other person */}
      <img
        src={contact.avatarUrl.replace('150', '800')}
        alt={contact.name}
        className="w-full h-full object-cover"
      />

      {/* Self picture-in-picture */}
      <div className="absolute top-3 right-3 w-16 h-16 rounded-xl overflow-hidden border-2 border-white shadow-md">
        <img
          src="https://i.pravatar.cc/300?img=47"
          alt="You"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Hang up button */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
        <button
          type="button"
          onClick={onHangUp}
          className="flex items-center justify-center w-11 h-11 rounded-full bg-red-500 text-white shadow-lg hover:bg-red-600 transition-colors"
          aria-label="Hang up"
        >
          <PhoneOff size={18} />
        </button>
      </div>
    </div>
  );
}