import PropTypes from 'prop-types';
import React, { createContext, useState, useEffect, useMemo, useCallback } from 'react';
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkMode, setdarkMode] = useState('dark');
  const [isOpen, setIsOpen] = useState(false);
  const [typeMenuOpen, setTypeMenuOpen] = useState('iconOpenDark');
  const [typeMenuClose, setTypeMenuClose] = useState('iconCloseDart');
  const [notIndex, setNotIndex] = useState(true);

  useEffect(() => {
    if (darkMode === 'light') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  }, [darkMode]);

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
    setNotIndex
  }), [darkMode, handleToggle, isOpen, notIndex, typeMenuClose, typeMenuOpen]);

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
