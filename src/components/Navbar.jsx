"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex items-center justify-between border-b border-border-dark px-4 py-4 backdrop-blur-sm md:px-10 transition-all duration-300 ${
        scrolled
          ? "bg-background-dark/95 shadow-lg shadow-primary/5"
          : "bg-background-dark/80"
      }`}
    >
      {/* Logo + Name */}
      <div className="flex items-center gap-4">
        <h2 className="text-xl font-bold text-text-light hover:text-primary transition-colors duration-300 cursor-pointer">
          Abdelrhman Rabie
        </h2>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex items-center gap-8">
        {["Home", "Projects", "Skills", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative text-sm font-medium text-text-muted hover:text-primary transition-colors duration-200 group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </a>
        ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-2xl text-text-light focus:outline-none transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        <span
          className={`block transition-transform duration-300 ${
            open ? "rotate-90" : ""
          }`}
        >
          {open ? "✕" : "☰"}
        </span>
      </button>

      {/* Mobile Nav Drawer */}
      <nav
        className={`absolute top-full left-0 w-full bg-background-dark border-t border-border-dark flex flex-col items-center gap-6 py-6 md:hidden transition-all duration-300 origin-top ${
          open
            ? "opacity-100 scale-y-100"
            : "opacity-0 scale-y-0 pointer-events-none"
        }`}
      >
        {["Home", "Projects", "Skills", "Contact"].map((item, index) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className="text-lg font-medium text-text-light hover:text-primary transition-all duration-200 hover:scale-110"
            style={{
              transitionDelay: open ? `${index * 50}ms` : "0ms",
            }}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
}
