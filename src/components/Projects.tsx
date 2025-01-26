import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/main.css";

const Projects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      id="projects"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 1.2 } },
      }}
      className="projects-section"
    >
      <h2 className="projects-title">My Projects</h2>

      <div className="projects-list">
        <div className="project-item">
          <h3>Virex</h3>
          <p>Virex is a programming language that I am making from scratch.</p>
          <p className="project-link">
            Check it out{" "}
            <a
              href="https://github.com/IAmThePSL/Virexlang"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            !
          </p>
        </div>
        <div className="project-item">
          <h3>Brainrot Foods</h3>
          <p>A Minecraft mod</p>
          <p className="project-link">
            Check it out{" "}
            <a
              href="https://github.com/IAmThePSL/brainrotfoods"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            !
          </p>
        </div>
        <div className="project-item">
          <h3>CookieClicker Automation</h3>
          <p>A JavaScript automation script for Cookie Clicker.</p>
          <p className="project-link">
            Check it out{" "}
            <a
              href="https://github.com/IAmThePSL/CookieClickerAutomation"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            !
          </p>
        </div>
        <div className="project-item">
          <h3>Tasks Management App</h3>
          <p>A simple task management app made with JavaScript and SQLite.</p>
          <p className="project-link">
            Check it out{" "}
            <a
              href="https://github.com/IAmThePSL/task-management"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            !
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
