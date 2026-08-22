import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

import DepthCarousel from "./DepthCarousel.jsx";
import projects from "../../../backend/data/projects.json";

import fireProductionsImage from "../assets/fireproductions.jpeg";
import InstrumentPlatformImage from "../assets/InstrumentPlatform.jpeg";
import IsuruserviceImage from "../assets/Isuruservice.png";
import HotelManagementImage from "../assets/hotel-management.jpeg";

/* =========================================================
   SECTION ANIMATION
========================================================= */

const sectionVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },

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

/* =========================================================
   HEADER ANIMATION
========================================================= */

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.45,
    },
  },
};

/* =========================================================
   GRID ANIMATION
========================================================= */

const gridVariants = {
  hidden: {
    opacity: 0,
    y: 10,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.45,
      staggerChildren: 0.12,
    },
  },
};

/* =========================================================
   CARD ANIMATION
========================================================= */

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.55,
      delay: index * 0.08,
    },
  }),
};

/* =========================================================
   GET PROJECT TITLE
========================================================= */

const getProjectTitle = (project) => {
  return project?.title?.trim() ?? "";
};

/* =========================================================
   PROJECT IMAGE CONFIGURATION
========================================================= */

const getProjectImage = (project) => {
  const title = getProjectTitle(project);

  /* ---------------------------------------------------------
     FIRE PRODUCTIONS
  --------------------------------------------------------- */

  if (title === "Fire Production (Pvt)Ltd (Client Project)") {
    return {
      src: fireProductionsImage,

      fit: "contain",

      position: "center center",

      scale: 0.96,
    };
  }

  /* ---------------------------------------------------------
     INSTRUMENT RENTAL PLATFORM
  --------------------------------------------------------- */

  if (title === "Online Instrument Rental Platform") {
    return {
      src: InstrumentPlatformImage,

      fit: "contain",

      position: "center center",

      scale: 0.96,
    };
  }

  /* ---------------------------------------------------------
     ISURU SERVICE CENTER
  --------------------------------------------------------- */

  if (
    title ===
    "ISURU-Service-Center-Billing-System-Offline-Software-"
  ) {
    return {
      src: IsuruserviceImage,

      fit: "contain",

      position: "center center",

      scale: 0.96,
    };
  }

  /* ---------------------------------------------------------
     HOTEL MANAGEMENT SYSTEM

     IMPORTANT:
     contain = show complete screenshot
     cover   = crop screenshot
  --------------------------------------------------------- */

  if (title === "Hotel Management System (Client Project)") {
    return {
      src: HotelManagementImage,

      fit: "contain",

      position: "center center",

      scale: 0.96,
    };
  }

  /* ---------------------------------------------------------
     NO IMAGE
  --------------------------------------------------------- */

  return null;
};

/* =========================================================
   BUILD CAROUSEL SLIDES
========================================================= */

const buildProjectSlides = (items) => {
  return items.map((project, index) => {
    const title = getProjectTitle(project);

    const imageConfig = getProjectImage(project);

    /* =======================================================
       PROJECT HAS IMAGE
    ======================================================= */

    if (imageConfig) {
      return {
        id: `project-${index}`,

        type: "image",

        title,

        alt: title,

        image: imageConfig.src,

        imageFit: imageConfig.fit,

        imagePosition: imageConfig.position,

        imageScale: imageConfig.scale,

        color: "#f1f5f9",
      };
    }

    /* =======================================================
       PROJECT DOES NOT HAVE IMAGE
    ======================================================= */

    return {
      id: `project-${index}`,

      type: "text",

      title,

      alt: title,

      category: project?.category ?? "",

      description: project?.description ?? "",

      color: `hsl(${(index * 47) % 360} 70% 92%)`,
    };
  });
};

