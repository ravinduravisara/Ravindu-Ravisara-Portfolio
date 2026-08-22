import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const SERVICE_ID = "service_nyc7ec9";
const TEMPLATE_ID = "template_2ggbyfh";
const PUBLIC_KEY  = "XVljrUlYD8uHY3RQf";

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
          opacity: [0.3, 0.7, 0.3],
          scale: [0.9, 1.05, 0.9],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
      >
        <div className="h-[300px] w-[300px] bg-emerald-400/20 blur-[160px]" />
      </motion.div>

      {/* Card */}
      <motion.div
        className="
          max-w-xl mx-auto bg-white/80 border border-slate-200/70 rounded-2xl
          p-6 sm:p-8 shadow-2xl shadow-slate-200/50 backdrop-blur-xl
          transition-all duration-500
        "
        variants={cardVariants}
        whileHover={{
          y: -8,
          boxShadow: "0 25px 60px rgba(16,185,129,0.12)",
          borderColor: "rgba(16,185,129,0.4)",
        }}
      >
        <motion.h2
          className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-slate-800"
          variants={itemVariants}
          custom={0}
        >
          Let&apos;s build something
        </motion.h2>

        <motion.p
          className="text-sm text-slate-500 mb-6 leading-relaxed"
          variants={itemVariants}
          custom={0.5}
        >
          I&apos;m open to internships, part-time roles, freelance work, and
          collaboration on interesting projects.
        </motion.p>

        {/* Contact Info */}
        <div className="grid sm:grid-cols-2 gap-4 text-sm mb-6">
          {contacts.map((item, i) => (
            <motion.div
              key={item.label}
              variants={itemVariants}
              custom={1 + i * 0.5}
              className="rounded-xl bg-slate-50/80 border border-slate-100 p-3 hover:border-emerald-200 transition-colors duration-300"
            >
              <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">
                {item.label}
              </div>
              <motion.a
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="text-slate-700 hover:text-emerald-600 transition-colors break-all inline-flex items-center gap-1 font-medium"
                whileHover={{ x: 2 }}
              >
                {item.value}
                <span className="text-[11px] opacity-60">↗</span>
              </motion.a>
            </motion.div>
          ))}

          {/* Location */}
          <motion.div
            variants={itemVariants}
            custom={2.2}
            className="rounded-xl bg-slate-50/80 border border-slate-100 p-3 hover:border-emerald-200 transition-colors duration-300 sm:col-span-2"
          >
            <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-1">
              Location
            </div>
            <p className="text-slate-700 font-medium">
              Sri Lanka ·{" "}
              <span className="text-emerald-600 font-semibold">Open to remote work</span>
            </p>
          </motion.div>
        </div>

        {/* FORM */}
        <form onSubmit={sendEmail} className="space-y-4 text-sm">
          {/* Name + Email */}
          <div className="grid sm:grid-cols-2 gap-4">
            <motion.div variants={itemVariants} custom={2.6}>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                Name
              </label>
              <motion.input
                name="from_name"
                type="text"
                required
                value={form.from_name}
                onChange={handleChange}
                className="
                  w-full rounded-xl bg-white border border-slate-200 px-4 py-2.5
                  text-sm text-slate-800 placeholder:text-slate-400
                  focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100
                  transition-all duration-300 hover:border-slate-300 shadow-sm
                "
                placeholder="Your name"
                whileFocus={{ scale: 1.005 }}
              />
            </motion.div>

            <motion.div variants={itemVariants} custom={2.8}>
              <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
                Email
              </label>
              <motion.input
                name="from_email"
                type="email"
                required
                value={form.from_email}
                onChange={handleChange}
                className="
                  w-full rounded-xl bg-white border border-slate-200 px-4 py-2.5
                  text-sm text-slate-800 placeholder:text-slate-400
                  focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100
                  transition-all duration-300 hover:border-slate-300 shadow-sm
                "
                placeholder="you@example.com"
                whileFocus={{ scale: 1.005 }}
              />
            </motion.div>
          </div>

          {/* Message textarea */}
          <motion.div variants={itemVariants} custom={3.1}>
            <label className="block text-xs font-semibold text-slate-500 mb-1.5 uppercase tracking-wider">
              Message
            </label>
            <motion.textarea
              name="message"
              rows={4}
              required
              value={form.message}
              onChange={handleChange}
              className="
                w-full rounded-xl bg-white border border-slate-200 px-4 py-2.5
                text-sm text-slate-800 placeholder:text-slate-400 resize-none
                focus:outline-none focus:border-emerald-400 focus:ring-2 focus:ring-emerald-100
                transition-all duration-300 hover:border-slate-300 shadow-sm
              "
              placeholder="Tell me about your project or opportunity..."
              whileFocus={{ scale: 1.005 }}
            />
          </motion.div>

          {/* Submit button */}
          <motion.button
            type="submit"
            className="
              mt-4 inline-flex items-center justify-center rounded-full bg-emerald-600
              px-6 py-2.5 text-sm font-semibold text-white
              hover:bg-emerald-500 transition-all duration-300
              hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-500/20
              w-full
            "
            variants={itemVariants}
            custom={3.6}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97, y: 0 }}
          >
            Send Message
          </motion.button>

          {status && (
            <motion.p
              className={`text-center text-sm mt-3 font-medium ${
                status.includes("success")
                  ? "text-emerald-600"
                  : status.includes("Sending")
                  ? "text-slate-500"
                  : "text-red-500"
              }`}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {status}
            </motion.p>
          )}
        </form>
      </motion.div>
    </motion.section>
  );
};

export default Contact;