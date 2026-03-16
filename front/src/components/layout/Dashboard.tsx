import { useState } from 'react';
import { Sidebar } from '../Sidebar';
import { TopBar } from '../TopBar';
import { Column } from '../Column';
import { TaskModal } from '../TaskModal';
import { INITIAL_COLUMNS, INITIAL_TASKS } from '../../constants/data';
import type { Task } from '../../type/type';
export default function App() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
  };

  const handleAddTask = (columnId: string) => {
    const newTask: Task = {
      id: `t-${Date.now()}`,
      columnId,
      title: 'New Task',
      description: '',
      labels: [],
      priority: 'medium',
      dueDate: 'Today',
      assignees: [],
      creatorId: 'u1',
      createdAt: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      checklist: [],
      comments: []
    };
    setTasks(prev => [...prev, newTask]);
    setSelectedTask(newTask);
  };

  const handleUpdateTask = (updatedTask: Task) => {
    setTasks(prev => prev.map(t => t.id === updatedTask.id ? updatedTask : t));
    setSelectedTask(updatedTask);
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(prev => prev.filter(t => t.id !== taskId));
    setSelectedTask(null);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <TopBar />

        <main className="flex-1 p-8 overflow-x-auto custom-scrollbar">
          <div className="flex gap-8 h-full min-h-[calc(100vh-10rem)]">
            {INITIAL_COLUMNS.map(column => (
              <Column
                key={column.id}
                column={column}
                tasks={tasks.filter(t => t.columnId === column.id)}
                onTaskClick={handleTaskClick}
                onAddTask={() => handleAddTask(column.id)}
              />
            ))}
          </div>
        </main>
      </div>

      {selectedTask && (
        <TaskModal
          task={selectedTask}
          isOpen={!!selectedTask}
          onClose={() => setSelectedTask(null)}
          onUpdate={handleUpdateTask}
          onDelete={handleDeleteTask}
        />
      )}
    </div>
  );
}
