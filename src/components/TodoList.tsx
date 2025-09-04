import { useState } from 'react';
import TodoItem, { Todo } from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, text: string) => void;
  onAdd: (text: string) => void;
}

const TodoList = ({ todos, onToggle, onDelete, onEdit, onAdd }: TodoListProps) => {
  const [newTodo, setNewTodo] = useState('');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim()) {
      onAdd(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className="todo-list">
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
          data-testid="todo-input"
        />
        <button type="submit" className="add-btn" aria-label="Add todo">
          +
        </button>
      </form>
      
      <div className="todos-container">
        {todos.length === 0 ? (
          <p className="empty-state">Your tasks will appear here. Add one to get started.</p>
        ) : (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))
        )}
      </div>
      
      <div className="todo-stats">
        <span>{todos.filter(todo => !todo.completed).length} tasks remaining</span>
        <span>{todos.filter(todo => todo.completed).length} tasks completed</span>
      </div>
    </div>
  );
};

export default TodoList;