/* =========================================================
   PROJECTS COMPONENT
========================================================= */

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  /* =========================================================
     BUILD SLIDES
  ========================================================= */

  const slides = useMemo(() => {
    return buildProjectSlides(projects);
  }, []);

  /* =========================================================
     ACTIVE PROJECT
  ========================================================= */

  const activeProject =
    projects?.[activeIndex] ??
    projects?.[0] ??
    null;

  /* =========================================================
     CHECK URL
  ========================================================= */

  const hasProjectUrl =
    typeof activeProject?.url === "string" &&
    activeProject.url.trim() !== "";

  const isSmallScreen = typeof window !== "undefined" && window.innerWidth < 640;
  const isTabletScreen = typeof window !== "undefined" && window.innerWidth < 1024;

  const carouselCardWidth = isSmallScreen ? 220 : isTabletScreen ? 260 : 320;
  const carouselCardHeight = isSmallScreen ? 300 : 420;

  return (
    <motion.section
      id="projects"
      className="relative py-16 sm:py-20"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.25,
      }}
    >
      {/* =====================================================
          BACKGROUND GLOW - LEFT
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -top-10
          left-[-40px]
          h-28
          w-28
          rounded-full
          bg-emerald-400/15
          blur-3xl
        "
        animate={{
          opacity: [0.15, 0.4, 0.15],
          x: [0, 10, 0],
          y: [0, 6, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          BACKGROUND GLOW - RIGHT
      ===================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -bottom-12
          right-[-40px]
          h-32
          w-32
          rounded-full
          bg-sky-400/15
          blur-3xl
        "
        animate={{
          opacity: [0.12, 0.35, 0.12],
          x: [0, -10, 0],
          y: [0, -6, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          HEADER
      ===================================================== */}

      <motion.div
        className="
          relative
          mb-10
          flex
          items-center
          justify-between
        "
        variants={headerVariants}
      >
        <div>
          <h2
            className="
              text-2xl
              font-bold
              tracking-tight
              text-slate-800
              sm:text-3xl
            "
          >
            Projects
          </h2>

          <p
            className="
              mt-1
              max-w-md
              text-sm
              text-slate-500
            "
          >
            A mix of web apps, Android projects, backend experiments.
          </p>
        </div>

        {/* ===================================================
            HEADER ACCENT
        =================================================== */}

        <motion.div
          className="
            hidden
            h-px
            w-20
            bg-gradient-to-r
            from-emerald-500/80
            via-sky-400/80
            to-transparent
            sm:block
          "
          animate={{
            width: ["3rem", "5.5rem", "3rem"],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* =====================================================
          PROJECT SHOWCASE
      ===================================================== */}

      <motion.div
        className="
          relative
          grid
          gap-8
          lg:grid-cols-[minmax(0,1.3fr)_minmax(320px,0.7fr)]
        "
        variants={gridVariants}
      >
        {/* ===================================================
            LEFT SIDE
            DEPTH CAROUSEL
        =================================================== */}

        <motion.div
          className="
            relative
            overflow-hidden
            rounded-[2rem]
            border
            border-slate-200/70
            bg-white/80
            p-3
            shadow-2xl
            shadow-slate-200/50
            backdrop-blur-sm
            sm:p-5
          "
          variants={cardVariants}
          custom={0}
        >
          <div
            className="
              h-[520px]
              sm:h-[560px]
              lg:h-[600px]
            "
          >
            <DepthCarousel
              items={slides}

              cardWidth={carouselCardWidth}

              cardHeight={carouselCardHeight}

              depth={isSmallScreen ? 170 : 220}

              spread={isSmallScreen ? 62 : 94}

              tilt={22}

              tiltDirection="right"

              perspective={1450}

              visibleCards={isSmallScreen ? 3 : 4}

              falloff={0.18}

              blur={6}

              autoplay

              autoplayDelay={3400}

              loop

              showControls

              showIndicators

              onChange={(index) => {
                setActiveIndex(index);
              }}
            />
          </div>
        </motion.div>

        {/* ===================================================
            RIGHT SIDE
            PROJECT INFORMATION
        =================================================== */}

        <motion.article
          className="
            group
            flex
            flex-col
            rounded-[2rem]
            border
            border-slate-200/70
            bg-white/80
            p-6
            shadow-xl
            shadow-slate-200/40
            backdrop-blur-sm
            sm:p-7
          "
          variants={cardVariants}
          custom={1}
          whileHover={{
            y: -4,
          }}
        >
          {/* =================================================
              CATEGORY
          ================================================= */}

          {activeProject?.category && (
            <motion.span
              className="
                mb-4
                inline-flex
                w-fit
                whitespace-nowrap
                rounded-full
                border
                border-emerald-200
                bg-white/80
                px-3
                py-1
                text-[11px]
                font-medium
                text-emerald-700
                shadow-sm
              "
              animate={{
                opacity: [0.8, 1, 0.8],
                y: [0, -1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              {activeProject.category}
            </motion.span>
          )}

          {/* =================================================
              PROJECT TITLE
          ================================================= */}

          <motion.h3
            className="
              text-xl
              font-bold
              tracking-tight
              text-slate-800
              sm:text-2xl
            "
            animate={{
              y: [0, -1.5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
          >
            {activeProject?.title}
          </motion.h3>

          {/* =================================================
              DESCRIPTION
          ================================================= */}

          {activeProject?.description && (
            <p
              className="
                mt-4
                text-sm
                leading-6
                text-slate-600
              "
            >
              {activeProject.description}
            </p>
          )}

          {/* =================================================
              HIGHLIGHT
          ================================================= */}

          {activeProject?.highlight && (
            <p
              className="
                mt-4
                text-sm
                leading-6
                text-emerald-600
                font-medium
              "
            >
              {activeProject.highlight}
            </p>
          )}

          {/* =================================================
              TECHNOLOGIES
          ================================================= */}

          {Array.isArray(activeProject?.tech) &&
            activeProject.tech.length > 0 && (
              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  gap-2
                  text-[11px]
                  text-slate-600
                "
              >
                {activeProject.tech.map((tech, index) => (
                  <motion.span
                    key={`${tech}-${index}`}
                    className="
                      rounded-full
                      bg-slate-100
                      px-2.5
                      py-1
                      transition-all
                      duration-300
                      group-hover:bg-slate-200
                      font-medium
                    "
                    animate={{
                      opacity: [0.7, 1, 0.7],
                    }}
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
            )}

          {/* =================================================
              ACTIONS
          ================================================= */}

          <div
            className="
              mt-auto
              flex
              flex-wrap
              items-center
              gap-3
              pt-6
            "
          >
            {/* =================================================
                OPEN PROJECT BUTTON
            ================================================= */}

            {hasProjectUrl && (
              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  rounded-full
                  bg-emerald-600
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  hover:bg-emerald-500
                  shadow-lg
                  shadow-emerald-500/20
                "
              >
                Open project
              </a>
            )}

            {/* =================================================
                PROJECT NUMBER
            ================================================= */}

            <span
              className="
                text-xs
                text-slate-400
              "
            >
              Project {activeIndex + 1} of {projects.length}
            </span>
          </div>
        </motion.article>
      </motion.div>
    </motion.section>
  );
};

export default Projects;