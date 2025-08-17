import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Award,
  Calendar,
  GraduationCap,
  Star,
  Trophy,
  MapPin,
  ChevronDown,
} from "lucide-react";

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

export default function EducationSection({ id }) {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section
      id={id}
      className="flex min-h-screen items-start justify-center px-4 py-16"
    >
      <div className="w-full max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold">Education</h2>
        </motion.div>

        {/* Timeline container - Fixed positioning */}
        <div className="relative pl-16 md:pl-20">
          {/* Timeline line - Fixed positioning */}
          <motion.div
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="bg-rosepinefoam absolute top-0 left-6 w-0.5 md:left-8"
          />

          {/* Timeline items */}
          {educationData.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2 + 0.4,
                ease: "easeOut",
              }}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline dot - Fixed positioning */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.2 + 0.6,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.1 }}
                className="bg-rosepineoverlay border-rosepinefoam absolute top-6 -left-20 z-20 flex h-8 w-8 items-center justify-center rounded-full border-2 shadow-lg md:-left-24"
              >
                <GraduationCap className="text-rosepinefoam h-4 w-4" />
              </motion.div>

              {/* Education Card - Fixed z-index */}
              <motion.div
                whileHover={{
                  y: -5,
                  boxShadow: "0 20px 40px rgba(235, 111, 146, 0.2)",
                }}
                className={`bg-rosepineoverlay border-rosepinefoam relative z-10 cursor-pointer rounded-xl border p-6 shadow-md transition-colors duration-300 ${
                  expandedCard === edu.id ? "ring-rosepinefoam ring-2" : ""
                }`}
                onClick={() => toggleCard(edu.id)}
              >
                {/* CardHeader */}
                <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between">
                  <div className="mb-4 flex-1 md:mb-0">
                    <h3 className="mb-2 text-xl font-bold md:text-2xl">
                      {edu.degree}
                    </h3>
                    <p className="text-lg font-medium">{edu.institution}</p>
                  </div>

                  <div className="flex items-center gap-3">
                    {/* Education status */}
                    <div
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        edu.status === "current"
                          ? "bg-rosepinepine border-rosepinepine border"
                          : "bg-rosepineoverlay border-rosepineoverlay border"
                      }`}
                    >
                      {edu.status === "current" ? "Current" : "Completed"}
                    </div>

                    {/* Expand/Collapse Icon - Fixed visibility */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <motion.div
                        animate={{ rotate: expandedCard === edu.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-center"
                      >
                        <ChevronDown className="text-rosepinefoam h-5 w-5" />
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Card Details - Fixed responsive layout */}
                <div className="mb-4 flex flex-col gap-2 text-sm md:flex-row md:items-center md:gap-6">
                  <div className="flex items-center gap-2">
                    <Calendar className="text-rosepinefoam h-4 w-4 flex-shrink-0" />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="text-rosepinefoam h-4 w-4 flex-shrink-0" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2 font-medium">
                    <span>GPA: {edu.gpa}</span>
                  </div>
                </div>

                {/* Expandable achievements section */}
                <AnimatePresence>
                  {expandedCard === edu.id &&
                    edu.achievements &&
                    edu.achievements.length > 0 && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="border-rosepinehighlight-high border-t pt-4">
                          <h4 className="text-rosepinefoam mb-3 text-sm font-semibold tracking-wide uppercase">
                            Achievements
                          </h4>
                          <div className="space-y-2">
                            {edu.achievements.map((achievement, idx) => {
                              const IconComponent = achievement.icon;
                              return (
                                <motion.div
                                  key={idx}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.3,
                                    delay: idx * 0.1,
                                  }}
                                  className="hover:bg-rosepinefoam/10 flex items-center gap-3 rounded-lg p-3 transition-all duration-200"
                                >
                                  <IconComponent className="text-rosepinefoam h-5 w-5 flex-shrink-0" />
                                  <span className="text-sm font-medium">
                                    {achievement.text}
                                  </span>
                                </motion.div>
                              );
                            })}
                          </div>
                        </div>
                      </motion.div>
                    )}
                </AnimatePresence>

                {/* Click hint for cards with achievements */}
                {edu.achievements &&
                  edu.achievements.length > 0 &&
                  expandedCard !== edu.id && (
                    <div className="text-rosepinefoam/70 mt-2 text-center text-xs">
                      Click to view achievements
                    </div>
                  )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
