import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ABOUT_DATA } from "../constants/index.jsx";

const About = () => {
  const intro = ABOUT_DATA.find(item => item.type === 'intro');
  const skillSlides = ABOUT_DATA.filter(item => item.type === 'skill');
  const [[page, direction], setPage] = useState([0, 0]);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const slideIndex = ((page % skillSlides.length) + skillSlides.length) % skillSlides.length;

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <div className="border-b border-neutral-800 pb-12">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>

      <div className="flex flex-col items-center gap-12">
        {/* General Information Section */}
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -50 }}
          transition={{ duration: 1 }}
          // Adjusted width to keep it slightly wider than the carousel for balance
          className="w-full lg:w-2/3"
        >
          <p className="text-lg lg:text-[20px] leading-relaxed text-center text-neutral-300">
            {intro.content}
          </p>
        </motion.div>

        {/* Carousel Section */}
        <motion.div 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 1 }}
          // MODIFIED: Reduced width from lg:w-3/4 to lg:w-1/2
          className="w-full lg:w-1/2 h-[450px] relative flex items-center justify-center overflow-hidden bg-neutral-900 rounded-2xl shadow-lg"
        >
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={page}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full h-full flex flex-col"
            >
              <img 
                src={skillSlides[slideIndex].image} 
                alt={skillSlides[slideIndex].title}
                className="w-full h-1/2 object-cover" 
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2">{skillSlides[slideIndex].title}</h3>
                <p className="text-neutral-400 mb-4 flex-grow">{skillSlides[slideIndex].description}</p>
                <div className="flex flex-wrap gap-2">
                  {skillSlides[slideIndex].technologies.map((tech, i) => (
                    <span key={i} className="bg-neutral-800 text-neutral-300 text-xs font-medium px-2.5 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Carousel Navigation */}
          <button 
            onClick={() => paginate(-1)} 
            className="absolute top-1/2 -translate-y-1/2 left-2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition-colors z-10"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={() => paginate(1)} 
            className="absolute top-1/2 -translate-y-1/2 right-2 bg-black/50 p-2 rounded-full text-white hover:bg-black/80 transition-colors z-10"
          >
            <ChevronRight />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default About;