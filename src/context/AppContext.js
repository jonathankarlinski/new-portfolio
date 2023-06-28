import PropTypes from 'prop-types';
import React, { createContext, useState, useEffect, useMemo } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkMode, setdarkMode] = useState('dark');
  const [isOpen, setIsOpen] = useState(false);
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

  
  const typeMenu = () => {
    if (darkMode === 'dark') {
      setTypeMenuOpen('iconOpenLight')
      setTypeMenuClose('iconCloseLight')
    } else {
      setTypeMenuOpen('iconOpenDark')
      setTypeMenuClose('iconCloseDark')
    }
  }

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <AppContext.Provider
        value={{
          darkMode,
          setdarkMode,
          handleToggle,
          typeMenuOpen,
          typeMenuClose,
          isOpen,
          typeMenu
        }}>
        {children}
      </AppContext.Provider>
    </div>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;
