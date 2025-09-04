import { useState } from 'react'
import './App.css'
import { TodoProvider } from './context/TodoContext'
import { PomodoroProvider } from './context/PomodoroContext'
import { TodoForm } from './components/TodoForm'
import { TodoFilters } from './components/TodoFilters'
import { TodoList } from './components/TodoList'
import { PomodoroTimer } from './components/PomodoroTimer'

function App() {
  const [showPomodoro, setShowPomodoro] = useState(false);

  return (
    <TodoProvider>
      <PomodoroProvider>
        <div className="app-container">
          <header className="app-header">
            <h1 className="app-title">TaskMaster</h1>
            <button 
              className="pomodoro-toggle" 
              onClick={() => setShowPomodoro(!showPomodoro)}
              aria-label={showPomodoro ? "Hide Pomodoro timer" : "Show Pomodoro timer"}
            >
              {showPomodoro ? 'Hide Timer' : 'Show Timer'}
            </button>
          </header>

          <main className="app-main">
            {showPomodoro && <PomodoroTimer />}
            
            <section className="todos-section">
              <TodoForm />
              <TodoFilters />
              <TodoList />
            </section>
          </main>
        </div>
      </PomodoroProvider>
    </TodoProvider>
  )
}

export default App
