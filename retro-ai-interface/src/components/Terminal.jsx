import React, { useState, useEffect, useRef } from 'react';
import Typed from 'typed.js';
import '../styles/Terminal.css';

const Terminal = () => {
  const [inputValue, setInputValue] = useState('');
  const [history, setHistory] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  
  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  const typedRef = useRef(null);
  
  // Initial terminal boot sequence
  useEffect(() => {
    if (terminalRef.current && history.length === 0) {
      const options = {
        strings: [
          'INITIALIZING TERMINAL CONNECTION...',
          'ESTABLISHING SECURE PROTOCOL...',
          'NEURAL INTERFACE ACTIVE...',
          'READY FOR INPUT.'
        ],
        typeSpeed: 40,
        backSpeed: 20,
        backDelay: 500,
        startDelay: 500,
        loop: false,
        onComplete: () => {
          setHistory([
            { type: 'system', content: 'RETROFUTURE AI TERMINAL v2.7.14' },
            { type: 'system', content: 'COPYRIGHT © 2023-2024 ALL RIGHTS RESERVED' },
            { type: 'system', content: 'TYPE "HELP" FOR AVAILABLE COMMANDS.' },
          ]);
          
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }
      };
      
      typedRef.current = new Typed(terminalRef.current, options);
      
      return () => {
        if (typedRef.current) {
          typedRef.current.destroy();
        }
      };
    }
  }, [history.length]);
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  
  const handleKeyDown = (e) => {
    // Handle up arrow for command history
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    }
    
    // Handle down arrow for command history
    else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInputValue(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputValue('');
      }
    }
    
    // Handle Enter key
    else if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand();
    }
  };
  
  const handleCommand = () => {
    if (inputValue.trim() === '') return;
    
    // Add command to history
    const newHistory = [
      ...history,
      { type: 'command', content: `> ${inputValue}` }
    ];
    
    // Add to command history for up/down navigation
    const newCommandHistory = [...commandHistory, inputValue];
    setCommandHistory(newCommandHistory);
    setHistoryIndex(-1);
    
    // Process command
    const command = inputValue.trim().toLowerCase();
    
    // Process response based on command
    let response;
    
    switch (command) {
      case 'help':
        response = [
          { type: 'response', content: 'AVAILABLE COMMANDS:' },
          { type: 'response', content: '  HELP     - Display this help message' },
          { type: 'response', content: '  CLEAR    - Clear the terminal' },
          { type: 'response', content: '  STATUS   - Display system status' },
          { type: 'response', content: '  SCAN     - Run neural network diagnostic' },
          { type: 'response', content: '  VERSION  - Display system version' },
          { type: 'response', content: '  EXIT     - Exit terminal mode' }
        ];
        break;
        
      case 'clear':
        setHistory([]);
        setInputValue('');
        return;
        
      case 'status':
        response = [
          { type: 'response', content: 'SYSTEM STATUS:' },
          { type: 'response', content: '  NEURAL KERNEL: ACTIVE' },
          { type: 'response', content: '  MEMORY MODULES: OPERATIONAL' },
          { type: 'response', content: '  SECURITY PROTOCOLS: ENGAGED' },
          { type: 'response', content: '  NETWORK CONNECTION: STABLE' },
          { type: 'response', content: '  QUANTUM PROCESSOR: NOMINAL' }
        ];
        break;
        
      case 'scan':
        response = [
          { type: 'response', content: 'INITIATING NEURAL NETWORK DIAGNOSTIC...' }
        ];
        
        setTimeout(() => {
          setHistory(prev => [
            ...prev,
            { type: 'response', content: 'SCANNING LAYER 1... OK' }
          ]);
        }, 800);
        
        setTimeout(() => {
          setHistory(prev => [
            ...prev,
            { type: 'response', content: 'SCANNING LAYER 2... OK' }
          ]);
        }, 1600);
        
        setTimeout(() => {
          setHistory(prev => [
            ...prev,
            { type: 'response', content: 'SCANNING LAYER 3... OK' }
          ]);
        }, 2400);
        
        setTimeout(() => {
          setHistory(prev => [
            ...prev,
            { type: 'response', content: 'QUANTUM ENTANGLEMENT CHECK... STABLE' }
          ]);
        }, 3200);
        
        setTimeout(() => {
          setHistory(prev => [
            ...prev,
            { type: 'response', content: 'DIAGNOSTIC COMPLETE - ALL SYSTEMS NOMINAL' }
          ]);
        }, 4000);
        break;
        
      case 'version':
        response = [
          { type: 'response', content: 'RETROFUTURE AI TERMINAL v2.7.14' },
          { type: 'response', content: 'NEURAL KERNEL: v3.5.7' },
          { type: 'response', content: 'QUANTUM PROCESSOR: MARK IV' },
          { type: 'response', content: 'BUILD DATE: 2023.10.15' }
        ];
        break;
        
      case 'exit':
        response = [
          { type: 'response', content: 'EXITING TERMINAL MODE...' }
        ];
        break;
        
      default:
        response = [
          { type: 'error', content: `COMMAND NOT RECOGNIZED: "${inputValue}"` },
          { type: 'error', content: 'TYPE "HELP" FOR AVAILABLE COMMANDS.' }
        ];
    }
    
    // Update history with response
    setHistory([...newHistory, ...response]);
    setInputValue('');
  };
  
  // Auto-scroll to bottom when history changes
  useEffect(() => {
    const terminal = document.querySelector('.terminal-window');
    if (terminal) {
      terminal.scrollTop = terminal.scrollHeight;
    }
  }, [history]);
  
  return (
    <div className="terminal-container section">
      <div className="section-header">
        <div className="section-title">
          <span className="led active"></span>
          <h2>SYSTEM TERMINAL</h2>
        </div>
        <div className="terminal-controls">
          <button className="terminal-button minimize">_</button>
          <button className="terminal-button maximize">□</button>
          <button className="terminal-button close">×</button>
        </div>
      </div>
      
      <div className="terminal-window">
        {history.length === 0 && (
          <div className="terminal-boot">
            <span ref={terminalRef}></span>
          </div>
        )}
        
        {history.map((item, index) => (
          <div 
            key={index} 
            className={`terminal-line ${item.type}`}
          >
            {item.content}
          </div>
        ))}
        
        <div className="terminal-input-line">
          <span className="prompt">{'>'}</span>
          <input
            type="text"
            className="terminal-input"
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            ref={inputRef}
            autoFocus
          />
          <span className="cursor"></span>
        </div>
      </div>
    </div>
  );
};

export default Terminal;