export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  score: number;
  level: number;
  dueDate?: Date;
  overdue?: boolean;
}

export enum SoundEffect {
  ADD = 'add',
  COMPLETE = 'complete',
  DELETE = 'delete',
  LEVELUP = 'levelup',
  GAMEOVER = 'gameover',
  CLICK = 'click',
}