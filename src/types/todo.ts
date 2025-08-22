export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  createdAt: Date;
  completedAt?: Date;
  difficulty: 'easy' | 'medium' | 'hard';
  xpReward: number;
}

export interface Character {
  level: number;
  xp: number;
  xpToNextLevel: number;
  completedQuests: number;
  avatarState: 'idle' | 'attack' | 'victory' | 'levelUp';
}

export interface AchievementType {
  id: string;
  title: string;
  description: string;
  isUnlocked: boolean;
  icon: string;
}

export interface GameSettings {
  soundEnabled: boolean;
  animationsEnabled: boolean;
}