import { motion, useInView, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { STATS } from "../constants/index.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Custom hook to get window size
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

// Animated number component (unchanged)
const AnimatedNumber = ({ value, trigger }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const numericValue = parseInt(value, 10);
        if (!trigger || isNaN(numericValue)) {
            setCount(0);
            return;
        }

        let start = 0;
        const duration = 2000;
        const increment = numericValue / (duration / 10);

        const interval = setInterval(() => {
            start += increment;
            if (start >= numericValue) {
                setCount(numericValue);
                clearInterval(interval);
            } else {
                setCount(Math.floor(start));
            }
        }, 10);

        return () => clearInterval(interval);
    }, [trigger, value]);

    return <motion.span>{count}</motion.span>;
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


const CPStats = () => {
    const sectionRef = useRef(null);
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

    const CardContent = ({ plat, isHovered, onHoverStart, onHoverEnd }) => {
        const gradientStyle = {
            backgroundImage: `linear-gradient(to right, ${plat.colors.join(", ")})`,
        };
        
        return (
            <div
                className="w-60 h-80 flex flex-col items-center bg-neutral-900 pt-3 rounded-2xl transition-all duration-300 transform group-hover:scale-105"
                onMouseEnter={onHoverStart}
                onMouseLeave={onHoverEnd}
                style={isHovered ? gradientStyle : {}}
            >
                <img width={100} height={100} className="mb-2 rounded-3xl object-cover" src={plat.image} alt={plat.title} />
                <p className="font-bold text-xl mb-1 text-center">{plat.title}</p>
                <p className="text-neutral-400 text-sm text-center px-2 mb-2">{plat.des}</p>
                {plat.badgeImg && <img src={plat.badgeImg} alt="badge" className={`mb-1 ${plat.title === "LeetCode" ? "w-10 h-11" : plat.title === "Codechef" ? "w-auto h-8" : "w-6 h-6"}`} />}
                <div className="flex flex-col items-center px-2 text-sm gap-1 mb-4 mt-auto pt-2">
                    <p className="font-semibold">Max-Rating: <span className="font-light text-lg"><AnimatedNumber value={plat.rating} trigger={isInView} /></span></p>
                    <p className="font-semibold">Problems: <span className="font-light text-lg"><AnimatedNumber value={plat.count} trigger={isInView} /></span></p>
                </div>
            </div>
        );
    };

    return (
        <div ref={sectionRef} className="border-b border-neutral-800 pb-10">
            <motion.h2 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} viewport={{ once: false, amount: 0.5 }} transition={{ duration: 0.5 }} className="my-20 text-center text-4xl">
                CP Stats
            </motion.h2>

            {isMobile ? (
                // MOBILE CAROUSEL LAYOUT - REBUILT WITH FLEXBOX FOR PERFECT CENTERING
                <div className="w-full flex justify-center items-center gap-2">
                    {/* Left Button */}
                    <button onClick={() => paginate(-1)} className="p-2 rounded-full bg-neutral-800/80 hover:bg-neutral-700 z-10"><ChevronLeft /></button>
                    
                    {/* Card Container */}
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
                               <CardContent plat={STATS[slideIndex]} isHovered={true} />
                            </motion.a>
                        </AnimatePresence>
                    </div>

                    {/* Right Button */}
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
                            />
                        </motion.a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CPStats;