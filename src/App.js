// src/App.js
import React, { useState, useEffect } from "react";
import BackgroundEffect from "./components/BackgroundEffect";
import NavBar from "./components/NavBar/NavBar";
import AppRoute from "./Routes/AppRoute";
import FloatingCircle from "./components/FloatingBubble/FloatingBubble";
import { ThemeProvider } from "./components/ThemeProvider/ThemeProvider";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import "./App.css"; // Your main styles

const App = () => {
  const [theme, setTheme] = useState("dark"); // Default theme

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      localStorage.setItem("theme", theme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <NavBar handleTheme={toggleTheme} />
        {/* Render both Home and About components initially */}
        <Home />
        <About />
        <AppRoute />
        {/* <FloatingCircle/> */}
        {/* <BackgroundEffect /> */}
      </div>
    </ThemeProvider>
  );
};

export default App;
