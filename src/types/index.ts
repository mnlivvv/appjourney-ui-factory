// Define all interfaces and types for the application

// Window component props
export interface WindowProps {
  id: string;
  title: string;
  isOpen: boolean;
  initialWidth?: number;
  initialHeight?: number;
  initialX?: number;
  initialY?: number;
  minWidth?: number;
  minHeight?: number;
  onClose: (id: string) => void;
  onMinimize?: (id: string) => void;
  children: React.ReactNode;
  zIndex: number;
  bringToFront: (id: string) => void;
}

// Chat message structure
export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

// UI Theme type
export type ThemeColor = 'green' | 'amber' | 'blue';

// Desktop icon props
export interface DesktopIconProps {
  id: string;
  label: string;
  icon: string;
  onClick: () => void;
}

// AI Response structure
export interface AIResponse {
  text: string;
  isLoading: boolean;
  error: string | null;
}

// App state
export interface AppState {
  theme: ThemeColor;
  openWindows: string[];
  minimizedWindows: string[];
  activeWindow: string | null;
  chatMessages: ChatMessage[];
  windowZIndexes: Record<string, number>;
}