import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { STATS } from "../constants/index.js";

// Animated number component with reset
const AnimatedNumber = ({ value, trigger }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!trigger) {
            setCount(0); // Reset count when out of view
            return;
        }

        let start = 0;
        const duration = 1000;
        const increment = value / (duration / 10);

        const interval = setInterval(() => {
            start += increment;
            if (start >= value) {
                setCount(value);
                clearInterval(interval);
            } else {
                setCount(Math.round(start));
            }
        }, 10);

        return () => clearInterval(interval);
    }, [trigger, value]);

    return <motion.span>{count}</motion.span>;
};

const CPStats = () => {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, {
        // 🔥 removed once: true
        threshold: 0.3, // adjust as needed
    });

    return (
        <div
            ref={sectionRef}
            className="border-b border-neutral-900 pb-4"
        >
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className="my-20 text-center text-4xl"
            >
                CP Stats
            </motion.h2>

            <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className="flex flex-wrap items-center justify-center gap-4"
            >
                {STATS.map((plat, index) => (
                    <a
                        href={plat.link}
                        key={index}
                        className="w-full max-w-xl lg:w-1/6 flex flex-col items-center bg-neutral-900 pt-3 rounded-2xl hover:bg-violet-600"
                    >
                        <img
                            width={100}
                            height={100}
                            className="mb-2 rounded-3xl"
                            src={plat.image}
                            alt={plat.title}
                        />
                        <p className="font-bold text-xl mb-2">{plat.title}</p>
                      <div className="flex flex-col items-center px-2 text-sm gap-1 mb-4">
                            
                            <p className="font-semibold">
                                Max-Rating:{" "}
                                <span className="font-light">
                                    <AnimatedNumber value={plat.rating} trigger={isInView} />
                                </span>
                            </p>

                            <p className="font-semibold">
                                Problems:{" "}
                                <span className="font-light">
                                    <AnimatedNumber value={plat.count} trigger={isInView} />
                                </span>
                            </p>

                        </div>
                    </a>
                ))}
            </motion.div>
        </div>
    );
};

export default CPStats;
