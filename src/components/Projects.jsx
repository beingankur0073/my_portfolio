import { PROJECTS } from "../constants/index.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

      <div className="relative w-full max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            // Changed: Using rgba for a dark blue-black with transparency
            className="rounded-xl border border-neutral-800 shadow-xl backdrop-blur-md p-6"
            style={{ backgroundColor: 'rgba(2, 6, 23, 0.5)' }} // Example: Very dark blue with 50% opacity
          >
            <div className="flex flex-wrap justify-center">
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="w-full lg:w-1/4 my-auto"
              >
                <img
                  src={PROJECTS[currentIndex].image}
                  width={300}
                  height={500}
                  className="mb-6 rounded-lg"
                  alt={PROJECTS[currentIndex].title}
                />
              </motion.div>

              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                className="w-full max-w-xl lg:w-3/4 px-4"
              >
                <h6 className="mb-2 text-xl font-bold text-white">
                  {PROJECTS[currentIndex].title}
                </h6>
                <p
                  className="mb-4 text-neutral-300 text-sm"
                  dangerouslySetInnerHTML={{
                    __html: PROJECTS[currentIndex].description,
                  }}
                />
                <div className="mb-4">
                  {PROJECTS[currentIndex].technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="mr-1 mb-1 inline-block rounded bg-neutral-800 px-1 py-1 text-xs font-medium text-sky-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  {PROJECTS[currentIndex].github?.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-400 underline hover:text-blue-500"
                    >
                      {link.label}
                    </a>
                  ))}
                  {PROJECTS[currentIndex].live && (
                    <a
                      href={PROJECTS[currentIndex].live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-green-400 underline hover:text-green-500"
                    >
                      Live Link
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 p-2 bg-neutral-800 text-white rounded-full hover:bg-neutral-700"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 p-2 bg-neutral-800 text-white rounded-full hover:bg-neutral-700"
        >
          ▶
        </button>
      </div>
    </div>
  );
};

export default Projects;