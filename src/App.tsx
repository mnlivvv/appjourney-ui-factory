import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'
import DateTimeDisplay from './components/DateTimeDisplay'
import BackgroundSelector from './components/BackgroundSelector'

function App() {
  const [background, setBackground] = useState('#f0f4f8')

  const handleBackgroundChange = (color: string) => {
    setBackground(color)
  }

  return (
    <div className="app-container" style={{ backgroundColor: background }}>
      <div className="todo-app">
        <header>
          <h1>Zen Tasks</h1>
          <DateTimeDisplay />
        </header>
        
        <main>
          <TodoList />
        </main>
        
        <footer>
          <div className="footer-content">
            <p className="zen-quote">"The present moment is filled with joy and happiness. If you are attentive, you will see it."</p>
            <BackgroundSelector onSelectBackground={handleBackgroundChange} />
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
