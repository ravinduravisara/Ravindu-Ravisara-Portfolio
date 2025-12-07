import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const glowVariants = {
  animate: {
    opacity: [0.12, 0.3, 0.12],
    x: [0, 8, 0],
    y: [0, -6, 0],
    scale: [0.95, 1.05, 0.95],
    transition: {
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
};

const Footer = () => {
  return (
    <motion.footer
      className="relative border-t border-slate-800/80 mt-10 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* soft animated glow */}
      <motion.div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 flex justify-center"
        variants={glowVariants}
        animate="animate"
      >
        <div className="h-32 w-64 bg-emerald-500/15 blur-3xl" />
      </motion.div>

      <motion.div
        className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500"
        whileHover={{ y: -1 }}
        transition={{ duration: 0.25 }}
      >
        <motion.p
          className="flex items-center gap-1"
          whileHover={{ color: "#a7f3d0" }} // emerald-200
          transition={{ duration: 0.25 }}
        >
          <span>© {new Date().getFullYear()} Ravindu Ravisara.</span>
          <span className="hidden sm:inline">All rights reserved.</span>
        </motion.p>

        <motion.p
          className="text-[11px]"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          whileHover={{ color: "#6ee7b7" }} // emerald-300
        >
          Designed by Ravindu Ravisara.
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
