import React from 'react';
import { Search, Bell } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <header className="h-20 bg-white border-b border-slate-100 px-8 flex items-center justify-between sticky top-0 z-10">
      <div className="relative w-full max-w-xl">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input
          type="text"
          placeholder="Search tasks, boards..."
          className="w-full bg-slate-50 border-none rounded-xl py-2.5 pl-12 pr-4 text-sm focus:ring-2 focus:ring-orange-500/20 transition-all placeholder:text-slate-400"
        />
      </div>

      <div className="flex items-center gap-6">
        <button className="relative p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-xl transition-all">
          <Bell size={20} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-orange-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="flex items-center gap-3 pl-6 border-l border-slate-100">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-900">Alex Rivers</p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Admin</p>
          </div>
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Alex"
            alt="User"
            className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200"
          />
        </div>
      </div>
    </header>
  );
};
