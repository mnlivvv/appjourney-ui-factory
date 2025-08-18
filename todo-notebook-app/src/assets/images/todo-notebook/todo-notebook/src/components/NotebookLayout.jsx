import React from 'react';
import './NotebookLayout.css';
import paperTexture from '../assets/images/paper-texture.jpg';

const NotebookLayout = ({ children }) => {
  return (
    <div className="notebook-container">
      <div className="spiral-binding">
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className="spiral-loop"></div>
        ))}
      </div>
      <div 
        className="notebook-page"
        style={{ backgroundImage: `url(${paperTexture})` }}
      >
        <div className="notebook-content">
          {children}
        </div>
      </div>
    </div>
  );
};

export default NotebookLayout;