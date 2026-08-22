import React from "react";
import { motion } from "framer-motion";

const footerVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 0.61, 0.36, 1],
    },
  },
};

const navItems = [
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="
        relative
        mt-14
        overflow-hidden
        border-t
        border-white/10
        bg-[#020617]
        text-white
      "
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
    >
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-gradient-to-r
          from-slate-950
          via-slate-900
          to-slate-950
        "
      />

      {/* Left Glow */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -left-24
          bottom-[-80px]
          h-52
          w-52
          rounded-full
          bg-emerald-500/10
          blur-[90px]
        "
        animate={{
          x: [0, 20, 0],
          y: [0, -10, 0],
          opacity: [0.25, 0.55, 0.25],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Right Glow */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -right-20
          top-[-60px]
          h-52
          w-52
          rounded-full
          bg-sky-500/10
          blur-[90px]
        "
        animate={{
          x: [0, -15, 0],
          y: [0, 12, 0],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          TOP GLOW LINE
      ===================================================== */}

      <motion.div
        className="
          absolute
          left-1/2
          top-0
          h-px
          -translate-x-1/2
          bg-gradient-to-r
          from-transparent
          via-emerald-400/70
          to-transparent
        "
        animate={{
          width: ["25%", "65%", "25%"],
          opacity: [0.35, 0.8, 0.35],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          max-w-7xl
          px-4
          py-10
          sm:px-6
          sm:py-12
          lg:px-8
        "
      >
        <div
          className="
            flex
            flex-col
            gap-8
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* =================================================
              BRAND
          ================================================= */}

          <div className="max-w-sm">
            <motion.a
              href="#"
              className="
                inline-flex
                items-center
                gap-3
                text-lg
                font-semibold
                tracking-tight
                text-white
              "
              whileHover={{
                x: 3,
              }}
              transition={{
                duration: 0.2,
              }}
            >
              {/* =============================================
                  LOGO
              ============================================= */}

              <motion.div
                className="
                  flex
                  h-11
                  w-11
                  shrink-0
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-xl
                  border
                  border-emerald-400/20
                  bg-white/5
                  p-1
                  shadow-[0_0_25px_rgba(16,185,129,0.12)]
                "
                whileHover={{
                  scale: 1.08,
                  rotate: 3,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
              >
                <img
                  src="/logo.png"
                  alt="Ravindu Ravisara Logo"
                  className="
                    h-full
                    w-full
                    object-contain
                  "
                />
              </motion.div>

              {/* Name */}

              <span>Ravindu Ravisara</span>
            </motion.a>

            <p
              className="
                mt-3
                text-sm
                leading-6
                text-slate-400
              "
            >
              Building modern, responsive, and user-focused digital
              experiences.
            </p>
          </div>

          {/* =================================================
              NAVIGATION
          ================================================= */}

          <nav>
            <ul
              className="
                flex
                flex-wrap
                items-center
                gap-x-6
                gap-y-3
                md:justify-end
              "
            >
              {navItems.map((item) => (
                <li key={item.label}>
                  <motion.a
                    href={item.href}
                    className="
                      group
                      relative
                      text-xs
                      font-medium
                      uppercase
                      tracking-[0.2em]
                      text-slate-400
                      transition-colors
                      duration-300
                      hover:text-white
                    "
                    whileHover={{
                      y: -2,
                    }}
                    transition={{
                      duration: 0.2,
                    }}
                  >
                    {item.label}

                    {/* underline */}

                    <span
                      className="
                        absolute
                        -bottom-2
                        left-0
                        h-px
                        w-0
                        bg-gradient-to-r
                        from-emerald-400
                        to-sky-400
                        transition-all
                        duration-300
                        group-hover:w-full
                      "
                    />
                  </motion.a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* =====================================================
            DIVIDER
        ===================================================== */}

        <div
          className="
            my-8
            h-px
            w-full
            bg-gradient-to-r
            from-transparent
            via-white/10
            to-transparent
          "
        />

        {/* =====================================================
            BOTTOM SECTION
        ===================================================== */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-between
            gap-3
            text-center
            sm:flex-row
            sm:text-left
          "
        >
          <motion.p
            className="
              text-xs
              text-slate-500
            "
            whileHover={{
              color: "#cbd5e1",
            }}
            transition={{
              duration: 0.2,
            }}
          >
            © {currentYear} Ravindu Ravisara. All rights reserved.
          </motion.p>

          <motion.p
            className="
              flex
              items-center
              gap-2
              text-[11px]
              text-slate-500
            "
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            Designed & developed by

            <span
              className="
                font-medium
                text-emerald-400
              "
            >
              Ravindu Ravisara
            </span>
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;