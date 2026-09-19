export interface Contact {
  id: string;
  name: string;
  avatarUrl: string;
  isOnline?: boolean;
  phone?: string;
  about?: string;
}

export interface Attachment {
  type: 'image' | 'file';
  url: string;
  fileName?: string;
  fileSize?: string;
}

export interface Message {
  id: string;
  senderId: string;
  text?: string;
  attachment?: Attachment;
  timestamp: string;
  starred?: boolean;
  isOwn: boolean;
  reaction?: string;
}

export interface Chat {
  id: string;
  contact: Contact;
  messages: Message[];
  lastMessage: string;
  lastMessageTime: string;
  unreadCount?: number;
  pinned?: boolean;
  archived?: boolean;
}

export interface Group {
  id: string;
  name: string;
  avatarUrl: string;
  memberIds: string[];
  messages: Message[];
  lastMessage: string;
  lastMessageTime: string;
  pinned?: boolean;
}

export type CallType = 'audio' | 'video';
export type CallStatus = 'incoming' | 'outgoing' | 'missed';

export interface CallLogEntry {
  id: string;
  contact: Contact;
  type: CallType;
  status: CallStatus;
  timestamp: string;
}

export interface UpdateItem {
  id: string;
  contact: Contact;
  imageUrl: string;
  timestamp: string;
  seen: boolean;
  isOwn?: boolean;
}

export type Theme = 'light' | 'dark';