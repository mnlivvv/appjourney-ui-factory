import { useState, useRef, useEffect } from 'react';
import ChatMessage from './chatmessage';
import type { MessageRole as ChatMessageRole } from './chatmessage';
import ChatInput from './chatinput';

interface Message {
  id: string;
  role: ChatMessageRole;
  content: string;
  timestamp: string;
}

const ChatInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'ai',
      content: 'Hello! I\'m your nature-inspired AI assistant. How can I help you today?',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = (content: string) => {
    // Add user message
    const newUserMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, newUserMessage]);
    setIsProcessing(true);
    
    // Simulate AI response after a short delay
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        role: 'ai',
        content: generateAIResponse(content),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsProcessing(false);
    }, 1500);
  };
  
  // Simple response generation - in a real app, this would call an actual AI API
  const generateAIResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('hello') || lowerCaseMessage.includes('hi')) {
      return 'Hello there! How can I assist you today?';
    } else if (lowerCaseMessage.includes('how are you')) {
      return 'I\'m functioning well, thank you for asking! I\'m here to help you with whatever you need.';
    } else if (lowerCaseMessage.includes('help')) {
      return 'I\'d be happy to help! I can provide information, answer questions, or just chat. What do you need assistance with?';
    } else if (lowerCaseMessage.includes('thank')) {
      return 'You\'re very welcome! Is there anything else I can help with?';
    } else {
      return 'That\'s an interesting point. Could you tell me more about that? I\'m here to learn and assist you the best I can.';
    }
  };

  return (
    <div className="chat-interface">
      <div className="chat-header">
        <div className="chat-title">
          <div className="ai-avatar shape-leaf">AI</div>
          <h3>Nature AI Assistant</h3>
        </div>
        <p className="status-text">Online</p>
      </div>
      
      <div className="messages-container">
        <div className="organic-shape animated-shape" style={{ top: '10%', left: '5%', width: '150px', height: '150px' }}></div>
        <div className="organic-shape animated-shape" style={{ bottom: '15%', right: '8%', width: '120px', height: '120px' }}></div>
        
        {messages.map(message => (
          <ChatMessage 
            key={message.id}
            role={message.role}
            content={message.content}
            timestamp={message.timestamp}
          />
        ))}
        
        {isProcessing && (
          <div className="ai-typing">
            <div className="typing-indicator">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>
      
      <ChatInput onSendMessage={handleSendMessage} disabled={isProcessing} />
    </div>
  );
};

export default ChatInterface;