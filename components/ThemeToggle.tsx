'use client';
import { useDarkMode } from '../hooks/useDarkMode';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
