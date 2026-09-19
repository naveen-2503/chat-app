import type { Chat, Contact, Group, CallLogEntry, UpdateItem } from '../types';

// --- Current logged-in user ---
export const currentUser: Contact = {
  id: 'me',
  name: 'Pink Panda',
  avatarUrl: 'https://i.pravatar.cc/150?img=5',
  phone: '+91 6265 081 928',
  about: 'Hi there, I am using ChatApp',
};

// --- Contacts ---
export const contacts: Contact[] = [
  { id: 'c1', name: 'Pink Panda', avatarUrl: 'https://i.pravatar.cc/150?img=5', isOnline: true, phone: '+91 6265 081 928', about: 'Hi there, I am using ChatApp' },
  { id: 'c2', name: 'Dog Hat', avatarUrl: 'https://i.pravatar.cc/150?img=8', isOnline: false, phone: '+91 9822 445 210', about: "It's so quite outside 🌙" },
  { id: 'c3', name: 'Cute Turtle', avatarUrl: 'https://i.pravatar.cc/150?img=9', isOnline: true, phone: '+91 7412 990 331', about: 'Busy' },
  { id: 'c4', name: 'Cool Spirit', avatarUrl: 'https://i.pravatar.cc/150?img=15', isOnline: false, phone: '+91 8899 001 122', about: 'Living life one day at a time' },
  { id: 'c5', name: 'Strange Cat', avatarUrl: 'https://i.pravatar.cc/150?img=20', isOnline: true, phone: '+91 9090 776 543', about: 'Available' },
  { id: 'c6', name: 'Fire Fox', avatarUrl: 'https://i.pravatar.cc/150?img=25', isOnline: false, phone: '+91 9988 112 334', about: 'What does the fox say?' },
];

// --- Chats ---
export const chats: Chat[] = [
  {
  id: 'chat1',
  contact: contacts[0],
  pinned: true,
  lastMessage: 'You: Thnx!',
  lastMessageTime: '9:56',
  messages: [
    { id: 'm1', senderId: 'c1', text: 'Hi, How are you?', timestamp: '9:12', isOwn: false, starred: true },
    { id: 'm2', senderId: 'me', text: 'Hi Panda, not bad, u?', timestamp: '9:15', isOwn: true, starred: true },
    { id: 'm3', senderId: 'me', text: 'Can you send me an abstract image?', timestamp: '9:17', isOwn: true, starred: true },
    {
      id: 'm4',
      senderId: 'c1',
      attachment: { type: 'image', url: 'https://picsum.photos/seed/abstract/400/300' },
      timestamp: '10:55',
      isOwn: false,
      reaction: '🔥',
    },
    { id: 'm5', senderId: 'me', text: 'Can you send it as file?', timestamp: '11:12', isOwn: true, starred: true },
    {
      id: 'm6',
      senderId: 'c1',
      attachment: { type: 'file', url: '#', fileName: 'Abstract.png', fileSize: '2.1 MB' },
      timestamp: '11:25',
      isOwn: false,
      starred: true,
    },
    { id: 'm7', senderId: 'me', text: 'Thnx!', timestamp: '11:28', isOwn: true },
  ],
},
  {
    id: 'chat2',
    contact: contacts[1],
    pinned: true,
    unreadCount: 1,
    archived: true,
    lastMessage: "It's so quite outside 🌙",
    lastMessageTime: '9:14',
    messages: [
      { id: 'm1', senderId: 'c2', text: "It's so quite outside 🌙", timestamp: '9:14', isOwn: false },
    ],
  },
  {
    id: 'chat3',
    contact: contacts[2],
    archived: true,
    lastMessage: "That's it. Goodbye!",
    lastMessageTime: '9:35',
    messages: [
      { id: 'm1', senderId: 'c3', text: "That's it. Goodbye!", timestamp: '9:35', isOwn: false },
    ],
  },
  {
    id: 'chat4',
    contact: contacts[3],
    lastMessage: 'Look what I found',
    lastMessageTime: '9:16',
    messages: [
      { id: 'm1', senderId: 'c4', text: 'Look what I found', timestamp: '9:16', isOwn: false },
    ],
  },
  {
    id: 'chat5',
    contact: contacts[4],
    lastMessage: 'You: Hi, sorry to bother you...',
    lastMessageTime: '9:36',
    messages: [
      { id: 'm1', senderId: 'me', text: 'Hi, sorry to bother you...', timestamp: '9:36', isOwn: true },
    ],
  },
  {
    id: 'chat6',
    contact: contacts[5],
    lastMessage: 'What does the fox say?',
    lastMessageTime: '9:36',
    messages: [
      { id: 'm1', senderId: 'c6', text: 'What does the fox say?', timestamp: '9:36', isOwn: false },
    ],
  },
];

