import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Fire Production (Pvt)Ltd (Client Project)",
    category: "MERN / Full-Stack Web Application",
    description:
      "Designed and developed a professional, responsive business website to strengthen the company’s online presence and improve customer engagement. The website includes well-structured pages for company information, services, portfolio, and contact, optimized for performance, usability, and search visibility. It integrates modern UI design principles, mobile responsiveness, basic SEO setup, and direct customer communication tools such as contact forms and WhatsApp chat, ensuring accessibility across all major browsers and devices.",
    tech: ["React", "Node", "Express", "MongoDB", "Tailwind"],
    highlight:
      "Developed a responsive professional business website with modern UI design, mobile optimization, contact form and WhatsApp integration, and basic SEO setup, demonstrating strong full-stack web development skills using the MERN stack.",
    url: "https://fireproductions.lk/",
  },
  {
    title: "Wellness Tracker App",
    category: "Android / Mobile Application Development",
    description:
      "Developed a native Android application using a professional design-to-development workflow. Initiated the project with Figma for comprehensive UI/UX planning, and built the responsive application using a modern Android development stack. The application was integrated with a persistent database via RESTful API for seamless data management",
    tech: ["Kotlin/Java + XML", "Room", "ViewModel", "LiveData", "Figma"],
    highlight: "Implemented a full end-to-end Android architecture with MVVM, Room database, and RESTful API integration, delivering a responsive, scalable, and offline-capable mobile application.Implemented MVVM architecture with Room and reactive UI.",
    url: "https://github.com/ravinduravisara/EcoTrack.git",
  },
  {
    title: "Hotel Management System (Client Project)",
    category: "MERN / Full-Stack Web Application",
    description:
      "Developed a commercial-grade, full-stack application using the MERN stack to manage hotel operations. The system handles reservations, room inventory, and guest check-in/out,demonstrating the ability to deliver a complex, client-based project that meets specific business requirements.",
    tech: ["React", "Node", "Express", "MongoDB", "Tailwind"],
    highlight:
      "Delivered a fully functional hotel management platform with real-time reservation handling, automated room availability tracking, and streamlined check-in/check-out workflows, demonstrating the ability to build complex, client-ready MERN applications.Planned API structure for products, cart, and voice integration.",
    url: "https://github.com/ravinduravisara/Green-Pasture-Hotel.git",
  },
  {
    title: "Online Bidding System",
    category: "Java / Full-Stack Web Application",
    description:
      "Designed and built a secure, feature-rich full-stack web application to facilitate online auctions. The system handled secure user authentication, bid validation, and successful finalization of auction transactions, using the Java environment for server-side processing and a MySQL database.Small projects exploring datasets, distributions, and outlier detection in R.",
    tech: ["HTML","CSS","JavaScript","Java Server","MySQL"],
    highlight: "Built a secure, transaction-safe bidding system with real-time bid validation, authenticated user workflows, and reliable auction finalization using Java server-side processing and MySQL, showcasing strong backend logic and full-stack development skills.Focused on understanding data and visualizations.",
    url: "https://github.com/DinithaR/BidMaster.git",
  },
  {
    title: "Boat Safari System",
    category: "PHP / Full-Stack Web Application",
    description:
      "Boat Safari System: Developed a full-stack web application using web development technologies for server-side logic,data management, and the client-side interface. Features include an interactive booking system, real-time availability checks, and an admin panel for managing tours and bookings",
    tech: ["HTML","CSS","JavaScript","PHP","MySQL"],
    highlight: "Implemented an interactive safari booking platform with real-time availability tracking, secure reservation handling, and an admin dashboard for managing tours and customer bookings, demonstrating strong full-stack skills in PHP and MySQL.",
    url: "https://github.com/ravinduravisara/Boat-Safari-System.git",
  },
  {
    title: "ISURU-Service-Center-Billing-System-Offline-Software-",
    category: "C# & .NET / Advanced Billing-System-Offline-Software",
    description:
      "Client Project ;Incudes following features :Basic Billing Features,. Printing Support,Dashboard & Analytics, Service Management,Customer & Vehicle Management,Stock & Inventory Management,Role-Based Access,Supply Management,Backup & Restore,User-Friendly Interface,Reports & Invoices,Notifications & Alerts,Data Security & Encryption,Multi-User Support,Search & Filter,Settings & Customization,Integration Capabilities,Help & Support",
    tech: [" C#"," .NET"," SQL Server"," WPF"," MVVM"],
    highlight: "Developed a comprehensive offline service station billing and management system with secure invoicing, inventory and service tracking, role-based user access, real-time analytics dashboard, and integrated printing support, showcasing strong desktop application development skills using C#, WPF (MVVM), and SQLite.",
    url: "https://github.com/ravinduravisara/ISURU-Service-Center-Billing-System-Offline-Software-.git",
  },
  {
    title: "Online Instrument Rental Platform ",
    category: "MERN / Full-Stack Web Application",
    description:
      "Developed a fully functional web application using the MERN stack. Implemented a RESTful API for backend logic and utilized React for a dynamic, component-based frontend, allowing users to efficiently browse, filter, and reserve instruments.",
    tech: ["React", "Node", "Express", "MongoDB", "Tailwind"],
    highlight:
      "Implemented a complete end-to-end rental workflow with real-time availability updates, advanced filtering, and a responsive React UI, creating a seamless instrument browsing and reservation experience.",
    url: "https://github.com/DinithaR/TuneShare-ITP.git",
  },

];

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

const Projects = () => {
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

      {/* project cards */}
      <motion.div
        className="relative grid md:grid-cols-2 gap-6"
        variants={gridVariants}
      >
        {projects.map((project, idx) => (
          <motion.article
            key={project.title}
            className="
              group bg-slate-900/60 border border-slate-800/80 rounded-2xl p-5 shadow-xl
              flex flex-col
              transition-all duration-300
              hover:shadow-emerald-500/25 hover:border-emerald-500/40
              cursor-pointer
            "
            variants={cardVariants}
            custom={idx}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            onClick={() => project.url && window.open(project.url, '_blank')}
            aria-label={project.url ? `Open ${project.title}` : project.title}
          >
            <div className="flex items-start justify-between mb-3 gap-3">
              <div className="flex-1">
                <motion.h3
                  className="text-base sm:text-lg font-semibold text-slate-50 flex items-center gap-2"
                  animate={{ y: [0, -1.5, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: idx * 0.2,
                  }}
                >
                  {project.title}
                  {/* small animated dot */}
                  <motion.span
                    className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                    animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                  />
                </motion.h3>
              </div>
              <motion.span
                className="rounded-full border border-emerald-500/40 bg-slate-900/80 px-2 py-1 text-[11px] text-emerald-300 whitespace-nowrap"
                animate={{ opacity: [0.8, 1, 0.8], y: [0, -1, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                  delay: 0.3 + idx * 0.2,
                }}
              >
                {project.category}
              </motion.span>
            </div>

            <p className="text-sm text-slate-300 mb-2">
              {project.description}
            </p>

            <p className="text-xs text-emerald-300 mb-4">
              {project.highlight}
            </p>

            <div className="mt-auto flex flex-wrap gap-2 text-[11px] text-slate-200">
              {project.tech.map((t, i) => (
                <motion.span
                  key={t}
                  className="
                    rounded-full bg-slate-800/80 px-2.5 py-1
                    transition-all duration-300
                    group-hover:bg-slate-700
                    hover:bg-emerald-500 hover:text-slate-950
                    hover:-translate-y-0.5
                  "
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: 0.2 + i * 0.2 + idx * 0.1,
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
