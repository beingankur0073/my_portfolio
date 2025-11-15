import { motion, useInView, AnimatePresence, animate } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { STATS } from "../constants/index.jsx"; // Make sure this path is correct
import { ChevronLeft, ChevronRight } from "lucide-react";

// Custom hook to get window size (Unchanged)
const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
};

// AnimatedNumber component (Unchanged)
const AnimatedNumber = ({ value, trigger }) => {
    const nodeRef = useRef();
    const numericValue = parseInt(value, 10);

    useEffect(() => {
        const node = nodeRef.current;
        if (!trigger || isNaN(numericValue)) {
            if (node) node.textContent = 0;
            return;
        };

        const controls = animate(0, numericValue, {
            duration: 2,
            onUpdate(latest) {
                node.textContent = Math.round(latest).toLocaleString();
            }
        });

        return () => controls.stop();
    }, [trigger, numericValue]);

    return <span ref={nodeRef}>0</span>;
};


// MOVED outside the main component to prevent re-creation on re-renders.
// It now accepts `isInView` as a prop.
const CardContent = ({ plat, isHovered, onHoverStart, onHoverEnd, isInView }) => {
    // This style applies the gradient on hover
    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${plat.colors.join(", ")})`,
    };

    // This is the new base style for the card's default (non-hovered) state
    const baseStyle = {
        backgroundColor: 'rgba(7, 7, 7, 0.5)', // A semi-transparent dark gray (neutral-800 at 30% opacity)
    };
    
    return (
        <div
            // UPDATED: Removed `bg-neutral-900` and added `backdrop-blur-md`
            className="w-60 h-80 flex flex-col items-center pt-3 rounded-2xl transition-all duration-300 transform group-hover:scale-105 backdrop-blur-md"
            onMouseEnter={onHoverStart}
            onMouseLeave={onHoverEnd}
            // UPDATED: Now applies the transparent baseStyle by default
            style={isHovered ? gradientStyle : baseStyle}
        >
            <img width={100} height={100} className="mb-2 rounded-3xl object-cover" src={plat.image} alt={plat.title} />
            <p className="font-bold text-xl mb-1 text-center">{plat.title}</p>
            <p className="text-neutral-400 text-sm text-center px-1 mb-1">{plat.des}</p>
            {plat.badgeImg && <img src={plat.badgeImg} alt="badge" className={`mb-1 ${plat.title === "LeetCode" ? "w-10 h-11" : plat.title === "Codechef" ? "w-auto h-8" : "w-6 h-6"}`} />}
            <div className="flex flex-col items-center px-2 text-sm gap-1 mb-4 mt-auto pt-2">
                <p className="font-semibold">Max-Rating: <span className="font-light text-lg"><AnimatedNumber value={plat.rating} trigger={isInView} /></span></p>
                <p className="font-semibold">Problems: <span className="font-light text-lg"><AnimatedNumber value={plat.count} trigger={isInView} /></span></p>
            </div>
        </div>
    );
};

// Animation variants for DESKTOP view
const desktopCardVariants = (index) => ({
    initial: {
        opacity: 0,
        x: index === 0 ? -100 : index === 2 ? 100 : 0,
        y: index === 1 ? -100 : 0,
    },
    animate: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            duration: 0.8,
            delay: index * 0.3,
        },
    },
});

// Animation variants for MOBILE carousel view
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


// Main Component
const CPStats = () => {
    const sectionRef = useRef(null);
    // UPDATED: `once: true` ensures the animation runs only one time.
    const isInView = useInView(sectionRef, {
        once: false,
        amount: 0.2,
    });

    const { width } = useWindowSize();
    const isMobile = width !== undefined && width < 768;

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [[page, direction], setPage] = useState([0, 0]);

    const slideIndex = ((page % STATS.length) + STATS.length) % STATS.length;

    const paginate = (newDirection) => {
        setPage([page + newDirection, newDirection]);
    };

    return (
        <div ref={sectionRef} className="border-b border-neutral-800 pb-10">
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">
                CP Stats
            </motion.h2>

            {isMobile ? (
                // MOBILE CAROUSEL LAYOUT
                <div className="w-full flex justify-center items-center gap-2">
                    <button onClick={() => paginate(-1)} className="p-2 rounded-full bg-neutral-800/80 hover:bg-neutral-700 z-10"><ChevronLeft /></button>
                    <div className="relative w-60 h-80 overflow-hidden">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.a
                                key={page}
                                href={STATS[slideIndex].link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute w-full h-full group"
                                custom={direction}
                                variants={mobileCarouselVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 }}}
                            >
                               {/* Pass `isInView` as a prop */}
                               <CardContent plat={STATS[slideIndex]} isHovered={true} isInView={isInView} />
                            </motion.a>
                        </AnimatePresence>
                    </div>
                    <button onClick={() => paginate(1)} className="p-2 rounded-full bg-neutral-800/80 hover:bg-neutral-700 z-10"><ChevronRight /></button>
                </div>
            ) : (
                // DESKTOP GRID LAYOUT
                <div className="flex flex-wrap items-center justify-center gap-4">
                    {STATS.map((plat, index) => (
                        <motion.a
                            key={index}
                            href={plat.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group"
                            variants={desktopCardVariants(index)}
                            initial="initial"
                            animate={isInView ? "animate" : "initial"}
                        >
                            <CardContent 
                                plat={plat} 
                                isHovered={hoveredIndex === index}
                                onHoverStart={() => setHoveredIndex(index)}
                                onHoverEnd={() => setHoveredIndex(null)}
                                isInView={isInView} // Pass `isInView` as a prop
                            />
                        </motion.a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CPStats;