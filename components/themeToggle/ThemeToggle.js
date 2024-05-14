// import { useState, useEffect } from 'react';
// import styles from './index.module.css'; // Import module styles

// const ThemeToggle = () => {
//   const [theme, setTheme] = useState('light');

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme');
//     if (savedTheme) {
//       setTheme(savedTheme);
//       document.documentElement.setAttribute('data-theme', savedTheme);
//     }else{
//       setTheme('light');
//       document.documentElement.setAttribute('data-theme', 'light');
//     }
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light';
//     setTheme(newTheme);
//     localStorage.setItem('theme', newTheme);
//     document.documentElement.setAttribute('data-theme', newTheme);
//   };

//   return (
//     <button onClick={toggleTheme} className={styles.themeToggle}>
//       {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
//     </button>
//   );
// };

// export default ThemeToggle;



// components/ThemeToggle.js
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from './index.module.css'; // Import module styles

const ThemeToggle = () => {
  const [theme, setTheme] = useState('light');
  const router = useRouter();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
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

  useEffect(() => {
    const handleRouteChange = () => {
      // Reset theme to light mode when navigating to another page
      setTheme('light');
      localStorage.setItem('theme', 'light');
      document.documentElement.setAttribute('data-theme', 'light');
    };

    router.events.on('routeChangeStart', handleRouteChange);

    return () => {
      router.events.off('routeChangeStart', handleRouteChange);
    };
  }, []);

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



