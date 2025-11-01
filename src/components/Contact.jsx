"use client";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Initialize EmailJS
    emailjs.init("7BZ7gdwhJvG2Cr8Z_");
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);

    const formData = {
      from_name: e.target.name.value,
      from_email: e.target.email.value,
      message: e.target.message.value,
    };

    try {
      await emailjs.send("service_abd123", "template_mniymma", formData);

      setSubmitted(true);
      setLoading(false);
      e.target.reset();
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      console.error("Failed to send email:", err);
      setError(true);
      setLoading(false);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <section
      id="contact"
      className="relative border-t border-border-dark bg-card-dark py-20 sm:py-24 md:py-28 overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-6 text-center">
        {/* Section Header */}
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <h2 className="text-4xl font-bold text-white">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-text-muted">
            Want to work together or just say hi? Send me a message below — I'll
            get back to you as soon as possible.
          </p>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className={`mx-auto mt-10 max-w-lg space-y-5 text-left transition-all duration-1000 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Name Field */}
          <div className="group">
            <label className="block mb-2 text-sm font-medium text-text-light group-focus-within:text-primary transition-colors duration-300">
              Name
            </label>
            <div className="relative">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
                className="w-full rounded-lg border border-border-dark bg-background-dark px-4 py-3 text-white placeholder:text-[#7a7a7a] focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 hover:border-primary/50"
                required
              />
              <div
                className={`absolute inset-0 rounded-lg bg-primary/5 pointer-events-none transition-opacity duration-300 ${
                  focusedField === "name" ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </div>
          </div>

          {/* Email Field */}
          <div className="group">
            <label className="block mb-2 text-sm font-medium text-text-light group-focus-within:text-primary transition-colors duration-300">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
                className="w-full rounded-lg border border-border-dark bg-background-dark px-4 py-3 text-white placeholder:text-[#7a7a7a] focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 hover:border-primary/50"
                required
              />
              <div
                className={`absolute inset-0 rounded-lg bg-primary/5 pointer-events-none transition-opacity duration-300 ${
                  focusedField === "email" ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </div>
          </div>

          {/* Message Field */}
          <div className="group">
            <label className="block mb-2 text-sm font-medium text-text-light group-focus-within:text-primary transition-colors duration-300">
              Message
            </label>
            <div className="relative">
              <textarea
                rows={5}
                name="message"
                placeholder="Your message here..."
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
                className="w-full rounded-lg border border-border-dark bg-background-dark px-4 py-3 text-white placeholder:text-[#7a7a7a] focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 resize-none hover:border-primary/50"
                required
              ></textarea>
              <div
                className={`absolute inset-0 rounded-lg bg-primary/5 pointer-events-none transition-opacity duration-300 ${
                  focusedField === "message" ? "opacity-100" : "opacity-0"
                }`}
              ></div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading || submitted}
            className="group relative w-full rounded-lg bg-primary px-4 py-3 font-semibold text-white hover:bg-primary/90 active:scale-[0.98] transition-all duration-300 overflow-hidden hover:shadow-lg hover:shadow-primary/30 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {/* Loading State */}
            {loading && (
              <span className="inline-flex items-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </span>
            )}

            {/* Default State */}
            {!loading && !submitted && !error && (
              <span className="inline-flex items-center gap-2">
                Send Message
                <svg
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            )}

            {/* Success State */}
            {submitted && (
              <span className="inline-flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M5 13l4 4L19 7"></path>
                </svg>
                Message Sent!
              </span>
            )}

            {/* Error State */}
            {error && (
              <span className="inline-flex items-center gap-2 text-red-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                Failed! Try Again
              </span>
            )}

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
          </button>
        </form>
      </div>
    </section>
  );
}
