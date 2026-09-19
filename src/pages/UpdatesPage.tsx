import { useState } from 'react';
import { RefreshCw } from 'lucide-react';
import UpdateListItem from '../components/updates/UpdateListItem';
import UpdateViewer from '../components/updates/UpdateViewer';
import CreateEditUpdateView from '../components/updates/CreateEditUpdateView';
import { updates, myUpdatePhotos } from '../data/mockData';

export default function UpdatesPage() {
  const [activeUpdateId, setActiveUpdateId] = useState<string | null>(null);
  const [showEditMode, setShowEditMode] = useState(false);

  const notSeen = updates.filter((u) => !u.seen);
  const seen = updates.filter((u) => u.seen);

  const activeIndex = updates.findIndex((u) => u.id === activeUpdateId);
  const activeUpdate = updates[activeIndex];

  const handleSelect = (update: (typeof updates)[number]) => {
    setActiveUpdateId(update.id);
    setShowEditMode(update.isOwn ?? false);
  };

  const goPrev = () => {
    if (activeIndex > 0) setActiveUpdateId(updates[activeIndex - 1].id);
  };
  const goNext = () => {
    if (activeIndex < updates.length - 1) setActiveUpdateId(updates[activeIndex + 1].id);
  };

  return (
    <>
      <div className="flex flex-col w-full md:w-[340px] border-r border-gray-100 shrink-0">
        <div className="flex items-center justify-between px-4 pt-4 pb-2">
          <h1 className="text-xl font-semibold text-gray-900">Updates</h1>
          <button type="button" className="text-gray-400 hover:text-gray-600" aria-label="Refresh">
            <RefreshCw size={16} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-2 pt-1">
          {notSeen.length > 0 && (
            <div className="mb-2">
              <p className="px-3 py-1.5 text-xs font-medium text-gray-400">Not seen</p>
              {notSeen.map((update) => (
                <UpdateListItem
                  key={update.id}
                  update={update}
                  active={update.id === activeUpdateId}
                  onClick={() => handleSelect(update)}
                />
              ))}
            </div>
          )}

          {seen.length > 0 && (
            <div>
              <p className="px-3 py-1.5 text-xs font-medium text-gray-400">Seen</p>
              {seen.map((update) => (
                <UpdateListItem
                  key={update.id}
                  update={update}
                  active={update.id === activeUpdateId}
                  onClick={() => handleSelect(update)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 min-w-0 bg-white">
        {!activeUpdate ? (
          <div className="flex flex-col items-center justify-center h-full gap-3 text-gray-400">
            <RefreshCw size={20} />
            <p className="text-sm">Click on an update to view</p>
          </div>
        ) : showEditMode ? (
          <CreateEditUpdateView
            photos={myUpdatePhotos}
            onClose={() => setActiveUpdateId(null)}
          />
        ) : (
          <UpdateViewer
            update={activeUpdate}
            onClose={() => setActiveUpdateId(null)}
            onPrev={goPrev}
            onNext={goNext}
            hasPrev={activeIndex > 0}
            hasNext={activeIndex < updates.length - 1}
          />
        )}
      </div>
    </>
  );
}