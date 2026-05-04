import React, { useState } from "react";
import Resume from "../../Lib/Resume.pdf";
import "./Drawer.css";

export default function DrawerMobile({ navItems, theme, handleTheme }) {
  const [open, setOpen] = useState(false);
  const go = (e, path) => {
    e.preventDefault(); setOpen(false);
    setTimeout(() => {
      const el = document.getElementById(path.replace("#",""));
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 220);
  };
  return (
    <>
      <button className="ham" onClick={() => setOpen(true)} aria-label="Menu">
        <span/><span/><span/>
      </button>
      {open && <div className="doverlay" onClick={() => setOpen(false)} />}
      <div className={`drawer ${open ? "open" : ""}`}>
        <div className="drawer-top">
          <span className="drawer-brand">Anu<span>.</span></span>
          <button className="drawer-close" onClick={() => setOpen(false)}>✕</button>
        </div>
        <nav className="drawer-nav">
          {navItems.map((item, i) => (
            <a key={i} href={item.path} className="drawer-link" onClick={e => go(e, item.path)}>
              <span className="drawer-num">0{i+1}.</span>{item.name}
            </a>
          ))}
        </nav>
        <div className="drawer-foot">
          <button className="drawer-theme" onClick={handleTheme}>
            {theme === "dark" ? "☀ Light Mode" : "☾ Dark Mode"}
          </button>
          <a href={Resume} download="AnuPrasanthi_Resume.pdf" className="drawer-cv">
            Download Resume ↓
          </a>
        </div>
      </div>
    </>
  );
}
