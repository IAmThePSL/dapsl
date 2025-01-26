import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CookieBanner from "./components/CookieBanner";

const App: React.FC = () => {
  useEffect(() => {
    const handleSmoothScroll = (event: Event) => {
      const target = (event.target as HTMLElement).closest("a[href^='#']");
      if (target) {
        event.preventDefault();
        const element = document.querySelector(target.getAttribute("href") || "");
        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    document.addEventListener("click", handleSmoothScroll);

    return () => document.removeEventListener("click", handleSmoothScroll);
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <Intro />
                <Skills />
                <Projects />
                <Contact />
              </>
            } />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <CookieBanner />
        <Footer />
      </div>
    </Router>
  );
};

export default App;