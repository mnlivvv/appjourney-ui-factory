import { TodoProvider } from './context/TodoContext';
import Notebook from './components/Notebook';
import './App.css';

function App() {
  return (
    <TodoProvider>
      <div className="app-container">
        <Notebook />
        <footer className="app-footer">
          <p>Physical Notebook Todos App</p>
        </footer>
      </div>
    </TodoProvider>
  );
}

export default App;