import React from "react";
import { motion } from "framer-motion";
import "../styles/main.css";

const Intro: React.FC = () => {
  const handleExploreClick = () => {
    window.location.href = "#projects"; // Redirects to the Projects section
  };

  return (
    <motion.section
      id="intro"
      className="hero-section"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="intro-text">
        <h1 className="hero-title">Let's Build Something Together!</h1>
        <p className="hero-description">
          I'm Pepijn, a passionate coder and tech enthusiast. Explore my work
          and let's create something amazing!
        </p>
        <motion.button
          className="explore-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleExploreClick}
        >
          Explore My Work
        </motion.button>
      </div>
    </motion.section>
  );
};

export default Intro;