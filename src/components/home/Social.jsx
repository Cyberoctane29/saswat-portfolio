import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://github.com/Cyberoctane29"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github-alt"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/saswat-seth-0a782223b/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-linkedin"></i>
      </a>
      <a
        href="https://x.com/cyberoctane29"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-twitter-alt"></i>
      </a>
    </div>
  );
};

export default Social;