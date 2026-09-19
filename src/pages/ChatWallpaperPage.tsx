import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const wallpaperColors = [
  ['#E5E5E5', '#0F2E22', '#1F5F4A'],
  ['#2F8F6F', '#1E5F7A', '#D9897C'],
  ['#A9A29A', '#1A1210', '#5A6B1F'],
  ['#B84A78', '#4FBF9F', '#E08A3C'],
  ['#C9AEE0', '#0F3D2E', '#D9A0A8'],
  ['#3A3A3A', '#9C1F8F', '#5F5FBF'],
  ['#3FBF9F', '#B5772F', '#26268F'],
];

export default function ChatWallpaperPage() {
  const navigate = useNavigate();
  const [enableDoodle, setEnableDoodle] = useState(true);
  const [selectedColor, setSelectedColor] = useState<string>('default');

  return (
    <>
      <div className="flex flex-col w-full md:w-[300px] border-r border-gray-100 dark:border-gray-800 shrink-0 bg-white dark:bg-gray-900">
        <div className="flex items-center gap-3 px-4 pt-4 pb-3">
          <button
            type="button"
            onClick={() => navigate('/settings')}
            className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
            aria-label="Back to settings"
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">Set Chat Wallpaper</h1>
        </div>

        <label className="flex items-center justify-between px-4 py-3 border-b border-gray-100 dark:border-gray-800 cursor-pointer">
          <span className="text-sm text-gray-800 dark:text-gray-100">Enable Talk Doodle</span>
          <input
            type="checkbox"
            checked={enableDoodle}
            onChange={(e) => setEnableDoodle(e.target.checked)}
            className="w-4 h-4 accent-blue-600"
          />
        </label>

        <div className="grid grid-cols-3 gap-3 p-4">
          <button
            type="button"
            onClick={() => setSelectedColor('default')}
            className={`aspect-square rounded-lg bg-gray-200 dark:bg-gray-700 text-xs font-medium text-gray-600 dark:text-gray-300 flex items-center justify-center ${
              selectedColor === 'default' ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-900' : ''
            }`}
          >
            Default
          </button>
          {wallpaperColors.flat().map((color, i) => (
            <button
              key={color + i}
              type="button"
              onClick={() => setSelectedColor(color)}
              className={`aspect-square rounded-lg ${
                selectedColor === color ? 'ring-2 ring-blue-500 ring-offset-2 dark:ring-offset-gray-900' : ''
              }`}
              style={{ backgroundColor: color }}
              aria-label={`Wallpaper color ${color}`}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 min-w-0 hidden md:flex flex-col">
        <div className="text-center text-xs text-gray-500 dark:text-gray-400 py-3 border-b border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900">
          Wallpaper Preview
        </div>
        <div
          className="flex-1"
          style={{ backgroundColor: selectedColor === 'default' ? '#E5E5E5' : selectedColor }}
        />
      </div>
    </>
  );
}