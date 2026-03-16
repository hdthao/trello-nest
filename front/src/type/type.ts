import type { LucideIcon } from 'lucide-react';

export type Priority = 'low' | 'medium' | 'high';

export interface Label {
  id: string;
  text: string;
  color: string;
  bg: string;
}

export interface User {
  id: string;
  name: string;
  avatar: string;
}

export interface Comment {
  id: string;
  userId: string;
  text: string;
  timestamp: string;
}

export interface ChecklistItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  labels: Label[];
  priority: Priority;
  dueDate: string;
  assignees: User[];
  checklist: ChecklistItem[];
  comments: Comment[];
  columnId: string;
  createdAt: string;
  creatorId: string;
}

export interface Column {
  id: string;
  title: string;
  tasks: Task[];
}

export interface NavItem {
  id: string;
  label: string;
  icon: LucideIcon;
  active?: boolean;
}
