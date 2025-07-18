import React from "react";
import "./skills.css";

const skillData = [
  { name: "HTML", percent: 90 },
  { name: "CSS", percent: 85 },
  { name: "JavaScript", percent: 70 },
  { name: "React", percent: 50 }
];

const Skills = ({ open, close, darkMode }) => {
  if (!open) return null;

  return (
    <div className="skills-overlay" onClick={close}>
      <div
        className={`skills-panel ${darkMode ? "dark-skill" : "light-skill"}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={close}>❌ Close</button>
        <h2>My Skills</h2>

        <div className="progress-wrapper">
          {skillData.map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="skill-label">
                {skill.name} <span>{skill.percent}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
