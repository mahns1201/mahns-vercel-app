'use client';
import { useDarkMode } from '../hooks/useDarkMode';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? '🌙' : '☀️'}
    </button>
  );
}
