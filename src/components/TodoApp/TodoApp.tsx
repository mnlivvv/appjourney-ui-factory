import { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import type { DropResult } from '@hello-pangea/dnd';
import Confetti from 'react-confetti';
import { v4 as uuidv4 } from 'uuid';
import './TodoApp.css';

// Import category icons
import workIcon from '../../assets/icons/work.svg';
import homeIcon from '../../assets/icons/home.svg';
import funIcon from '../../assets/icons/fun.svg';
import studyIcon from '../../assets/icons/study.svg';
import healthIcon from '../../assets/icons/health.svg';

interface Task {
  id: string;
  content: string;
  completed: boolean;
  category: string;
}

const CATEGORIES = [
  { id: 'work', name: 'Work', icon: workIcon },
  { id: 'home', name: 'Home', icon: homeIcon },
  { id: 'fun', name: 'Fun', icon: funIcon },
  { id: 'study', name: 'Study', icon: studyIcon },
  { id: 'health', name: 'Health', icon: healthIcon }
];

const TodoApp = () => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [newTask, setNewTask] = useState('');
  const [newCategory, setNewCategory] = useState('work');
  const [showConfetti, setShowConfetti] = useState(false);
  const [confettiDuration, setConfettiDuration] = useState(0);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, confettiDuration);
      
      return () => clearTimeout(timer);
    }
  }, [showConfetti, confettiDuration]);

  const addTask = () => {
    if (newTask.trim() === '') return;
    
    const task: Task = {
      id: uuidv4(),
      content: newTask,
      completed: false,
      category: newCategory
    };
    
    setTasks([...tasks, task]);
    setNewTask('');

    // Add bounce animation to the last element
    setTimeout(() => {
      const taskElements = document.querySelectorAll('.task-card');
      const lastTaskElement = taskElements[taskElements.length - 1];
      if (lastTaskElement) {
        lastTaskElement.classList.add('bounce-animation');
        setTimeout(() => {
          lastTaskElement.classList.remove('bounce-animation');
        }, 1000);
      }
    }, 100);
  };

  const removeTask = (id: string) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id: string) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === id) {
        const newCompletedState = !task.completed;
        
        // Show confetti when task is marked as completed
        if (newCompletedState) {
          setConfettiDuration(3000);
          setShowConfetti(true);
        }
        
        return { ...task, completed: newCompletedState };
      }
      return task;
    });
    
    setTasks(updatedTasks);
  };

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;

    // Dropped outside the list
    if (!destination) return;
    
    // Dropped in the same position
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return;

    const newTasks = [...tasks];
    const [removed] = newTasks.splice(source.index, 1);
    newTasks.splice(destination.index, 0, removed);
    
    setTasks(newTasks);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = CATEGORIES.find(cat => cat.id === categoryId);
    return category ? category.icon : workIcon;
  };

  return (
    <div className="todo-app">
      {showConfetti && (
        <div className="confetti-container">
          <Confetti
            width={windowSize.width}
            height={windowSize.height}
            recycle={false}
            numberOfPieces={200}
            colors={['#4285F4', '#EA4335', '#FBBC05', '#34A853', '#9C27B0']}
          />
        </div>
      )}
      
      <div className="app-header">
        <h1 className="app-title">Task Master</h1>
        <p className="app-subtitle">Organize your tasks with fun and style!</p>
      </div>
      
      <div className="task-form">
        <input
          type="text"
          className="task-input"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="What do you need to do?"
        />
        
        <select
          className="category-select"
          value={newCategory}
          onChange={e => setNewCategory(e.target.value)}
        >
          {CATEGORIES.map(category => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        
        <button className="add-button" onClick={addTask}>
          Add Task
        </button>
      </div>
      
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks-list">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={`tasks-container ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
            >
              {tasks.length > 0 ? (
                tasks.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`task-card ${task.category} ${task.completed ? 'completed' : ''} ${snapshot.isDragging ? 'dragging' : ''}`}
                      >
                        <span className="drag-handle">☰</span>
                        <input
                          type="checkbox"
                          className="task-checkbox"
                          checked={task.completed}
                          onChange={() => toggleTask(task.id)}
                        />
                        <span className="task-content">{task.content}</span>
                        <img
                          src={getCategoryIcon(task.category)}
                          alt={task.category}
                          className="task-category-icon"
                        />
                        <button
                          className="task-remove"
                          onClick={() => removeTask(task.id)}
                        >
                          ×
                        </button>
                      </div>
                    )}
                  </Draggable>
                ))
              ) : (
                <div className="empty-state">
                  <div className="empty-state-icon">📋</div>
                  <p className="empty-state-text">
                    Your task list is empty! Add some tasks to get started.
                  </p>
                </div>
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TodoApp;