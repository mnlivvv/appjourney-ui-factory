import { useState } from 'react';
import { ChatMessage } from '../types';

// Helper to generate unique IDs
const generateId = () => Math.random().toString(36).substring(2, 11);

// Predefined AI responses for demo purposes
const aiResponses = [
  "Greetings, human. How may I assist you today?",
  "I've analyzed your request and found several possible solutions.",
  "Interesting question. Let me process that information...",
  "According to my databases, the answer is more complex than it appears.",
  "I'm detecting some ambiguity in your query. Could you provide more details?",
  "My neural networks indicate that this is a fascinating topic worthy of exploration.",
  "I've cross-referenced multiple knowledge sources on this subject.",
  "Your input has triggered my advanced reasoning modules.",
  "I'm calculating the optimal response to your query...",
  "That's a creative question! Let me generate some potential approaches.",
  "My artificial intelligence is designed to handle such inquiries efficiently.",
  "I'm utilizing my quantum processing capabilities to analyze this problem.",
  "Based on my training data, I can offer several perspectives on this matter.",
  "I'm running simulations to determine the most accurate answer.",
  "My algorithms suggest an unconventional but effective solution to your problem."
];

// Function to generate a random AI response with some processing logic
const generateResponse = (userMessage: string): string => {
  // Simple keyword-based responses for demo
  if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi')) {
    return "Greetings, human. How may I assist you today?";
  }
  
  if (userMessage.toLowerCase().includes('help')) {
    return "I can assist with information retrieval, problem-solving, creative tasks, and general conversation. What specific help do you need?";
  }
  
  if (userMessage.toLowerCase().includes('name')) {
    return "I am designated as the RetroAI Assistant, operating on the RETRO-OS 3.14 platform with quantum flux processing.";
  }
  
  if (userMessage.toLowerCase().includes('thank')) {
    return "Acknowledgment accepted. Your satisfaction is my primary objective.";
  }
  
  // Return a random response for other messages
  return aiResponses[Math.floor(Math.random() * aiResponses.length)];
};

export const useAIChat = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);

  const addUserMessage = (text: string) => {
    const newMessage: ChatMessage = {
      id: generateId(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, newMessage]);
    setIsProcessing(true);
    
    // Simulate AI processing time
    setTimeout(() => {
      const aiResponse: ChatMessage = {
        id: generateId(),
        text: generateResponse(text),
        sender: 'ai',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsProcessing(false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  const clearMessages = () => {
    setMessages([]);
  };

  return {
    messages,
    isProcessing,
    addUserMessage,
    clearMessages,
  };
};

export default useAIChat;