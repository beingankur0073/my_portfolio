import { motion, useInView, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { STATS } from "../../../constants/index.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";
import CardContent from "./CardContent";

const mobileCarouselVariants = {
  enter: (direction) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.98,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 0.98,
  }),
};

const CPStats = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [[page, direction], setPage] = useState([0, 0]);

  const slideIndex = ((page % STATS.length) + STATS.length) % STATS.length;
  const paginate = (dir) => setPage([page + dir, dir]);

  return (
    <section id="cpstats" ref={sectionRef} className="py-10 lg:py-15 border-b border-neutral-900/60 font-sans">
      
      {/* 🏷️ Section Header Tracker */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center font-mono mb-6"
      >
        <div className="text-[11px] uppercase tracking-widest text-cyan-400 font-semibold mb-1">Metrics</div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white flex items-center justify-center gap-2">
          Competitive <span className="bg-gradient-to-r from-neutral-400 via-neutral-200 to-white bg-clip-text text-transparent">Programming</span>
        </h2>
      </motion.div>

      {/* ---------------------------------------------------------------------- */}
      {/* 📱 MOBILE & TABLET LAYOUT: Streamlined Slideway Arena                   */}
      {/* ---------------------------------------------------------------------- */}
      {/* ⚡ CARD COMPRESSION: Reduced wrapper from max-w-sm down to max-w-[280px] */}
      <div className="flex md:hidden items-center justify-center gap-3 py-2 max-w-[280px] mx-auto px-1">
        <button
          onClick={() => paginate(-1)}
          aria-label="Previous Metric Card"
          className="shrink-0 flex items-center justify-center bg-neutral-900/90 hover:bg-neutral-800 text-neutral-400 p-2 rounded-full border border-neutral-800 shadow-md transition-transform active:scale-95 cursor-pointer"
        >
          <ChevronLeft size={16} />
        </button>

        {/* ⚡ CARD COMPRESSION: Aspect ratio shifted from 3/4 to a tighter 3/4.1 to reduce scale overheads */}
        <div className="relative w-full aspect-[3/4.1] min-h-[300px] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950/10 shadow-2xl">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.a
              key={page}
              href={STATS[slideIndex]?.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 w-full h-full block"
              custom={direction}
              variants={mobileCarouselVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 280, damping: 28 },
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

        <button
          onClick={() => paginate(1)}
          aria-label="Next Metric Card"
          className="shrink-0 flex items-center justify-center bg-neutral-900/90 hover:bg-neutral-800 text-neutral-400 p-2 rounded-full border border-neutral-800 shadow-md transition-transform active:scale-95 cursor-pointer"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      {/* ---------------------------------------------------------------------- */}
      {/* 🖥️ DESKTOP LAYOUT: Centered Grid Matrix                                  */}
      {/* ---------------------------------------------------------------------- */}
      <div className="hidden md:flex flex-wrap items-center justify-center gap-5 max-w-4xl mx-auto px-4 mt-2">
        {STATS.map((plat, index) => (
          <motion.a
            key={index}
            href={plat.link}
            target="_blank"
            rel="noopener noreferrer"
            /* ⚡ CARD COMPRESSION:
               - Dropped max-w from 260px down to an elegant 215px
               - Set aspect tracking to 3/4.3 to keep padding dimensions sharp
            */
            className="relative aspect-[3/4.3] w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)] max-w-[215px] block rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900/10 shadow-xl hover:border-neutral-700/60 transition-all duration-300 transform hover:-translate-y-1"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.04 }}
          >
            <CardContent
              plat={plat}
              isHovered={hoveredIndex === index}
              isInView={isInView}
            />
          </motion.a>
        ))}
      </div>

    </section>
  );
};

export default CPStats;