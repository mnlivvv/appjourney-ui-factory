import React from 'react';
import './TodoItem.css';
import dogEar from '../assets/images/dog-ear.png';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {todo.completed && (
        <div className="dog-ear">
          <img src={dogEar} alt="Dog-eared corner" />
        </div>
      )}
      <div className="todo-content">
        <label className="todo-checkbox-container">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodo(todo.id)}
          />
          <span className="checkmark"></span>
        </label>
        <span className="todo-text">{todo.text}</span>
      </div>
      <button 
        className="delete-button" 
        onClick={() => deleteTodo(todo.id)}
        aria-label="Delete task"
      >
        ×
      </button>
    </div>
  );
};

export default TodoItem;