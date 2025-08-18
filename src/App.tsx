import { useState } from 'react'
import Header from './components/Header';
import TodoList from './components/TodoList';
import Doodles from './components/Doodles';
import './App.css';
import './assets/paper-texture.css';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="app-container paper-texture">
      <div className="notebook-container">
        {/* Decorative doodles */}
        <Doodles position="top-left" />
        <Doodles position="top-right" />
        
        {/* Header with title and category filtering */}
        <Header 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
        
        {/* Main todo list */}
        <TodoList selectedCategory={selectedCategory} />
        
        {/* More decorative doodles */}
        <Doodles position="bottom-left" />
        <Doodles position="bottom-right" />
      </div>
    </div>
  )

export default App
