import { Todo } from '../types/todo';
import { v4 as uuidv4 } from 'uuid';

// Generate sample todos for initial display
export const sampleTodos: Todo[] = [
  {
    id: uuidv4(),
    text: 'Schedule meeting with luxury brand partners',
    completed: false,
    priority: 'diamond',
    createdAt: new Date(Date.now() - 86400000) // 1 day ago
  },
  {
    id: uuidv4(),
    text: 'Review quarterly financial projections',
    completed: false,
    priority: 'ruby',
    createdAt: new Date(Date.now() - 172800000) // 2 days ago
  },
  {
    id: uuidv4(),
    text: 'Order champagne for client appreciation event',
    completed: true,
    priority: 'emerald',
    createdAt: new Date(Date.now() - 259200000) // 3 days ago
  },
  {
    id: uuidv4(),
    text: 'Send thank you notes to VIP customers',
    completed: false,
    priority: 'topaz',
    createdAt: new Date(Date.now() - 345600000) // 4 days ago
  },
  {
    id: uuidv4(),
    text: 'Reserve table at Michelin star restaurant',
    completed: true,
    priority: 'ruby',
    createdAt: new Date(Date.now() - 432000000) // 5 days ago
  }
];