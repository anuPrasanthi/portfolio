import React, { useState, useEffect } from "react";
import BackgroundEffect from "./components/BackgroundEffect";
import NavBar from "./components/NavBar/NavBar";
import AppRoute from "./Routes/AppRoute";
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
  const handleResize = () => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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
        <NavBar handleTheme={toggleTheme} theme={theme} isMobile={isMobile} />
        <AppRoute />
        <BackgroundEffect />
      </div>
    </ThemeProvider>
  );
};

export default App;
