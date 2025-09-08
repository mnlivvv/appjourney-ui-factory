import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
      <div className="todo-app__header">
        <h1 className="todo-app__title">Zen Todo</h1>
        <p className="todo-app__subtitle">Focus on what matters most</p>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
