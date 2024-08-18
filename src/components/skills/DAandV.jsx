import React from "react";

const DAandV = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Data Analysis & Visualization</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">R</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Excel</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          {/* Add more skills if needed */}
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Tableau</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          {/* Add more skills if needed */}
        </div>
      </div>
    </div>
  );
};

export default DAandV;
