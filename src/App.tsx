import { useState } from 'react'
import { TodoProvider } from './context/TodoContext'
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import DailyQuote from './components/DailyQuote'
import BreathingExercise from './components/BreathingExercise'
import './App.css'

function App() {
  const [showBreathingExercise, setShowBreathingExercise] = useState(false)

  return (
    <TodoProvider>
      <div className="app-container">
        <header className="app-header">
          <h1>Mindful Tasks</h1>
          <p className="subtitle">A simple and tranquil space for your tasks</p>
        </header>

        <main>
          <div className="mindfulness-section">
            <DailyQuote />
            <button 
              className="breathing-toggle"
              onClick={() => setShowBreathingExercise(!showBreathingExercise)}
            >
              {showBreathingExercise ? 'Hide Breathing Exercise' : 'Take a Breathing Break'}
            </button>
            {showBreathingExercise && <BreathingExercise />}
          </div>

          <div className="todo-section">
            <TodoForm />
            <TodoList />
          </div>
        </main>

        <footer className="app-footer">
          <p>Find your calm, one task at a time.</p>
        </footer>
      </div>
    </TodoProvider>
  )
}

export default App
