import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react';
const AppContext = createContext();
import PropTypes from 'prop-types';

export const AppProvider = ({ children }) => {
  const [notIndex, setNotIndex] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(null);
  const [darkMode, setdarkMode] = useState('dark');
  const [typeMenuOpen, setTypeMenuOpen] = useState('iconOpenDark');
  const [typeMenuClose, setTypeMenuClose] = useState('iconCloseDart');

  useEffect(() => {
    if (darkMode === 'light') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const handleToggle = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const foo = useMemo(() => ({
    darkMode,
    setdarkMode,
    handleToggle,
    typeMenuOpen,
    typeMenuClose,
    isOpen,
    setTypeMenuOpen,
    setTypeMenuClose,
    notIndex,
    setNotIndex,
    windowWidth,
    setWindowWidth
  }), [darkMode, handleToggle, isOpen, notIndex, typeMenuClose, typeMenuOpen, windowWidth]);

  return (
    <div>
      <AppContext.Provider value={foo}>
        {children}
      </AppContext.Provider>
    </div>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;
