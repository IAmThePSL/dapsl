import React from "react";
import { Link } from "react-router-dom";
import "../styles/main.css";


const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <strong>
        &copy; {new Date().getFullYear()} DaPSL. All rights reserved.
      </strong>
      <div className="footer-links">
        <Link to="/terms" className="footer-link">
          Terms of Service
        </Link>
        <Link to="/privacy" className="footer-link">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;