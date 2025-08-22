import { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Todo } from '../types/todo';
import { useGame } from '../context/GameContext';
import { playSound } from '../utils/sound';
import '../styles/TodoItem.css';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoItemProps) => {
  const { dispatch, state } = useGame();
  const { settings } = state;
  const [isHovered, setIsHovered] = useState(false);

  // Animation for completion
  const completionAnimation = useSpring({
    opacity: todo.completed ? 0.7 : 1,
    transform: todo.completed 
      ? 'scale(0.95) translateX(10px)' 
      : 'scale(1) translateX(0px)',
    config: { tension: 170, friction: 12 },
  });

  // Animation for hover
  const hoverAnimation = useSpring({
    transform: isHovered && !todo.completed 
      ? 'translateY(-5px) scale(1.03)' 
      : 'translateY(0px) scale(1)',
    boxShadow: isHovered && !todo.completed
      ? '0 10px 15px rgba(0, 0, 0, 0.3), 0 0 8px rgba(212, 175, 55, 0.5)'
      : '0 4px 6px rgba(0, 0, 0, 0.1), 0 0 0px rgba(212, 175, 55, 0)',
    config: { tension: 300, friction: 20 },
  });

  // Get appropriate CSS class based on difficulty
  const getDifficultyClass = () => {
    switch (todo.difficulty) {
      case 'easy':
        return 'difficulty-easy';
      case 'medium':
        return 'difficulty-medium';
      case 'hard':
        return 'difficulty-hard';
      default:
        return '';
    }
  };

  // Handle toggle completion
  const handleToggle = () => {
    if (!todo.completed) {
      dispatch({ type: 'SET_AVATAR_STATE', payload: 'attack' });
    }
    dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
    
    // Play sound when completing a todo
    if (!todo.completed && settings.soundEnabled) {
      playSound('COMPLETE_TASK', settings.soundEnabled);
    }
  };

  // Handle delete
  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    dispatch({ type: 'DELETE_TODO', payload: todo.id });
  };

  return (
    <animated.div 
      className={`todo-item ${todo.completed ? 'completed' : ''} ${getDifficultyClass()}`}
      style={{ ...completionAnimation, ...hoverAnimation }}
      onClick={handleToggle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="todo-header">
        <h3 className="todo-title">
          {todo.completed && <span className="todo-checkmark">✓</span>}
          {todo.title}
        </h3>
        <div className="todo-actions">
          <span className="todo-difficulty">
            {todo.difficulty === 'easy' && '⚔️'}
            {todo.difficulty === 'medium' && '⚔️⚔️'}
            {todo.difficulty === 'hard' && '⚔️⚔️⚔️'}
          </span>
          <span className="todo-xp">{todo.xpReward} XP</span>
          <button className="todo-delete-btn" onClick={handleDelete}>✖</button>
        </div>
      </div>
      
      <p className="todo-description">{todo.description}</p>
      
      <div className="todo-footer">
        <span className="todo-date">
          {todo.completed 
            ? `Completed: ${todo.completedAt?.toLocaleDateString()}` 
            : `Created: ${todo.createdAt.toLocaleDateString()}`}
        </span>
      </div>
    </animated.div>
  );
};

export default TodoItem;