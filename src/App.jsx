import "./App.css";
import { NavBar } from "./components/NavBar.jsx";
import {
  Info,
  BookOpenText,
  Briefcase,
  FolderGit2,
  PencilLine,
} from "lucide-react";
import { motion } from "motion/react";

const navItems = [
  { name: "About", url: "/", icon: Info },
  { name: "Education", url: "/", icon: BookOpenText },
  { name: "Experiences", url: "/", icon: Briefcase },
  { name: "Projects", url: "/", icon: FolderGit2 },
  { name: "Blogs", url: "/", icon: PencilLine },
];

function App() {
  return (
    <>
      <NavBar items={navItems} />
      {/* Hero Section */}
      <section className="flex h-screen items-center justify-center bg-gradient-to-b">
        <h1 className="text-6xl text-white">About Me</h1>
      </section>

      {/* Education Section */}
      <section className="flex h-screen items-center justify-center bg-gradient-to-b">
        <h1 className="text-6xl text-white">Education</h1>
      </section>

      {/* Experiences Section */}
      <section className="flex h-screen items-center justify-center bg-gradient-to-b">
        <h1 className="text-6xl text-white">Experiences</h1>
      </section>

      {/* Projects Section */}
      <section className="flex h-screen items-center justify-center bg-gradient-to-b">
        <h1 className="text-6xl text-white">Projects</h1>
      </section>

      {/* Blogs Section */}
      <section className="flex h-screen items-center justify-center bg-gradient-to-b">
        <h1 className="text-6xl text-white">Blogs</h1>
      </section>
    </>
  );
}

export default App;
