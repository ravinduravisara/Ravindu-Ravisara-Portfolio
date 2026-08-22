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
    <div className="relative min-h-screen text-slate-900">

      <Navbar />

      {/* Hero has its own video background - no wrapper needed */}
      <Hero />

      {/* Rest of the page with light theme background */}
      <div className="relative">
        {/* Global light background for sections below hero */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-slate-50">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-slate-100" />
          <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-emerald-400/20 blur-[140px]" />
          <div className="absolute bottom-0 right-0 h-[420px] w-[420px] rounded-full bg-sky-400/15 blur-[160px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8),transparent_70%)]" />
        </div>

        <main className="max-w-6xl mx-auto px-4 sm:px-6">
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
}