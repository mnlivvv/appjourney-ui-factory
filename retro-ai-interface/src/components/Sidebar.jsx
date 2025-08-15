import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Sidebar.css';

const Sidebar = ({ isOpen }) => {
  const [activeSection, setActiveSection] = useState(null);
  
  const toggleSection = (section) => {
    if (activeSection === section) {
      setActiveSection(null);
    } else {
      setActiveSection(section);
    }
  };
  
  const menuItems = [
    {
      id: 'dashboard',
      icon: '◈',
      label: 'Dashboard',
      path: '/',
      exact: true,
    },
    {
      id: 'terminal',
      icon: '⌨',
      label: 'Terminal',
      path: '/terminal',
    },
    {
      id: 'aitools',
      icon: '◎',
      label: 'AI Tools',
      submenu: [
        { label: 'Analytics', path: '/analytics' },
        { label: 'Model Training', path: '/training' },
      ],
    },
    {
      id: 'settings',
      icon: '⚙',
      label: 'Settings',
      path: '/settings',
    },
  ];
  
  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: '-100%', opacity: 0 },
  };
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="sidebar"
          initial="closed"
          animate="open"
          exit="closed"
          variants={sidebarVariants}
          transition={{ duration: 0.3 }}
        >
          <div className="sidebar-header">
            <div className="system-info">
              <div className="system-title">SYSTEM MODULES</div>
              <div className="system-version">v2.7.14</div>
            </div>
          </div>
          
          <nav className="sidebar-nav">
            <ul className="nav-list">
              {menuItems.map((item) => (
                <li key={item.id} className="nav-item">
                  {item.submenu ? (
                    <>
                      <button 
                        className={`nav-link submenu-toggle ${activeSection === item.id ? 'active' : ''}`}
                        onClick={() => toggleSection(item.id)}
                      >
                        <span className="nav-icon">{item.icon}</span>
                        <span className="nav-label">{item.label}</span>
                        <span className={`submenu-arrow ${activeSection === item.id ? 'open' : ''}`}>▶</span>
                      </button>
                      
                      <AnimatePresence>
                        {activeSection === item.id && (
                          <motion.ul 
                            className="submenu"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {item.submenu.map((subitem, index) => (
                              <li key={index} className="submenu-item">
                                <NavLink 
                                  to={subitem.path} 
                                  className={({ isActive }) => isActive ? 'submenu-link active' : 'submenu-link'}
                                >
                                  <span className="submenu-icon">○</span>
                                  {subitem.label}
                                </NavLink>
                              </li>
                            ))}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <NavLink 
                      to={item.path} 
                      end={item.exact}
                      className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                    >
                      <span className="nav-icon">{item.icon}</span>
                      <span className="nav-label">{item.label}</span>
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="sidebar-footer">
            <div className="system-status">
              <div className="status-item">
                <span className="led active"></span>
                <span className="status-label">CPU LOAD</span>
                <span className="status-value">38%</span>
              </div>
              <div className="status-item">
                <span className="led active"></span>
                <span className="status-label">MEMORY</span>
                <span className="status-value">2.7GB</span>
              </div>
              <div className="status-item">
                <span className="led warning"></span>
                <span className="status-label">NET</span>
                <span className="status-value">1.2MB/s</span>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;