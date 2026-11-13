import React from "react";
import { createRoot } from "react-dom/client";
import { ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, ShoppingBag, Layers3, Sparkles, Download, ExternalLink } from "lucide-react";
import "./styles.css";

const projects = [
  {
    number: "01",
    type: "React · API Integration",
    title: "Gemini AI Interface",
    description: "A conversational AI interface inspired by Google Gemini, built with React and the Gemini API. Focused on a clean chat experience and responsive interactions.",
    tags: ["React", "JavaScript", "Gemini API"],
    link: "#contact"
  },
  {
    number: "02",
    type: "Frontend · API Integration",
    title: "OMDB Movie Explorer",
    description: "A movie discovery application that uses the OMDB API to search titles and present movie information through a simple, easy-to-use interface.",
    tags: ["JavaScript", "HTML", "CSS", "REST API"],
    link: "#contact"
  },
  {
    number: "03",
    type: "Frontend Development",
    title: "Notes Keeping App",
    description: "A lightweight notes application for capturing and managing everyday thoughts, with an emphasis on usability and a straightforward interface.",
    tags: ["JavaScript", "HTML", "CSS"],
    link: "#contact"
  },
  {
    number: "04",
    type: "E-commerce · Shopify",
    title: "Shopify Store Experiences",
    description: "Designed and customized storefronts across lifestyle, jewellery, fashion, fragrance and wellness brands using Shopify themes, Liquid, and responsive CSS.",
    tags: ["Shopify", "Liquid", "CSS", "E-commerce"],
    link: "#contact"
  },
  {
    number: "05",
    type: "Frontend · UI Recreation",
    title: "Amazon Website Replica",
    description: "A frontend practice project recreating key e-commerce layout patterns, including navigation, product presentation and responsive page structure.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#contact"
  },
  {
    number: "06",
    type: "Web Design",
    title: "Jaipur Travel Website",
    description: "A travel-focused website concept presenting Jaipur destinations and experiences through an accessible, visually clear browsing experience.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "#contact"
  }
];

