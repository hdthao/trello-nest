import React from 'react';
import { NAV_ITEMS } from '../constants/data';
import { useNavigate } from 'react-router-dom';

export const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  return (
    <aside className="w-64 bg-white border-r border-slate-100 flex flex-col h-screen sticky top-0">
      <div className="p-8 flex items-center gap-3">
        <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-200">
          <KanflowIcon size={24} />
        </div>
        <h1 className="text-xl font-bold tracking-tight text-slate-900">Kanflow</h1>
      </div>

      <nav className="flex-1 px-4 space-y-2">
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            id={item.id}
            className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
              item.active
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
            }`}
            onClick={() => {
              if (item.id === 'logout') {
                navigate('/login');
              }
            }}
          >
            <item.icon size={20} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4">
        <div className="bg-slate-50 rounded-2xl p-6 space-y-4">
          <div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Current Board</p>
            <p className="text-sm font-bold text-slate-900">Marketing Launch Q4</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

const KanflowIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
  </svg>
);
