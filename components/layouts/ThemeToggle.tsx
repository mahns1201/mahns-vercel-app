'use client';

import { useEffect } from 'react';
import { useDarkMode } from '../../contexts/ThemeProvider';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <button
      onClick={toggleDarkMode}
      className="w-11 h-7 sm:w-16 sm:h-8 bg-gray-300 dark:bg-gray-700 rounded-full flex items-center px-1 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <span
        className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full bg-white dark:bg-gray-900 shadow-md transform transition-transform duration-300
          ${darkMode ? 'translate-x-4 sm:translate-x-8' : 'translate-x-0'}`}
      >
        {darkMode ? '🌙' : '☀️'}
      </span>
    </button>
  );
};

export default ThemeToggle;
