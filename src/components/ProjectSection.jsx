import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import SlideUpTextAnimation from "./SlideUpTextAnimation.jsx";

const projects = [
  {
    id: 1,
    title: "SMU Room Booking Automation",
    description:
      "An automated tool to book your favorite SMU study rooms and project meeting spaces. Eliminates the frustration of missing out on preferred rooms by automating the entire booking process with customisable configuration through .env files and scheduled execution via cron jobs.",
    image: "/smu_fbs_autobooking_demo.gif",
    technologies: ["JavaScript", "Node.js", "Playwright", "Bash", "Cron Jobs"],
    githubUrl: "https://github.com/xavierchen0/smu-fbs-auto-booker",
    liveUrl: null,
  },
  {
    id: 2,
    title: "KayaToast - Decentralised Kickstarter",
    description:
      "A decentralised crowdfunding platform built on XRPL EVM Sidechain for EasyA x Ripple Apex Hackathon, featuring multi-chain support through Axelar Bridge. Uses RLUSD stablecoin as the main exchange currency and enables secure, transparent project funding with smart contract automation.",
    image: "/kayatoast.png",
    technologies: ["Solidity", "XRPL", "Web3", "Smart Contracts", "Python"],
    githubUrl: "https://github.com/xavierchen0/kayatoast",
    liveUrl: null,
  },
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React and TailwindCSS. Features animated text effects, multilingual greetings, and smooth scrolling navigation. Showcases projects, education, and professional experience with a clean, minimalist design.",
    image: "/portfolio-website.png",
    technologies: ["React", "TailwindCSS", "Motion", "Vite"],
    githubUrl: "https://github.com/xavierchen0/portfolio-website",
    liveUrl: "xavierchen.vercel.app",
  },
  {
    id: 4,
    title: "Dot Files",
    description:
      "My personal dotfiles repository containing configurations for Neovim, tmux, zsh, and other development tools. Includes custom themes, productivity scripts, and optimized workflows for a seamless development environment across different machines.",
    image: "folder-dot.svg",
    technologies: ["Neovim", "Tmux", "Zsh", "Git", "Shell Scripting"],
    githubUrl: "https://github.com/xavierchen0/dotfiles",
    liveUrl: null,
  },
];

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="group bg-rosepinesurface border-rosepinefoam relative flex h-full flex-col overflow-hidden rounded-lg border p-6"
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {/* Project Image/Thumbnail */}
      <div className="relative mb-4 overflow-hidden rounded-lg">
        <motion.img
          src={project.image}
          alt={project.title}
          className="h-48 w-full object-contain"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        {/* Overlay with GitHub link */}
        <motion.div
          className="bg-opacity-60 absolute inset-0 flex items-center justify-center bg-black opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-rosepinelove hover:bg-opacity-80 flex items-center gap-2 rounded-lg px-4 py-2 text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            <span>View Code</span>
          </motion.a>
        </motion.div>
      </div>

      {/* Project Content */}
      <div className="flex flex-1 flex-col space-y-3">
        {/* Title */}
        <h3 className="text-rosepinetext group-hover:text-rosepinelove text-xl font-bold transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-rosepinesubtle flex-1 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-rosepinehighlight-med text-rosepinefoam rounded-full px-3 py-1 text-xs"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex items-center gap-3 pt-2">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-rosepinefoam hover:text-rosepinelove flex items-center gap-1 text-sm transition-colors"
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-rosepinefoam hover:text-rosepinelove flex items-center gap-1 text-sm transition-colors"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>

      {/* Hover glow effect */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-lg opacity-0 transition-opacity group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(135deg, rgba(235, 111, 146, 0.1) 0%, rgba(156, 207, 216, 0.1) 100%)",
        }}
      />
    </motion.div>
  );
};

export default function ProjectSection({ id }) {
  return (
    <section id={id} className="min-h-screen px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <SlideUpTextAnimation trigger="scroll">
          <div className="mb-12 text-center">
            <h2 className="text-rosepinetext mb-4 text-4xl font-bold">
              Featured Projects
            </h2>
            <p className="text-rosepinesubtle mx-auto max-w-2xl">
              A collection of projects that showcase my skills in web
              development, machine learning, and software engineering.
            </p>
          </div>
        </SlideUpTextAnimation>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
