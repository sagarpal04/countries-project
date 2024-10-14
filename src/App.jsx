import React from "react";
import Header from "./Header";
import { ThemeProvider } from "./ThemeContext"; // Adjust the path if necessary
import { Outlet, Link } from "react-router-dom";
const App = () => {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
};

export default App;
