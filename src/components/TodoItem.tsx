import type { Todo } from '../types/Todo';
import { useTodos } from '../context/TodoContext';
import useFormattedDate from '../hooks/useFormattedDate';
import AnimatedCheckmark from './AnimatedCheckmark';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { toggleTodo, deleteTodo } = useTodos();
  const formattedDate = useFormattedDate(todo.createdAt);
  
  return (
    <li className="todo-item">
      <AnimatedCheckmark 
        checked={todo.completed} 
        onChange={() => toggleTodo(todo.id)} 
      />
      
      <div className="todo-item__content">
        <p className="todo-item__text">{todo.text}</p>
        <span className="todo-item__date">{formattedDate}</span>
      </div>
      
      <button
        className="todo-item__delete"
        onClick={() => deleteTodo(todo.id)}
        aria-label={`Delete "${todo.text}"`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" fill="currentColor"/>
        </svg>
      </button>
    </li>
  );
};

export default TodoItem;