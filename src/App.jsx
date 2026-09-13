import { useState, useEffect } from 'react'
import './App.css'
import projects from './data/projects'
import skills from './data/skills'
import education from './data/education'

const NAV_LINKS = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo">
          Preet<span>.</span>
        </a>

        <button
          className="menu-toggle"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero-grid">
        <div>
          <div className="hero-badge">
            <span>✨</span> Open to opportunities
          </div>
          <h1>
            Hi, I&apos;m Preet Patel <span className="wave">👋</span>
          </h1>
          <p className="hero-role">
            BCA Student · <span>Web &amp; Android Developer</span>
          </p>
          <p className="hero-desc">
            Passionate about building clean, useful software. Currently studying
            Computer Applications and sharpening skills in full-stack web,
            Android, and problem-solving with DSA.
          </p>
          <div className="hero-cta">
            <a href="#projects" className="btn btn-primary">
              View Projects →
            </a>
            <a href="#contact" className="btn btn-outline">
              Get in Touch
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="avatar-wrap">
            <div className="avatar-ring" />
            <img
              src={`${import.meta.env.BASE_URL}my_img.jpeg`}
              alt="Preet Patel"
              className="avatar"
            />
            <div className="floating-chip one">React</div>
            <div className="floating-chip two">Android</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <h2 className="section-title">
          About <span className="accent">Me</span>
        </h2>
        <p className="section-subtitle">
          Education background and a little about my journey.
        </p>

        <div className="about-grid">
          <div className="about-card">
            <h3>🎓 Education</h3>
            {education.map((edu) => (
              <div key={edu.id} className="edu-item">
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-meta">
                  {edu.institution}
                  {edu.affiliation && ` · ${edu.affiliation}`}
                </div>
                <div className="edu-details">
                  {edu.period} · {edu.details}
                </div>
                {edu.links?.length > 0 && (
                  <div className="edu-links">
                    {edu.links.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {l.label} ↗
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="about-card">
            <h3>💡 Quick Intro</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>
              I am currently pursuing my Bachelor&apos;s in Computer Applications
              at Sutex Bank College, affiliated with Veer Narmad South Gujarat
              University. I enjoy turning ideas into working code — whether it is
              a responsive website, an Android screen, or solving a tough DSA
              problem.
            </p>
            <p style={{ color: 'var(--text-secondary)' }}>
              My focus areas are modern web development (React, HTML/CSS/JS),
              Android, and continuous practice of algorithms. I believe in
              learning by building and keeping my projects easy to extend.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">
          Skills &amp; <span className="accent">Tools</span>
        </h2>
        <p className="section-subtitle">
          Technologies I work with and keep improving every day.
        </p>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card">
              <div className="skill-header">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-category">{skill.category}</span>
              </div>
              <div className="skill-bar">
                <div
                  className="skill-fill"
                  style={{ width: `${(skill.level / 5) * 100}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">
          Featured <span className="accent">Projects</span>
        </h2>
        <p className="section-subtitle">
          Selected work and practice projects. More coming soon.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              {project.featured && (
                <span className="featured-badge">Featured</span>
              )}
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-links">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo ↗
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="add-tip">
          <strong>➕ Add your own projects later:</strong> Open{' '}
          <code>src/data/projects.js</code>, copy an existing object, fill in
          title, description, tags, github / live links, and save. Rebuild or
          refresh — the UI updates automatically.
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container">
        <h2 className="section-title">
          Get in <span className="accent">Touch</span>
        </h2>
        <p className="section-subtitle">
          Feel free to reach out for collaborations, opportunities, or just a
          hello.
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <h3>📬 Contact Info</h3>
            <div className="contact-list">
              <div className="contact-item">
                <span>📧</span>
                <a href="mailto:pritp7675@gmail.com">pritp7675@gmail.com</a>
              </div>
              <div className="contact-item">
                <span>📱</span>
                <span>7383215032</span>
              </div>
            </div>

            <h3 style={{ marginTop: '1.75rem' }}>🌐 Languages</h3>
            <div className="languages">
              <span className="lang-chip">English</span>
              <span className="lang-chip">Hindi</span>
              <span className="lang-chip">Gujarati</span>
            </div>
          </div>

          <div className="contact-card">
            <h3>🔗 Profiles</h3>
            <div className="social-links">
              <a
                className="social-btn"
                href="https://github.com/Preetp2708"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                className="social-btn"
                href="https://www.linkedin.com/in/patel-preet-10600b356/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                className="social-btn"
                href="https://leetcode.com/u/5I2Cv1v88w/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LeetCode
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>Designed · Developed · Deployed with ❤️</p>
        <p>&copy; {new Date().getFullYear()} Preet Patel. All rights reserved.</p>
      </div>
    </footer>
  )
}

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
