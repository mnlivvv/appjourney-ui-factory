import { useEffect, useRef } from 'react';
import { useTodo } from '../context/TodoContext';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

const TodoList = () => {
  const { todos, currentCategory } = useTodo();
  const listRef = useRef<HTMLDivElement>(null);

  // Filter todos by the current category
  const filteredTodos = todos.filter(
    (todo) => currentCategory === 'all' || todo.category === currentCategory
  );

  // Sort todos by creation date (newest first)
  const sortedTodos = [...filteredTodos].sort(
    (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
  );

  // Scroll to the top when category changes
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = 0;
    }
  }, [currentCategory]);

  return (
    <div className="todo-list" ref={listRef}>
      {sortedTodos.length === 0 ? (
        <div className="empty-list">
          <p>No tasks yet. Add a new task to get started!</p>
          <div className="pencil-doodle"></div>
        </div>
      ) : (
        <ul>
          {sortedTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoList;