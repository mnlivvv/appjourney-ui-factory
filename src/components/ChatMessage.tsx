import { ReactNode } from 'react';

export type MessageRole = 'user' | 'ai';

interface ChatMessageProps {
  role: MessageRole;
  content: string | ReactNode;
  timestamp?: string;
}

const ChatMessage = ({ role, content, timestamp }: ChatMessageProps) => {
  // Generate a timestamp if not provided
  const messageTime = timestamp || new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  
  return (
    <div className={`chat-message ${role === 'ai' ? 'ai-message' : 'user-message'}`}>
      <div className="message-avatar shape-organic">
        {role === 'ai' ? 'AI' : 'You'}
      </div>
      <div className="message-content">
        <div className="message-bubble shape-pond">
          {content}
        </div>
        <div className="message-timestamp">{messageTime}</div>
      </div>
    </div>
  );
};

export default ChatMessage;