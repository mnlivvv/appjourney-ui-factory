import { memo } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  index: number;
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoItem = ({ todo, index, toggleTodo, deleteTodo }: TodoItemProps) => {
  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided, snapshot) => (
        <div
          className={`todo-item ${
            todo.completed ? 'completed' : ''
          } ${snapshot.isDragging ? 'dragging' : ''}`}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{
            ...provided.draggableProps.style,
            backgroundColor: todo.color,
          }}
        >
          <div className="todo-content">
            <div className="checkbox-container">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleTodo(todo.id)}
                id={`checkbox-${todo.id}`}
                className="todo-checkbox"
              />
              <label 
                htmlFor={`checkbox-${todo.id}`}
                className="checkbox-label"
              ></label>
            </div>
            <p className={`todo-text ${todo.completed ? 'completed-text' : ''}`}>
              {todo.text}
            </p>
          </div>
          <button
            className="delete-button"
            onClick={() => deleteTodo(todo.id)}
            aria-label="Delete task"
          >
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
            </svg>
          </button>
        </div>
      )}
    </Draggable>
  );
};

export default memo(TodoItem);