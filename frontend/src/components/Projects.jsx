import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import DepthCarousel from "./DepthCarousel.jsx";
import projects from "../../../backend/data/projects.json";
import fireProductionsImage from "../assets/fireproductions.jpeg";
import InstrumentPlatformImage from "../assets/InstrumentPlatform.jpeg";
import IsuruserviceImage from "../assets/Isuruservice.png";

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

const gridVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.08 },
  }),
};

const getProjectTitle = (project) => project.title?.trim() ?? "";

const buildProjectSlides = (items) =>
  items.map((project, index) => ({
    title: getProjectTitle(project),
    alt: getProjectTitle(project),
    type:
      getProjectTitle(project) === "Fire Production (Pvt)Ltd (Client Project)" ||
      getProjectTitle(project) === "Online Instrument Rental Platform" ||
      getProjectTitle(project) === "ISURU-Service-Center-Billing-System-Offline-Software-"
        ? "image"
        : "text",
    image:
      getProjectTitle(project) === "Fire Production (Pvt)Ltd (Client Project)"
        ? fireProductionsImage
        : getProjectTitle(project) === "Online Instrument Rental Platform"
          ? InstrumentPlatformImage
          : getProjectTitle(project) === "ISURU-Service-Center-Billing-System-Offline-Software-"
            ? IsuruserviceImage
            : null,
    imageFit:
      getProjectTitle(project) === "ISURU-Service-Center-Billing-System-Offline-Software-" ||
      getProjectTitle(project) === "Online Instrument Rental Platform"
        ? "contain"
        : "cover",
    imagePosition: "center center",
    imageScale: 1,
    color: `hsl(${(index * 47) % 360} 65% 18%)`,
  }));

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const slides = useMemo(() => buildProjectSlides(projects), []);
  const activeProject = projects[activeIndex] ?? projects[0];

  return (
    <motion.section
      id="projects"
      className="py-16 sm:py-20 relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* background glows */}
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

      {/* header */}
      <motion.div
        className="flex items-center justify-between mb-10 relative"
        variants={headerVariants}
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            Projects
          </h2>
          <p className="text-sm text-slate-400 mt-1 max-w-md">
            A mix of web apps, Android projects, backend experiments.
          </p>
        </div>

        {/* small animated accent line */}
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

      {/* project showcase */}
      <motion.div
        className="relative grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)]"
        variants={gridVariants}
      >
        <motion.div
          className="relative rounded-[2rem] border border-slate-800/80 bg-slate-950/50 p-3 sm:p-5 shadow-2xl shadow-black/20"
          variants={cardVariants}
          custom={0}
        >
          <div className="h-[520px] sm:h-[560px] lg:h-[600px]">
            <DepthCarousel
              items={slides}
              cardWidth={320}
              cardHeight={420}
              depth={220}
              spread={94}
              tilt={22}
              tiltDirection="right"
              perspective={1450}
              visibleCards={4}
              falloff={0.18}
              blur={6}
              autoplay
              autoplayDelay={3400}
              loop
              showControls
              showIndicators
              onChange={setActiveIndex}
            />
          </div>
        </motion.div>

        <motion.article
          className="group rounded-[2rem] border border-slate-800/80 bg-slate-900/60 p-6 sm:p-7 shadow-xl flex flex-col"
          variants={cardVariants}
          custom={1}
          whileHover={{ y: -4 }}
        >
          <motion.span
            className="mb-4 inline-flex w-fit rounded-full border border-emerald-500/40 bg-slate-900/80 px-3 py-1 text-[11px] text-emerald-300 whitespace-nowrap"
            animate={{ opacity: [0.8, 1, 0.8], y: [0, -1, 0] }}
            transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
          >
            {activeProject?.category}
          </motion.span>

          <motion.h3
            className="text-xl sm:text-2xl font-semibold tracking-tight text-slate-50"
            animate={{ y: [0, -1.5, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            {activeProject?.title}
          </motion.h3>

          <p className="mt-4 text-sm text-slate-300 leading-6">
            {activeProject?.description}
          </p>

          <p className="mt-4 text-sm text-emerald-300 leading-6">
            {activeProject?.highlight}
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-[11px] text-slate-200">
            {activeProject?.tech?.map((tech, index) => (
              <motion.span
                key={tech}
                className="rounded-full bg-slate-800/80 px-2.5 py-1 transition-all duration-300 group-hover:bg-slate-700"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay: 0.2 + index * 0.15,
                }}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          <div className="mt-6 flex items-center gap-3">
            <a
              href={activeProject?.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 transition-transform duration-300 hover:bg-emerald-400 hover:scale-[1.02]"
            >
              Open project
            </a>
            <span className="text-xs text-slate-500">
              Project {activeIndex + 1} of {projects.length}
            </span>
          </div>
        </motion.article>
      </motion.div>
    </motion.section>
  );
};

export default Projects;
