import React from 'react';
import TodoList from '../components/TodoList';

const Home: React.FC = () => {
  return (
    <div>
      <div className="brutalist-header">
        <h1>BRUTALIST TODO</h1>
      </div>
      <TodoList />
    </div>
  );
};

export default Home;