'use client';

import { useEffect } from 'react';
import { useDarkMode } from '../contexts/ThemeProvider';

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

  return <button onClick={toggleDarkMode}>{darkMode ? '🌙' : '☀️'}</button>;
};

export default ThemeToggle;
