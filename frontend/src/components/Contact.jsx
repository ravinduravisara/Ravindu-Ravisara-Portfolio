import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_nyc7ec9";   // <- replace
const TEMPLATE_ID = "template_2ggbyfh"; // <- replace
const PUBLIC_KEY  = "XVljrUlYD8uHY3RQf";  // <- replace

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

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.22, 0.61, 0.36, 1] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.08 },
  }),
};

const Contact = () => {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const contacts = [
    {
      label: "Email",
      value: "ravinduravisara@gmail.com",
      link: "mailto:ravinduravisara@gmail.com",
    },
    {
      label: "GitHub",
      value: "https://github.com/ravinduravisara",
      link: "https://github.com/ravinduravisara",
    },
    {
      label: "LinkedIn",
      value: "https://www.linkedin.com/in/ravindu-ravisara",
      link: "https://www.linkedin.com/in/ravindu-ravisara",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const templateParams = {
      from_name: form.from_name,
      from_email: form.from_email,
      message: form.message,
      to_name: "Ravindu Ravisara",
      to_email: "ravinduravisara@gmail.com",
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
      .then(
        (result) => {
          console.log("EmailJS success:", result.text);
          setStatus("Message sent successfully!");
          setForm({ from_name: "", from_email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS error:", error);
          setStatus("Failed to send message. Try again.");
        }
      );
  };

  return (
    <motion.section
      id="contact"
      className="py-16 sm:py-20 relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Soft animated glow behind the form */}
      <motion.div
        className="absolute inset-0 -z-10 flex justify-center"
        initial={{ opacity: 0.6, scale: 0.9 }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [0.9, 1.05, 0.9],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <div className="h-[300px] w-[300px] bg-emerald-500/20 blur-[160px]" />
      </motion.div>

      {/* Card */}
      <motion.div
        className="
          max-w-xl mx-auto bg-slate-900/60 border border-slate-800/80 rounded-2xl
          p-6 sm:p-7 shadow-xl backdrop-blur-xl
          transition-all duration-500
        "
        variants={cardVariants}
        whileHover={{
          y: -8,
          boxShadow: "0 25px 60px rgba(16,185,129,0.35)",
          borderColor: "rgba(16,185,129,0.6)",
        }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl font-semibold tracking-tight mb-2"
          variants={itemVariants}
          custom={0}
        >
          Let&apos;s build something
        </motion.h2>

        <motion.p
          className="text-sm text-slate-400 mb-5"
          variants={itemVariants}
          custom={0.5}
        >
          I&apos;m open to internships, part-time roles, freelance work, and
          collaboration on interesting projects.
        </motion.p>

        {/* Contact Info */}
        <div className="space-y-3 text-sm text-slate-200 mb-5">
          {contacts.map((item, i) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              custom={1 + i * 0.5}
            >
              <div className="text-slate-400 text-xs mb-1">{item.label}</div>
              <motion.a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="hover:text-emerald-300 transition-colors break-all inline-flex items-center gap-1"
                whileHover={{ x: 1 }}
              >
                {item.value}
                <span className="text-[11px] opacity-70">↗</span>
              </motion.a>
            </motion.div>
          ))}

          {/* Location */}
          <motion.div variants={itemVariants} custom={2.2}>
            <div className="text-slate-400 text-xs mb-1">Location</div>
            <p className="text-slate-200">
              Sri Lanka ·{" "}
              <span className="text-emerald-300">Open to remote work</span>
            </p>
          </motion.div>
        </div>

        {/* FORM */}
        <form onSubmit={sendEmail} className="space-y-4 text-sm">
          {/* Name + Email */}
          <div className="grid sm:grid-cols-2 gap-3">
            <motion.div variants={itemVariants} custom={2.6}>
              <label className="block text-xs text-slate-400 mb-1">
                Name
              </label>
              <motion.input
                name="from_name"
                type="text"
                required
                value={form.from_name}
                onChange={handleChange}
                className="
                  w-full rounded-lg bg-slate-900/80 border border-slate-700 px-3 py-2
                  text-sm focus:outline-none focus:border-emerald-400
                  transition-all duration-300 hover:border-slate-500
                "
                placeholder="Your name"
                whileFocus={{ scale: 1.005 }}
              />
            </motion.div>

            <motion.div variants={itemVariants} custom={2.8}>
              <label className="block text-xs text-slate-400 mb-1">
                Email
              </label>
              <motion.input
                name="from_email"
                type="email"
                required
                value={form.from_email}
                onChange={handleChange}
                className="
                  w-full rounded-lg bg-slate-900/80 border border-slate-700 px-3 py-2
                  text-sm focus:outline-none focus:border-emerald-400
                  transition-all duration-300 hover:border-slate-500
                "
                placeholder="you@example.com"
                whileFocus={{ scale: 1.005 }}
              />
            </motion.div>
          </div>

          {/* Message textarea */}
          <motion.div variants={itemVariants} custom={3.1}>
            <label className="block text-xs text-slate-400 mb-1">
              Message
            </label>
            <motion.textarea
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="
                w-full rounded-lg bg-slate-900/80 border border-slate-700 px-3 py-2
                text-sm focus:outline-none focus:border-emerald-400 resize-none
                transition-all duration-300 hover:border-slate-500
              "
              placeholder="Tell me about your project or opportunity..."
              whileFocus={{ scale: 1.005 }}
            />
          </motion.div>

          {/* Submit button */}
          <motion.button
            type="submit"
            className="
              mt-4 inline-flex items-center justify-center rounded-full bg-emerald-500
              px-5 py-2 text-sm font-medium text-slate-950
              hover:bg-emerald-400 transition-all duration-300
              hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/30
              w-full
            "
            variants={itemVariants}
            custom={3.6}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97, y: 0 }}
          >
            Send Message
          </motion.button>

          {status && (
            <p className="text-center text-sm mt-2 text-emerald-300">
              {status}
            </p>
          )}
        </form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;
