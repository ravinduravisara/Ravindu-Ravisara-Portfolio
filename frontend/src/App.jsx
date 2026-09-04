import React, { Suspense, lazy, useEffect, useRef, useState } from "react";
import { MotionConfig } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
const Skills = lazy(() => import("./components/Skills.jsx"));
const Projects = lazy(() => import("./components/Projects.jsx"));
const Experience = lazy(() => import("./components/Experience.jsx"));
const Contact = lazy(() => import("./components/Contact.jsx"));
const Footer = lazy(() => import("./components/Footer.jsx"));

export default function App() {
  useEffect(() => {
    // Avoid preloading on users who opted into reduced data or on very slow connections
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const saveData = connection && connection.saveData;
    const effectiveType = connection && connection.effectiveType;
    const isBadConnection = effectiveType && /2g/.test(effectiveType);
    if (saveData || isBadConnection) return;

    const preload = () => {
      import("./components/Skills.jsx");
      import("./components/Projects.jsx");
      import("./components/Experience.jsx");
      import("./components/Contact.jsx");
      import("./components/Footer.jsx");
    };

    if (typeof window.requestIdleCallback === "function") {
      requestIdleCallback(preload, { timeout: 2000 });
    } else {
      // Fallback: preload shortly after mount
      const t = setTimeout(preload, 2000);
      return () => clearTimeout(t);
    }
  }, []);

  const sentinelRef = useRef(null);
  const [preloaded, setPreloaded] = useState(false);

  useEffect(() => {
    if (!sentinelRef.current) return;

    // Preload when user scrolls near the main content (user intent)
    const preloadImports = () => {
      if (preloaded) return;
      setPreloaded(true);
      import("./components/Skills.jsx");
      import("./components/Projects.jsx");
      import("./components/Experience.jsx");
      import("./components/Contact.jsx");
      import("./components/Footer.jsx");
    };

    let obs;
    try {
      obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              preloadImports();
              if (obs) obs.disconnect();
            }
          });
        },
        { rootMargin: "1200px" }
      );

      obs.observe(sentinelRef.current);
    } catch (e) {
      // If IO not supported, just preload after short timeout
      const t = setTimeout(preloadImports, 700);
      return () => clearTimeout(t);
    }

    return () => {
      if (obs) obs.disconnect();
    };
  }, [preloaded]);

  const SectionSkeleton = () => (
    <div className="space-y-12 py-12">
      <div className="animate-pulse space-y-4">
        <div className="h-6 w-40 bg-slate-200/20 rounded" />
        <div className="h-4 w-64 bg-slate-200/12 rounded" />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-40 bg-slate-100/6 rounded-lg" />
        ))}
      </div>
    </div>
  );

  // Optional runtime overflow debugger: enable by visiting URL with ?debug=overflow
  useEffect(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      if (!params.has('debug') || params.get('debug') !== 'overflow') return;

      const overs = [];
      const iw = window.innerWidth;
      document.querySelectorAll('*').forEach((el) => {
        try {
          const rect = el.getBoundingClientRect();
          const sw = el.scrollWidth || 0;
          if (sw > iw + 1) {
            overs.push({ el, sw, tag: el.tagName, rect });
            el.style.outline = '2px solid rgba(255,0,0,0.8)';
          }
        } catch (e) {}
      });

      if (overs.length) {
        // eslint-disable-next-line no-console
        console.warn('Overflowing elements detected:', overs.map(o => ({ tag: o.tag, scrollWidth: o.sw, rect: o.rect })));
      } else {
        // eslint-disable-next-line no-console
        console.info('No overflowing elements found');
      }
    } catch (e) {}
  }, []);

  return (
    <MotionConfig reducedMotion="always">
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

        {/* sentinel observed to trigger preloading when user scrolls near content */}
        <div ref={sentinelRef} aria-hidden="true" className="w-full h-px" />

        <main className="max-w-6xl mx-auto px-4 sm:px-6">
          <Suspense fallback={<SectionSkeleton />}>
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
      </div>
    </MotionConfig>
  );
}