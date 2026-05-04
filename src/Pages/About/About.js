import React, { useEffect, useRef } from "react";
import profile from "../../Images/profile.JPG";
import "./About.css";

const HLS = [
  { n:"7+",   l:"Years experience" },
  { n:"90%+", l:"Test coverage" },
  { n:"40%",  l:"API latency reduced" },
  { n:"20%",  l:"Backend perf boost" },
];

export default function About() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) e.target.querySelectorAll(".reveal").forEach((el,i) => {
        setTimeout(() => el.classList.add("in"), i*100);
      });
    }, { threshold: .08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about-inner">
        <div className="chip reveal">About Me</div>
        <div className="about-grid">
          <div className="about-left reveal">
            <div className="about-img-wrap">
              <img src={profile} alt="Anu Prasanthi" className="about-img" />
              <div className="about-img-frame" />
            </div>
            <div className="about-hls">
              {HLS.map((h,i) => (
                <div key={i} className="about-hl">
                  <span className="hl-n">{h.n}</span>
                  <span className="hl-l">{h.l}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="about-right">
            <h2 className="sec-title reveal">
              Crafting digital<br /><em>experiences</em>
            </h2>
            <p className="about-p reveal">
              I'm a Senior Software Engineer with 7+ years building performant, scalable
              applications across fintech, banking, and product environments. My core stack
              is React, TypeScript, Redux, and Node.js.
            </p>
            <p className="about-p reveal">
              I've shipped production systems at <strong>Capital One</strong>, <strong>Deloitte</strong>,
              and <strong>Mphasis</strong> — spanning micro-frontend architecture, real-time
              WebSocket features, secure auth flows, and AI voice integrations.
            </p>
            <p className="about-p reveal">
              My latest independent project,{" "}
              <a href="https://vocaleats.com" target="_blank" rel="noreferrer" className="about-link">VocalEats</a>
              , is a live AI voice ordering platform for restaurants — built with React,
              TypeScript, Tailwind CSS, and real-time voice AI APIs. A real product, shipped.
            </p>
            <div className="about-tags reveal">
              {["React.js","TypeScript","Node.js","Redux","Next.js","AWS","MongoDB","AI/LLM"].map((t,i) => (
                <span key={i} className="about-tag">{t}</span>
              ))}
            </div>
            <div className="about-links reveal">
              <a href="https://vocaleats.com" target="_blank" rel="noreferrer" className="btn-fill-sm">VocalEats ↗</a>
              <a href="https://www.linkedin.com/in/anu-prasanthi-pothula-3a7716182/" target="_blank" rel="noreferrer" className="btn-ghost-sm">LinkedIn ↗</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
