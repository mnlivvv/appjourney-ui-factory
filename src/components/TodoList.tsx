import { useTodos } from '../context/TodoContext';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';

export default function TodoList() {
  const { todos, toggleTodo, deleteTodo, pinTodo, updateTodoPosition } = useTodos();

  // Sort todos so pinned ones appear first
  const sortedTodos = [...todos].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return 0;
  });

  return (
    <div className="todo-list">
      {sortedTodos.length === 0 ? (
        <div className="empty-list">
          <p>No todos yet. Add a new todo to get started!</p>
        </div>
      ) : (
        sortedTodos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onPin={pinTodo}
            onUpdatePosition={updateTodoPosition}
          />
        ))
      )}
    </div>
  );
}