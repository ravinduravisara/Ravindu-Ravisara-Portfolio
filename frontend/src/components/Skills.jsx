import React from "react";
import { motion } from "framer-motion";

const skillsData = {
  Languages: [
    "JavaScript (ES6+)",
    "TypeScript (learning)",
    "Java",
    "Kotlin",
    "Python",
    "R",
    "C / C++",
  ],
  "Web & App Development": [
    "React.js",
    "Node.js & Express.js",
    "MongoDB & Mongoose",
    "REST APIs & JSON",
    "Next.js (learning)",
    "Android (Kotlin, Room, MVVM)",
    "WordPress & Elementor",
  ],
  "Tools & Workflow": [
    "Git & GitHub",
    "Postman / Thunder Client",
    "VS Code, Android Studio",
    "Figma (basic)",
  ],
  Concepts: [
    "Object-Oriented Programming (OOP)",
    "Data Structures & Algorithms (basics)",
    "Operating Systems fundamentals",
    "Basic statistics & data analysis in R",
  ],
};

const sectionVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 0.61, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

const gridVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05 },
  }),
};

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-16 sm:py-20 relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Soft floating background accents */}
      <motion.div
        className="pointer-events-none absolute -top-10 left-[-40px] h-28 w-28 rounded-full bg-emerald-400/10 blur-3xl"
        animate={{ opacity: [0.12, 0.35, 0.12], x: [0, 10, 0], y: [0, 6, 0] }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-14 right-[-40px] h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{ opacity: [0.1, 0.3, 0.1], x: [0, -10, 0], y: [0, -6, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Title */}
      <motion.div
        className="flex items-center justify-between mb-10 relative"
        variants={titleVariants}
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Skills
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            A mix of full-stack, mobile, scripting, and analytics skills.
          </p>
        </div>

        {/* Tiny animated accent line on the right */}
        <motion.div
          className="hidden sm:block h-px w-20 bg-gradient-to-r from-emerald-400/80 via-cyan-300/80 to-transparent"
          animate={{ width: ["3rem", "5rem", "3rem"], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Skill Cards */}
      <motion.div
        className="relative grid md:grid-cols-2 gap-6"
        variants={gridVariants}
      >
        {Object.entries(skillsData).map(([category, items], idx) => (
          <motion.div
            key={category}
            className="
              bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 shadow-xl
              transition-all duration-300 
              hover:-translate-y-2 hover:shadow-emerald-500/25
            "
            variants={cardVariants}
            custom={idx}
            whileHover={{
              scale: 1.01,
            }}
          >
            {/* animated accent bar */}
            <motion.div
              className="mb-3 h-px w-10 bg-gradient-to-r from-emerald-400/90 via-cyan-300/80 to-transparent"
              animate={{ width: ["2.5rem", "4rem", "2.5rem"] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: idx * 0.3,
              }}
            />
            <h3 className="text-sm font-semibold text-emerald-300 mb-2">
              {category}
            </h3>

            <ul className="space-y-2 text-sm text-slate-200">
              {items.map((item, i) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-2 group"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.1 + i * 0.05 + idx * 0.05,
                  }}
                >
                  {/* animated dot */}
                  <motion.span
                    className="
                      mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 
                      group-hover:bg-emerald-300 group-hover:scale-125 
                      transition-all
                    "
                    animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.15, 1] }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                      delay: i * 0.1,
                    }}
                  />

                  {/* item text */}
                  <motion.span
                    className="group-hover:text-emerald-200 transition-colors"
                    whileHover={{ x: 1 }}
                  >
                    {item}
                  </motion.span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Skills;
