// import React from "react";

// const WorkItems = ({ item }) => {
//   return (
//     <div className="work__card">
//       <img src={item.image} alt="" className="work__img" />
//       <h3 className="work__title">{item.title}</h3>
//       <a
//         href={item.demo}
//         className="work__button"
//         target="_blank"
//         rel="noreferrer"
//       >
//         Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
//       </a>
//     </div>
//   );
// };

// export default WorkItems;

import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card">
      <img src={item.image} alt={item.title} className="work__img" />
      <h3
        className="work__title"
        dangerouslySetInnerHTML={{ __html: item.title }}
      />
      <a
        href={item.demo}
        className="work__button"
        target="_blank"
        rel="noreferrer"
      >
        Demo <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