const skills = [
  ["Frontend", "HTML5", "CSS3", "JavaScript", "React.js"],
  ["Programming", "C++", "Python"],
  ["E-commerce", "Shopify", "Liquid", "Theme Customization"],
  ["Foundations", "OOP", "DSA", "REST APIs", "SQL"]
];

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="nav-wrap">
        <nav className="nav container">
          <a className="wordmark" href="#home" onClick={closeMenu}>HJ<span>.</span></a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
            {menuOpen ? <X size={22}/> : <Menu size={22}/>}
          </button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["About", "Skills", "Work", "Contact"].map(item =>
              <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>
            )}
            <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15}/></a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero container" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> AVAILABLE FOR OPPORTUNITIES</div>
            <h1>Building digital<br/><span className="muted">experiences</span><br/>with purpose<span className="accent">.</span></h1>
            <p className="hero-intro">Hi, I'm <strong>Himanshi Jain</strong> — a B.Tech graduate, frontend developer and Shopify enthusiast. I turn ideas into clean, useful digital experiences for people and businesses.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#work">Explore my work <ArrowUpRight size={17}/></a>
              <a className="text-link" href="#contact">Get in touch <ArrowUpRight size={16}/></a>
            </div>
            <div className="hero-meta">
              <div><span className="meta-label">BASED IN</span><span>Jaipur, India</span></div>
              <div><span className="meta-label">FOCUS</span><span>Frontend · Shopify</span></div>
            </div>
          </div>
          <div className="hero-art" aria-label="Abstract portfolio graphic">
            <div className="orbit orbit-one"></div><div className="orbit orbit-two"></div>
            <div className="hero-card">
              <span className="card-kicker">DIGITAL / 001</span>
              <div className="monogram">H<span>J</span></div>
              <div className="card-bottom"><span>DESIGN MINDED<br/>DEVELOPER</span><span>2026 ↗</span></div>
            </div>
            <div className="floating-note note-top">Curiosity → Code</div>
            <div className="floating-note note-bottom"><span className="tiny-square"></span> Thoughtful by design.</div>
          </div>
          <a className="scroll-cue" href="#about"><span></span> SCROLL TO EXPLORE</a>
        </section>

        <section className="intro-strip">
          <div className="container strip-inner"><span>DEVELOPMENT</span><i>✳</i><span>ECOMMERCE</span><i>✳</i><span>USER EXPERIENCE</span><i>✳</i><span>CREATIVE PROBLEM SOLVING</span></div>
        </section>

        <section className="section container" id="about">
          <div className="section-heading"><span className="section-index">01 / ABOUT</span><span className="section-line"></span></div>
          <div className="about-grid">
            <h2>Curious mind.<br/><span className="muted">Practical maker.</span></h2>
            <div className="about-copy">
              <p className="lead">I enjoy working where technology meets thoughtful design.</p>
              <p>With a B.Tech background and hands-on experience building frontend projects and Shopify storefronts, I like creating websites that are clear, responsive and easy to use. My work spans React interfaces, API-based applications, e-commerce customization and digital brand experiences.</p>
              <p>I'm currently open to opportunities where I can keep learning, contribute to a team and help businesses build better experiences online.</p>
              <div className="about-facts">
                <div><strong>B.Tech</strong><span>Graduate · 2025 batch</span></div>
                <div><strong>Web + Storefronts</strong><span>Development focus</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="container">
            <div className="section-heading"><span className="section-index">02 / CAPABILITIES</span><span className="section-line"></span></div>
            <div className="skills-head"><h2>Tools I use to<br/><span className="muted">make things work.</span></h2><p>A growing toolkit built through projects, practice and hands-on work.</p></div>
            <div className="skill-grid">
              {skills.map(([group, ...items], i) => <div className="skill-card" key={group}>
                <span className="skill-num">0{i+1}</span><h3>{group}</h3>
                <div className="skill-tags">{items.map(item => <span key={item}>{item}</span>)}</div>
              </div>)}
            </div>
          </div>
        </section>

        <section className="section container" id="work">
          <div className="section-heading"><span className="section-index">03 / SELECTED WORK</span><span className="section-line"></span></div>
          <div className="work-head"><h2>Some things<br/><span className="muted">I've worked on.</span></h2><p>A mix of development practice and real-world e-commerce work. Project links can be added as they are published.</p></div>
          <div className="project-list">
            {projects.map(p => <article className="project-row" key={p.number}>
              <span className="project-number">{p.number}</span>
              <div className="project-main"><span className="project-type">{p.type}</span><h3>{p.title}</h3><p>{p.description}</p><div className="project-tags">{p.tags.map(t => <span key={t}>{t}</span>)}</div></div>
              <a href={p.link} className="project-arrow" aria-label={`Contact about ${p.title}`}><ArrowUpRight size={22}/></a>
            </article>)}
          </div>
          <div className="client-note"><div className="note-icon"><ShoppingBag size={20}/></div><div><strong>Also creating for brands & businesses</strong><p>Shopify storefront setup, theme customization, product pages, landing pages and responsive e-commerce experiences.</p></div><a href="#contact">Discuss a project <ArrowUpRight size={16}/></a></div>
        </section>

        <section className="section experience-section">
          <div className="container">
            <div className="section-heading"><span className="section-index">04 / LEARNING & GROWTH</span><span className="section-line"></span></div>
            <div className="experience-grid">
              <h2>Always learning.<br/><span className="muted">Always building.</span></h2>
              <div className="timeline">
                <div className="timeline-item"><span className="timeline-dot"></span><span className="timeline-date">15 JUL — 15 AUG 2022</span><h3>Python Scripting & Application Development</h3><p>UPFLAIRS Pvt. Ltd. · Training</p></div>
                <div className="timeline-item"><span className="timeline-dot"></span><span className="timeline-date">20 JUL — 03 SEP 2023</span><h3>Full Stack Web Development Using Django</h3><p>UPFLAIRS Pvt. Ltd. · Training</p></div>
                <div className="timeline-item"><span className="timeline-dot"></span><span className="timeline-date">2025</span><h3>B.Tech Graduate</h3><p>Information Technology</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <div className="section-heading"><span className="section-index">05 / CONTACT</span><span className="section-line"></span></div>
            <span className="eyebrow">HAVE A ROLE OR PROJECT IN MIND?</span>
            <h2>Let's make<br/>something <span className="muted">useful.</span></h2>
            <p>I'm open to frontend / web development opportunities and freelance website projects.</p>
            <div className="contact-actions">
              <a className="button button-light" href="mailto:YOUR_EMAIL@example.com"><Mail size={17}/> Email me <ArrowUpRight size={16}/></a>
              <a className="button button-outline" href="https://www.linkedin.com/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ExternalLink size={15}/></a>
              <a className="button button-outline" href="https://github.com/" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ExternalLink size={15}/></a>
            </div>
            <div className="contact-hint">Replace the placeholder email and profile links with your own before publishing.</div>
          </div>
        </section>
      </main>

      <footer className="footer container"><a className="wordmark" href="#home">HJ<span>.</span></a><span>Designed & built by Himanshi Jain · 2026</span><a href="#home" className="back-top">BACK TO TOP ↑</a></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);