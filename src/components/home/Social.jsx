import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/Cyberoctane29"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer" // Added 'rel="noreferrer"' for security
      >
        <i className="uil uil-github-alt"></i>{" "}
        {/* Corrected from 'class' to 'className' */}
      </a>
      <a
        href="https://www.linkedin.com/in/saswat-seth-0a782223b/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer" // Added 'rel="noreferrer"' for security
      >
        <i className="uil uil-linkedin"></i>{" "}
        {/* Corrected from 'class' to 'className' */}
      </a>
      <a
        href="https://x.com/cyberoctane29"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer" // Added 'rel="noreferrer"' for security
      >
        <i className="uil uil-twitter-alt"></i>{" "}
        {/* Corrected from 'class' to 'className' */}
      </a>
    </div>
  );
};

export default Social;
