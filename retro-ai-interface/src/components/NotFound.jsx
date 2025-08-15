import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/NotFound.css';

const NotFound = () => {
  const [errorCode, setErrorCode] = useState('');
  
  // Generate a random "error code" for aesthetic purposes
  useEffect(() => {
    const generateErrorCode = () => {
      const prefix = 'ERR';
      const numbers = Math.floor(Math.random() * 9000) + 1000;
      const suffix = ['A', 'B', 'X', 'Z'][Math.floor(Math.random() * 4)];
      return `${prefix}:${numbers}${suffix}`;
    };
    
    setErrorCode(generateErrorCode());
  }, []);
  
  return (
    <div className="not-found">
      <motion.div 
        className="error-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="error-header">
          <h2 className="glitch">SYSTEM ERROR</h2>
        </div>
        
        <div className="error-content">
          <div className="error-code">{errorCode}</div>
          
          <div className="error-message">
            <div className="error-title">LOCATION NOT FOUND</div>
            <div className="error-description">
              The requested terminal path could not be located. 
              Please verify coordinates and try again.
            </div>
          </div>
          
          <div className="error-ascii">
            <pre>
              {`
     .-----------.       
    /   ERROR    \\      
   /               \\     
  |    LOCATION     |    
  |   NOT  FOUND    |    
  |                 |    
  |  [ 404 ]        |    
  |                 |    
   \\               /     
    \\_____________/      
              `}
            </pre>
          </div>
          
          <div className="error-details">
            <div className="detail-item">
              <span className="detail-label">STATUS:</span>
              <span className="detail-value">404 NOT FOUND</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">TIME:</span>
              <span className="detail-value">{new Date().toLocaleTimeString()}</span>
            </div>
          </div>
        </div>
        
        <div className="error-actions">
          <Link to="/" className="error-button home-button">
            <span>⌂</span> RETURN TO HOME
          </Link>
          <Link to="/terminal" className="error-button terminal-button">
            <span>⌨</span> OPEN TERMINAL
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;