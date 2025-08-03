import './App.css'
import { NavBar } from './components/NavBar.jsx'
import { Info, BookOpenText, Briefcase, FolderGit2, PencilLine } from 'lucide-react'
import { motion } from "motion/react"

const navItems = [
  { name: 'About', url: '/', icon: Info },
  { name: 'Education', url: '/', icon: BookOpenText },
  { name: 'Experiences', url: '/', icon: Briefcase },
  { name: 'Projects', url: '/', icon: FolderGit2 },
  { name: 'Blogs', url: '/', icon: PencilLine },
]

function App() {
  return (
    <>
      <NavBar items={navItems} />
    </>
  )
}

export default App
