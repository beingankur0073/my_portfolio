import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ABOUT_DATA } from "../constants/index.jsx";

const DARK_THEMES = [
  { bg: "from-[#0f0f0f] to-[#1b0a0a]", accent: "#ff6666", rawAccent: "255, 102, 102" },   // Deep crimson
  { bg: "from-[#0f0f0f] to-[#0f1024]", accent: "#7c8cff", rawAccent: "124, 140, 255" },  // Cosmic blue
  { bg: "from-[#0f0f0f] to-[#170f24]", accent: "#d29cff", rawAccent: "210, 156, 255" },  // Nebula purple
  { bg: "from-[#0f0f0f] to-[#002a32]", accent: "#7de4ff", rawAccent: "125, 228, 255" },  // Cyber cyan
  { bg: "from-[#0f0f0f] to-[#0f2412]", accent: "#8fff9a", rawAccent: "143, 255, 154" },  // Matrix green
  { bg: "from-[#0f0f0f] to-[#24170f]", accent: "#ffb07c", rawAccent: "255, 176, 124" },  // Solar orange
];

const About = () => {
  const intro = ABOUT_DATA.find((item) => item.type === "intro");
  const skillDomains = ABOUT_DATA.filter((item) => item.type === "skill");

  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (dir) => setPage([page + dir, dir]);

  const index = ((page % skillDomains.length) + skillDomains.length) % skillDomains.length;
  const theme = DARK_THEMES[index % DARK_THEMES.length];

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 140 : -140,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir) => ({
      x: dir < 0 ? 140 : -140,
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    /* ⚡ SPACE COMPRESSION: Reduced vertical section padding down to py-4 lg:py-6 */
    <section id="about" className="py-4 lg:py-6 border-b border-neutral-900/60 font-sans">
      
      {/* Structural Header Wrapper */}
      {/* ⚡ SPACE COMPRESSION: Cut header bottom margin from mb-12 down to mb-6 */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center font-mono mb-6"
      >
        <div className="text-[11px] uppercase tracking-widest text-cyan-400 font-semibold mb-1">Kicker / Profile</div>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          About <span className="bg-gradient-to-r from-neutral-400 via-neutral-200 to-white bg-clip-text text-transparent">Me</span>
        </h2>
      </motion.div>

      {/* ⚡ SPACE COMPRESSION: Reduced gap between introduction and card container */}
      <div className="flex flex-col items-center gap-6 px-4">

        {/* Short Executive Intro Paragraph copy */}
        {intro && (
          <motion.p
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm text-neutral-400 text-center max-w-2xl leading-relaxed font-normal"
          >
            {intro.content}
          </motion.p>
        )}

        {/* 🎠 High-Fidelity Interactive Carousel Engine */}
        {/* ⚡ SPACE COMPRESSION: Dropped top margin to mt-2 */}
        <div className="flex items-center justify-center w-full mt-2">
          
          {/* ⚡ CARD COMPRESSION: Streamlined bounding box sizes on mobile, tablet, and desktop rows */}
          <div className="relative w-full max-w-[280px] sm:max-w-sm lg:max-w-md h-[340px] sm:h-[390px] lg:h-[420px]">

            {/* ⬅️ Navigation Controller: Left Button */}
            <button
              onClick={() => paginate(-1)}
              aria-label="Previous Slide"
              className="absolute left-[-16px] sm:left-[-36px] top-1/2 -translate-y-1/2 flex items-center justify-center bg-neutral-900/90 hover:bg-neutral-800 text-neutral-400 hover:text-white p-2 rounded-full border border-neutral-800 shadow-xl transition-all hover:scale-105 z-30 cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>

            {/* Viewport Animation Pipeline */}
            <div className="w-full h-full overflow-hidden rounded-2xl relative border border-neutral-800 bg-neutral-950/10 backdrop-blur-md shadow-2xl">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={page}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.38, ease: [0.25, 1, 0.5, 1] }}
                  className="absolute inset-0 p-4 sm:p-5 flex flex-col justify-between"
                  style={{
                    "--theme-accent": theme.accent,
                    "--theme-bg-opacity": `rgba(${theme.rawAccent}, 0.05)`,
                    "--theme-border-opacity": `rgba(${theme.rawAccent}, 0.22)`
                  }}
                >
                  
                  {/* Skill Card Category Media Layer */}
                  <div className="w-full">
                    {skillDomains[index]?.image && (
                      /* ⚡ CARD COMPRESSION: Sized down image heights to match more compact container sizes */
                      <img
                        src={skillDomains[index].image}
                        alt={skillDomains[index].title}
                        className="w-full h-24 sm:h-32 lg:h-36 object-cover rounded-xl border border-neutral-900 shadow-inner mb-3 filter contrast-[1.03]"
                      />
                    )}

                    {/* Skill Segment Title */}
                    <h3 className="font-bold text-sm sm:text-base lg:text-lg font-mono transition-colors duration-300" style={{ color: "var(--theme-accent)" }}>
                      {skillDomains[index]?.title}
                    </h3>

                    {/* Meta Detail Body Paragraph */}
                    <p className="text-neutral-400 text-xs sm:text-sm mt-1.5 leading-relaxed font-normal line-clamp-4 sm:line-clamp-none">
                      {skillDomains[index]?.description}
                    </p>
                  </div>

                  {/* 🛠️ Dynamic Integrated Badges Row */}
                  <div className="flex flex-wrap gap-1 mt-3 font-mono text-[10px]">
                    {skillDomains[index]?.technologies?.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md border transition-all duration-300 font-medium"
                        style={{
                          backgroundColor: "var(--theme-bg-opacity)",
                          borderColor: "var(--theme-border-opacity)",
                          color: "var(--theme-accent)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* ➡️ Navigation Controller: Right Button */}
            <button
              onClick={() => paginate(1)}
              aria-label="Next Slide"
              className="absolute right-[-16px] sm:right-[-36px] top-1/2 -translate-y-1/2 flex items-center justify-center bg-neutral-900/90 hover:bg-neutral-800 text-neutral-400 hover:text-white p-2 rounded-full border border-neutral-800 shadow-xl transition-all hover:scale-105 z-30 cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;