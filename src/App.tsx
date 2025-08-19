import { useEffect } from 'react'
import TodoList from './components/TodoList'
import './App.css'

function App() {
  // Create audio directory for sound effects if it doesn't exist
  useEffect(() => {
    // Note: In a production app, sound would be preloaded or handled differently
    // This is just for demo purposes
    console.log('Todo Arcade initialized');
  }, []);

  return (
    <div className="arcade-cabinet">
      <div className="cabinet-top">
        <div className="speaker left"></div>
        <h1 className="cabinet-title">TODO ARCADE</h1>
        <div className="speaker right"></div>
      </div>
      
      <TodoList />
      
      <div className="cabinet-controls">
        <div className="joystick"></div>
        <div className="buttons">
          <div className="button red"></div>
          <div className="button blue"></div>
        </div>
      </div>
    </div>
  )
}

export default App
