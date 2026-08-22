import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import profileImg from "../assets/profile.jpg";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8, staggerChildren: 0.15, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const leftItem = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } },
};

const rightItem = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.22, 0.61, 0.36, 1] } },
};

const Hero = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <div id="top" className="relative min-h-[92vh] sm:h-screen flex items-center overflow-hidden bg-slate-950 pt-20 sm:pt-16">
      {/* VIDEO */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        style={{ zIndex: 0 }}
        src="/videos/hero-bg.mp4"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-slate-950/60" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/40 to-transparent" style={{ zIndex: 1 }} />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-slate-950/30" style={{ zIndex: 1 }} />

      {/* Floating orbs */}
      <motion.div
        className="pointer-events-none absolute top-1/4 right-1/4 h-64 w-64 sm:h-96 sm:w-96 rounded-full bg-emerald-500/10 blur-[100px] sm:blur-[120px]"
        animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ zIndex: 2 }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-1/4 left-1/4 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-cyan-500/10 blur-[80px] sm:blur-[100px]"
        animate={{ x: [0, -20, 0], y: [0, 15, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{ zIndex: 2 }}
      />

      {/* CONTENT */}
      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 w-full relative py-8 sm:py-0"
        style={{ zIndex: 10 }}
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <div className="grid gap-8 lg:gap-10 lg:grid-cols-[1.4fr_1fr] items-center">
          
          {/* LEFT: Text */}
          <motion.div className="space-y-4 sm:space-y-5 text-center lg:text-left" variants={leftItem}>
            
            {/* Status Badge */}
            <motion.div
              className="inline-flex justify-center lg:justify-start w-full lg:w-auto"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/40 bg-slate-900/60 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-emerald-300 shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                Open to internships & freelance work
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-white"
              animate={{ y: [0, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            >
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-sky-400 drop-shadow-lg">
                Ravindu Ravisara
              </span>
            </motion.h1>

            {/* Tagline */}
            <motion.p
              className="text-base sm:text-lg md:text-xl text-slate-200 max-w-xl leading-relaxed font-medium mx-auto lg:mx-0"
              variants={leftItem}
            >
              Aspiring software engineer building{" "}
              <span className="text-white font-semibold">
                real-world projects with MERN, Android/Kotlin, Python, and R
              </span>
              . I turn everyday problems into clean, usable apps.
            </motion.p>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base text-slate-400 max-w-xl leading-relaxed mx-auto lg:mx-0"
              variants={leftItem}
            >
              I love learning new technologies and applying my skills to grow in a
              real engineering environment. Many of my projects are inspired by
              daily workflows.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row flex-wrap gap-3 pt-2 sm:pt-3 justify-center lg:justify-start" 
              variants={leftItem}
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-bold text-slate-950 hover:bg-emerald-400 transition-all duration-300 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 w-full sm:w-auto"
                whileHover={{ y: -3, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                View my projects
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>

              <motion.a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/50 backdrop-blur-sm px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-bold text-slate-200 hover:border-emerald-400 hover:text-emerald-300 transition-all duration-300 shadow-lg hover:bg-slate-900/70 w-full sm:w-auto"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact me
              </motion.a>

              <motion.a
                href="/Ravindu_Ravisara_CV.pdf"
                download="Ravindu_Ravisara_CV.pdf"
                className="inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/50 backdrop-blur-sm px-5 sm:px-6 py-2.5 sm:py-3 text-sm font-bold text-slate-200 hover:border-emerald-400 hover:text-emerald-300 transition-all duration-300 shadow-lg hover:bg-slate-900/70 w-full sm:w-auto"
                whileHover={{ y: -2, scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </motion.a>
            </motion.div>

            {/* Tech Tags */}
            <motion.div 
              className="mt-4 sm:mt-5 flex flex-wrap gap-2 justify-center lg:justify-start" 
              variants={leftItem}
            >
              {["MERN", "Android (Kotlin)", "Python / FastAPI", "R & analytics"].map((tag, i) => (
                <motion.span
                  key={tag}
                  className="rounded-full border border-slate-700 bg-slate-900/60 backdrop-blur-sm px-3 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs font-semibold text-slate-300 shadow-sm hover:border-emerald-400 hover:text-emerald-300 transition-colors cursor-default"
                  animate={{ opacity: [0.65, 1, 0.65], y: [0, -1.5, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, repeatType: "mirror", delay: 0.3 + i * 0.2, ease: "easeInOut" }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: Profile Card */}
          <motion.div 
            className="relative flex justify-center lg:justify-end mt-4 lg:mt-0" 
            variants={rightItem}
          >
            <motion.div
              className="absolute -inset-4 sm:-inset-6 rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-tr from-emerald-500/20 via-cyan-500/15 to-sky-500/10 blur-3xl"
              animate={{ opacity: [0.5, 0.9, 0.5], scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="relative bg-slate-900/70 backdrop-blur-xl border border-slate-700/60 rounded-2xl sm:rounded-3xl p-3 sm:p-4 lg:p-5 shadow-2xl shadow-black/30 max-w-[260px] sm:max-w-[300px] lg:max-w-[320px] w-full"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ y: -14, scale: 1.02, boxShadow: "0 30px 70px rgba(16,185,129,0.25)", transition: { duration: 0.3 } }}
            >
              <motion.div
                className="aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden border border-slate-700 bg-slate-800 flex items-center justify-center shadow-inner"
                whileHover={{ scale: 1.01 }}
              >
                <motion.img
                  src={profileImg}
                  alt="Ravindu Ravisara"
                  className="h-full w-full object-cover"
                  animate={{ scale: [1.05, 1.08, 1.05] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>

              <div className="mt-3 sm:mt-5 space-y-2 sm:space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-slate-100">Mixed Skill Developer</p>
                    <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">Web · Mobile · Backend · Analytics</p>
                  </div>
                  <motion.div
                    className="text-right"
                    animate={{ y: [0, -1.5, 0], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <p className="text-[10px] text-slate-400 font-medium">Based in</p>
                    <p className="text-[10px] sm:text-xs font-bold text-emerald-400">Sri Lanka</p>
                  </motion.div>
                </div>

                <div className="pt-2 sm:pt-3 border-t border-slate-700/60">
                  <p className="text-[10px] text-slate-400 mb-1.5 sm:mb-2 font-semibold uppercase tracking-wider">Current focus</p>
                  <div className="flex flex-wrap gap-1 sm:gap-1.5">
                    {["React", "Node", "MongoDB", "Kotlin"].map((t, i) => (
                      <motion.span
                        key={t}
                        className="rounded-full bg-slate-800 px-2 py-0.5 sm:px-2.5 sm:py-1 text-[9px] sm:text-[10px] font-bold text-slate-300"
                        animate={{ opacity: [0.7, 1, 0.7] }}
                        transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", delay: i * 0.25, ease: "easeInOut" }}
                      >
                        {t}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                className="absolute -top-2 sm:-top-3 -left-2 sm:-left-3 rounded-full bg-slate-900 border border-slate-600 px-2.5 sm:px-3.5 py-1 sm:py-1.5 text-[10px] sm:text-[11px] font-bold text-slate-200 shadow-lg shadow-black/30"
                animate={{ y: [0, -4, 0], opacity: [0.75, 1, 0.75] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              >
                👋 Developer
              </motion.div>

              <motion.div
                className="absolute -bottom-2 -right-2 rounded-full bg-emerald-500 px-2.5 sm:px-3 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-bold text-slate-950 shadow-lg shadow-emerald-500/30"
                animate={{ y: [0, 3, 0], opacity: [0.9, 1, 0.9] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                Undergraduate
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">Scroll</span>
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-slate-500 flex justify-center pt-1.5"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div className="w-1 h-1.5 rounded-full bg-slate-400" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;