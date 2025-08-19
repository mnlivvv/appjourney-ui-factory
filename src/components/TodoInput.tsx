import { memo } from 'react';

interface TodoInputProps {
  inputValue: string;
  setInputValue: (value: string) => void;
  addTodo: () => void;
}

const TodoInput = ({ inputValue, setInputValue, addTodo }: TodoInputProps) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  return (
    <div className="todo-input-container">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
        className="todo-input"
      />
    </div>
  );
};

export default memo(TodoInput);