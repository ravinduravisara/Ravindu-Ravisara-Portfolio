import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="relative min-h-screen text-slate-50">

      {/* ---- GLOBAL BACKGROUND GRADIENT ---- */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-slate-950">
        {/* Main smooth blend */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black" />

        {/* Soft teal/cyan glow (top-left) */}
        <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-emerald-500/20 blur-[140px]" />

        {/* Deep blue glow (bottom-right) */}
        <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-cyan-500/10 blur-[160px]" />

        {/* Faint radial light center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04),transparent_70%)]" />
      </div>
      {/* ---- END BACKGROUND ---- */}

      <Navbar />

      <main className="max-w-6xl mx-auto px-4 sm:px-6">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
