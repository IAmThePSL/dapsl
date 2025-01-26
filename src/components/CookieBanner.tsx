import React, { useState, useEffect } from "react";

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setIsVisible(false);
  };

  if (!isVisible) {
    const consent = localStorage.getItem("cookieConsent");
    if (consent === "true") {
      console.log("Cookies not visible: user has already accepted.");
    } else if (consent === "false") {
      console.log("Cookies not visible: user has already declined.");
    } else {
      console.log("Cookies not visible: Unknown issue or missing consent.");
		}
		return null;
  }

  return (
    <div className="cookie-banner">
      <p>
        We use cookies to ensure you get the best experience on our website. By
        continuing to browse, you agree to our{" "}
        <a href="/terms" target="_blank" rel="noopener noreferrer">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="/privacy" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </a>.
      </p>
      <div className="cookie-actions">
        <button onClick={handleAccept} className="btn accept">
          Accept
        </button>
        <button onClick={handleDecline} className="btn decline">
          Decline
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;