import { useState, useEffect } from 'react';

const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Function to update state based on media query result
    const updateDarkMode = (e) => {
      setIsDarkMode(e.matches);
    };

    // Query the user preference for dark mode
    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    // Set initial state based on the media query
    setIsDarkMode(darkModeMediaQuery.matches);

    // Add event listener for changes in the media query
    darkModeMediaQuery.addEventListener('change', updateDarkMode);

    // Clean up the event listener on component unmount
    return () =>
      darkModeMediaQuery.removeEventListener('change', updateDarkMode);
  }, []);

  return isDarkMode;
};

export default useDarkMode;
