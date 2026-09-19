import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Camera } from 'lucide-react';
import Avatar from '../components/shared/Avatar';
import EmptyState from '../components/shared/EmptyState';
import { currentUser } from '../data/mockData';

export default function ProfilePage() {
  const navigate = useNavigate();
  const [name, setName] = useState(currentUser.name);
  const [about, setAbout] = useState(currentUser.about ?? '');
  const [isDirty, setIsDirty] = useState(false);

  const handleNameChange = (value: string) => {
    setName(value);
    setIsDirty(true);
  };

  const handleAboutChange = (value: string) => {
    setAbout(value);
    setIsDirty(true);
  };

  const handleSave = () => {
    currentUser.name = name;
    currentUser.about = about;
    setIsDirty(false);
  };

  return (
    <>
      <div className="flex flex-col w-full md:w-[340px] border-r border-gray-100 dark:border-gray-800 shrink-0 bg-white dark:bg-gray-900">
        <div className="flex items-center gap-3 px-4 pt-4 pb-3">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            aria-label="Back"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Profile</h1>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-2">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Avatar src={currentUser.avatarUrl} alt={currentUser.name} size="xl" />
              <button
                type="button"
                className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-blue-600 text-white flex items-center justify-center border-2 border-white dark:border-gray-900 hover:bg-blue-700"
                aria-label="Change photo"
              >
                <Camera size={13} />
              </button>
            </div>
          </div>

          <div className="mb-1">
            <label className="text-xs text-blue-500 font-medium mb-1 block">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => handleNameChange(e.target.value)}
              className="w-full border border-blue-200 dark:border-blue-800 rounded-lg px-3 py-2.5 text-sm outline-none focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>
          <p className="text-xs text-gray-400 dark:text-gray-500 mb-5">This name is visible to your contacts</p>

          <div className="mb-5">
            <label className="text-xs text-gray-400 dark:text-gray-500 font-medium mb-1 block">About</label>
            <textarea
              value={about}
              onChange={(e) => handleAboutChange(e.target.value)}
              rows={3}
              className="w-full border border-gray-200 dark:border-gray-700 rounded-lg px-3 py-2.5 text-sm outline-none resize-none focus:border-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
            />
          </div>

          <button
            type="button"
            onClick={handleSave}
            disabled={!isDirty}
            className="px-6 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/30 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:bg-transparent"
          >
            Save
          </button>
        </div>
      </div>

      <div className="flex-1 min-w-0 hidden md:flex bg-white dark:bg-gray-950">
        <EmptyState title="Select a conversation or start a" actionLabel="new one" />
      </div>
    </>
  );
}