import React, { useContext } from 'react';
import { ThemeContext } from './theme-context';

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const styles = {
    backgroundColor: theme === "light" ? "#ffffff" : "#333333",
    color: theme === "light" ? "#000000" : "#ffffff",
    minHeight: "100vh",
    padding: "20px"
  };

  return (
    <div style={styles}>
      <h1>Theme Switcher</h1>
      <p>Current theme: {theme}</p>
      <button onClick={toggleTheme}>
        Switch Theme
      </button>
    </div>
  );
}

export default Theme;
