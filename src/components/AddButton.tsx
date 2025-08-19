import { memo } from 'react';

interface AddButtonProps {
  addTodo: () => void;
}

const AddButton = ({ addTodo }: AddButtonProps) => {
  return (
    <button className="add-button" onClick={addTodo} aria-label="Add task">
      <svg viewBox="0 0 24 24" width="24" height="24">
        <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
      </svg>
      <span>Add Task</span>
    </button>
  );
};

export default memo(AddButton);