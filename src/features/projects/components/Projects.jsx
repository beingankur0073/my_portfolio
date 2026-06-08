import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS } from "../../../constants/index.jsx"; // Check path relative to features/projects/components/
import ProjectCardContent from "./ProjectCardContent.jsx";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % PROJECTS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + PROJECTS.length) % PROJECTS.length);
  };

  return (
    <div className="border-b border-neutral-900 pb-4 font-mono">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h1>

      <div className="relative w-full max-w-5xl mx-auto px-4 sm:px-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="rounded-xl border border-neutral-800/70 shadow-2xl backdrop-blur-md p-6"
            style={{ backgroundColor: "rgba(2, 6, 23, 0.5)" }} // Semitransparent Dark Blue-Black
          >
            <ProjectCardContent project={PROJECTS[currentIndex]} />
          </motion.div>
        </AnimatePresence>

        {/* Slider Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-6 p-2.5 bg-neutral-900/80 text-white rounded-full hover:bg-neutral-800 border border-neutral-800 backdrop-blur-sm transition-all shadow-md z-10"
          aria-label="Previous Project"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-6 p-2.5 bg-neutral-900/80 text-white rounded-full hover:bg-neutral-800 border border-neutral-800 backdrop-blur-sm transition-all shadow-md z-10"
          aria-label="Next Project"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Projects;