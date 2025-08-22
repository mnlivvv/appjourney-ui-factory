import { motion, AnimatePresence } from 'framer-motion';
import { Todo } from '../types/todo';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  filter: 'all' | 'active' | 'completed';
}

const TodoList = ({ todos, onToggle, onDelete, filter }: TodoListProps) => {
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return todo.completed;
    return !todo.completed;
  });

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    // Sort by priority first (diamond > ruby > emerald > topaz)
    const priorityOrder = { diamond: 0, ruby: 1, emerald: 2, topaz: 3 };
    const priorityDiff = priorityOrder[a.priority] - priorityOrder[b.priority];
    
    if (priorityDiff !== 0) return priorityDiff;
    
    // Then sort by date (newest first)
    const dateA = a.createdAt instanceof Date ? a.createdAt : new Date(a.createdAt);
    const dateB = b.createdAt instanceof Date ? b.createdAt : new Date(b.createdAt);
    return dateB.getTime() - dateA.getTime();
  });

  return (
    <div className="todo-list">
      {sortedTodos.length === 0 ? (
        <motion.div 
          className="empty-state"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="empty-icon">✦</div>
          <p>
            {filter === 'all' 
              ? 'Your task list is empty' 
              : filter === 'active' 
                ? 'No active tasks' 
                : 'No completed tasks'}
          </p>
        </motion.div>
      ) : (
        <AnimatePresence>
          {sortedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
            />
          ))}
        </AnimatePresence>
      )}
    </div>
  );
};

export default TodoList;