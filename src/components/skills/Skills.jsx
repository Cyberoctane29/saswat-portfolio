import React from "react";
import "./skills.css";
import DataAnalysis from "./DAandV";
import DataManagement from "./DMandSQL";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <DataAnalysis />
        <DataManagement />
      </div>
    </section>
  );
};

export default Skills;
