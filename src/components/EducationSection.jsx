import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, Star, Trophy } from "lucide-react";

const educationData = [
  {
    id: 1,
    institution: "Singapore Management University (SMU)",
    degree: "Master of Science in Quantitative Finance, MQF",
    period: "2025-2026",
    location: "Singapore",
    gpa: "nil",
    status: "current",
    achievements: [],
  },
  {
    id: 2,
    institution: "Singapore Management University (SMU)",
    degree: "Bachelor of Business Management, BBM (Quantitative Finance Major)",
    period: "2022-2026",
    location: "Singapore",
    gpa: "4.0/4.0 (Summa Cum Laude)",
    status: "current",
    achievements: [
      {
        type: "award",
        text: "Dean's List For All Applicable Years",
        icon: Award,
      },
      {
        type: "scholarship",
        text: "Ngee Ann Kongsi University Scholarship AY24/25 & AY25/26",
        icon: Star,
      },
      {
        type: "competition",
        text: "Finalist in ADA Business Messaging Hackathon 2023",
        icon: Trophy,
      },
    ],
  },
];

// Define animation variants
const containerVariants = {
  offscreen: {
    opacity: 0,
    y: 200,
  },
  onscreen: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const timelineVariants = {
  offscreen: { opacity: 0, x: -100 },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerVariants = {
  offscreen: {},
  onscreen: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  offscreen: {
    opacity: 0,
    x: -50,
    scale: 0.8,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

export default function EducationSection({ id }) {
  const [selectedEducation, setSelectedEducation] = useState(null);
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section
      id={id}
      className="flex min-h-screen items-start justify-center px-4 py-16"
    >
      <div className="w-full max-w-6xl">
        {/* Animate Header */}
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          className="mb-16 text-center"
          variants={containerVariants}
          viewport={{ amount: 0.4, once: true }}
        >
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">Education</h2>
        </motion.div>
      </div>
    </section>
  );
}
