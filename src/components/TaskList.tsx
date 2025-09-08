import { Task } from '../types';
import TaskItem from './TaskItem';
import { motion, AnimatePresence } from 'framer-motion';
import { FiInbox } from 'react-icons/fi';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';

interface TaskListProps {
  tasks: Task[];
  onToggleComplete: (task: Task) => void;
  onDeleteTask: (taskId: string) => void;
  onReorderTasks: (reorderedTasks: Task[]) => void;
}

const TaskList = ({ tasks, onToggleComplete, onDeleteTask, onReorderTasks }: TaskListProps) => {
  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    
    const items = Array.from(tasks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    onReorderTasks(items);
  };

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <FiInbox />
        <h3>No Tasks Yet</h3>
        <p>Add a new task to get started!</p>
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
        >
          <FiInbox style={{ fontSize: '3rem', opacity: 0.5 }} />
        </motion.div>
      </div>
    );
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="tasks">
        {(provided) => (
          <div 
            className="task-list" 
            {...provided.droppableProps} 
            ref={provided.innerRef}
          >
            <AnimatePresence>
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <TaskItem 
                        task={task} 
                        onToggleComplete={onToggleComplete} 
                        onDeleteTask={onDeleteTask} 
                      />
                    </div>
                  )}
                </Draggable>
              ))}
            </AnimatePresence>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;