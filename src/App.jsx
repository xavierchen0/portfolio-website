import "./App.css";
import { NavBar } from "./components/NavBar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import EducationSection from "./components/EducationSection.jsx";
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
  { name: "Blogs", url: "#Blogs", icon: PencilLine },
];

function App() {
  return (
    <>
      <NavBar items={navItems} />
      <HeroSection id="About" />
      <EducationSection id="Education" />

      {/* Experiences Section */}
      <section
        id="Experiences"
        className="flex h-screen items-center justify-center bg-gradient-to-b"
      >
        <h1 className="text-6xl text-white">Exp</h1>
      </section>

      {/* Projects Section */}
      <section
        id="Projects"
        className="flex h-screen items-center justify-center bg-gradient-to-b"
      >
        <h1 className="text-6xl text-white">Pro</h1>
      </section>

      {/* Blogs Section */}
      <section
        id="Blogs"
        className="flex h-screen items-center justify-center bg-gradient-to-b"
      >
        <h1 className="text-6xl text-white">Blg</h1>
      </section>
    </>
  );
}

export default App;
