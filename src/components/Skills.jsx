"use client";
import { useEffect, useState } from "react";

export default function Skills() {
  const [skillGroups, setSkillGroups] = useState({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    fetch("/skills.json")
      .then((res) => res.json())
      .then((data) => setSkillGroups(data))
      .catch((err) => console.error("Failed to load skills:", err));
  }, []);

  return (
    <section
      id="skills"
      className="py-20 sm:py-24 md:py-28 relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-white">
            My <span className="text-primary">Skills</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-text-muted">
            Technologies and tools I work with on a daily basis.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {Object.entries(skillGroups).map(([category, skills], catIndex) => (
            <div
              key={category}
              className={`group transition-all duration-700 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${catIndex * 150}ms` }}
            >
              {/* Category Card */}
              <div className="rounded-lg border border-border-dark bg-card-dark/50 p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary hover:shadow-xl hover:shadow-primary/10 hover:scale-105">
                {/* Category Title */}
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-primary transition-colors duration-300 flex items-center justify-center gap-2">
                  <span className="inline-block w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                  {category}
                  <span className="inline-block w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                </h3>

                {/* Skills Tags */}
                <div className="flex flex-wrap justify-center gap-2">
                  {skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="rounded-full border border-border-dark bg-background-dark px-4 py-2 text-sm text-text-light hover:bg-primary hover:text-white hover:border-primary hover:scale-110 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 cursor-default"
                      style={{
                        transitionDelay: mounted
                          ? `${catIndex * 150 + skillIndex * 50}ms`
                          : "0ms",
                        opacity: mounted ? 1 : 0,
                        transform: mounted ? "scale(1)" : "scale(0.8)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Loading State */}
        {Object.keys(skillGroups).length === 0 && (
          <div className="mt-12 flex justify-center items-center gap-2 text-text-muted">
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:0ms]"></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:150ms]"></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-bounce [animation-delay:300ms]"></div>
          </div>
        )}
      </div>
    </section>
  );
}
