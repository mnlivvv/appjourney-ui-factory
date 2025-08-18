import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useTaskContext } from '../context/TaskContext';

const Header = () => {
  const { userStats } = useTaskContext();
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const hour = new Date().getHours();
    let newGreeting = '';
    
    if (hour < 12) {
      newGreeting = 'Good Morning';
    } else if (hour < 18) {
      newGreeting = 'Good Afternoon';
    } else {
      newGreeting = 'Good Evening';
    }
    
    setGreeting(newGreeting);
  }, []);

  return (
    <header className="bg-gradient-to-r from-primary to-secondary py-6 px-6 rounded-b-2xl shadow-lg mb-8">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto"
      >
        <div className="flex justify-between items-center">
          <div>
            <motion.h1 
              className="text-3xl font-bold text-white mb-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              TaskMaster
            </motion.h1>
            <motion.p 
              className="text-white text-opacity-90"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              {greeting}! Let's be productive today.
            </motion.p>
          </div>
          
          <motion.div 
            className="bg-white bg-opacity-20 p-3 rounded-xl backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="flex items-center gap-3">
              <div className="flex flex-col items-center">
                <span className="text-white text-sm">Streak</span>
                <span className="text-white text-xl font-bold">{userStats.streak.count}</span>
              </div>
              
              <div className="h-10 w-px bg-white bg-opacity-30"></div>
              
              <div className="flex flex-col items-center">
                <span className="text-white text-sm">Completed</span>
                <span className="text-white text-xl font-bold">{userStats.tasksCompleted}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </header>
  );
};

export default Header;