import React, { useState, useEffect } from "react";
import HeroVisual from "../../components/HeroVisual/HeroVisual";
import "./Home.css";

const ROLES = ["Senior Software Engineer","Full-Stack Developer","React & TypeScript Expert","AI Integration Builder"];

export default function Home() {
  const [ri, setRi] = useState(0);
  const [txt, setTxt] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const cur = ROLES[ri];
    let t;
    if (typing) {
      if (txt.length < cur.length) t = setTimeout(() => setTxt(cur.slice(0, txt.length+1)), 55);
      else t = setTimeout(() => setTyping(false), 2000);
    } else {
      if (txt.length > 0) t = setTimeout(() => setTxt(t => t.slice(0,-1)), 28);
      else { setRi(i => (i+1)%ROLES.length); setTyping(true); }
    }
    return () => clearTimeout(t);
  }, [txt, typing, ri]);

  const go = id => { const el = document.getElementById(id); if(el) el.scrollIntoView({behavior:"smooth"}); };

  return (
    <section className="home" id="home">
      <div className="home-inner">
        <div className="home-text">
          <div className="home-eyebrow">
            <span className="home-line" />
            Hello, I'm
          </div>

          <h1 className="home-name">
            Anu <em>Prasanthi</em><br />Pothula
          </h1>

          <div className="home-role">
            <span className="home-role-text">{txt}</span>
            <span className="home-caret">|</span>
          </div>

          <p className="home-desc">
            7+ years crafting performant, scalable web applications across fintech,
            banking, and AI-powered products. Based in Toronto.
          </p>

          <div className="home-badges">
            <span className="home-badge home-badge-live">
              <span className="badge-pulse" />Open to work
            </span>
            <span className="home-badge">📍 Toronto, ON</span>
          </div>

          <div className="home-cta">
            <button className="btn-fill" onClick={() => go("projects")}>
              View Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
            <button className="btn-ghost" onClick={() => go("contact")}>Contact Me</button>
          </div>

          <div className="home-stats">
            {[["7+","Years"],["6","Companies"],["15+","Technologies"]].map(([n,l],i,arr) => (
              <React.Fragment key={i}>
                <div className="home-stat">
                  <span className="stat-n">{n}</span>
                  <span className="stat-l">{l}</span>
                </div>
                {i < arr.length-1 && <div className="stat-div" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="home-visual">
          <HeroVisual />
        </div>
      </div>

      <div className="home-scroll">
        <div className="scroll-line" />
        <span>scroll</span>
      </div>
    </section>
  );
}
