import { motion } from 'framer-motion';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import UserProgress from './UserProgress';
import ConfettiEffect from './ConfettiEffect';
import { TodoProvider } from '../context/TodoContext';
import '../styles/TodoApp.css';

const TodoApp = () => {
  return (
    <TodoProvider>
      <motion.div 
        className="todo-app-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <header>
          <motion.h1 
            className="app-title"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ 
              type: "spring",
              stiffness: 300,
              damping: 15
            }}
          >
            ✨ Task Master ✨
          </motion.h1>
          <motion.p 
            className="app-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Complete tasks, earn points, level up!
          </motion.p>
        </header>
        
        <UserProgress />
        <AddTodo />
        <TodoList />
        <ConfettiEffect />
      </motion.div>
    </TodoProvider>
  );
};

export default TodoApp;