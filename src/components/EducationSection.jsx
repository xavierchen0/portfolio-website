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
      className="flex min-h-screen items-start justify-center px-4 py-8"
    >
      <div className="w-full max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold">Education</h2>
        </motion.div>

        {/* Timeline using CSS Grid - Much more responsive */}
        <div className="grid grid-cols-[auto_1fr] gap-x-4 md:gap-x-8">
          {educationData.map((edu, index) => (
            <React.Fragment key={edu.id}>
              {/* Timeline Column - Icon and Line */}
              <div className="flex flex-col items-center">
                {/* Timeline dot */}
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
                  className="bg-rosepineoverlay border-rosepinefoam z-10 flex h-10 w-10 items-center justify-center rounded-full border-2 shadow-lg md:h-12 md:w-12"
                >
                  <GraduationCap className="text-rosepinefoam h-5 w-5 md:h-6 md:w-6" />
                </motion.div>

                {/* Timeline line - Only show if not last item */}
                {index < educationData.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="bg-rosepinefoam my-4 min-h-[2rem] w-0.5 flex-1 rounded-full md:w-1"
                  />
                )}
              </div>

              {/* TODO: Figure out whether I want hover. It is lagging */}
              {/* Content Column - Education Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2 + 0.4,
                  ease: "easeOut",
                }}
                className={`pb-8 ${index === educationData.length - 1 ? "pb-0" : ""}`}
              >
                <motion.div
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 40px rgba(235, 111, 146, 0.2)",
                  }}
                  className={`bg-rosepineoverlay border-rosepinefoam cursor-pointer rounded-xl border p-4 shadow-md transition-all duration-300 md:p-6 ${
                    expandedCard === edu.id ? "ring-rosepinefoam ring-2" : ""
                  }`}
                  onClick={() => toggleCard(edu.id)}
                >
                  {/* Card Header */}
                  <div className="mb-4 flex flex-col space-y-4 lg:flex-row lg:items-start lg:justify-between lg:space-y-0">
                    <div className="flex-1">
                      <h3 className="mb-2 text-lg leading-tight font-bold md:text-xl lg:text-2xl">
                        {edu.degree}
                      </h3>
                      <p className="text-base font-medium text-gray-300 opacity-50 md:text-lg">
                        {edu.institution}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 lg:flex-shrink-0">
                      {/* Expand/Collapse Icon */}
                      {edu.achievements && edu.achievements.length > 0 && (
                        <motion.div
                          animate={{
                            rotate: expandedCard === edu.id ? 180 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="flex items-center justify-center"
                        >
                          <ChevronDown className="text-rosepinefoam h-5 w-5" />
                        </motion.div>
                      )}
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="mb-4 flex flex-col gap-3 text-sm md:gap-4 lg:flex-row lg:items-center lg:gap-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="text-rosepinefoam h-4 w-4 flex-shrink-0" />
                      <span className="text-gray-300">{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="text-rosepinefoam h-4 w-4 flex-shrink-0" />
                      <span className="text-gray-300">{edu.location}</span>
                    </div>
                    {edu.gpa !== "nil" && (
                      <div className="flex items-center gap-2 font-medium">
                        <span className="text-rosepinefoam">
                          GPA: {edu.gpa}
                        </span>
                      </div>
                    )}
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
                            <div className="grid gap-2 sm:grid-cols-1">
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
                                    className="hover:bg-rosepinefoam/10 flex items-start gap-3 rounded-lg p-3 transition-all duration-200"
                                  >
                                    <IconComponent className="text-rosepinefoam mt-0.5 h-5 w-5 flex-shrink-0" />
                                    <span className="text-sm leading-relaxed font-medium">
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
                      <div className="text-rosepinefoam/70 mt-3 text-center text-xs">
                        Click to view achievements
                      </div>
                    )}
                </motion.div>
              </motion.div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
