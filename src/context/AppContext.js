import PropTypes from 'prop-types';
import React, { createContext, useState, useEffect, useMemo } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [darkMode, setdarkMode] = useState('dark');

  useEffect(() => {
    if (darkMode === 'light') {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
    }
  }, [darkMode]);

  const foo = useMemo(() => ({ darkMode, setdarkMode } ), [darkMode]);

  return (
    <div>
      <AppContext.Provider value={foo }>
        { children }
      </AppContext.Provider>
    </div>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;
