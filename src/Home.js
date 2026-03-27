import React, { useEffect, useState } from "react";
import "./home.css";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import ContactSection from "./ContactSection";
import Skills from "./skills";
import Projects from "./projects"; // ✅ Fixed capital letter
import Meteors from "./Meteors"; // adjust path if needed
const Home = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isSkillOpen, setSkill] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleProjectsClick = (e) => {
    e.preventDefault();
    document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSkillOpen = () => setSkill(true);
  const handleSkillClose = () => setSkill(false);
  return (
    <Meteors
      count={25}
      angle={215}
      color="#ffffff"
      tailColor="#38bdf8"
    >
      <>
        <header className="nav">




          <nav className="nav-links"  >
            <a href="#" id="top">Know Me</a>
            <a href="#" onClick={handleSkillOpen} id="top">Skills</a>
            <a href="#" onClick={handleProjectsClick} id="top">Projects</a>
            <a href="#" onClick={handleContactClick} id="top">Contact</a>
          </nav>
        </header>

        <main className="container">
          <section className="intro">
            <h1 className="title">H!</h1>
            <h1 className="title">I'm Abhinav Pradeep</h1>
            <p className="acme-text">&lt;web dev. enthusiast/&gt;</p>
          </section>

          <section className="connect">
            <a href="https://github.com/Abhinavpradeepk" target="_blank" rel="noopener noreferrer">
              <img src="icons8-github-64.png" alt="GitHub" />
            </a>

            <a href="https://www.instagram.com/abhinavpradeep__" target="_blank" rel="noopener noreferrer">
              <img src="icons8-instagram-96.png" alt="Instagram" className="instagram-icon" />
            </a>

            <a href="https://www.linkedin.com/in/abhinav-pradeep-41b5a4256" target="_blank" rel="noopener noreferrer">
              <img src="icons8-linkedin-64.png" alt="LinkedIn" />
            </a>
          </section>

          <div style={{ marginTop: '50px', cursor: 'pointer' }} onClick={() => document.getElementById('about-section')?.scrollIntoView({ behavior: 'smooth' })}>
            <svg className="arrows" viewBox="0 0 60 80">
              <path className="a1" d="M0 0 L30 20 L60 0"></path>
              <path className="a2" d="M0 20 L30 40 L60 20"></path>
              <path className="a3" d="M0 40 L30 60 L60 40"></path>
            </svg>
          </div>
        </main>

        <section id="about-section" className="section2" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', color: 'white', padding: '0 20px', position: 'relative' }}>
          <h2 className="title sec2" style={{ fontSize: '3rem', marginBottom: '20px' }}>More About Me</h2>
          <p className="acme-text" style={{ maxWidth: '600px', textAlign: 'center', fontSize: '1.4rem', color: '#cbd5e1' }}>
            Welcome! I am a passionate developer currently building visually appealing, dynamic experiences for the web.
            My journey started with a fascination for tech, and now I specialize in bringing ideas to life through clean code and modern design.
          </p>

          <div style={{ marginTop: '80px', cursor: 'pointer' }} onClick={() => document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' })}>
            <svg className="arrows" viewBox="0 0 60 80">
              <path className="a1" d="M0 0 L30 20 L60 0"></path>
              <path className="a2" d="M0 20 L30 40 L60 20"></path>
              <path className="a3" d="M0 40 L30 60 L60 40"></path>
            </svg>
          </div>
        </section>
        <Projects darkMode={isDarkMode} />

        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '80px', cursor: 'pointer' }} onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}>
          <svg className="arrows" viewBox="0 0 60 80">
            <path className="a1" d="M0 0 L30 20 L60 0"></path>
            <path className="a2" d="M0 20 L30 40 L60 20"></path>
            <path className="a3" d="M0 40 L30 60 L60 40"></path>
          </svg>
        </div>

        <ContactSection />
        <Skills open={isSkillOpen} close={handleSkillClose} darkMode={isDarkMode} />




      </>
    </Meteors>

  );

};

export default Home;
