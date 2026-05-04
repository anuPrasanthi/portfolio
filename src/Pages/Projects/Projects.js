import React, { useState, useEffect, useRef } from "react";
import echosphere from "../../Images/echosphere.png";
import "./Projects.css";

const PROJECTS = [
  { id:"01", name:"VocalEats", tag:"AI Voice Ordering Platform", status:"live", featured:true,
    desc:"A live production platform that lets restaurant customers place orders through natural voice conversation. Built end-to-end with real-time speech synthesis, async state management, and a fully responsive UI.",
    skills:["React","JavaScript","Tailwind CSS","Voice AI","Cartesia APIs","Node.js"],
    url:"https://vocaleats.com" },
  { id:"02", name:"Echo Sphere", tag:"AI Voice Agent Landing Page", status:"live", image:echosphere,
    desc:"An animated, interactive landing page for a voice agent product. Built with a focus on clean layout, smooth transitions, and strong user engagement. Fully responsive with polished micro-interactions.",
    skills:["React","Redux","TypeScript","Material UI","Framer Motion"],
    url:"https://merry-tartufo-7c2854.netlify.app/" },
  { id:"03", name:"MealMaster", tag:"Meal Kit Delivery App", status:"soon",
    desc:"Full-stack meal kit platform with real-time order updates, recipe browsing, and inventory management. Backend complete; frontend in active development.",
    skills:["React","Redux","Node.js","MongoDB","Material UI","Express"] },
  { id:"04", name:"TickeTribe", tag:"Real-Time Event Booking", status:"soon",
    desc:"Event booking platform with live seat availability, Stripe payments, Firebase reminders, and QR check-in. Full-stack in progress.",
    skills:["React","Node.js","Express","MongoDB","WebSockets","Stripe","Firebase"] },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const ref = useRef(null);
  const p = PROJECTS[active];

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) e.target.querySelectorAll(".reveal").forEach((el,i) => {
        setTimeout(() => el.classList.add("in"), i*80);
      });
    }, { threshold: .05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="projects-inner">
        <div className="chip reveal">Projects</div>
        <h2 className="sec-title reveal">Things I've <em>Built</em></h2>

        <div className="projects-layout">
          <div className="projects-list reveal">
            {PROJECTS.map((proj,i) => (
              <button key={i} className={`plist-item ${active===i?"active":""}`} onClick={() => setActive(i)}>
                <span className="plist-num">{proj.id}</span>
                <div className="plist-info">
                  <span className="plist-name">{proj.name}</span>
                  <span className="plist-tag">{proj.tag}</span>
                </div>
                {proj.status==="live" && <span className="plist-live" />}
              </button>
            ))}
          </div>

          <div className="project-detail reveal" key={active}>
            {p.image && (
              <div className="pd-img-wrap"><img src={p.image} alt={p.name} className="pd-img" /></div>
            )}
            {!p.image && p.featured && (
              <div className="pd-badge-feat">★ Featured project</div>
            )}

            <div className="pd-header">
              <span className="pd-num">{p.id}</span>
              <h3 className="pd-name">{p.name}</h3>
              <span className={`pd-status ${p.status==="live"?"live":"soon"}`}>
                {p.status==="live" ? "Live" : "Coming Soon"}
              </span>
            </div>

            <p className="pd-tag">{p.tag}</p>
            <p className="pd-desc">{p.desc}</p>

            <div className="pd-skills">
              {p.skills.map((s,i) => <span key={i} className="pd-skill">{s}</span>)}
            </div>

            {p.url && (
              <a href={p.url} target="_blank" rel="noreferrer" className="btn-fill-sm">
                View Live ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
