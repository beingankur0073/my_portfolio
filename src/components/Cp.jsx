import { motion, useInView, AnimatePresence, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { STATS } from "../constants/index.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Window size hook
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: undefined });

  useEffect(() => {
    const handleResize = () => setWindowSize({ width: window.innerWidth });
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

// Number animation
const AnimatedNumber = ({ value, trigger }) => {
  const nodeRef = useRef();
  const numericValue = parseInt(value, 10);

  useEffect(() => {
    const node = nodeRef.current;
    if (!trigger || isNaN(numericValue)) {
      if (node) node.textContent = 0;
      return;
    }

    const controls = animate(0, numericValue, {
      duration: 2,
      onUpdate(latest) {
        node.textContent = Math.round(latest).toLocaleString();
      },
    });

    return () => controls.stop();
  }, [trigger, numericValue]);

  return <span ref={nodeRef}>0</span>;
};

// Card UI
const CardContent = ({ plat, isHovered, onHoverStart, onHoverEnd, isInView }) => {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${plat.colors.join(", ")})`,
  };

  const baseStyle = {
    backgroundColor: "rgba(7, 7, 7, 0.5)",
  };

  return (
    <div
      className="w-full h-full flex flex-col items-center pt-3 rounded-2xl transition-all duration-300 backdrop-blur-md"
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
      style={isHovered ? gradientStyle : baseStyle}
    >
      <img
        width={100}
        height={100}
        className="mb-2 rounded-3xl object-cover"
        src={plat.image}
        alt={plat.title}
      />

      <p className="font-bold text-xl mb-1 text-center">{plat.title}</p>
      <p className="text-neutral-400 text-sm text-center px-1 mb-1">{plat.des}</p>

      {plat.badgeImg && (
        <img
          src={plat.badgeImg}
          alt="badge"
          className={`mb-1 ${
            plat.title === "LeetCode"
              ? "w-10 h-11"
              : plat.title === "Codechef"
              ? "w-auto h-8"
              : "w-6 h-6"
          }`}
        />
      )}

      <div className="flex flex-col items-center px-2 text-sm gap-1 mb-4 mt-auto pt-1">
        <p className="font-semibold">
          Max-Rating:{" "}
          <span className="font-light text-lg">
            <AnimatedNumber value={plat.rating} trigger={isInView} />
          </span>
        </p>
        <p className="font-semibold">
          Problems:{" "}
          <span className="font-light text-lg">
            <AnimatedNumber value={plat.count} trigger={isInView} />
          </span>
        </p>
      </div>
    </div>
  );
};

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
  /* 📱 Mobile / Tablet Carousel — Fully Responsive */
  <div className="w-full flex items-center justify-center gap-3 py-4">

    {/* Left Arrow */}
    <button
      onClick={() => paginate(-1)}
      className="shrink-0 bg-black/60 hover:bg-black/80 text-white 
                 p-2 sm:p-3 rounded-full backdrop-blur-md shadow-md"
    >
      <ChevronLeft size={22} />
    </button>

    {/* Responsive Card Wrapper */}
   <div
  className="
    relative flex justify-center rounded-2xl overflow-hidden
    w-[200px] h-[320px]              /* tiny phones */
    xs:w-[230px] xs:h-[350px]        /* very small phones */
    sm:w-[260px] sm:h-[380px]        /* normal phones */
    md:w-[300px] md:h-[420px]        /* tablets */
    lg:w-[350px] lg:h-[480px]        /* laptops */
    xl:w-[400px] xl:h-[520px]        /* large desktops */
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
      className="shrink-0 bg-black/60 hover:bg-black/80 text-white 
                 p-2 sm:p-3 rounded-full backdrop-blur-md shadow-md"
    >
      <ChevronRight size={22} />
    </button>
  </div>
) : (
  /* Desktop Grid Unchanged */
  /* 🖥 DESKTOP — Responsive Wider Cards */
<div className="
  flex flex-wrap items-center justify-center gap-10 mt-10 
  px-4
">
  {STATS.map((plat, index) => (
    <motion.a
      key={index}
      href={plat.link}
      target="_blank"
      rel="noopener noreferrer"
      className="
       
        w-[200px] h-[300px]          /* small laptops */
        
      "
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
