import React from "react";

const Data = () => {
  return (
    <div className="home__data">
      <h1 className="home__title">
        Saswat Seth
        <svg
          width="36"
          height="36"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="home__hand" // Corrected from 'class' to 'className'
        >
          {/* SVG paths here */}
        </svg>
      </h1>
      <h3 className="home__subtitle">Data Aficionado</h3>
      <p className="home__description">
        Passionate about leveraging data to drive insights, solve real-world
        challenges, and optimize decision-making across industries.
      </p>
      <a href="#contact" className="button button--flex">
        Say Hello
        <svg
          className="button__icon" // Corrected from 'class' to 'className'
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          {/* SVG paths here */}
        </svg>
      </a>
    </div>
  );
};

export default Data;
