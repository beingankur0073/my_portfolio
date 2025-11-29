import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ABOUT_DATA } from "../constants/index.jsx";

const DARK_THEMES = [
  { bg: "from-[#0f0f0f] to-[#1b0a0a]", accent: "#ff6666" },   // black-red
  { bg: "from-[#0f0f0f] to-[#0f1024]", accent: "#7c8cff" },   // black-blue
  { bg: "from-[#0f0f0f] to-[#170f24]", accent: "#d29cff" },   // black-purple
  { bg: "from-[#0f0f0f] to-[#002a32]", accent: "#7de4ff" },   // black-cyan
  { bg: "from-[#0f0f0f] to-[#0f2412]", accent: "#8fff9a" },   // black-green
  { bg: "from-[#0f0f0f] to-[#24170f]", accent: "#ffb07c" },   // black-orange
];

const About = () => {
  const intro = ABOUT_DATA.find((item) => item.type === "intro");
  const skillDomains = ABOUT_DATA.filter((item) => item.type === "skill");

  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (dir) => setPage([page + dir, dir]);

  const index =
    ((page % skillDomains.length) + skillDomains.length) %
    skillDomains.length;

  const theme = DARK_THEMES[index % DARK_THEMES.length];

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 150 : -150,
      opacity: 0,
      scale: 0.96,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 150 : -150,
      opacity: 0,
      scale: 0.96,
    }),
  };

  return (
    <div className="border-b border-neutral-800 pb-16 font-mono">
      
      {/* Heading */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -80 }}
        transition={{ duration: 0.6 }}
        className="my-20 text-center text-3xl sm:text-4xl lg:text-5xl font-bold"
      >
        About <span className="text-neutral-400">Me</span>
      </motion.h2>

      <div className="flex flex-col items-center gap-12 px-4">

        {/* Intro */}
        <motion.p
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-base sm:text-lg lg:text-xl text-neutral-300 text-center max-w-3xl"
        >
          {intro.content}
        </motion.p>

        {/* Carousel */}
        {/* Carousel */}
<div className="flex items-center justify-center w-full">

  {/* Card wrapper becomes the relative container */}
  <div className="relative w-full max-w-xs sm:max-w-md lg:max-w-lg
                  h-[360px] sm:h-[420px] lg:h-[480px]">

    {/* Left Button */}
    <button
      onClick={() => paginate(-1)}
      className="
        absolute left-[-22px] sm:left-[-36px] top-1/2 -translate-y-1/2
        flex items-center justify-center
        bg-neutral-900/80 hover:bg-neutral-800
        text-white 
        p-2 sm:p-3
        rounded-full shadow-lg backdrop-blur-xl
        z-20
      "
    >
      <ChevronLeft size={20} className="sm:size-26" />
    </button>

    {/* Animated slides */}
    <div className="absolute inset-0 overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.45 }}
          className="absolute w-full h-full"
        >
          {/* Card */}
          <motion.div
            whileHover={{ scale: 1.015 }}
            className={`
              w-full h-full p-6 rounded-3xl flex flex-col
              bg-gradient-to-br ${theme.bg}
              border border-neutral-700/60
              shadow-[0_8px_18px_rgba(0,0,0,0.45)]
              backdrop-blur-xl
            `}
          >
            {/* Image */}
            <img
              src={skillDomains[index].image}
              alt={skillDomains[index].title}
              className="w-full h-32 sm:h-40 lg:h-48 object-cover rounded-xl mb-4"
            />

            {/* Title */}
            <h3
              className="font-bold text-lg sm:text-xl lg:text-2xl mb-2"
              style={{ color: theme.accent }}
            >
              {skillDomains[index].title}
            </h3>

            {/* Description */}
            <p className="text-neutral-300 text-xs sm:text-sm lg:text-base mb-4 leading-relaxed">
              {skillDomains[index].description}
            </p>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {skillDomains[index].technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-[10px] sm:text-xs rounded-full border"
                  style={{
                    backgroundColor: theme.accent + "22",
                    borderColor: theme.accent + "55",
                    color: theme.accent,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>

    {/* Right Button */}
    <button
      onClick={() => paginate(1)}
      className="
        absolute right-[-22px] sm:right-[-36px] top-1/2 -translate-y-1/2
        flex items-center justify-center
        bg-neutral-900/80 hover:bg-neutral-800
        text-white 
        p-2 sm:p-3
        rounded-full shadow-lg backdrop-blur-xl
        z-20
      "
    >
      <ChevronRight size={20} className="sm:size-26" />
    </button>

  </div>
</div>
</div>

    </div>
  );
};

export default About;
