import { motion } from 'framer-motion';
import TodoItem from './TodoItem';
import { Todo } from '../types';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoList = ({ todos, toggleTodo, deleteTodo }: TodoListProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.div 
      className="todo-list"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {todos.length === 0 ? (
        <motion.div 
          className="empty-state"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p>No tasks yet! Add one to get started.</p>
          <div className="empty-illustration">✨📝✨</div>
        </motion.div>
      ) : (
        todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        ))
      )}
    </motion.div>
  );
};

export default TodoList;