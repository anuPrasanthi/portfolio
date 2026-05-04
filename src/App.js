import React, { useState, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import AppRoute from "./Routes/AppRoute";
import "./global.css";

const App = () => {
  const [theme, setTheme] = useState("dark");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("ap-theme") || "dark";
    setTheme(saved);
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("ap-theme", theme);
  }, [theme]);

  useEffect(() => {
    const fn = () => setIsMobile(window.innerWidth <= 768);
    fn(); window.addEventListener("resize", fn);
    return () => window.removeEventListener("resize", fn);
  }, []);

  return (
    <div className="App">
      <NavBar theme={theme} toggleTheme={() => setTheme(t => t === "dark" ? "light" : "dark")} isMobile={isMobile} />
      <AppRoute />
    </div>
  );
};
export default App;
