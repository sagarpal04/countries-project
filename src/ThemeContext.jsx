// ThemeContext.js
import React, { createContext, useContext, useState } from "react";

// Create the context
const ThemeContext = createContext();

// Create a custom hook for easier access to the context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDarkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
