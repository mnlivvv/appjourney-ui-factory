import { TodoProvider } from './context/TodoContext';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './styles/App.css';

function App() {
  return (
    <TodoProvider>
      <div className="app-container">
        <Header />
        
        <main className="app-content">
          <div className="board-container">
            <TodoForm />
            <TodoList />
            
            {/* Decorative stationery elements */}
            <div className="stationery-elements">
              <div className="stationery-element pencil"></div>
              <div className="stationery-element eraser"></div>
            </div>
          </div>
        </main>
        
        <footer className="footer">
          <p>My Skeuomorphic Todo App &copy; {new Date().getFullYear()}</p>
        </footer>
      </div>
    </TodoProvider>
  );
}

export default App;