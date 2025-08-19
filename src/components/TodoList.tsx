import { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd';
import { motion, AnimatePresence } from 'framer-motion';
import TodoItem from './TodoItem';
import { useTodo } from '../context/TodoContext';
import { Category } from '../types';

const TodoList = () => {
  const { filteredTodos, reorderTodos, clearCompleted, setFilter, filter, setCategoryFilter, categoryFilter } = useTodo();
  
  // Category colors for visual distinction
  const categoryColors: Record<string, string> = {
    work: 'bg-blue-500',
    personal: 'bg-purple-500',
    shopping: 'bg-green-500',
    health: 'bg-orange-500',
    other: 'bg-gray-500'
  };

  const handleDragEnd = (result: DropResult) => {
    // Dropped outside the list
    if (!result.destination) {
      return;
    }

    // Reorder the todos
    reorderTodos(result.source.index, result.destination.index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Filter buttons */}
      <div className="flex flex-wrap justify-between mb-6">
        <div className="flex space-x-2 mb-3">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-purple-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('active')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'active'
                ? 'bg-purple-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'completed'
                ? 'bg-purple-500 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            Completed
          </button>
        </div>
        <button
          onClick={clearCompleted}
          className="px-4 py-2 bg-red-500 text-white rounded-full text-sm font-medium hover:bg-red-600 transition-colors mb-3"
        >
          Clear Completed
        </button>
      </div>

      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        <button
          onClick={() => setCategoryFilter('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            categoryFilter === 'all'
              ? 'bg-gray-800 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          All Categories
        </button>
        {(Object.keys(categoryColors) as Category[]).map((category) => (
          <button
            key={category}
            onClick={() => setCategoryFilter(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              categoryFilter === category
                ? `${categoryColors[category]} text-white`
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Todo list with drag and drop */}
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todoList">
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="min-h-[200px]"
            >
              <AnimatePresence>
                {filteredTodos.length > 0 ? (
                  filteredTodos.map((todo, index) => (
                    <TodoItem
                      key={todo.id}
                      todo={todo}
                      index={index}
                      categoryColors={categoryColors}
                    />
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center p-8 bg-white bg-opacity-80 rounded-lg"
                  >
                    <p className="text-gray-500 text-lg">No todos found</p>
                    <p className="text-gray-400 text-sm">
                      {filter === 'all' && categoryFilter === 'all'
                        ? 'Add a new todo to get started!'
                        : 'Try changing your filters'}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default TodoList;