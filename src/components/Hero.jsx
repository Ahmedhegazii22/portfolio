"use client";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative py-24 text-center sm:py-32 md:py-40 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
      </div>

      <div className="flex flex-col items-center gap-6">
        {/* Animated Title */}
        <h1
          className={`text-5xl font-bold sm:text-6xl md:text-7xl transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <span className="inline-block hover:text-primary transition-colors duration-300 hover:scale-105">
            Full-Stack
          </span>{" "}
          <span className="inline-block bg-gradient-to-r from-primary via-blue-500 to-primary bg-[length:200%_auto] animate-[gradient_3s_ease_infinite] bg-clip-text text-transparent">
            Developer
          </span>
        </h1>

        {/* Animated Description */}
        <p
          className={`max-w-3xl text-lg text-text-muted sm:text-xl transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          I'm{" "}
          <span className="text-text-light font-semibold">
            Abdelrhman Rabie
          </span>
          , a passionate Full-Stack Developer specializing in building modern,
          high-performance web applications using the{" "}
          <span className="text-primary font-semibold">MERN stack</span> and{" "}
          <span className="text-primary font-semibold">Next.js</span>. I focus
          on creating scalable solutions that deliver smooth user experiences
          and clean, maintainable code.
        </p>

        {/* Animated Buttons */}
        <div
          className={`mt-4 flex flex-col gap-4 sm:flex-row transition-all duration-1000 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Primary button */}
          <a
            href="#contact"
            className="group relative flex h-12 min-w-40 items-center justify-center rounded-lg bg-primary px-6 text-base font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/50 hover:bg-primary/90"
          >
            <span className="relative z-10">Get In Touch</span>
          </a>

          {/* Secondary button */}
          <a
            href="#projects"
            className="group relative flex h-12 min-w-40 items-center justify-center rounded-lg border-2 border-border-dark bg-card-dark px-6 text-base font-bold text-text-light transition-all duration-300 hover:scale-105 hover:border-primary hover:shadow-lg hover:shadow-primary/20 hover:bg-primary/10"
          >
            <span className="group-hover:text-primary transition-colors duration-300">
              View My Work
            </span>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`mt-12 transition-all duration-1000 delay-500 ${
            mounted ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-xs text-text-muted uppercase tracking-wider">
              Scroll Down
            </span>
            <svg
              className="w-6 h-6 text-primary"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
