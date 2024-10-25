// src/App.js
import React, { useState, useEffect } from "react";
import BackgroundEffect from "./components/BackgroundEffect";
import NavBar from "./components/NavBar/NavBar";
import AppRoute from "./Routes/AppRoute";
import FloatingCircle from "./components/FloatingBubble/FloatingBubble";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      localStorage.setItem("theme", theme);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth)
      debugger
      setIsMobile(window.innerWidth <= 768); // Mobile screen width threshold
    };

    handleResize(); // Check on load
    window.addEventListener('resize', handleResize); // Listen for window resize
    return () => window.removeEventListener('resize', handleResize); // Cleanup listener
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    console.log(newTheme)
    debugger
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar handleTheme={toggleTheme} theme={theme} isMobile={isMobile} />
        <AppRoute />
        {/* <FloatingCircle/> */}
        <BackgroundEffect />
      </div>
    </ThemeProvider>
  );
};

export default App;
