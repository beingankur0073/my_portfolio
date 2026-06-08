import { motion, useInView, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { STATS } from "../../../constants/index.jsx"; // Double check path matching your root structure
import { ChevronLeft, ChevronRight } from "lucide-react";

// Hook and UI imports
import { useWindowSize } from "../useWindowSize.js";
import CardContent from "./CardContent";

const mobileCarouselVariants = {
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

const CPStats = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const { width } = useWindowSize();
  const isMobile = width !== undefined && width < 768;

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [[page, direction], setPage] = useState([0, 0]);

  const slideIndex = ((page % STATS.length) + STATS.length) % STATS.length;

  const paginate = (dir) => setPage([page + dir, dir]);

  return (
    <div ref={sectionRef} className="border-b border-neutral-800 pb-10 font-mono">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        CP Stats
      </motion.h2>

      {isMobile ? (
        /* 📱 Mobile / Tablet Carousel */
        <div className="w-full flex items-center justify-center gap-3 py-4">
          {/* Left Arrow */}
          <button
            onClick={() => paginate(-1)}
            className="shrink-0 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full backdrop-blur-md shadow-md"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Responsive Card Wrapper */}
          <div
            className="
              relative flex justify-center rounded-2xl overflow-hidden
              w-[200px] h-[320px]
              xs:w-[230px] xs:h-[350px]
              sm:w-[260px] sm:h-[380px]
              md:w-[300px] md:h-[420px]
              lg:w-[350px] lg:h-[480px]
              xl:w-[400px] xl:h-[520px]
            "
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.a
                key={page}
                href={STATS[slideIndex].link}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute w-full h-full"
                custom={direction}
                variants={mobileCarouselVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 250, damping: 25 },
                  opacity: { duration: 0.2 },
                }}
              >
                <CardContent
                  plat={STATS[slideIndex]}
                  isHovered={true}
                  isInView={isInView}
                />
              </motion.a>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={() => paginate(1)}
            className="shrink-0 bg-black/60 hover:bg-black/80 text-white p-2 sm:p-3 rounded-full backdrop-blur-md shadow-md"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      ) : (
        /* 🖥 DESKTOP — Responsive Grid */
        <div className="flex flex-wrap items-center justify-center gap-10 mt-10 px-4">
          {STATS.map((plat, index) => (
            <motion.a
              key={index}
              href={plat.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-[200px] h-[300px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <CardContent
                plat={plat}
                isHovered={hoveredIndex === index}
                isInView={isInView}
              />
            </motion.a>
          ))}
        </div>
      )}
    </div>
  );
};

export default CPStats;