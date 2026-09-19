import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppShell from './components/layout/AppShell';
import ChatsPage from './pages/ChatsPage';
import CallsPage from './pages/CallsPage';
import GroupsPage from './pages/GroupsPage';
import UpdatesPage from './pages/UpdatesPage';
import UnreadPage from './pages/UnreadPage';
import ArchivePage from './pages/ArchivePage';
import SettingsPage from './pages/SettingsPage';
import NotificationsPage from './pages/NotificationsPage';
import PrivacyPage from './pages/PrivacyPage';
import PrivacyOptionPage from './pages/PrivacyOptionPage';
import BlockedContactsPage from './pages/BlockedContactsPage';
import SecurityPage from './pages/SecurityPage';
import HelpPage from './pages/HelpPage';
import RequestAccountInfoPage from './pages/RequestAccountInfoPage';
import ChatWallpaperPage from './pages/ChatWallpaperPage';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppShell />}>
          <Route index element={<Navigate to="/chats" replace />} />
          <Route path="chats" element={<ChatsPage />} />
          <Route path="chats/:chatId" element={<ChatsPage />} />
          <Route path="calls" element={<CallsPage />} />
          <Route path="groups" element={<GroupsPage />} />
          <Route path="groups/:groupId" element={<GroupsPage />} />
          <Route path="updates" element={<UpdatesPage />} />
          <Route path="unread" element={<UnreadPage />} />
          <Route path="unread/:chatId" element={<UnreadPage />} />
          <Route path="archive" element={<ArchivePage />} />
          <Route path="archive/:chatId" element={<ArchivePage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="settings/notifications" element={<NotificationsPage />} />
          <Route path="settings/privacy" element={<PrivacyPage />} />
          <Route path="settings/privacy/blocked" element={<BlockedContactsPage />} />
          <Route path="settings/privacy/:option" element={<PrivacyOptionPage />} />
          <Route path="settings/security" element={<SecurityPage />} />
          <Route path="settings/help" element={<HelpPage />} />
          <Route path="settings/account-info" element={<RequestAccountInfoPage />} />
          <Route path="settings/wallpaper" element={<ChatWallpaperPage />} />
          <Route path="profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;