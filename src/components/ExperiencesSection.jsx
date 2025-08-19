import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Briefcase, Calendar, MapPin, ChevronDown } from "lucide-react";

const experiencesData = [
  {
    id: 1,
    company: "DBS",
    position: "Machine Learning Intern",
    period: "May 2025 - Aug 2025",
    location: "Singapore",
    type: "Internship",
    status: "completed",
    logo: "/dbslogo.svg",
    description:
      "Developed ML models for predictive analytics and data processing pipelines.",
    achievements: [
      // {
      //   type: "project",
      //   text: "Built recommendation system that improved user engagement by 25%",
      //   icon: Brain,
      // },
      // {
      //   type: "technical",
      //   text: "Implemented data pipelines processing 1M+ records daily",
      //   icon: Database,
      // },
      // {
      //   type: "impact",
      //   text: "Optimized model performance reducing inference time by 40%",
      //   icon: TrendingUp,
      // },
    ],
    technologies: ["Python", "Spark", "SQL", "XGBoost"],
  },
  {
    id: 2,
    company: "HSBC",
    position: "Data Analytics Intern",
    period: "May 2024 - Aug 2024",
    location: "Singapore",
    type: "Internship",
    status: "completed",
    logo: "/hsbclogo.svg",
    description:
      "Performed data processing and implemented data pipelines to Team Dashboard.",
    achievements: [],
    technologies: ["Python", "SQL", "Excel VBA"],
  },
  {
    id: 3,
    company: "SGX",
    position: "Data Analytics Intern",
    period: "Aug 2023 - Dec 2023",
    location: "Singapore",
    type: "Internship",
    status: "completed",
    logo: "/sgxlogo.svg",
    description: "Carried out data processing and created custom dashboards.",
    achievements: [],
    technologies: [
      "Python",
      "SQL",
      "Excel VBA",
      "Tableau",
      "Bloomberg Terminal",
    ],
  },
  {
    id: 4,
    company: "HSBC",
    position: "Operations Intern",
    period: "May 2023 - Aug 2023",
    location: "Singapore",
    type: "Internship",
    status: "completed",
    logo: "/hsbclogo.svg",
    description:
      "Assisted in automation and daily operations of Private Banking.",
    achievements: [],
    technologies: ["Python", "SQL", "Excel VBA"],
  },
  {
    id: 5,
    company: "Opal FinTech",
    position: "Business Analyst Intern",
    period: "Apr 2022 - Jul 2022",
    location: "Singapore",
    type: "Internship",
    status: "completed",
    logo: "/opallogo.png",
    description: "Created custom dashboards.",
    achievements: [],
    technologies: ["Python", "SQL", "Excel VBA", "PowerBI"],
  },
];

export default function ExperiencesSection({ id }) {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (cardId) => {
    setExpandedCard(expandedCard === cardId ? null : cardId);
  };

  return (
    <section
      id={id}
      className="flex items-start justify-center px-4 pt-8 pb-30"
    >
      <div className="w-full max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 200 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
          className="mb-8 text-center"
        >
          <h2 className="text-3xl font-bold md:text-4xl">Experience</h2>
        </motion.div>

        {/* Timeline using CSS Grid */}
        <div className="grid grid-cols-[auto_1fr] gap-x-4 md:gap-x-8">
          {experiencesData.map((exp, index) => (
            <React.Fragment key={exp.id}>
              {/* Timeline Column - Icon and Line */}
              <div className="flex flex-col items-center">
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.8,
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="border-rosepinefoam flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-2 bg-white shadow-lg md:h-10 md:w-10"
                >
                  {exp.logo ? (
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="h-6 w-6 object-contain md:h-8 md:w-8"
                    />
                  ) : (
                    <Briefcase className="text-rosepinefoam h-4 w-4 md:h-5 md:w-5" />
                  )}
                </motion.div>

                {/* Timeline line - Only show if not last item */}
                {index < experiencesData.length - 1 && (
                  <motion.div
                    initial={{ scaleY: 0 }}
                    whileInView={{ scaleY: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="bg-rosepinefoam my-4 min-h-[2rem] w-0.5 flex-1 rounded-full md:w-1"
                  />
                )}
              </div>

              {/* Content Column - Experience Card */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2 + 0.4,
                  ease: "easeOut",
                }}
                className={`pb-6 ${index === experiencesData.length - 1 ? "pb-0" : ""}`}
              >
                <motion.div
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 40px rgba(235, 111, 146, 0.2)",
                  }}
                  className={`bg-rosepineoverlay border-rosepinefoam cursor-pointer rounded-xl border p-3 shadow-md transition-all duration-300 md:p-4 ${
                    expandedCard === exp.id ? "ring-rosepinefoam ring-2" : ""
                  }`}
                  onClick={() => toggleCard(exp.id)}
                >
                  {/* Card Header */}
                  <div className="mb-4 flex flex-col space-y-4 md:flex-row md:items-start md:justify-between md:space-y-0">
                    <div className="flex-1">
                      <h3 className="mb-1 text-base leading-tight font-bold md:text-lg">
                        {exp.position}
                      </h3>
                      <p className="text-sm font-medium text-gray-300 opacity-50 md:text-base">
                        {exp.company}
                      </p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="bg-rosepinepine/20 text-rosepinepine rounded px-2 py-1 text-xs font-medium">
                          {exp.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 md:flex-shrink-0">
                      {/* Expand/Collapse Icon */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <motion.div
                          animate={{
                            rotate: expandedCard === exp.id ? 180 : 0,
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
                  <div className="mb-4 flex flex-col gap-3 text-sm md:flex-row md:items-center md:gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="text-rosepinefoam h-4 w-4 flex-shrink-0" />
                      <span className="text-gray-300">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="text-rosepinefoam h-4 w-4 flex-shrink-0" />
                      <span className="text-gray-300">{exp.location}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-4">
                    <p className="text-sm leading-relaxed text-gray-300">
                      {exp.description}
                    </p>
                  </div>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-rosepinefoam/10 text-rosepinefoam rounded px-2 py-1 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable achievements section */}
                  <AnimatePresence>
                    {expandedCard === exp.id &&
                      exp.achievements &&
                      exp.achievements.length > 0 && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="border-rosepinehighlight-high border-t pt-4">
                            <h4 className="text-rosepinefoam mb-3 text-sm font-semibold tracking-wide uppercase">
                              Key Achievements
                            </h4>
                            <div className="grid gap-2 sm:grid-cols-1">
                              {exp.achievements.map((achievement, idx) => {
                                const IconComponent = achievement.icon;
                                return (
                                  <motion.div
                                    key={idx}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{
                                      duration: 0.3,
                                      ease: "easeOut",
                                      delay: idx * 0.05,
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
                  {exp.achievements &&
                    exp.achievements.length > 0 &&
                    expandedCard !== exp.id && (
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
