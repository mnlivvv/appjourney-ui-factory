import { TodoProvider } from './context/TodoContext'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import Mascot from './components/Mascot'
import './styles/app.css'

function App() {
  return (
    <TodoProvider>
      <div className="app-container">
        <Header />
        <TodoForm />
        <TodoList />
        <Mascot />
      </div>
    </TodoProvider>
  )
}

export default App