// --- Groups ---
export const groups: Group[] = [
  {
    id: 'g1',
    name: 'Animal Kingdom',
    avatarUrl: 'https://picsum.photos/seed/animalkingdom/150/150',
    memberIds: ['c1', 'c3', 'me'],
    pinned: true,
    lastMessage: 'You: Thnx!',
    lastMessageTime: '9:56',
    messages: chats[0].messages,
  },
];

// --- Call logs ---
export const callLogs: CallLogEntry[] = [
  { id: 'call1', contact: contacts[0], type: 'video', status: 'outgoing', timestamp: 'Yesterday, 21:29' },
  { id: 'call2', contact: contacts[1], type: 'audio', status: 'missed', timestamp: 'Yesterday, 16:53' },
  { id: 'call3', contact: contacts[2], type: 'video', status: 'incoming', timestamp: 'Yesterday, 16:53' },
  { id: 'call4', contact: contacts[3], type: 'audio', status: 'outgoing', timestamp: 'Yesterday, 16:53' },
  { id: 'call5', contact: contacts[4], type: 'video', status: 'missed', timestamp: 'Yesterday, 16:53' },
];

// --- Updates / Status ---
export const updates: UpdateItem[] = [
  {
    id: 'u1',
    contact: currentUser,
    imageUrl: 'https://picsum.photos/seed/taj/400/600',
    timestamp: '20m',
    seen: false,
    isOwn: true,
  },
  { id: 'u2', contact: contacts[1], imageUrl: 'https://picsum.photos/seed/doghat/400/600', timestamp: '5 min', seen: false },
  { id: 'u3', contact: contacts[2], imageUrl: 'https://picsum.photos/seed/turtle/400/600', timestamp: '50 min', seen: true },
  { id: 'u4', contact: contacts[3], imageUrl: 'https://picsum.photos/seed/spirit/400/600', timestamp: '23 hr', seen: true },
];

// Additional "own" update photos for the create/edit thumbnail strip
export const myUpdatePhotos: string[] = [
  'https://picsum.photos/seed/taj/400/600',
  'https://picsum.photos/seed/me2/400/600',
  'https://picsum.photos/seed/me3/400/600',
  'https://picsum.photos/seed/me4/400/600',
];

// --- Shared content (for Contact Info panel) ---
export const sharedMedia: string[] = [
  'https://picsum.photos/seed/media1/200/200',
  'https://picsum.photos/seed/media2/200/200',
  'https://picsum.photos/seed/media3/200/200',
  'https://picsum.photos/seed/media4/200/200',
  'https://picsum.photos/seed/media5/200/200',
  'https://picsum.photos/seed/media6/200/200',
];

export interface SharedLink {
  id: string;
  url: string;
  domain: string;
  date: string;
}

export const sharedLinks: SharedLink[] = [
  { id: 'l1', url: 'https://codingmonk.in/blogs', domain: 'codingmonk.in', date: '27th Oct 22' },
  { id: 'l2', url: 'https://codingmonk.in/blogs', domain: 'codingmonk.in', date: '27th Oct 22' },
  { id: 'l3', url: 'https://codingmonk.in/blogs', domain: 'codingmonk.in', date: '27th Oct 22' },
  { id: 'l4', url: 'https://codingmonk.in/blogs', domain: 'codingmonk.in', date: '27th Oct 22' },
];

export interface SharedDoc {
  id: string;
  name: string;
  type: string;
}

export const sharedDocs: SharedDoc[] = [
  { id: 'd1', name: 'Booked Ticket', type: 'pdf' },
  { id: 'd2', name: 'Invoice 22 Oct', type: 'pdf' },
  { id: 'd3', name: 'Sales Report', type: 'xlsx' },
];

export interface GroupInCommon {
  id: string;
  name: string;
  avatarUrl: string;
  memberPreview: string;
}

export const groupsInCommon: GroupInCommon[] = [
  {
    id: 'g1',
    name: "Camel's Gang",
    avatarUrl: 'https://picsum.photos/seed/camelsgang/150/150',
    memberPreview: 'Owl, Parrot, Rabbit, You',
  },
];
export interface BlockedContact {
  id: string;
  name: string;
  avatarUrl: string;
  note: string;
}

export const blockedContacts: BlockedContact[] = [
  { id: 'b1', name: 'Dinesh', avatarUrl: 'https://i.pravatar.cc/150?img=33', note: 'Enjoy life to the fullest' },
  { id: 'b2', name: 'Dog Hat', avatarUrl: 'https://i.pravatar.cc/150?img=8', note: 'You can call me at random...' },
  { id: 'b3', name: 'Cute Turtle', avatarUrl: 'https://i.pravatar.cc/150?img=9', note: 'Almost there' },
  { id: 'b4', name: 'Cool Spirit', avatarUrl: 'https://i.pravatar.cc/150?img=15', note: 'Fiddling with ideas' },
  { id: 'b5', name: 'Strange Cat', avatarUrl: 'https://i.pravatar.cc/150?img=20', note: 'Omw to discover myself' },
];