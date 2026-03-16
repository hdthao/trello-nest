import { LayoutDashboard, Columns, Users, Settings, LogOut } from 'lucide-react';
import type { Task, Column, User, Label, NavItem } from '../type/type';

export const USERS: User[] = [
  { id: 'u1', name: 'Alex Rivers', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' },
  { id: 'u2', name: 'Marcus Chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus' },
  { id: 'u3', name: 'Sarah Miller', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
  { id: 'u4', name: 'Jessica Wong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica' },
];

export const LABELS: Record<string, Label> = {
  DESIGN: { id: 'l1', text: 'DESIGN', color: 'text-pink-600', bg: 'bg-pink-50' },
  CONTENT: { id: 'l2', text: 'CONTENT', color: 'text-blue-600', bg: 'bg-blue-50' },
  INTERNAL: { id: 'l3', text: 'INTERNAL', color: 'text-purple-600', bg: 'bg-purple-50' },
  HIGH_PRIORITY: { id: 'l4', text: 'HIGH PRIORITY', color: 'text-orange-600', bg: 'bg-orange-50' },
};

export const INITIAL_TASKS: Task[] = [
  {
    id: 't1',
    columnId: 'todo',
    title: 'Landing page mockup',
    description: 'Design the high-fidelity mockup for the new SaaS landing page. Ensure the layout is responsive and follows the new brand guidelines. We need to focus on the "hero section" and the "pricing tier" components specifically.',
    labels: [LABELS.DESIGN],
    priority: 'high',
    dueDate: 'Oct 24',
    assignees: [USERS[3]],
    creatorId: 'u1',
    createdAt: 'Oct 12, 2023',
    checklist: [
      { id: 'c1', text: 'Wireframe initial layout', completed: true },
      { id: 'c2', text: 'Gather brand assets', completed: true },
      { id: 'c3', text: 'Hero section iteration 1', completed: true },
      { id: 'c4', text: 'Responsive mobile views', completed: false },
      { id: 'c5', text: 'Final review with Stakeholders', completed: false },
    ],
    comments: [
      { id: 'cm1', userId: 'u2', text: "I've uploaded the new icon set in the attachments. Let me know if we need more variants for the feature section.", timestamp: '2 hours ago' },
      { id: 'cm2', userId: 'u3', text: "The typography looks great, but can we increase the line-height on the body text for better readability?", timestamp: '5 hours ago' },
    ]
  },
  {
    id: 't2',
    columnId: 'todo',
    title: 'API Authentication Fix',
    description: 'Fixing the OAuth2 token refresh bug reported by the backend team.',
    labels: [LABELS.HIGH_PRIORITY],
    priority: 'high',
    dueDate: 'Oct 21',
    assignees: [USERS[1], USERS[2]],
    creatorId: 'u1',
    createdAt: 'Oct 15, 2023',
    checklist: [],
    comments: []
  },
  {
    id: 't3',
    columnId: 'inprogress',
    title: 'Write Newsletter Copy',
    description: 'Drafting the monthly update for our 50k subscribers regarding the new features.',
    labels: [LABELS.CONTENT],
    priority: 'medium',
    dueDate: 'Today',
    assignees: [USERS[2]],
    creatorId: 'u1',
    createdAt: 'Oct 18, 2023',
    checklist: [],
    comments: []
  },
  {
    id: 't4',
    columnId: 'review',
    title: 'Quarterly Financials',
    description: 'Reviewing the Q3 spending vs budget allocations for the engineering team.',
    labels: [LABELS.INTERNAL],
    priority: 'low',
    dueDate: 'Oct 28',
    assignees: [USERS[3]],
    creatorId: 'u1',
    createdAt: 'Oct 20, 2023',
    checklist: [],
    comments: []
  }
];

export const INITIAL_COLUMNS: Column[] = [
  { id: 'todo', title: 'To Do', tasks: [] },
  { id: 'inprogress', title: 'In Progress', tasks: [] },
  { id: 'review', title: 'Review', tasks: [] },
  { id: 'done', title: 'Done', tasks: [] },
];

export const NAV_ITEMS: NavItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'boards', label: 'Boards', icon: Columns, active: true },
  { id: 'team', label: 'Team', icon: Users },
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'logout', label: 'Logout', icon: LogOut },
];
