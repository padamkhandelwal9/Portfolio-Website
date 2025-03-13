import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  edunet,
  weatherpedia,
  termpw,
  payloadmaster,
  //threejs,
  mhft,
  sketcher,
  mathwork,
  CompileVortex,
  eduskill,
  mongodb,
  ochi,
  proxy,
  webdev,
  truminds,
  eskape,
  telus
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Rect JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  //{ name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  {name: "MongoDB", icon: mongodb},
];

export const experiences = [
  {
    title: "Frontend Intern",
    company_name: "TRUMINDS SOFTWARE SYSTEMS",
    icon: truminds,
    iconBg: "#161329",
    date: "Oct 2023 - Dec 2023",
    points: [
      "Utilized React libraries such as Chart.js and ZingChart to create dynamic graphical components.",
      "Engineered interactive data visualization component using React and Chart.js, enabling real-time analysis of over 10,000 data points and improving data processing speeds by 15% for Bluebook.ai users.",
    ],
  },
  {
    title: "Full-Stack Designer-Developer Role",
    company_name: "ESKAPE",
    icon: eskape,
    iconBg: "#161329",
    date: "Feb 2025",
    points: [
      "Converting Figma designs into responsive React interfaces with Tailwind CSS.",
      "Developing and optimized back-end services using Node.js and MongoDB, ensuring efficient data handling, authentication, and API integrations..",
      "Setting up CI/CD pipelines and deploy apps on Vercel.",
    ],
  },
  {
    title: "Web developer Intern",
    company_name: "TELUS INTERNATIONAL",
    icon: telus,
    iconBg: "#161329",
    date: "August 2023 - October 2023",
    points: [
      "Enhanced HTML, CSS, and JavaScript proficiency by developing various small projects.",
      "Worked extensively on projects using the React framework, contributing to the development and maintenance of web applications.",
    ],
  },
];

export const projects = [
  {
    name: "MULTITHREADED PROXY SERVER",
    description:
      "A sophisticated multithreaded HTTP proxy server with advanced caching mechanisms,",
    tags: [
      { name: "C", color: "blue-text-gradient" },
      { name: "MakeFile", color: "green-text-gradient" },
    ],
    image: proxy,
    source_code_link: "https://github.com/padamkhandelwal9/multithreadwebproxy",
  },
  {
    name: "FILEHUB",
    description:
      "Designed and implemented FileHub, a web application with secure user authentication, file upload, and download functionalities using Node.js, Express, and MongoDB.",
    tags: [
      { name: "MongoDB", color: "blue-text-gradient" },
      { name: "Nodejs", color: "green-text-gradient" },
      { name: "Firebase", color: "pink-text-gradient" },
      { name: "Expressjs", color: "pink-text-gradient" },
      { name: "EJS", color: "pink-text-gradient" },
    ],
    image: webdev,
    source_code_link: "https://github.com/padamkhandelwal9/DRIVE",
  },
  {
    name: "FOODZONE",
    description:
      "a web application that integrates with Swiggy's live API to fetch real-time restaurant data.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
      { name: "Reactjs", color: "pink-text-gradient" },
    ],
    image: webdev,
    source_code_link:
      "https://github.com/padamkhandelwal9/Foodzone",
  },
  {
    name: "OCHI",
    description:
      "a web application that integrates with Swiggy's live API to fetch real-time restaurant data.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
      { name: "Reactjs", color: "pink-text-gradient" },
      { name: "FramerMotion", color: "pink-text-gradient" },

    ],
    image: ochi,
    source_code_link:
      "https://ochi-cvop-padamkhandelwal9s-projects.vercel.app/",
  }

];
