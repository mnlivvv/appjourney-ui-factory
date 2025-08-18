import React, { useState, useEffect } from 'react';
import CategoryBadge from './CategoryBadge';
import MotivationalQuote from './MotivationalQuote';
import TaskFilters from './TaskFilters';
import '../assets/paper-texture.css';

interface Todo {
  id: number;
  text: string;
  completed: boolean;
  category: string;
  createdAt: number;
}

interface TodoListProps {
  selectedCategory: string | null;
}

const TodoList: React.FC<TodoListProps> = ({ selectedCategory }) => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    // Load todos from localStorage if available
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState('');
  const [wobbleId, setWobbleId] = useState<number | null>(null);
  const [newCategory, setNewCategory] = useState('Personal');
  const [showCompleted, setShowCompleted] = useState(true);
  const [sortOrder, setSortOrder] = useState<'default' | 'alphabetical'>('default');
  
  const categories = ['Work', 'Personal', 'Shopping', 'Urgent', 'Later'];

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    
    const newItem = {
      id: Date.now(),
      text: newTodo,
      completed: false,
      category: newCategory,
      createdAt: Date.now()
    };
    
    setTodos([...todos, newItem]);
    setNewTodo('');
    
    // Apply wobble effect to the new item
    setWobbleId(newItem.id);
    setTimeout(() => setWobbleId(null), 500);
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    
    // Apply wobble effect when toggling
    setWobbleId(id);
    setTimeout(() => setWobbleId(null), 500);
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  // Filter todos based on selected category and completed status
  let filteredTodos = selectedCategory 
    ? todos.filter(todo => todo.category === selectedCategory) 
    : todos;
    
  // Filter by completion status if needed
  if (!showCompleted) {
    filteredTodos = filteredTodos.filter(todo => !todo.completed);
  }
  
  // Sort todos based on sort order
  if (sortOrder === 'alphabetical') {
    filteredTodos = [...filteredTodos].sort((a, b) => a.text.localeCompare(b.text));
  } else {
    // Default sort is by creation date (newest first)
    filteredTodos = [...filteredTodos].sort((a, b) => b.createdAt - a.createdAt);
  }

  // Get a random rotation for doodle elements
  const getRandomRotation = () => {
    return `rotate(${Math.floor(Math.random() * 6) - 3}deg)`;
  };

  return (
    <div className="todo-list-container">
      <div className="add-task-container sketchy-border" style={{ padding: '15px', marginBottom: '25px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
          <input
            type="text"
            className="hand-drawn-input handwritten"
            placeholder="What needs to be done?"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            onKeyPress={handleKeyPress}
            style={{ marginRight: '10px', flexGrow: 1 }}
          />
          <button 
            className="hand-drawn-button"
            onClick={addTodo}
            style={{ whiteSpace: 'nowrap' }}
          >
            Add Task
          </button>
        </div>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '10px' }}>
          <span className="handwritten" style={{ marginRight: '5px', color: '#4a4a4a' }}>Category:</span>
          {categories.map(category => (
            <CategoryBadge 
              key={category}
              category={category} 
              onClick={() => setNewCategory(category)}
              isSelected={category === newCategory}
            />
          ))}
        </div>
      </div>
      
      {/* Motivational quote component */}
      <MotivationalQuote />
      
      {/* Task filters component */}
      <TaskFilters 
        showCompleted={showCompleted}
        setShowCompleted={setShowCompleted}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      
      {filteredTodos.length === 0 ? (
        <div className="empty-state sketchy-border" style={{ padding: '30px', textAlign: 'center' }}>
          <p className="handwritten" style={{ fontSize: '1.2rem', color: '#6d6d6d' }}>
            {selectedCategory 
              ? `No ${selectedCategory} tasks yet!` 
              : 'Your to-do list is empty!'}
          </p>
          <div style={{ margin: '20px 0', textAlign: 'center' }}>
            <span className="doodle" style={{ fontSize: '28px', transform: getRandomRotation() }}>✓</span>
            <span className="doodle" style={{ fontSize: '28px', transform: getRandomRotation() }}>✎</span>
            <span className="doodle" style={{ fontSize: '28px', transform: getRandomRotation() }}>☺</span>
          </div>
          <p className="handwritten">Add some tasks above</p>
        </div>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {filteredTodos.map(todo => (
            <li 
              key={todo.id} 
              className={`task-item sketchy-border ${todo.completed ? 'completed' : ''} ${wobbleId === todo.id ? 'wobble' : ''}`}
              style={{ marginBottom: '15px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                <input
                  type="checkbox"
                  className="hand-drawn-checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span className="task-text handwritten" style={{ flexGrow: 1, marginRight: '10px' }}>
                  {todo.text}
                </span>
                <CategoryBadge category={todo.category} />
                <button
                  onClick={() => deleteTodo(todo.id)}
                  style={{ 
                    background: 'none', 
                    border: 'none', 
                    cursor: 'pointer',
                    fontSize: '18px',
                    color: '#4a4a4a',
                    marginLeft: '10px'
                  }}
                  title="Delete task"
                >
                  ✕
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      
      {filteredTodos.length > 0 && (
        <div 
          style={{ 
            marginTop: '20px', 
            textAlign: 'right', 
            color: '#6d6d6d',
            fontFamily: "'Comic Sans MS', 'Marker Felt', cursive",
            fontSize: '0.9rem'
          }}
        >
          <span>
            {filteredTodos.filter(t => t.completed).length} of {filteredTodos.length} completed
          </span>
        </div>
      )}
    </div>
  );
};

export default TodoList;