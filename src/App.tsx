import { DragDropContext } from 'react-beautiful-dnd'
import Confetti from 'react-confetti'
import './App.css'

// Components
import Header from './components/Header'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import AddButton from './components/AddButton'

// Hooks
import { useTodos } from './hooks/useTodos'
import { useQuote } from './hooks/useQuote'
import { useWindowSize } from './hooks/useWindowSize'

function App() {
  // Get quote from custom hook
  const quote = useQuote();
  
  // Get todos functionality from custom hook
  const {
    todos,
    inputValue,
    setInputValue,
    showConfetti,
    addTodo,
    toggleTodo,
    deleteTodo,
    handleDragEnd
  } = useTodos();
  
  // Get window size for confetti
  const windowSize = useWindowSize();

  return (
    <div className="app-container">
      {showConfetti && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
        />
      )}
      
      <Header quote={quote} />
      <TodoInput 
        inputValue={inputValue} 
        setInputValue={setInputValue} 
        addTodo={addTodo} 
      />

      <DragDropContext onDragEnd={handleDragEnd}>
        <TodoList 
          todos={todos} 
          toggleTodo={toggleTodo} 
          deleteTodo={deleteTodo} 
        />
      </DragDropContext>

      <AddButton addTodo={addTodo} />
    </div>
  )
}

export default App
