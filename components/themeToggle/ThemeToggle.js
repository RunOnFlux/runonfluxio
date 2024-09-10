import React, { useState, useEffect } from 'react';
import styles from './index.module.css'; // Import module styles

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }else{
      setTheme('light');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <button onClick={toggleTheme} className={styles.themeToggle}>
    {theme === 'light' ? (
      <span role="img" aria-label="Light Mode">☀️</span>
    ) : (
      <span role="img" aria-label="Dark Mode">🌙</span>
    )}
  </button>

  );
};

export default ThemeToggle;



