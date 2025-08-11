import React from "react";
import "./projects.css";

const Projects = ({ open, close, darkMode }) => {
    if (!open) return null; 

    return (
        <div className={`projects-modal ${darkMode ? "dark" : "light"}`}>
            <div className="projects-content">
                
                <div className="projects-header">
                    <h1>My Projects</h1>
                    <button className="close-btn" onClick={close}>
                        &times;
                    </button>
                </div>

                <div className="projects-grid">
                    
                    
                    <a
                        href="https://github.com/Abhinavpradeepk/website.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card"
                    >
                        <img src="portfolio.jpg" alt="Portfolio Website" />
                        <h3>Portfolio Website</h3>
                        <p>A personal portfolio showcasing my skills, projects.</p>
                    </a>

                    
                    <a
                        href="https://github.com/Hkr-typicalpyro/useless_project_temp.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card"
                    >
                        <img src="project.jpg" alt="Project" />
                        <h3>"ഇനി ഞാൻ പറയും നീയൊക്കെ കേൾക്കും"</h3>
                        <p>A reverse of snake zenxia</p>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Projects;
