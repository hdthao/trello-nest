import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Plus,
  AlignLeft,
  CheckSquare,
  MessageSquare,
  Paperclip,
  Calendar,
  UserPlus,
  Tag,
  ChevronRight,
  Trash2
} from 'lucide-react';
import type { Task } from '../type/type';
import { USERS, LABELS } from '../constants/data';

interface TaskModalProps {
  task: Task;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (task: Task) => void;
  onDelete: (taskId: string) => void;
}

export const TaskModal: React.FC<TaskModalProps> = ({ task, isOpen, onClose, onUpdate, onDelete }) => {
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [showLabelPicker, setShowLabelPicker] = useState(false);
  const [showMemberPicker, setShowMemberPicker] = useState(false);

  useEffect(() => {
    setTitle(task.title);
    setDescription(task.description);
  }, [task]);

  if (!isOpen) return null;

  const completedItems = task.checklist.filter(item => item.completed).length;
  const totalItems = task.checklist.length;
  const progress = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;

  const handleSave = () => {
    onUpdate({
      ...task,
      title,
      description
    });
  };

  const toggleLabel = (labelKey: string) => {
    const label = LABELS[labelKey];
    const hasLabel = task.labels.some(l => l.id === label.id);
    const newLabels = hasLabel
      ? task.labels.filter(l => l.id !== label.id)
      : [...task.labels, label];

    onUpdate({
      ...task,
      labels: newLabels
    });
  };

  const toggleMember = (userId: string) => {
    const user = USERS.find(u => u.id === userId);
    if (!user) return;

    const isAssigned = task.assignees.some(u => u.id === userId);
    const newAssignees = isAssigned
      ? task.assignees.filter(u => u.id !== userId)
      : [...task.assignees, user];

    onUpdate({
      ...task,
      assignees: newAssignees
    });
  };

  const setIsCompleted = (id: string) => {
    const newChecklist = task.checklist.map(item => ({
      ...item,
      completed: item.id === id ? !item.completed : item.completed
    }));

    onUpdate({
      ...task,
      checklist: newChecklist
    });
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between bg-white sticky top-0 z-10">
            <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
              <div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white">
                <LayoutIcon size={14} />
              </div>
              <span>Projects</span>
              <ChevronRight size={14} />
              <span>Marketing Site</span>
              <ChevronRight size={14} />
              <span className="px-2 py-0.5 bg-orange-50 text-orange-600 rounded text-xs">To Do</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onDelete(task.id)}
                className="p-2 hover:bg-red-50 rounded-full transition-colors text-slate-400 hover:text-red-600"
                title="Delete Task"
              >
                <Trash2 size={20} />
              </button>
              <button
                onClick={onClose}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto custom-scrollbar">
            <div className="flex flex-col lg:flex-row">
              {/* Main Content */}
              <div className="flex-1 p-8 space-y-10">
                <section>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    onBlur={handleSave}
                    className="text-3xl font-bold text-slate-900 mb-2 w-full border-none focus:ring-0 p-0 bg-transparent placeholder:text-slate-300"
                    placeholder="Task Title"
                  />
                  <p className="text-sm text-slate-500">
                    Created by <span className="font-semibold text-slate-700">{USERS.find((u: { id: string; }) => u.id === task.creatorId)?.name}</span> on {task.createdAt}
                  </p>
                </section>

                <section className="space-y-4">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold">
                    <AlignLeft size={18} className="text-slate-400" />
                    <h3>DESCRIPTION</h3>
                  </div>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    onBlur={handleSave}
                    placeholder="Add a more detailed description..."
                    className="w-full bg-slate-50/50 border border-slate-100 rounded-xl p-5 text-slate-600 leading-relaxed min-h-30 focus:ring-2 focus:ring-orange-500/20 focus:border-orange-200 transition-all resize-none"
                  />
                </section>

                {task.checklist.length > 0 && (
                  <section className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-900 font-semibold">
                        <CheckSquare size={18} className="text-slate-400" />
                        <h3>CHECKLIST</h3>
                      </div>
                      <span className="text-sm font-bold text-orange-600">{Math.round(progress)}%</span>
                    </div>

                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className="h-full bg-orange-500"
                      />
                    </div>

                    <div className="space-y-3">
                      {task.checklist.map(item => (
                        <div key={item.id} className="flex items-center gap-3 group">
                          <button
                            onClick={()=> setIsCompleted(item.id)}
                            className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${item.completed ? 'bg-orange-500 border-orange-500 text-white' : 'border-slate-300 hover:border-orange-500'}`}>
                            {item.completed && <X size={12} className="rotate-45" />}
                          </button>
                          <span className={`text-sm ${item.completed ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
                            {item.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                <section className="space-y-6">
                  <div className="flex items-center gap-2 text-slate-900 font-semibold">
                    <MessageSquare size={18} className="text-slate-400" />
                    <h3>ACTIVITY</h3>
                  </div>

                  <div className="space-y-6">
                    {task.comments.map(comment => {
                      const user = USERS.find((u: { id: string; }) => u.id === comment.userId);
                      return (
                        <div key={comment.id} className="flex gap-4">
                          <img src={user?.avatar} alt={user?.name} className="w-10 h-10 rounded-full bg-slate-100" />
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-slate-900 text-sm">{user?.name}</span>
                              <span className="text-xs text-slate-400">{comment.timestamp}</span>
                            </div>
                            <div className="bg-slate-50 border border-slate-100 rounded-xl p-4 text-sm text-slate-600">
                              {comment.text}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div className="w-full lg:w-72 bg-slate-50/50 border-l border-slate-100 p-8 space-y-8">
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Actions</h4>
                  <div className="space-y-2">
                    <ActionButton icon={UserPlus} label="Members" onClick={() => setShowMemberPicker(!showMemberPicker)} />
                    <ActionButton icon={Tag} label="Labels" onClick={() => setShowLabelPicker(!showLabelPicker)} />
                    <ActionButton icon={Paperclip} label="Attachments" />
                    <ActionButton icon={Calendar} label="Due Date" />
                  </div>
                </div>

                <div className="space-y-4 relative">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Labels</h4>
                  <div className="flex flex-wrap gap-2">
                    {task.labels.map(label => (
                      <span key={label.id} className={`px-3 py-1 rounded-full text-xs font-bold ${label.bg} ${label.color}`}>
                        {label.text}
                      </span>
                    ))}
                    <button
                      onClick={() => setShowLabelPicker(!showLabelPicker)}
                      className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-300 transition-colors"
                    >
                      <Plus size={16} />
                    </button>
                  </div>

                  {showLabelPicker && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 mt-2 w-full bg-white border border-slate-100 rounded-xl shadow-xl p-3 z-20 space-y-2"
                    >
                      {Object.keys(LABELS).map(key => {
                        const label = LABELS[key];
                        const isSelected = task.labels.some(l => l.id === label.id);
                        return (
                          <button
                            key={label.id}
                            onClick={() => toggleLabel(key)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-between ${label.bg} ${label.color} ${isSelected ? 'ring-2 ring-offset-1 ring-slate-300' : 'opacity-70 hover:opacity-100'}`}
                          >
                            <span>{label.text}</span>
                            {isSelected && <X size={12} className="rotate-45" />}
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </div>

                <div className="space-y-4 relative">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Members</h4>
                  <div className="flex -space-x-2">
                    {task.assignees.map(user => (
                      <img key={user.id} src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100" />
                    ))}
                    <button
                      onClick={() => setShowMemberPicker(!showMemberPicker)}
                      className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-slate-500 hover:bg-slate-300 transition-colors">
                      <Plus size={16} />
                    </button>
                  </div>
                  {showMemberPicker && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute top-full left-0 mt-2 w-full bg-white border border-slate-100 rounded-xl shadow-xl p-3 z-20 space-y-2"
                    >
                      {USERS.map(user => {
                        const isSelected = task.assignees.some(u => u.id === user.id);
                        return (
                          <button
                            key={user.id}
                            onClick={() => toggleMember(user.id)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-bold transition-all flex items-center justify-start ${isSelected ? 'ring-2 ring-offset-1 ring-slate-300' : 'opacity-70 hover:opacity-100'}`}
                          >
                            <img key={user.id} src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full border-2 border-white bg-slate-100" />
                            <span>{user.name}</span>
                            {isSelected && <X size={12} className="rotate-45" />}
                          </button>
                        );
                      })}
                    </motion.div>
                  )}
                </div>
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Timeline</h4>
                  <div className="flex items-center gap-3 text-slate-700">
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-red-500 flex items-center justify-center">
                      <Calendar size={18} />
                    </div>
                    <span className="text-sm font-semibold">{task.dueDate}, 2023</span>
                  </div>
                </div>

                <div className="pt-4 space-y-3">
                  <button
                    onClick={onClose}
                    className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-orange-200"
                  >
                    Done
                  </button>
                  <button
                    onClick={() => onDelete(task.id)}
                    className="w-full py-3 bg-red-50 hover:bg-red-100 text-red-600 font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
                  >
                    <Trash2 size={18} />
                    <span>Delete Task</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

const ActionButton = ({ icon: Icon, label, onClick }: { icon: any, label: string, onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="w-full flex items-center gap-3 px-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm font-semibold text-slate-700 hover:border-orange-500 hover:text-orange-600 transition-all group"
  >
    <Icon size={18} className="text-slate-400 group-hover:text-orange-500" />
    <span>{label}</span>
  </button>
);

const LayoutIcon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
  </svg>
);
