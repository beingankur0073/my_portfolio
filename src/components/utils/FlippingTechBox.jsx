import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const FlippingTechBox = ({
  front,
  back,
  tooltipFront,
  tooltipBack,
  frontRing,
  frontShadow,
  backRing,
  backShadow,
  duration = 3, // optional duration for up-down motion
}) => {
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFlipped((prev) => !prev);
    }, 3000); // flip every 3s
    return () => clearInterval(interval);
  }, []);

  const upDownVariants = {
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration,
        ease: "linear",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <motion.div
      className="relative flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl shadow-lg cursor-pointer"
      animate="animate"
      initial="initial"
      variants={upDownVariants}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Front */}
      <motion.div
        data-tooltip-id="my-tooltip"
        data-tooltip-content={tooltipFront}
        className={`absolute inset-0 flex items-center justify-center rounded-2xl ring-2 ${frontRing} ${frontShadow}`}
        style={{ backfaceVisibility: "hidden" }}
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {front}
      </motion.div>

      {/* Back */}
      <motion.div
        data-tooltip-id="my-tooltip"
        data-tooltip-content={tooltipBack}
        className={`absolute inset-0 flex items-center justify-center rounded-2xl ring-2 ${backRing} ${backShadow}`}
        style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        animate={{ rotateY: flipped ? 0 : 180 }}
        transition={{ duration: 0.8 }}
      >
        {back}
      </motion.div>
    </motion.div>
  );
};

export default FlippingTechBox;
