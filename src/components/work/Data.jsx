import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";

export const projectsData = [
  {
    id: 1,
    image: Work1,
    title: "Exploratory Data Analysis",
    category: "EDA",
    demo: "https://www.google.com.ar",
  },
  {
    id: 2,
    image: Work2,
    title: "Database Management", // Corrected 'App movil' to 'App mobile'
    category: "SQL",
    demo: "https://www.google.com.ar",
  },
  {
    id: 3,
    image: Work3,
    title: "Data Visualization",
    category: "Tableau",
    demo: "https://public.tableau.com/app/profile/saswat.seth/viz/JusttheData-WorldHappiness_17217518722200/Withtable",
  },
  {
    id: 4,
    image: Work4,
    title: "Data Cleaning", // Fixed missing comma
    category: "EDA",
    demo: "https://www.google.com.ar",
  },
  {
    id: 5,
    image: Work5,
    title: "Data Preprocessing",
    category: "EDA",
    demo: "https://www.google.com.ar",
  },
]; // Corrected closing bracket position

export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "SQL", // Added missing closing quote and comma
  },
  {
    name: "EDA",
  },
  {
    name: "Tableau",
  },
];