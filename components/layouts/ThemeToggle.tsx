'use client';

import { useDarkMode } from '../../contexts/ThemeProvider';

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="w-11 h-7 sm:w-16 sm:h-8 bg-gray rounded-full flex items-center px-1 transition-colors duration-300"
      aria-label="Toggle theme"
    >
      <span
        className={`w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center rounded-full bg-main shadow-md transform transition-transform duration-300
          ${darkMode ? 'translate-x-4 sm:translate-x-8' : 'translate-x-0'}`}
      >
        {darkMode ? '🌙' : '☀️'}
      </span>
    </button>
  );
};

export default ThemeToggle;
