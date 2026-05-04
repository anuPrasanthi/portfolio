import React, { useEffect, useState } from "react";
import "./HeroVisual.css";

const LINES = [
  { indent: 0,  color: "kw",   text: "const" },
  { indent: 0,  color: "fn",   text: " Anu = () => {" },
  { indent: 1,  color: "cm",   text: "// Senior Software Engineer" },
  { indent: 1,  color: "kw",   text: "return" },
  { indent: 1,  color: "br",   text: " {" },
  { indent: 2,  color: "at",   text: "role:" },
  { indent: 2,  color: "str",  text: " 'Full-Stack Engineer'," },
  { indent: 2,  color: "at",   text: "stack:" },
  { indent: 2,  color: "str",  text: " ['React','TS','Node.js']," },
  { indent: 2,  color: "at",   text: "exp:" },
  { indent: 2,  color: "num",  text: " '7+ years'," },
  { indent: 2,  color: "at",   text: "open:" },
  { indent: 2,  color: "bool", text: " true," },
  { indent: 1,  color: "br",   text: " }" },
  { indent: 0,  color: "fn",   text: "}" },
];

export default function HeroVisual() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      i++;
      setVisible(i);
      if (i >= LINES.length) clearInterval(t);
    }, 90);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="hv-wrap">
      {/* Main code card */}
      <div className="hv-card hv-card-main">
        <div className="hv-card-header">
          <span className="hv-dot hv-dot-r" />
          <span className="hv-dot hv-dot-y" />
          <span className="hv-dot hv-dot-g" />
          <span className="hv-file">anu.tsx</span>
        </div>
        <div className="hv-code">
          {LINES.map((ln, i) => (
            <div key={i} className={`hv-line ${i < visible ? "hv-line-in" : ""}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="hv-lnum">{String(i + 1).padStart(2, "0")}</span>
              <span style={{ marginLeft: `${ln.indent * 14}px` }} className={`hv-tok hv-${ln.color}`}>
                {ln.text}
              </span>
            </div>
          ))}
          <div className="hv-cursor-line">
            <span className="hv-lnum">{LINES.length + 1}</span>
            <span className="hv-cursor-blink" />
          </div>
        </div>
      </div>

      {/* Floating stat pills */}
      <div className="hv-pill hv-pill-1">
        <span className="hv-pill-dot" />
        Open to work
      </div>
      <div className="hv-pill hv-pill-2">
        <span className="hv-pill-icon">⚡</span>
        TypeScript · React · Node
      </div>
      <div className="hv-pill hv-pill-3">
        <span className="hv-pill-icon">📍</span>
        Toronto, ON
      </div>

      {/* Background decorative grid */}
      <div className="hv-grid-bg" />
    </div>
  );
}
