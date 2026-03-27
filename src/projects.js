import React from "react";
import { motion } from "framer-motion";

const Projects = ({ darkMode }) => {
  return (
    <section id="projects-section" className="projects-section">
      <style>{`
        .projects-section {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          padding: 80px 20px 40px;
          position: relative;
          z-index: 2;
        }

        .projects-container {
          width: 100%;
          max-width: 1000px;
          padding: 40px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .projects-header {
          text-align: center;
          margin-bottom: 40px;
        }

        .projects-header h2 {
          font-family: 'Kenia', cursive;
          font-size: 3.5rem;
          margin: 0;
          color: white;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.2);
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 30px;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          border-radius: 16px;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.34, 1.2, 0.64, 1), box-shadow 0.3s ease;
          position: relative;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          color: white;
        }

        .project-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 12px 40px rgba(56, 189, 248, 0.3);
          border-color: rgba(56, 189, 248, 0.4);
        }

        .project-card img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          display: block;
        }

        .project-card-body {
          padding: 20px;
          flex-grow: 1;
          display: flex;
          flex-direction: column;
        }

        .project-card h3 {
          margin: 0 0 10px;
          font-family: 'Acme', sans-serif;
          font-size: 1.4rem;
          color: white;
        }

        .project-card p {
          margin: 0 0 20px;
          font-family: 'Acme', sans-serif;
          font-size: 1rem;
          color: #cbd5e1;
          line-height: 1.5;
          flex-grow: 1;
        }

        .project-link-badge {
          display: inline-block;
          font-size: 0.9rem;
          font-family: 'Acme', sans-serif;
          color: #38bdf8;
          text-transform: uppercase;
          transition: opacity 0.2s;
        }

        @media (max-width: 600px) {
          .projects-container {
            padding: 30px 20px;
          }
          .projects-header h2 {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <motion.div
        className="projects-container"
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="projects-header">
          <h2>My Projects</h2>
        </div>

        <div className="projects-grid">
          <a
            href="https://github.com/Abhinavpradeepk/website.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src="portfolio.jpg" alt="Portfolio Website" />
            <div className="project-card-body">
              <h3>Portfolio Website</h3>
              <p>A personal portfolio showcasing my skills and projects.</p>
              <span className="project-link-badge">View on GitHub →</span>
            </div>
          </a>

          <a
            href="https://github.com/Hkr-typicalpyro/useless_project_temp.git"
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src="project.jpg" alt="Project" />
            <div className="project-card-body">
              <h3>"ഇനി ഞാൻ പറയും നീയൊക്കെ കേൾക്കും"</h3>
              <p>A reverse of snake zenxia</p>
              <span className="project-link-badge">View on GitHub →</span>
            </div>
          </a>

          <a
            href="https://github.com/Abhinavpradeepk/job-portal.git"

            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
          >
            <img src="job-portal.jpeg" alt="Job Portal" />
            <div className="project-card-body">
              <h3>Job Portal</h3>
              <p>A job portal for job seekers and employers</p>
              <span className="project-link-badge">View on GitHub →</span>
            </div>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
