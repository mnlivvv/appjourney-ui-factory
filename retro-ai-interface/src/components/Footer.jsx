import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="system-logs">
            <div className="log-entry">
              <span className="log-time">[12:42:18]</span>
              <span className="log-message">NEURAL SCAN COMPLETE: NO ANOMALIES DETECTED</span>
            </div>
            <div className="log-entry">
              <span className="log-time">[12:41:05]</span>
              <span className="log-message">MEMORY OPTIMIZATION ROUTINE STARTED</span>
            </div>
          </div>
        </div>
        
        <div className="footer-section">
          <div className="security-status">
            <span className="security-icon">⨂</span>
            <span className="security-text">SECURE CONNECTION ESTABLISHED</span>
          </div>
        </div>
        
        <div className="footer-section">
          <div className="copyright">
            RetroFuture AI System © 2023-2024
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;