"use client";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error("Failed to load projects:", err));
  }, []);

  return (
    <section
      id="projects"
      className="border-t border-border-dark bg-card-dark py-20 sm:py-24 md:py-28"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-white">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-text-muted">
            Here are a few examples of my recent work and personal projects.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <div
              key={i}
              className={`group relative rounded-lg border border-border-dark bg-background-dark p-6 text-left transition-all duration-500 hover:scale-105 hover:border-primary hover:shadow-xl hover:shadow-primary/20 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Gradient Overlay on Hover */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                  {p.name}
                </h3>
                <p className="mb-4 text-sm text-text-muted group-hover:text-text-light transition-colors duration-300">
                  {p.description}
                </p>

                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-[#60A5FA] transition-all duration-300 group/link"
                  >
                    <span>View Project</span>
                    <svg
                      className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </a>
                )}
              </div>

              {/* Corner Decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Loading State */}
        {projects.length === 0 && (
          <div className="mt-10 flex justify-center items-center gap-2 text-text-muted">
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:0ms]"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:150ms]"></div>
            <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:300ms]"></div>
          </div>
        )}
      </div>
    </section>
  );
}
