import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CodeEditorPanel from './components/CodeEditorPanel'
import './components/CodeEditor.css'

function App() {
  const [count, setCount] = useState(0)
  const [showEditor, setShowEditor] = useState(false)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Code Forge</h1>
      <div className="card">
        <button 
          onClick={() => setShowEditor(!showEditor)}
          className="toggle-editor-btn"
        >
          {showEditor ? 'Hide Code Editor' : 'Show Code Editor'}
        </button>
        
        {showEditor && (
          <div className="editor-container">
            <CodeEditorPanel />
          </div>
        )}
        
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
