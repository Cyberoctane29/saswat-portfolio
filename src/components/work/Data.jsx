import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";
import CBSARB from "../../assets/CBSARB.jpeg";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Exploratory Data Analysis",
    category: ["EDA"], // Changed to array
    demo: "https://www.google.com.ar",
  },
  {
    id: 2,
    image: Work2,
    title: "Database Management",
    category: ["SQL"], // Changed to array
    demo: "https://www.google.com.ar",
  },
  {
    id: 3,
    image: Work3,
    title: "Data Visualization",
    category: ["Tableau"], // Changed to array
    demo: "https://public.tableau.com/app/profile/saswat.seth/viz/JusttheData-WorldHappiness_17217518722200/Withtable",
  },
  {
    id: 4,
    image: Work4,
    title: "Data Cleaning",
    category: ["EDA"],
    demo: "https://www.google.com.ar",
  },
  {
    id: 5,
    image: Work5,
    title: "Data Preprocessing",
    category: ["EDA"],
    demo: "https://www.google.com.ar",
  },
  {
    id: 6,
    image: CBSARB,
    title: "Cyclistic Bike-Share: Analyzing <span></span>Rider Behavior</span>",
    category: ["R", "SQL"], // Multiple categories here
    demo: "https://docs.google.com/document/d/17NrTqIxvBpSK8Q5N8-mrPLrie32YUxahpCFUL-aZ_VE/edit?usp=sharing",
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
