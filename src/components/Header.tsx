import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="app-header">
      <div className="header-content">
        <div className="logo-container">
          <span className="logo-text">TaskMaster</span>
          <div className="logo-icon">✓</div>
        </div>
        <p className="tagline">Organize, track, and boost your productivity!</p>
      </div>
    </header>
  );
};

export default Header;