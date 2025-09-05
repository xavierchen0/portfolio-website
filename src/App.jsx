import "./App.css";
import { NavBar } from "./components/NavBar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import EducationSection from "./components/EducationSection.jsx";
import ExperiencesSection from "./components/ExperiencesSection.jsx";
import ProjectSection from "./components/ProjectSection.jsx";
import {
  Info,
  BookOpenText,
  Briefcase,
  FolderGit2,
  PencilLine,
} from "lucide-react";
import { motion } from "motion/react";

const navItems = [
  { name: "About", url: "#About", icon: Info },
  { name: "Education", url: "#Education", icon: BookOpenText },
  { name: "Experiences", url: "#Experiences", icon: Briefcase },
  { name: "Projects", url: "#Projects", icon: FolderGit2 },
  // { name: "Blogs", url: "#Blogs", icon: PencilLine },
];

function App() {
  return (
    <>
      <NavBar items={navItems} />
      <HeroSection id="About" />
      <EducationSection id="Education" />
      <ExperiencesSection id="Experiences" />
      <ProjectSection id="Projects" />
    </>
  );
}

export default App;
