import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/main.css";

const Skills: React.FC = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      id="skills"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
      }}
      className="skills-section"
    >
      <h2 className="section-title">Skills</h2>

      <div className="skills-container">
        {/* Programming Languages */}
        <div className="skills-category">
          <h3 className="category-title">Programming Languages</h3>
          <ul className="skills-list">
            <h4>Proficient:</h4>
            <a
              href="https://www.oracle.com/developer/javascript/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>JavaScript</li>
            </a>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>TypeScript</li>
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/HTML"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>HTML</li>
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>CSS</li>
            </a>
            <a
              href="https://www.python.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Python</li>
            </a>
          </ul>
          <ul className="skills-list">
            <h4>Intermediate:</h4>
            <a
              href="https://www.cprogramming.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>C</li>
            </a>
            <a
              href="https://www.oracle.com/java/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Java</li>
            </a>
          </ul>
          <ul className="skills-list">
            <h4>Beginner:</h4>
            <a
              href="https://www.cplusplus.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>C++</li>
            </a>
          </ul>
        </div>

        {/* Frameworks */}
        <div className="skills-category">
          <h3 className="category-title">Frameworks</h3>
          <ul className="skills-list">
            <h4>Proficient:</h4>
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>React</li>
            </a>
            <a
              href="https://vitejs.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Vite</li>
            </a>
            <a
              href="https://nodejs.org/en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>NodeJS</li>
            </a>
          </ul>
          <ul className="skills-list">
            <h4>Intermediate:</h4>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Tailwind CSS</li>
            </a>
          </ul>
          <ul className="skills-list">
            <h4>Beginner:</h4>
            <a
              href="https://flask.palletsprojects.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Flask</li>
            </a>
          </ul>
        </div>

        {/* Tools */}
        <div className="skills-category">
          <h3 className="category-title">Tools</h3>
          <ul className="skills-list">
            <h4>Proficient:</h4>
            <a
              href="https://firebase.google.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>Firebase</li>
            </a>
            <a
              href="https://www.prisma.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>PrismaDB</li>
            </a>
          </ul>
          <ul className="skills-list">
            <h4>Intermediate:</h4>
            <a
              href="https://www.sqlite.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>SQLite</li>
            </a>
          </ul>
          <ul className="skills-list">
            <h4>Beginner:</h4>
            <a
              href="https://aws.amazon.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>AWS</li>
            </a>
          </ul>
        </div>

        {/* Specialized Skills */}
        <div className="skills-category">
          <h3 className="category-title">Specialized Skills</h3>
          <ul className="skills-list">
            <li>Custom programming language development (Virex)</li>
            <li>Game modding and Minecraft development</li>
            <li>Cross-platform application design (macOS and Windows)</li>
          </ul>
        </div>

        {/* Soft Skills */}
        <div className="skills-category">
          <h3 className="category-title">Soft Skills</h3>
          <ul className="skills-list">
            <li>Quick learner, adaptable, and detail-oriented</li>
            <li>Strong problem-solving and debugging skills</li>
            <li>Effective communicator for collaborative projects</li>
          </ul>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
