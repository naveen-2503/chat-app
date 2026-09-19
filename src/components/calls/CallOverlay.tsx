import { useEffect, useState } from 'react';
import Avatar from '../shared/Avatar';
import { currentUser } from '../../data/mockData';
import connectionLine from '../../assets/call-connection-line.png';
import type { Contact } from '../../types';

interface CallOverlayProps {
  contact: Contact;
  onHangUp: () => void;
}

function formatDuration(totalSeconds: number) {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export default function CallOverlay({ contact, onHangUp }: CallOverlayProps) {
  const [isConnected, setIsConnected] = useState(false);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const connectTimer = setTimeout(() => setIsConnected(true), 2500);
    return () => clearTimeout(connectTimer);
  }, []);

  useEffect(() => {
    if (!isConnected) return;
    const interval = setInterval(() => setDuration((d) => d + 1), 1000);
    return () => clearInterval(interval);
  }, [isConnected]);

  return (
    <div className="absolute top-4 right-4 z-40">
      <div className="bg-white rounded-2xl shadow-xl w-120 p-9 flex flex-col items-center gap-4 border border-gray-100">
        <div className="flex items-center gap-3">
          <div className="flex flex-col items-center gap-2">
            <Avatar src={currentUser.avatarUrl} alt={currentUser.name} size="xl" />
            <span className="text-sm font-medium text-gray-700">
              {currentUser.name.split(' ')[0]}
            </span>
          </div>

          <img
            src={connectionLine}
            alt=""
            className={`w-12 h-6 object-contain ${!isConnected ? 'animate-pulse' : ''}`}
          />

          <div className="flex flex-col items-center gap-2">
            <Avatar src={contact.avatarUrl} alt={contact.name} size="xl" />
            <span className="text-sm font-medium text-gray-700">
              {contact.name.split(' ')[0]}
            </span>
          </div>
        </div>

        {isConnected ? (
          <>
            <span className="text-sm font-medium text-green-600">Connected</span>
            <span className="text-lg font-semibold text-gray-800 tabular-nums">
              {formatDuration(duration)}
            </span>
          </>
        ) : (
          <span className="text-sm font-medium text-gray-500">Connecting...</span>
        )}

        <button
          type="button"
          onClick={onHangUp}
          className="px-6 py-2 rounded-full border border-red-200 text-red-500 text-sm font-medium hover:bg-red-50"
        >
          Hang Up
        </button>
      </div>
    </div>
  );
}