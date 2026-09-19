import { MessageCircle, Users, Phone, Settings } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import Avatar from '../shared/Avatar';
import Toggle from '../shared/Toggle';
import { currentUser } from '../../data/mockData';
import logoIcon from '../../assets/budgie.png';

interface NavItem {
  to: string;
  icon: React.ReactNode;
  label: string;
}

const navItems: NavItem[] = [
  { to: '/chats', icon: <MessageCircle size={20} />, label: 'Chats' },
  { to: '/groups', icon: <Users size={20} />, label: 'Groups' },
  { to: '/calls', icon: <Phone size={20} />, label: 'Calls' },
  { to: '/settings', icon: <Settings size={20} />, label: 'Settings' },
];

interface SidebarProps {
  darkMode: boolean;
  onToggleDarkMode: (checked: boolean) => void;
}

export default function Sidebar({ darkMode, onToggleDarkMode }: SidebarProps) {
  return (
    <div className="flex flex-col items-center justify-between w-[95px] py-4 bg-gray-50 border-r border-gray-200 h-full shrink-0">
      <div className="flex flex-col items-center gap-3 w-full px-3">
        <NavLink to="/chats" className="w-11 h-11 flex items-center justify-center rounded-xl bg-blue-100 overflow-hidden mb-3">
          <img src={logoIcon} alt="App logo" className="w-full h-full object-cover" />
        </NavLink>

        <nav className="flex flex-col items-center gap-2 w-full">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex items-center justify-center w-11 h-11 rounded-xl transition-colors ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-400 hover:bg-gray-200 hover:text-gray-600'
                }`
              }
              aria-label={item.label}
            >
              {item.icon}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="flex flex-col items-center gap-10 w-full">
        <Toggle checked={darkMode} onChange={onToggleDarkMode} label="Toggle dark mode" />
        <NavLink to="/profile" aria-label="Profile">
          <Avatar src={currentUser.avatarUrl} alt={currentUser.name} size="md" />
        </NavLink>
      </div>
    </div>
  );
}