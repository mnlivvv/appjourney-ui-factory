import { useState, useEffect } from 'react';
import TodoItem from './TodoItem.tsx';
import type { Todo, FilterType } from '../types.ts';

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: string) => void;
  toggleImportant: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string, text: string) => void;
  clearCompleted: () => void;
  isFocusMode: boolean;
}

const TodoList = ({ 
  todos, 
  toggleComplete, 
  toggleImportant, 
  deleteTodo, 
  editTodo,
  clearCompleted,
  isFocusMode
}: TodoListProps) => {
  const [filter, setFilter] = useState<FilterType>('all');
  const [focusedTodoId, setFocusedTodoId] = useState<string | null>(
    todos.find(todo => !todo.completed)?.id || null
  );

  // Filter todos
  const filteredTodos = todos.filter(todo => {
    switch (filter) {
      case 'active':
        return !todo.completed;
      case 'completed':
        return todo.completed;
      case 'important':
        return todo.isImportant;
      default:
        return true;
    }
  });

  // Update focused todo when todos or filter change
  useEffect(() => {
    if (isFocusMode && !focusedTodoId && filteredTodos.length > 0) {
      const firstActiveTodo = filteredTodos.find(todo => !todo.completed);
      if (firstActiveTodo) {
        setFocusedTodoId(firstActiveTodo.id);
      } else if (filteredTodos.length > 0) {
        setFocusedTodoId(filteredTodos[0].id);
      }
    }
  }, [isFocusMode, focusedTodoId, filteredTodos]);

  // Count active and completed todos
  const activeTodos = todos.filter(todo => !todo.completed).length;
  const completedTodos = todos.filter(todo => todo.completed).length;

  return (
    <div className="todo-list-container">
      <div className="filters">
        <button 
          onClick={() => setFilter('all')} 
          className={filter === 'all' ? 'active' : ''}
        >
          All
        </button>
        <button 
          onClick={() => setFilter('active')} 
          className={filter === 'active' ? 'active' : ''}
        >
          Active
        </button>
        <button 
          onClick={() => setFilter('completed')} 
          className={filter === 'completed' ? 'active' : ''}
        >
          Completed
        </button>
        <button 
          onClick={() => setFilter('important')} 
          className={filter === 'important' ? 'active' : ''}
        >
          Important
        </button>
      </div>

      <div className="todo-stats">
        <span>{activeTodos} active</span>
        {completedTodos > 0 && (
          <button onClick={clearCompleted} className="clear-completed">
            Clear {completedTodos} completed
          </button>
        )}
      </div>

      {filteredTodos.length > 0 ? (
        <div className="todo-items">
          {filteredTodos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleComplete={toggleComplete}
              toggleImportant={toggleImportant}
              deleteTodo={deleteTodo}
              editTodo={editTodo}
              isFocusMode={isFocusMode}
              isFocused={todo.id === focusedTodoId}
            />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>No tasks here yet.</p>
        </div>
      )}
    </div>
  );
};

export default TodoList;