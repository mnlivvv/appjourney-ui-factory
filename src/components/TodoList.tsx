import { useTodos } from '../context/TodoContext';
import { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';
import TodoFilters from './TodoFilters';
import TodoEmpty from './TodoEmpty';
import Confetti from './Confetti';

const TodoList = () => {
  const { 
    todos, 
    filteredTodos, 
    activeTodoCount, 
    filter, 
    setFilter, 
    clearCompleted 
  } = useTodos();
  
  const [showConfetti, setShowConfetti] = useState(false);
  
  // Check if all todos are completed
  useEffect(() => {
    if (todos.length > 0 && activeTodoCount === 0) {
      setShowConfetti(true);
    }
  }, [todos, activeTodoCount]);

  return (
    <div className="card">
      {showConfetti && <Confetti active={true} />}
      <TodoForm />
      
      {todos.length > 0 ? (
        <>
          <ul className="todo-list">
            {filteredTodos.map(todo => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
          
          <div className="todo-stats">
            <span>{activeTodoCount} items left</span>
            
            <TodoFilters 
              filter={filter} 
              onFilterChange={setFilter} 
            />
            
            {todos.some(todo => todo.completed) && (
              <button 
                className="todo-clear"
                onClick={clearCompleted}
              >
                Clear completed
              </button>
            )}
          </div>
        </>
      ) : (
        <TodoEmpty />
      )}
    </div>
  );
};

export default TodoList;