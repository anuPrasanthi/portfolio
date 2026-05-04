import React, { useEffect, useRef } from "react";
import { TECHNOLOGIES } from "../../Lib/data";
import "./Skills.css";

const GROUPS = [
  { icon:"⚛", title:"Frontend",      feat:["React.js","Javascript","TypeScript"], skills:["React.js","Javascript","TypeScript","Redux Toolkit","Next.js","Tailwind CSS","Material UI","SCSS","Framer Motion"] },
  { icon:"⚙", title:"Backend",       feat:["Node.js"],               skills:["Node.js","Express.js","Java / Spring Boot","GraphQL","WebSockets","RESTful APIs","Microservices"] },
  { icon:"☁", title:"Cloud & DevOps",feat:["AWS"],                   skills:["AWS (S3, Lambda, CloudFront)","Azure DevOps","Docker","GitLab CI","GitHub Actions","Jenkins"] },
  { icon:"▤", title:"Databases",     feat:["MongoDB"],               skills:["MongoDB","PostgreSQL","MySQL","Redis","Snowflake","Spring Data JPA"] },
  { icon:"◈", title:"AI & Emerging", feat:["OpenAI APIs"],           skills:["OpenAI APIs","Cartesia APIs","Voice AI Agents","Hugging Face","LLM Integration","Cursor IDE"] },
  { icon:"✓", title:"Testing",       feat:["Jest","Playwright"],     skills:["Jest","Playwright","Cypress","React Testing Library","Mocha/Chai","Lighthouse"] },
];

export default function Skills() {
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) e.target.querySelectorAll(".reveal").forEach((el,i) => {
        setTimeout(() => el.classList.add("in"), i*80);
      });
    }, { threshold: .05 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  const theme = document.body.className || "dark";

  return (
    <section className="skills" id="skills" ref={ref}>
      <div className="skills-inner">
        <div className="chip reveal">Tech Stack</div>
        <h2 className="sec-title reveal">Skills & <em>Expertise</em></h2>
        <p className="skills-sub reveal">Technologies I use daily and the stack I build with.</p>

        <div className="skills-groups">
          {GROUPS.map((g,i) => (
            <div key={i} className="sg reveal">
              <div className="sg-hd">
                <span className="sg-ico">{g.icon}</span>
                <span className="sg-title">{g.title}</span>
              </div>
              <div className="sg-tags">
                {g.skills.map((s,j) => (
                  <span key={j} className={`sg-tag ${g.feat.includes(s) ? "sg-tag-f" : ""}`}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-logos reveal">
          <p className="logos-label">Core technologies</p>
          <div className="logos-row">
            {TECHNOLOGIES.map((t,i) => (
              <a key={i} href={t.url} target="_blank" rel="noreferrer" className="logo-item" title={t.label}>
                <img src={theme==="dark" && t.darkModeLogo ? t.darkModeLogo : t.logo} alt={t.label} className="logo-img" />
                <span className="logo-name">{t.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
