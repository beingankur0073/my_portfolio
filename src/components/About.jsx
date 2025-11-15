import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ABOUT_DATA } from "../constants/index.jsx";

const GRADIENTS = [
  "from-[#0ea5e9] to-[#312e81]",
  "from-[#4ade80] to-[#166534]",
  "from-[#a78bfa] to-[#4c1d95]",
  "from-[#fb923c] to-[#7c2d12]",
  "from-[#f472b6] to-[#831843]",
  "from-[#38bdf8] to-[#0f172a]",
];

const About = () => {
  const intro = ABOUT_DATA.find((item) => item.type === "intro");
  const skillDomains = ABOUT_DATA.filter((item) => item.type === "skill");

  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) =>
    setPage([page + newDirection, newDirection]);

  const slideIndex =
    ((page % skillDomains.length) + skillDomains.length) %
    skillDomains.length;

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className="border-b border-neutral-800 pb-16">
      
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center 
        text-3xl sm:text-4xl lg:text-5xl font-bold"
      >
        About <span className="text-neutral-400">Me</span>
      </motion.h2>

      <div className="flex flex-col items-center gap-12 px-4">

        {/* Intro Paragraph */}
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="
            text-base sm:text-lg lg:text-xl
            leading-relaxed text-center text-neutral-300 
            max-w-3xl
          "
        >
          {intro.content}
        </motion.p>

        {/* Carousel Container */}
        <div
          className="
            relative 
            w-full 
            max-w-sm sm:max-w-md lg:max-w-xl 
            h-[380px] sm:h-[420px] lg:h-[500px]
            overflow-hidden
          "
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.6 }}
              className="absolute w-full h-full px-2"
            >
              {/* CARD */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`
                  w-full h-full 
                  p-4 sm:p-5 lg:p-6 
                  rounded-3xl shadow-xl border 
                  border-neutral-800 text-white 
                  bg-gradient-to-br ${GRADIENTS[slideIndex]}
                `}
              >
                {/* Image */}
                <img
                  src={skillDomains[slideIndex].image}
                  alt={skillDomains[slideIndex].title}
                  className="
                  w-full 
                  h-32 sm:h-40 lg:h-48 
                  object-cover rounded-xl mb-4 shadow-md
                "
                />

                {/* Title */}
                <h3 className="font-extrabold 
                  text-lg sm:text-xl lg:text-2xl mb-2">
                  {skillDomains[slideIndex].title}
                </h3>

                {/* Description */}
                <p className="text-neutral-100/80 
                  text-xs sm:text-sm lg:text-base 
                  mb-4 leading-relaxed">
                  {skillDomains[slideIndex].description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {skillDomains[slideIndex].technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        bg-white/20 backdrop-blur-md 
                        px-2 sm:px-3 py-1 
                        text-[10px] sm:text-xs 
                        rounded-full text-white 
                        border border-white/30
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={() => paginate(-1)}
            className="absolute top-1/2 left-2 -translate-y-1/2 
              bg-black/40 hover:bg-black/60 
              text-white p-2 rounded-full backdrop-blur-md"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute top-1/2 right-2 -translate-y-1/2 
              bg-black/40 hover:bg-black/60 
              text-white p-2 rounded-full backdrop-blur-md"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
