import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="nav">
      <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 'bold' }}>
        BRUTALIST TODO
      </div>
      <ul>
        <li>
          <Link 
            to="/" 
            className={location.pathname === '/' ? 'active' : ''}
          >
            HOME
          </Link>
        </li>
        <li>
          <Link 
            to="/about" 
            className={location.pathname === '/about' ? 'active' : ''}
          >
            ABOUT
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;