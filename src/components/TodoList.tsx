import { useTodos } from '../context/TodoContext';
import { TodoItem } from './TodoItem';
import { Todo } from '../types';

export const TodoList = () => {
  const { filteredTodos, viewMode } = useTodos();

  if (filteredTodos.length === 0) {
    return (
      <div className="empty-state fade-in">
        <h3>No tasks found</h3>
        <p>Add a new task to get started!</p>
      </div>
    );
  }

  if (viewMode === 'list') {
    return (
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    );
  }

  // Timeline view
  return (
    <div className="timeline-view">
      {groupTodosByDate(filteredTodos).map(({ date, todos }) => (
        <div key={date} className="timeline-day fade-in">
          <h2 className="timeline-date">{formatTimelineDate(date)}</h2>
          <ul className="todo-list">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// Helper function to group todos by date for timeline view
const groupTodosByDate = (todos: Todo[]) => {
  const groups: { [key: string]: Todo[] } = {};

  // Group todos by due date
  todos.forEach((todo) => {
    // If no due date, put in a "No Due Date" group
    const date = todo.dueDate ? new Date(todo.dueDate) : null;
    const dateKey = date ? date.toDateString() : 'No Due Date';

    if (!groups[dateKey]) {
      groups[dateKey] = [];
    }
    groups[dateKey].push(todo);
  });

  // Convert groups to array and sort by date
  return Object.entries(groups)
    .map(([date, todos]) => ({ date, todos }))
    .sort((a, b) => {
      if (a.date === 'No Due Date') return 1;
      if (b.date === 'No Due Date') return -1;
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
};

// Helper function to format timeline dates in a user-friendly way
const formatTimelineDate = (dateString: string) => {
  if (dateString === 'No Due Date') return 'No Due Date';

  const date = new Date(dateString);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  if (date.toDateString() === today.toDateString()) {
    return 'Today';
  } else if (date.toDateString() === tomorrow.toDateString()) {
    return 'Tomorrow';
  }

  // Format as "Monday, June 12" or similar
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  }).format(date);
};