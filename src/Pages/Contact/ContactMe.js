import React, { useState, useRef, useEffect } from "react";
import "./ContactMe.css";

const EMAIL = "anuprasanthipothula@gmail.com";
const PHONE = "+1 (437) 974-5872";

export default function ContactMe() {
  const [copied, setCopied] = useState("");
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) e.target.querySelectorAll(".reveal").forEach((el,i) => {
        setTimeout(() => el.classList.add("in"), i*80);
      });
    }, { threshold: .08 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const copy = (val, label) => {
    navigator.clipboard.writeText(val);
    setCopied(label);
    setTimeout(() => setCopied(""), 2200);
  };

  const SOCIALS = [
    { name:"LinkedIn", url:"https://www.linkedin.com/in/anu-prasanthi-pothula-3a7716182/" },
    { name:"GitHub",   url:"https://github.com/anuPrasanthi" },
    { name:"VocalEats",url:"https://vocaleats.com" },
    { name:"Portfolio",url:"https://anuprasanthi.github.io/portfolio/" },
  ];

  const FACTS = [
    ["Response time","< 24 hours"],
    ["Target role","Senior SWE / FullStack Developer"],
    ["Work type","Remote / Hybrid / On-site"],
    ["Location","Toronto, ON, Canada"],
  ];

  const CopyIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
    </svg>
  );
  const CheckIcon = () => (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact-inner">
        <div className="chip reveal">Contact</div>

        <div className="contact-grid">
          <div className="contact-left">
            <h2 className="sec-title reveal">
              Let's build<br /><em>together</em>
            </h2>
            <p className="contact-sub reveal">
              Open to Senior Software Engineer roles in Toronto — hybrid or on-site.
              Have an interesting opportunity? I'd love to hear about it.
            </p>

            <div className="contact-items reveal">
              {[[EMAIL,"Email"],[PHONE,"Phone"]].map(([val,label]) => (
                <div key={label} className="ci">
                  <div className="ci-body">
                    <span className="ci-label">{label}</span>
                    <span className="ci-val">{val}</span>
                  </div>
                  <button className="ci-copy" onClick={() => copy(val,label)} title={`Copy ${label}`}>
                    {copied===label ? <CheckIcon /> : <CopyIcon />}
                  </button>
                </div>
              ))}
            </div>

            <div className="contact-socials reveal">
              {SOCIALS.map((s,i) => (
                <a key={i} href={s.url} target="_blank" rel="noreferrer" className="csoc">{s.name} ↗</a>
              ))}
            </div>
          </div>

          <div className="contact-right">
            <div className="contact-avail reveal">
              <div className="avail-dot" />
              <div>
                <p className="avail-title">Available for new opportunities</p>
                <p className="avail-sub">Toronto, ON · Hybrid or On-site preferred</p>
              </div>
            </div>
            <div className="contact-facts reveal">
              {FACTS.map(([l,v],i) => (
                <div key={i} className="cfact">
                  <span className="cfact-l">{l}</span>
                  <span className="cfact-v">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-inner">
          <span className="footer-brand">Anu<span>.</span></span>
          <p className="footer-copy">© 2026 · Designed & built by Anu Prasanthi Pothula · Toronto, ON</p>
          <div className="footer-links">
            {SOCIALS.slice(0,3).map((s,i) => (
              <a key={i} href={s.url} target="_blank" rel="noreferrer" className="footer-link">{s.name}</a>
            ))}
          </div>
        </div>
      </footer>

      {copied && (
        <div className="toast">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--green)" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
          {copied} copied!
        </div>
      )}
    </section>
  );
}
