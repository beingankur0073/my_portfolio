import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../../../constants/index.jsx";
import ProjectCardContent from "./ProjectCardContent.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  return (
    /* ⚡ SPACE COMPRESSION: Reduced vertical section padding tracks to match the compact dashboard */
    <section id="projects" className="py-4 lg:py-6 border-b border-neutral-900/60 font-sans">
      
      {/* 🏷️ Section Header Tracker */}
      {/* ⚡ SPACE COMPRESSION: Trimmed bottom header margin from mb-12 down to mb-6 */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center font-mono mb-6"
      >
        <div className="text-[11px] uppercase tracking-widest text-cyan-400 font-semibold mb-1">Portfolio</div>
        {/* 🛠️ HEADER FIX: Sized down the large text phrase to a striking, crisp heading anchor */}
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
          Featured <span className="bg-gradient-to-r from-neutral-400 via-neutral-200 to-white bg-clip-text text-transparent">Projects</span>
        </h2>
      </motion.div>

      {/* 🛠️ Carousel Arena Container Layer */}
      {/* ⚡ SPACE COMPRESSION: Reduced top element margin from mt-4 to mt-2 */}
      <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-12 mt-2 group">
        
        {/* 🎬 Sliding Animation Viewport Card */}
        <div className="overflow-hidden rounded-2xl border border-neutral-800/80 bg-slate-950/40 backdrop-blur-md shadow-2xl relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 35 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -35 }}
              transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
              className="p-5 sm:p-6"
            >
              <ProjectCardContent project={PROJECTS[currentIndex]} />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ⬅️ Navigation Controller: Left Button */}
        <button
          onClick={prevSlide}
          className="absolute left-1 sm:left-[-16px] top-1/2 -translate-y-1/2 flex items-center justify-center p-2.5 bg-neutral-900/90 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 border border-neutral-800 backdrop-blur-md transition-all shadow-xl active:scale-95 cursor-pointer z-20"
          aria-label="Previous Project"
        >
          <ChevronLeft size={18} />
        </button>

        {/* ➡️ Navigation Controller: Right Button */}
        <button
          onClick={nextSlide}
          className="absolute right-1 sm:right-[-16px] top-1/2 -translate-y-1/2 flex items-center justify-center p-2.5 bg-neutral-900/90 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 border border-neutral-800 backdrop-blur-md transition-all shadow-xl active:scale-95 cursor-pointer z-20"
          aria-label="Next Project"
        >
          <ChevronRight size={18} />
        </button>

        {/* 🎯 Interactive Navigation Tracking Indicator Dots Layer */}
        {PROJECTS.length > 1 && (
          /* ⚡ SPACE COMPRESSION: Reduced pagination indicator margin from mt-6 down to mt-4 */
          <div className="flex items-center justify-center gap-2 mt-4 font-mono">
            {PROJECTS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Jump directly to portfolio project asset ${idx + 1}`}
                className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                  currentIndex === idx 
                    ? "w-5 bg-cyan-400" 
                    : "w-1.5 bg-neutral-800 hover:bg-neutral-600"
                }`}
              />
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Projects;