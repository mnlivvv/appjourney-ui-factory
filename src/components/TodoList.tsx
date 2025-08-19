import { memo } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { Todo } from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  toggleTodo: (id: string) => void;
  deleteTodo: (id: string) => void;
}

const TodoList = ({ todos, toggleTodo, deleteTodo }: TodoListProps) => {
  return (
    <Droppable droppableId="todos">
      {(provided) => (
        <div
          className="todo-list"
          {...provided.droppableProps}
          ref={provided.innerRef}
        >
          {todos.length === 0 ? (
            <div className="empty-state">
              <p>Your task list is empty! Add some tasks to get started.</p>
            </div>
          ) : (
            todos.map((todo, index) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                index={index}
                toggleTodo={toggleTodo}
                deleteTodo={deleteTodo}
              />
            ))
          )}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
};

export default memo(TodoList);