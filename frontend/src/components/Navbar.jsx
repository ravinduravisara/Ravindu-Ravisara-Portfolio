import React, { useState } from "react";

const navLinks = [
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("Skills");
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (label, href) => {
    setActive(label);
    setIsOpen(false);

    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogoClick = () => {
    setActive(""); // no nav link active when at very top
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header
      className="
        sticky top-0 z-50
        bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950
        border-b border-slate-800/70
        shadow-[0_0_18px_rgba(0,0,0,0.55)]
      "
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        {/* LEFT: Brand / Logo text with live motion */}
        <button
          type="button"
          onClick={handleLogoClick}
          className="group"
        >
          <span
            className="
              text-white text-lg sm:text-xl font-semibold tracking-wide
              transition-all duration-300
              group-hover:text-emerald-300
              group-hover:scale-105
              inline-block
              animate-pulse
            "
          >
            Ravindu Ravisara
          </span>
        </button>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-2 text-[11px] sm:text-xs lg:text-sm">
          {navLinks.map((link) => {
            const isActive = active === link.label;
            return (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link.label, link.href)}
                className={`
                  px-3 py-1.5 rounded-sm uppercase tracking-[0.18em]
                  transition-colors duration-200
                  ${
                    isActive
                      ? "bg-slate-300 text-slate-900"
                      : "bg-transparent text-slate-100/85 hover:text-white"
                  }
                `}
              >
                {link.label}
              </button>
            );
          })}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-sm border border-slate-600/70 text-slate-200"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          <span className="relative flex flex-col w-4 h-4 justify-center items-center">
            <span
              className={`block h-[2px] w-full bg-slate-200 transition-transform duration-200 ${
                isOpen ? "translate-y-[3px] rotate-45" : "-translate-y-[3px]"
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-slate-200 transition-opacity duration-200 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-slate-200 transition-transform duration-200 ${
                isOpen ? "-translate-y-[3px] -rotate-45" : "translate-y-[3px]"
              }`}
            />
          </span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-800/70 bg-slate-950/95">
          <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.label;
              return (
                <button
                  key={link.label}
                  type="button"
                  onClick={() => handleNavClick(link.label, link.href)}
                  className={`
                    w-full text-left px-3 py-2 rounded-sm uppercase text-[11px]
                    tracking-[0.18em]
                    ${
                      isActive
                        ? "bg-slate-300 text-slate-900"
                        : "text-slate-100/85 hover:bg:white/5 hover:text-white"
                    }
                  `}
                >
                  {link.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
