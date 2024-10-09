import CBSARB from "../../assets/CBSARB.jpeg";
import CUOMSA from "../../assets/CUOMSA.jpeg";

export const projectsData = [
  {
    id: 1,
    image: CBSARB,
    title: "Cyclistic Bike-Share: Analyzing <span></span>Rider Behavior</span>",
    category: ["R", "SQL", "EDA"], // Multiple categories here
    demo: "https://docs.google.com/document/d/17NrTqIxvBpSK8Q5N8-mrPLrie32YUxahpCFUL-aZ_VE/edit?usp=sharing",
  },
  {
    id: 2,
    image: CUOMSA,
    title:
      "Music Store Database Evaluation & <span></span>Optimization: On-site Internship</span>",
    category: ["SQL"], // Multiple categories here
    demo: "https://docs.google.com/document/d/1j_x122h5V97rP2oEVJfUqmBg8A8egcP_w5gRLZGkylE/edit?usp=sharing",
  },
];

// Ensure this is exported as well
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "R",
  },
  {
    name: "SQL",
  },
  {
    name: "Tableau",
  },
  {
    name: "EDA",
  },
];
