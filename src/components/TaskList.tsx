import { TaskItem, Task } from './TaskItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

interface TaskListProps {
  tasks: Task[];
  onComplete: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TaskList({ tasks, onComplete, onDelete }: TaskListProps) {
  if (tasks.length === 0) {
    return (
      <div className="empty-tasks">
        <div className="stone-icon">
          <img src="./src/assets/icons/stone.svg" alt="Stone" />
        </div>
        <p>Your zen garden is empty. Add tasks to create harmony.</p>
      </div>
    );
  }

  return (
    <div className="task-list">
      <TransitionGroup>
        {tasks.map((task) => (
          <CSSTransition
            key={task.id}
            timeout={500}
            classNames="task-transition"
          >
            <TaskItem 
              task={task} 
              onComplete={onComplete} 
              onDelete={onDelete} 
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}