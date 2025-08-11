import React, { useEffect, useState } from "react";
import "./home.css";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import ContactModal from "./ContactModal";
import Skills from "./skills";
import Projects from "./projects"; // ✅ Fixed capital letter

const Home = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  const [isContactOpen, setContactOpen] = useState(false);
  const [isSkillOpen, setSkill] = useState(false);
  const [isProjectsOpen, setProjectsOpen] = useState(false);

  const handleContactClick = () => setContactOpen(true);
  const handleCloseContact = () => setContactOpen(false);

  const handleSkillOpen = () => setSkill(true);
  const handleSkillClose = () => setSkill(false);

  const handleProjectsOpen = () => setProjectsOpen(true);
  const handleProjectsClose = () => setProjectsOpen(false);

  const toggleDarkMode = (checked) => setDarkMode(checked);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
    document.body.classList.toggle("light-mode", !isDarkMode);
  }, [isDarkMode]);

  return (
    <>
      <header className="nav">
        <div className="dark-toggle-container">
          <DarkModeSwitch
            style={{ marginBottom: "2rem" }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={25}
          />
        </div>
        <nav className="nav-links">
          <a href="#">Know Me</a>
          <a href="#" onClick={handleSkillOpen}>Skills</a>
          <a href="#" onClick={handleProjectsOpen}>Projects</a> {/* ✅ Fixed onClick */}
          <a href="#" onClick={handleContactClick}>Contact</a>
        </nav>
      </header>

      <main className="container">
        <section className="intro">
          <h1 className="title">H!</h1>
          <h1 className="title">I'm Abhinav Pradeep</h1>
          <p className="acme-text">&lt;web dev enthusiast/&gt;</p>
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
      </main>

      {/* Modals */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
      <Skills open={isSkillOpen} close={handleSkillClose} darkMode={isDarkMode} />
      <Projects open={isProjectsOpen} close={handleProjectsClose} darkMode={isDarkMode} /> {/* ✅ Capitalized */}
    </>
  );
};

export default Home;
