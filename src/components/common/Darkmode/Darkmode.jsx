// DarkModeToggle.js
import React, { useState } from 'react';
import './Darkmode.css';

function DarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`dark-mode-toggle ${isDarkMode ? 'dark' : 'light'}`}>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

export default DarkMode;
