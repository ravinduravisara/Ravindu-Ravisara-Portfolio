import React from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.12,
      ease: [0.22, 0.61, 0.36, 1],
    },
  },
};

const leftItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const rightItem = {
  hidden: { opacity: 0, y: 25, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const Hero = () => {
  return (
    <motion.section
      id="top"
      className="py-16 sm:py-20 grid gap-12 md:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-center"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* LEFT: text */}
      <motion.div className="space-y-4" variants={leftItem}>
        <motion.p
          className="inline-flex items-center gap-2 rounded-full border border-emerald-500/40 bg-slate-900/70 px-3 py-1 text-xs text-emerald-300 mb-2 shadow-sm"
          animate={{ opacity: [0.7, 1, 0.7], y: [0, -1, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to internships & freelance work
        </motion.p>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
          animate={{ y: [0, -2, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400">
            Ravindu Ravisara
          </span>
        </motion.h1>

        <motion.p
          className="text-base sm:text-lg text-slate-300 max-w-xl"
          variants={leftItem}
        >
          Aspiring software engineer building{" "}
          <span className="font-semibold">
            real-world projects with MERN, Android/Kotlin, Python, and R
          </span>
          . I like turning everyday problems into clean, usable apps.
        </motion.p>

        <motion.p
          className="text-sm sm:text-base text-slate-400 max-w-xl"
          variants={leftItem}
        >
          I love learning new technologies and apply my skills and grow in a
          real engineering environment. Many of my projects are inspired by
          those daily workflows.
        </motion.p>

        {/* Buttons row */}
        <motion.div
          className="flex flex-wrap gap-3 pt-2"
          variants={leftItem}
          whileHover={{ x: 1 }}
        >
          <motion.a
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400 transition-transform duration-300 shadow-lg shadow-emerald-500/25"
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            View my projects
          </motion.a>

          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-200 hover:border-emerald-400 hover:text-emerald-300 transition-colors duration-300"
            whileHover={{ y: -1, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            Contact me
          </motion.a>

          {/* CV button */}
          <motion.a
            href="/Ravindu_Ravisara_CV.pdf"  // file in public/ folder
            download="Ravindu_Ravisara_CV.pdf"
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-200 hover:border-emerald-400 hover:text-emerald-300 transition-colors duration-300"
            whileHover={{ y: -1, scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
          >
            Download CV
          </motion.a>
        </motion.div>

        <motion.div
          className="mt-4 flex flex-wrap gap-2 text-xs text-slate-400"
          variants={leftItem}
        >
          {["MERN", "Android (Kotlin)", "Python / FastAPI", "R & analytics"].map(
            (tag, i) => (
              <motion.span
                key={tag}
                className="rounded-full border border-slate-700 bg-slate-900/70 px-3 py-1"
                animate={{ opacity: [0.6, 1, 0.6], y: [0, -1, 0] }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: 0.3 + i * 0.2,
                  ease: "easeInOut",
                }}
              >
                {tag}
              </motion.span>
            )
          )}
        </motion.div>
      </motion.div>

      {/* RIGHT: image card */}
      <motion.div
        className="relative flex justify-center md:justify-end"
        variants={rightItem}
      >
        {/* glow behind card */}
        <motion.div
          className="absolute -inset-4 rounded-3xl bg-gradient-to-tr from-emerald-500/18 via-cyan-500/10 to-sky-500/0 blur-3xl"
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [0.96, 1.04, 0.96],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="relative bg-slate-900/80 border border-slate-800/80 rounded-3xl p-4 sm:p-5 shadow-2xl max-w-xs w-full"
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          whileHover={{
            y: -14,
            scale: 1.02,
            boxShadow: "0 25px 60px rgba(16,185,129,0.35)",
            transition: { duration: 0.25 },
          }}
        >
          {/* profile image */}
          <motion.div
            className="aspect-[4/5] rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 flex items-center justify-center"
            whileHover={{ scale: 1.01 }}
          >
            <motion.img
              src={profileImg}
              alt="Ravindu Ravisara"
              className="h-full w-full object-cover"
              animate={{ scale: [1.05, 1.08, 1.05] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* bottom info */}
          <div className="mt-4 space-y-2 text-[11px] text-slate-300">
            <div className="flex items-center justify-between gap-2">
              <div>
                <p className="text-xs font-semibold text-slate-100">
                  Mixed Skill Developer
                </p>
                <p className="text-[11px] text-slate-400">
                  Web · Mobile · Backend · Analytics
                </p>
              </div>
              <motion.div
                className="text-right"
                animate={{ y: [0, -1.5, 0], opacity: [0.8, 1, 0.8] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }}
              >
                <p className="text-[11px] text-slate-400">Based in</p>
                <p className="text-xs font-semibold text-emerald-300">
                  Sri Lanka
                </p>
              </motion.div>
            </div>

            <div className="pt-1 border-t border-slate-800 mt-2">
              <p className="text-[11px] text-slate-400 mb-1">Current focus</p>
              <div className="flex flex-wrap gap-1.5">
                {["React", "Node", "MongoDB", "Kotlin"].map((t, i) => (
                  <motion.span
                    key={t}
                    className="rounded-full bg-slate-800 px-2 py-0.5 text-[10px]"
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "mirror",
                      delay: i * 0.25,
                      ease: "easeInOut",
                    }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

          {/* floating badge */}
          <motion.div
            className="absolute -top-3 -left-3 rounded-full bg-slate-900 border border-slate-700 px-3 py-1 text-[11px] text-slate-200 shadow-lg"
            animate={{ y: [0, -4, 0], opacity: [0.7, 1, 0.7] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            Developer
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
