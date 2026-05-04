import React, { useState, useEffect } from "react";
import DrawerMobile from "../Drawer/Drawer";
import Resume from "../../Lib/Resume.pdf";
import "./NavBar.css";

export default function NavBar({ theme, toggleTheme, isMobile }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const navItems = [
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Contact", path: "#contact" },
  ];

  const go = (e, path) => {
    e.preventDefault();
    const el = document.getElementById(path.replace("#",""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <a href="#home" className="nav-logo" onClick={e => go(e,"#home")}>
        Anu<span>.</span>
      </a>
      {isMobile ? (
        <DrawerMobile navItems={navItems} theme={theme} handleTheme={toggleTheme} />
      ) : (
        <div className="nav-right">
          <ul className="nav-links">
            {navItems.map((item, i) => (
              <li key={i}>
                <a href={item.path} className="nav-link" onClick={e => go(e, item.path)}>
                  <span className="nav-num">0{i+1}.</span>{item.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="theme-btn" onClick={toggleTheme} title="Toggle theme">
            {theme === "dark"
              ? <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
              : <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            }
          </button>
          <a href={Resume} download="AnuPrasanthi_Resume.pdf" className="nav-cv">Resume ↓</a>
        </div>
      )}
    </nav>
  );
}
