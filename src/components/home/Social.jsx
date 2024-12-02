import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKaggle } from "@fortawesome/free-brands-svg-icons";

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
        href="https://www.kaggle.com/saswatsethda"
        className="home__social-icon kaggle-icon-social"
        target="_blank"
        rel="noreferrer" // Added 'rel="noreferrer"' for security
      >
        <FontAwesomeIcon icon={faKaggle} />
      </a>
    </div>
  );
};

export default Social;
