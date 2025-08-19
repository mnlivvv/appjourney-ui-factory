import { motion } from 'framer-motion';
import todoIcon from '../assets/images/todo-icon.png';

const Header = () => {
  return (
    <motion.header
      className="py-6 mb-8 relative overflow-hidden"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex items-center justify-center">
        <motion.img
          src={todoIcon}
          alt="Todo App Icon"
          className="w-16 h-16 mr-4"
          initial={{ rotate: -10 }}
          animate={{ rotate: 10 }}
          transition={{ 
            repeat: Infinity, 
            repeatType: "reverse", 
            duration: 1.5 
          }}
        />
        <div className="text-center">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Task Master
          </motion.h1>
          <motion.p 
            className="text-gray-600 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Your colorful and fun todo list manager
          </motion.p>
        </div>
      </div>
      
      {/* Decorative elements */}
      <motion.div 
        className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-purple-500 opacity-20"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 90, 180, 270, 360]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 25,
          ease: "linear"
        }}
      />
      <motion.div 
        className="absolute -bottom-16 -right-16 w-48 h-48 rounded-full bg-pink-500 opacity-20"
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 270, 180, 90, 0]
        }}
        transition={{ 
          repeat: Infinity,
          duration: 20,
          ease: "linear"
        }}
      />
    </motion.header>
  );
};

export default Header;