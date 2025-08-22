export type Priority = 'diamond' | 'ruby' | 'emerald' | 'topaz';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  priority: Priority;
  createdAt: Date | string;
}

export const priorityLevels: Record<Priority, { label: string, color: string }> = {
  diamond: { label: 'Highest', color: '#B9F2FF' },
  ruby: { label: 'High', color: '#FF5151' },
  emerald: { label: 'Medium', color: '#50C878' },
  topaz: { label: 'Low', color: '#FFC87C' },
};