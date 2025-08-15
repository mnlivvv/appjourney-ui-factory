import React, { useState, useEffect, useRef } from 'react';
import Typewriter from 'typewriter-effect';
import { ChatMessage } from '../types';
import Window from './Window';

interface ChatWindowProps {
  id: string;
  isOpen: boolean;
  onClose: (id: string) => void;
  onMinimize: (id: string) => void;
  messages: ChatMessage[];
  onSendMessage: (message: string) => void;
  zIndex: number;
  bringToFront: (id: string) => void;
}

const ChatWindow: React.FC<ChatWindowProps> = ({
  id,
  isOpen,
  onClose,
  onMinimize,
  messages,
  onSendMessage,
  zIndex,
  bringToFront,
}) => {
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of chat
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSendMessage(inputValue);
      setInputValue('');
      setIsTyping(true);
      // Simulate typing
      setTimeout(() => {
        setIsTyping(false);
      }, 1000);
    }
  };

  return (
    <Window
      id={id}
      title="NEURAL INTERFACE v1.0.2"
      isOpen={isOpen}
      onClose={onClose}
      onMinimize={onMinimize}
      initialWidth={500}
      initialHeight={400}
      initialX={Math.round(window.innerWidth / 2 - 250)}
      initialY={Math.round(window.innerHeight / 2 - 200)}
      minWidth={300}
      minHeight={300}
      zIndex={zIndex}
      bringToFront={bringToFront}
    >
      <div className="chat-container" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <div className="chat-messages" style={{ flexGrow: 1, overflowY: 'auto', marginBottom: '10px', padding: '5px' }}>
          {messages.length === 0 && (
            <div className="text-glow" style={{ fontSize: '14px', opacity: 0.7, margin: '20px 0' }}>
              $ SYSTEM ONLINE. NEURAL INTERFACE ACTIVATED._
            </div>
          )}
          
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`chat-message ${message.sender === 'ai' ? 'ai-message' : 'user-message'}`}
              style={{ marginBottom: '12px' }}
            >
              <div className="message-header" style={{ fontSize: '12px', marginBottom: '4px', opacity: 0.7 }}>
                {message.sender === 'user' ? '> USER:' : '> SYSTEM:'} 
                <span style={{ marginLeft: '8px' }}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
              <div className="message-content text-glow">
                {message.sender === 'ai' ? (
                  <div style={{ fontFamily: 'var(--terminal-font)' }}>
                    <Typewriter
                      options={{
                        strings: [message.text],
                        autoStart: true,
                        delay: 20,
                        cursor: '_',
                      }}
                    />
                  </div>
                ) : (
                  message.text
                )}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="typing-indicator text-glow" style={{ fontSize: '14px' }}>
              $ Processing<span className="blink">_</span>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
        
        <form onSubmit={handleSubmit} style={{ display: 'flex', marginTop: 'auto' }}>
          <div style={{ position: 'relative', flexGrow: 1, display: 'flex' }}>
            <span style={{ position: 'absolute', left: '10px', top: '9px' }}>$</span>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="retro-input"
              placeholder="Enter command..."
              style={{ paddingLeft: '25px', flexGrow: 1 }}
            />
          </div>
          <button type="submit" className="retro-button" style={{ marginLeft: '8px' }}>
            SEND
          </button>
        </form>
      </div>
    </Window>
  );
};

export default ChatWindow;