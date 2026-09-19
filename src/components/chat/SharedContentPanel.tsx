import { useState } from 'react';
import { ArrowLeft, Link2, FileText, Download } from 'lucide-react';
import { sharedMedia, sharedLinks, sharedDocs } from '../../data/mockData';

interface SharedContentPanelProps {
  onBack: () => void;
  initialTab?: 'media' | 'links' | 'docs';
}

export default function SharedContentPanel({ onBack, initialTab = 'media' }: SharedContentPanelProps) {
  const [tab, setTab] = useState<'media' | 'links' | 'docs'>(initialTab);

  return (
    <div className="flex flex-col w-full h-full bg-white border-l border-gray-100">
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
        <button type="button" onClick={onBack} className="text-gray-500 hover:text-gray-700">
          <ArrowLeft size={18} />
        </button>
        <div className="flex items-center gap-5 text-sm">
          <button
            type="button"
            onClick={() => setTab('media')}
            className={`pb-1 ${tab === 'media' ? 'text-blue-600 border-b-2 border-blue-600 font-medium' : 'text-gray-400'}`}
          >
            Media
          </button>
          <button
            type="button"
            onClick={() => setTab('links')}
            className={`pb-1 ${tab === 'links' ? 'text-blue-600 border-b-2 border-blue-600 font-medium' : 'text-gray-400'}`}
          >
            Links
          </button>
          <button
            type="button"
            onClick={() => setTab('docs')}
            className={`pb-1 ${tab === 'docs' ? 'text-blue-600 border-b-2 border-blue-600 font-medium' : 'text-gray-400'}`}
          >
            Docs
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-4">
        {tab === 'media' && (
          <>
            <p className="text-xs text-gray-400 mb-2">27th Oct 22</p>
            <div className="grid grid-cols-3 gap-2">
              {sharedMedia.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt="Shared media"
                  className="w-full aspect-square object-cover rounded-lg"
                />
              ))}
            </div>
          </>
        )}

        {tab === 'links' && (
          <>
            <p className="text-xs text-gray-400 mb-2">27th Oct 22</p>
            <div className="flex flex-col gap-2">
              {sharedLinks.map((link) => (
                <div
                  key={link.id}
                  className="flex items-center gap-3 bg-gray-50 rounded-lg px-3 py-2.5"
                >
                  <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-gray-400 shrink-0">
                    <Link2 size={16} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-blue-600 truncate">{link.url}</p>
                    <p className="text-xs text-gray-400">{link.domain}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {tab === 'docs' && (
          <>
            <p className="text-xs text-gray-400 mb-2">27th Oct 22</p>
            <div className="flex flex-col gap-2">
              {sharedDocs.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center gap-3 bg-gray-50 rounded-lg px-3 py-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-gray-400 shrink-0">
                    <FileText size={18} />
                  </div>
                  <p className="flex-1 text-sm text-gray-700 truncate">{doc.name}</p>
                  <button type="button" className="text-gray-400 hover:text-gray-600 shrink-0">
                    <Download size={16} />
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}