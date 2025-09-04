import { useState } from 'react';
import TodoItem from './TodoItem';
import MindfulBreak from './MindfulBreak';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState('');
  const [showMindfulBreak, setShowMindfulBreak] = useState(false);
  const [completedCount, setCompletedCount] = useState(0);

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newItem: Todo = {
        id: Date.now().toString(),
        text: newTodo.trim(),
        completed: false,
      };
      setTodos([...todos, newItem]);
      setNewTodo('');
    }
  };

  const toggleTodo = (id: string) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        // If the todo is being marked as completed
        if (!todo.completed) {
          // Increment the counter
          const newCount = completedCount + 1;
          setCompletedCount(newCount);
          
          // Every 3 completed tasks, show the mindful break
          if (newCount % 3 === 0) {
            setShowMindfulBreak(true);
          }
        }
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string, newText: string) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, text: newText };
        }
        return todo;
      })
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const closeMindfulBreak = () => {
    setShowMindfulBreak(false);
  };

  return (
    <div className="todo-list-container">
      {showMindfulBreak ? (
        <MindfulBreak onClose={closeMindfulBreak} />
      ) : (
        <>
          <div className="todo-input-container">
            <input
              type="text"
              className="todo-input"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="What needs to be done?"
              aria-label="Add new task"
            />
            <button onClick={addTodo} className="add-btn">
              Add
            </button>
          </div>

          <div className="todo-list">
            {todos.length === 0 ? (
              <div className="empty-state">
                <p>Your mind is clear. Add a task when you're ready.</p>
              </div>
            ) : (
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  completed={todo.completed}
                  onToggle={toggleTodo}
                  onDelete={deleteTodo}
                  onEdit={editTodo}
                />
              ))
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TodoList;
