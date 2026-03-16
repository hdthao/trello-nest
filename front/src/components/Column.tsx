import React from 'react';
import { MoreHorizontal, Plus } from 'lucide-react';
import type { Column as ColumnType, Task } from '../type/type';
import { TaskCard } from './TaskCard';
interface ColumnProps {
  column: ColumnType;
  tasks: Task[];
  onTaskClick: (task: Task) => void;
  onAddTask: () => void;
}

export const Column: React.FC<ColumnProps> = ({ column, tasks, onTaskClick, onAddTask }) => {
  return (
    <div className="flex flex-col w-80 shrink-0">
      <div className="flex items-center justify-between mb-6 px-1">
        <div className="flex items-center gap-3">
          <h3 className="font-bold text-slate-900">{column.title}</h3>
          <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-200 text-slate-600 text-[11px] font-bold">
            {tasks.length}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-all">
            <MoreHorizontal size={18} />
          </button>
        </div>
      </div>

      <div className="flex-1 space-y-4 custom-scrollbar overflow-y-auto pb-4 pr-1">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onClick={() => onTaskClick(task)}
          />
        ))}

        <button
          onClick={onAddTask}
          className="w-full py-4 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center gap-2 text-slate-400 font-bold text-sm hover:border-orange-400 hover:text-orange-600 hover:bg-orange-50/50 transition-all group"
        >
          <Plus size={18} className="group-hover:scale-110 transition-transform" />
          <span>Add Card</span>
        </button>
      </div>
    </div>
  );
};
