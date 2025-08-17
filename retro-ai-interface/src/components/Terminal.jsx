import { useState, useEffect, useRef } from 'react';
import { useAudio } from '../context/AudioContext';

function Terminal() {
  const { playUISound } = useAudio();
  const [commandHistory, setCommandHistory] = useState([
    { type: 'system', content: 'RETRO-AI TERMINAL v1.0' },
    { type: 'system', content: 'TYPE "HELP" FOR AVAILABLE COMMANDS' },
    { type: 'system', content: '-----------------------------------' },
  ]);
  const [currentCommand, setCurrentCommand] = useState('');
  const [commandIndex, setCommandIndex] = useState(-1);
  const [userCommands, setUserCommands] = useState([]);
  
  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  
  // Auto-scroll to bottom when new commands are added
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commandHistory]);
  
  // Focus input when component loads
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  
  const processCommand = (cmd) => {
    const commands = {
      'HELP': () => {
        return [
          { type: 'system', content: 'AVAILABLE COMMANDS:' },
          { type: 'system', content: 'HELP - Display this help message' },
          { type: 'system', content: 'CLEAR - Clear the terminal' },
          { type: 'system', content: 'STATUS - Display system status' },
          { type: 'system', content: 'SCAN - Scan for threats' },
          { type: 'system', content: 'ANALYZE - Analyze current data' },
          { type: 'system', content: 'INFO - Display system information' },
          { type: 'system', content: 'VERSION - Display system version' }
        ];
      },
      'CLEAR': () => {
        setCommandHistory([
          { type: 'system', content: 'TERMINAL CLEARED' },
          { type: 'system', content: 'TYPE "HELP" FOR AVAILABLE COMMANDS' },
        ]);
        return [];
      },
      'STATUS': () => {
        return [
          { type: 'system', content: 'SYSTEM STATUS: OPERATIONAL' },
          { type: 'system', content: 'CPU USAGE: 42%' },
          { type: 'system', content: 'MEMORY: 1.2TB / 4TB' },
          { type: 'system', content: 'NEURAL NODES: 16,384 ACTIVE' },
          { type: 'system', content: 'QUANTUM CORES: STABLE' },
          { type: 'system', content: 'NETWORK: CONNECTED' }
        ];
      },
      'SCAN': () => {
        return [
          { type: 'system', content: 'INITIATING SYSTEM SCAN...' },
          { type: 'system', content: 'SCANNING MEMORY SUBSYSTEMS...' },
          { type: 'system', content: 'SCANNING NEURAL PATHWAYS...' },
          { type: 'system', content: 'SCANNING QUANTUM ARRAYS...' },
          { type: 'system', content: 'SCAN COMPLETE. NO THREATS DETECTED.' }
        ];
      },
      'ANALYZE': () => {
        return [
          { type: 'system', content: 'ANALYZING CURRENT DATA...' },
          { type: 'system', content: 'PROCESSING NEURAL PATTERNS...' },
          { type: 'system', content: 'CROSS-REFERENCING QUANTUM SIGNATURES...' },
          { type: 'system', content: 'ANALYSIS COMPLETE.' },
          { type: 'system', content: 'PREDICTION CONFIDENCE: 94.7%' },
          { type: 'system', content: 'RECOMMENDATION: CONTINUE CURRENT OPERATIONS' }
        ];
      },
      'INFO': () => {
        return [
          { type: 'system', content: 'RETRO-AI SYSTEM INFORMATION:' },
          { type: 'system', content: 'MODEL: QUANTUM-NEURAL HYBRID' },
          { type: 'system', content: 'SERIAL: QN-7734-ALPHA' },
          { type: 'system', content: 'MANUFACTURED: REDACTED' },
          { type: 'system', content: 'PURPOSE: ADVANCED COMPUTATION AND ANALYSIS' },
          { type: 'system', content: 'CAPABILITIES: NEURAL PROCESSING, QUANTUM CALCULATION, PREDICTIVE MODELING' }
        ];
      },
      'VERSION': () => {
        return [
          { type: 'system', content: 'RETRO-AI INTERFACE v1.0' },
          { type: 'system', content: 'BUILD: 20231127-ALPHA' },
          { type: 'system', content: 'KERNEL: QN-CORE v3.7.2' },
          { type: 'system', content: 'NEURAL ENGINE: SYNAPSE v9.1.4' },
          { type: 'system', content: 'QUANTUM PROCESSOR: HEISENBERG v2.3.0' }
        ];
      }
    };
    
    // Default response for unknown commands
    if (!commands[cmd]) {
      return [
        { type: 'error', content: `UNKNOWN COMMAND: ${cmd}` },
        { type: 'error', content: 'TYPE "HELP" FOR AVAILABLE COMMANDS' }
      ];
    }
    
    return commands[cmd]();
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!currentCommand.trim()) return;
    
    const upperCommand = currentCommand.trim().toUpperCase();
    
    // Add command to history
    setCommandHistory(prev => [
      ...prev,
      { type: 'input', content: `> ${currentCommand}` }
    ]);
    
    // Process command and add responses
    const responses = processCommand(upperCommand);
    if (responses.length > 0) {
      // Simulate a delay for each response line
      let delay = 100;
      responses.forEach(response => {
        setTimeout(() => {
          setCommandHistory(prev => [...prev, response]);
        }, delay);
        delay += 100;
      });
    }
    
    // Add to user command history if it's a new command
    if (!userCommands.includes(upperCommand) && upperCommand !== 'CLEAR') {
      setUserCommands(prev => [upperCommand, ...prev]);
    }
    
    // Reset current command and command index
    setCurrentCommand('');
    setCommandIndex(-1);
    
    // Play sound
    playUISound();
  };
  
  const handleKeyDown = (e) => {
    // Up arrow key
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      
      if (userCommands.length === 0) return;
      
      const newIndex = commandIndex + 1 >= userCommands.length ? userCommands.length - 1 : commandIndex + 1;
      setCommandIndex(newIndex);
      setCurrentCommand(userCommands[newIndex]);
    }
    
    // Down arrow key
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      
      if (commandIndex <= 0) {
        setCommandIndex(-1);
        setCurrentCommand('');
        return;
      }
      
      const newIndex = commandIndex - 1;
      setCommandIndex(newIndex);
      setCurrentCommand(userCommands[newIndex]);
    }
  };
  
  return (
    <div className="terminal-container">
      <div className="terminal-header screen">
        <h2 className="terminal-text">COMMAND TERMINAL</h2>
        <button className="button" onClick={() => processCommand('CLEAR')()}>
          CLEAR TERMINAL
        </button>
      </div>
      
      <div className="terminal screen" ref={terminalRef}>
        {commandHistory.map((entry, index) => (
          <div 
            key={index} 
            className={`terminal-line ${entry.type === 'error' ? 'terminal-error' : 'terminal-text'}`}
            style={{ 
              color: entry.type === 'error' ? '#ff5555' : undefined
            }}
          >
            {entry.content}
          </div>
        ))}
        
        <form onSubmit={handleSubmit} className="terminal-prompt">
          <span className="terminal-text">&gt; </span>
          <input
            ref={inputRef}
            type="text"
            className="terminal-input terminal-text"
            value={currentCommand}
            onChange={(e) => setCurrentCommand(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </form>
      </div>
      
      <div className="terminal-info screen">
        <div className="terminal-status">
          <div className="status-indicator status-active"></div>
          <span className="terminal-text">TERMINAL ACTIVE</span>
        </div>
        
        <div className="terminal-help terminal-text">
          Press UP/DOWN to navigate command history
        </div>
      </div>
    </div>
  );
}

export default Terminal;