import { motion } from "framer-motion";
import AnimatedHeading from "./ui/AnimateHeading.jsx";
import FlippingTechBox from "./ui/FlippingTechBox.jsx";
import { techPairs } from "../constants/index.jsx";

const Technologies = () => {
  return (
    <section id="technologies" className="py-16 border-b border-neutral-900/60 flex flex-col items-center justify-center font-sans">
      
      {/* 🏷️ Section Sub-Header Anchor Context */}
      <div className="text-center font-mono mb-2">
        <div className="text-[11px] uppercase tracking-widest text-cyan-400 font-semibold">Engine Stack</div>
      </div>

      {/* Typewriter Rotator Section Title */}
      <AnimatedHeading
        words={["Technologies", "Skills", "Languages", "Tools"]}
        typingSpeed={80}
        holdingDelay={1500}
        className="mt-1 mb-16 text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-mono"
      />

      {/* 🔮 High-Performance 3D Grid Grid Wrapper */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 24 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 place-items-center w-full max-w-3xl px-4"
      >
        {techPairs.map((item, idx) => (
          <div
            key={idx}
            /* 
               💡 Clean, Zero-Dependency Native CSS Tooltip Engine 
               Uses your custom global CSS configurations mapped flawlessly 
               without needing broken react-tooltip package wrappers.
            */
            className="relative group cursor-pointer"
            title={`${item.front?.name || "Skill"} / ${item.back?.name || "Tech"}`}
          >
            {/* 3D Core Card Component */}
            <FlippingTechBox
              frontRing={item.frontRing}
              frontShadow={item.frontShadow}
              backRing={item.backRing}
              backShadow={item.backShadow}
              duration={item.duration}
              front={item.front}
              back={item.back}
            />
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default Technologies;