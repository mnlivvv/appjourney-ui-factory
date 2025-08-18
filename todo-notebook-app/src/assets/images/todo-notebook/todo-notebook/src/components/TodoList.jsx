import React from 'react';
import TodoItem from './TodoItem';
import './TodoList.css';
import stickyNote from '../assets/images/sticky-note.png';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  // Group todos: completed at the bottom
  const sortedTodos = [...todos].sort((a, b) => {
    if (a.completed && !b.completed) return 1;
    if (!a.completed && b.completed) return -1;
    return new Date(b.createdAt) - new Date(a.createdAt);
  });

  if (todos.length === 0) {
    return (
      <div className="empty-list">
        <div className="sticky-note">
          <img src={stickyNote} alt="Sticky note" />
          <p>Your to-do list is empty! Add some tasks to get started.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {sortedTodos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;