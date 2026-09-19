import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

export default function AppShell() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex h-screen w-screen overflow-hidden bg-white dark:bg-gray-900">
        <Sidebar darkMode={darkMode} onToggleDarkMode={setDarkMode} />
        <div className="flex flex-1 min-w-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}