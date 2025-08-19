import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { TodoProvider } from './context/TodoContext';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import useKeyboardShortcuts from './hooks/useKeyboardShortcuts';
import './App.css';

function App() {
  const [showHelp, setShowHelp] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  // Keyboard shortcuts
  useKeyboardShortcuts({
    'n': () => {
      // Focus the new todo input when 'n' is pressed
      if (formRef.current) {
        const input = formRef.current.querySelector('input');
        if (input) input.focus();
      }
    },
    '?': () => {
      // Toggle help dialog
      setShowHelp(!showHelp);
    },
    'Escape': () => {
      // Close help dialog if open
      if (showHelp) setShowHelp(false);
    }
  });

  return (
    <TodoProvider>
      <div className="min-h-screen py-8 px-4 relative">
        <div className="container mx-auto max-w-4xl">
          <Header />
          
          {/* Main Content with Glass Effect */}
          <motion.div 
            className="bg-white bg-opacity-85 backdrop-blur-md rounded-2xl shadow-xl p-6 md:p-8"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div ref={formRef}>
              <TodoForm />
            </div>
            <TodoList />
          </motion.div>
          
          {/* Keyboard shortcuts help dialog */}
          {showHelp && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowHelp(false)}
            >
              <motion.div 
                className="bg-white rounded-lg p-6 max-w-md w-full"
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                <h2 className="text-2xl font-bold mb-4 text-purple-600">Keyboard Shortcuts</h2>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <span className="bg-gray-200 px-2 py-1 rounded-md mr-3 font-mono">n</span>
                    <span>Focus the new todo input</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-gray-200 px-2 py-1 rounded-md mr-3 font-mono">?</span>
                    <span>Show/hide this help dialog</span>
                  </li>
                  <li className="flex items-center">
                    <span className="bg-gray-200 px-2 py-1 rounded-md mr-3 font-mono">Esc</span>
                    <span>Close dialogs</span>
                  </li>
                </ul>
                <button 
                  className="mt-6 w-full py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
                  onClick={() => setShowHelp(false)}
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
          
          {/* Keyboard shortcut hint */}
          <div className="text-center mt-6 text-gray-600 text-sm">
            Press <kbd className="bg-gray-200 px-1 py-0.5 rounded text-gray-800 text-xs">?</kbd> for keyboard shortcuts
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;