import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

export const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const SKILLS = [
  { name: "HTML", level: 95, icon: "html" },
  { name: "CSS", level: 92, icon: "css" },
  { name: "JavaScript", level: 90, icon: "js"},
  { name: "React", level: 88, icon: "react" },
  { name: "Node.js", level: 82, icon: "node" },
  { name: "Express.js", level: 80, icon: "express" },
  { name: "MySQL", level: 78, icon: "mysql" },
  { name: "Git", level: 85, icon: "git" },
  { name: "GitHub", level: 88, icon: "github" },
  { name: "Rest APIs", level: 50, icon: "api" },
] as const;

export const PROJECTS = [
  {
    title: "Tic Tac Toe",
    description: "A browser game with responsive UI, turn-based gameplay, and win/tie detection.",
    image: project1,
    tech: ["React", "Node.js", "Express", "MySQL"],
    github: null,
    demo: null,
  },
  {
    title: "Face Detection Using Python OpenCV",
    description: "A computer vision app that detects faces in real time using Python and OpenCV.",
    image: project2,
    tech: ["React", "Express", "MySQL", "REST"],
    github: "https://github.com/sudo-ujjwal-dev/face-detection-opencv",
    demo: null,
  },
  {
    title: "To-Do List",
    description: "A productivity app for creating, updating, and organizing daily tasks efficiently.",
    image: project3,
    tech: ["React", "Node.js", "WebSockets"],
    github: null,
    demo: null,
  },
  {
    title: "Simple Calculator",
    description: "A lightweight calculator with basic arithmetic operations and a polished interface.",
    image: project4,
    tech: ["React", "Express", "MySQL"],
    github: null,
    demo: null,
  },
  {
    title: "Weather App Frontend Design",
    description: "A modern weather dashboard featuring location search, forecasts, and clean visuals.",
    image: project5,
    tech: ["React", "Node.js", "REST"],
    github: null,
    demo: null,
  },
  {
    title: "UD Linux Terminal",
    description: "A command-line style interface emulating Linux terminal commands and workflows.",
    image: project6,
    tech: ["React", "Express", "MySQL"],
    github: "https://github.com/sudo-ujjwal-dev/Ujjwal_Terminal",
    demo: null,
  },
];

export const EDUCATION = [
  {
    year: "2023 — 2024",
    title: "Self-taught Web Development",
    org: "Online & Open Source",
    detail: "Built the JavaScript, React and Node.js foundation through projects, docs, and open source.",
  },
  {
    year: "2025 — 2026",
    title: "Higher Secondary Completion",
    org: "Management + Computer Science stream",
    detail: "Completed higher secondary education with a mix of management and computer science subjects.",
  },
  {
    year: "Present",
    title: "Seeking remote work",
    org: "Working from home",
    detail: "Looking for relatable remote opportunities while continuing to learn and ship projects.",
  },
];

export const TYPING_ROLES = [
  "Full-Stack Developer",
  "React Engineer",
  "Node.js Developer",
  "Tech Enthusiast",
  "Open Source Contributor",
];
