import { motion, AnimatePresence } from 'framer-motion';
import { Todo, Filter } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  filter: Filter;
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

const TodoList = ({ todos, filter, onToggleTodo, onDeleteTodo }: TodoListProps) => {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <motion.ul className="todo-list">
      <AnimatePresence>
        {filteredTodos.length > 0 ? (
          filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggleTodo}
              onDelete={onDeleteTodo}
            />
          ))
        ) : (
          <motion.div 
            className="empty-state"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {filter === 'all' ? (
              <p>Your task list is empty. Add a new task to get started.</p>
            ) : filter === 'active' ? (
              <p>No active tasks found.</p>
            ) : (
              <p>No completed tasks found.</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.ul>
  );
};

export default TodoList;