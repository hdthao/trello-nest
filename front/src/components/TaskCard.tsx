import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MoreHorizontal } from 'lucide-react';
import type { Task } from '../type/type';

interface TaskCardProps {
  task: Task;
  onClick: () => void;
}

export const TaskCard: React.FC<TaskCardProps> = ({ task, onClick }) => {
  return (
    <motion.div
      layoutId={`task-${task.id}`}
      onClick={onClick}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
      className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:border-orange-200 transition-all cursor-pointer group space-y-4"
    >
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {task.labels.map(label => (
            <span
              key={label.id}
              className={`px-2.5 py-0.5 rounded-md text-[10px] font-bold tracking-wider ${label.bg} ${label.color}`}
            >
              {label.text}
            </span>
          ))}
        </div>
        <button className="text-slate-300 hover:text-slate-500 transition-colors">
          <MoreHorizontal size={18} />
        </button>
      </div>

      <div className="space-y-2">
        <h4 className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-tight">
          {task.title}
        </h4>
        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
          {task.description}
        </p>
      </div>

      <div className="flex items-center justify-between pt-2">
        <div className="flex items-center gap-1.5 text-slate-400">
          <Calendar size={14} />
          <span className={`text-[11px] font-semibold ${task.dueDate === 'Today' ? 'text-orange-500' : ''}`}>
            {task.dueDate}
          </span>
        </div>

        <div className="flex -space-x-2">
          {task.assignees.map(user => (
            <img
              key={user.id}
              src={user.avatar}
              alt={user.name}
              className="w-6 h-6 rounded-full border-2 border-white bg-slate-100"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};
