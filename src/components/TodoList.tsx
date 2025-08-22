import TodoItem from './TodoItem';

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

const TodoList = ({ todos, onToggle, onDelete }: TodoListProps) => {
  return (
    <div className="todo-list">
      <div className="arcade-screen">
        <div className="screen-scanlines"></div>
        <div className="screen-content">
          <h2 className="level-title">MISSIONS</h2>
          <div className="mission-list">
            {todos.length === 0 ? (
              <div className="empty-state">
                <p>NO MISSIONS AVAILABLE</p>
                <p className="blink">INSERT NEW MISSION</p>
              </div>
            ) : (
              todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  completed={todo.completed}
                  onToggle={onToggle}
                  onDelete={onDelete}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoList;