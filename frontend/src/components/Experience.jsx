import React from "react";
import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 0.61, 0.36, 1],
      when: "beforeChildren",
      staggerChildren: 0.12,
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08 },
  }),
};

const listItemVariants = {
  hidden: { opacity: 0, y: 8 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.05 },
  }),
};

// Education items with links where needed
const educationItems = [
  {
    text: "School Education in Eheliyagoda Central College, Rathnapura",
  },
  {
    text: "Introduction to Software Engineering in Coursera Completed",
    href: "https://coursera.org/share/21b3e739290641ca65a6bbd504aef6be",
  },
  {
    text: "Introduction Java Programming for Beginners in Coursera Completed",
    href: "https://coursera.org/share/377bd3ac294863f35da4e7c2ad7bd59c",
  },
  {
    text: "Introduction Prompt Engineering for Generative AI in LinkedIn Education Completed",
    href: "https://www.linkedin.com/learning/certificates/220899fb353ffb26b50cdd32527689d4eb3c419a695b90df23a061b7149945d3?trk=share_certificate",
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-16 sm:py-20 relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* soft background glows */}
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
        className="pointer-events-none absolute -bottom-12 right-[-40px] h-32 w-32 rounded-full bg-cyan-400/10 blur-3xl"
        animate={{ opacity: [0.1, 0.3, 0.1], x: [0, -10, 0], y: [0, -6, 0] }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* Section Header */}
      <motion.div
        className="flex items-center justify-between mb-10 relative"
        variants={headerVariants}
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Experience &amp; Education
          </h2>
          <p className="text-sm text-slate-400 mt-1">
            Real-world problem-solving combined with academic software projects.
          </p>
        </div>

        {/* animated accent line */}
        <motion.div
          className="hidden sm:block h-px w-20 bg-gradient-to-r from-emerald-400/80 via-sky-300/80 to-transparent"
          animate={{ width: ["3rem", "5.5rem", "3rem"], opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* -------- CARD 1: Education -------- */}
        <motion.div
          className="
            bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 shadow-xl 
            transition-all duration-300
            hover:-translate-y-2 hover:shadow-emerald-500/20 hover:border-emerald-500/40
          "
          variants={cardVariants}
          custom={0}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-base font-semibold text-slate-100 mb-1">
            Education
          </h3>
          <p className="text-xs text-slate-400 mb-4">
            BSc (Hons) in Information Technology Specializing in Information
            Technology – Sri Lanka Institute of Information Technology
            (Undergraduate)
          </p>

          <ul className="space-y-2 text-sm text-slate-300">
            {educationItems.map((item, i) => (
              <motion.li
                key={item.text}
                className="flex items-start gap-2"
                variants={listItemVariants}
                custom={i}
              >
                <motion.span
                  className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"
                  animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: i * 0.15,
                  }}
                />
                {item.href ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-emerald-300 hover:underline underline-offset-4 transition-colors"
                  >
                    {item.text}
                  </a>
                ) : (
                  <span>{item.text}</span>
                )}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* -------- CARD 2: IT / Software Undergraduate -------- */}
        <motion.div
          className="
            bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 shadow-xl 
            transition-all duration-300
            hover:-translate-y-2 hover:shadow-emerald-500/20 hover:border-emerald-500/40
          "
          variants={cardVariants}
          custom={1}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-base font-semibold text-slate-100 mb-1">
            IT / Software Undergraduate
          </h3>
          <p className="text-xs text-slate-400 mb-4">
            University-level coursework &amp; labs
          </p>

          <ul className="space-y-2 text-sm text-slate-300">
            {[
              "Data Structures & Algorithms – searching, sorting, recursion, complexity.",
              "Operating Systems – memory management, processes, scheduling.",
              "Programming labs in C, Java, Python, Android, and web.",
            ].map((item, i) => (
              <motion.li
                key={item}
                className="flex items-start gap-2"
                variants={listItemVariants}
                custom={i}
              >
                <motion.span
                  className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400"
                  animate={{ scale: [1, 1.25, 1], opacity: [0.7, 1, 0.7] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: i * 0.15,
                  }}
                />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Experience;
