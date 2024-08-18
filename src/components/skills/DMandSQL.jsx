import React from "react";

const DMandSQL = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Data Management & SQL</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">SQL</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          {/* Add more skills if needed */}
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">MySQL</h3>
              <span className="skills__level">Advanced</span>
            </div>
          </div>
          {/* Add more skills if needed */}
        </div>
      </div>
    </div>
  );
};

export default DMandSQL;