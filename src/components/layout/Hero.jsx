import { useState, useEffect } from "react";
import { HERO_CONTENT, RESUME_LINK } from '../../constants/index.jsx';
import { motion, AnimatePresence } from "framer-motion";
import AnimatedHeading from "../ui/AnimateHeading.jsx";
import { ArrowRight, FileText, ImageIcon, Award } from "lucide-react";

// ✅ 1. Safe Image Asset Pipeline Imports
import pfPic1 from "../../assets/images/pfp/pfpic_2.jpg";
import pfPic2 from "../../assets/images/pfp/pfpic_3.jpg"; 
import pfPic3 from "../../assets/images/pfp/pfpic_4.jpg";

const PROFILE_IMAGES = [pfPic1, pfPic2, pfPic3];

const containerVariants = (delay) => ({
  hidden: { y: 12, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, delay: delay, ease: [0.22, 1, 0.36, 1] }
  }
});

const Hero = () => {
  const [currentImgIdx, setCurrentImgIdx] = useState(0);

  // 🎠 2. Automated Carousel Slider Engine Loop
  useEffect(() => {
    if (PROFILE_IMAGES.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentImgIdx((prev) => (prev + 1) % PROFILE_IMAGES.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // 📝 3. Streamlined Executive Context Narrative Copy
  const crispHeroContent = "Final-year IT student at <b>IIEST Shibpur</b>. MERN stack developer & competitive programmer. Specialized in deploying fast web architectures, tweaking machine learning models, and solving data structure bottlenecks.";

  return (
    /* ⚡ GAP REDUCTION: Sized down vertical padding classes (pt-4 pb-8) to bring Header and About closer */
    <section id="home" className="relative pt-4 pb-8 lg:pt-6 lg:pb-10 border-b border-neutral-900/60 font-sans">
      
      {/* ⚡ GAP REDUCTION: Added `lg:gap-4` and items-center to balance large monitor space layout matrix */}
      <div className="flex flex-wrap items-center lg:gap-4 justify-between">

        {/* 📋 Left Panel: Context Copy & Call-to-Actions */}
        <div className="w-full lg:w-[52%] flex flex-col items-center lg:items-start text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start max-w-xl">
            
          

            {/* Main Signature Header */}
            <motion.h1 
              variants={containerVariants(0.1)}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-2.5"
            >
              Ankur Mukherjee
            </motion.h1>

            {/* Typewriter Interactive Sub-Header Block */}
            <motion.div
              variants={containerVariants(0.2)}
              initial="hidden"
              animate="visible"
              className="font-mono h-8 mb-4"
            >
              <AnimatedHeading
                words={["Competitive Programmer", "Data Science Enthusiast", "Tech Lover", "Full Stack Developer","ICPC Regionalist"]}
                typingSpeed={70}
                holdingDelay={1500}
                className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-400 bg-clip-text text-lg sm:text-xl font-bold tracking-tight text-transparent"
                style={{ display: "inline-block" }}
              />
            </motion.div>

            {/* Short & Crisp Description Block */}
            <motion.div 
              variants={containerVariants(0.3)}
              initial="hidden"
              animate="visible"
              className="text-neutral-400 text-xs sm:text-sm leading-relaxed tracking-wide space-y-4 max-w-lg"
            >
              <p 
                className="text-neutral-400 font-normal"
                dangerouslySetInnerHTML={{ __html: crispHeroContent }} 
              />
            </motion.div>

            {/* Interactive Call to Action Panel */}
            <motion.div
              variants={containerVariants(0.4)}
              initial="hidden"
              animate="visible"
              className="mt-6 flex flex-wrap gap-3 font-mono text-[11px]"
            >
              <a 
                href={RESUME_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all h-10 px-5 bg-white text-black hover:bg-neutral-200 shadow-md transform hover:-translate-y-0.5 duration-200"
              >
                <FileText className="h-3.5 w-3.5" /> View Resume
              </a>
              
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all h-10 px-4 border border-neutral-800 bg-neutral-900/30 text-neutral-400 hover:bg-neutral-800/80 hover:text-white"
              >
                Explore Projects <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </motion.div>

          </div>
        </div>

        {/* 🖼️ Right Panel: Sliding Carousel Panel Container */}
        {/* ⚡ GAP REDUCTION: Scaled width adjustments (w-full lg:w-[44%]) to bring panels structurally closer */}
        <div className="w-full lg:w-[44%] flex justify-center lg:justify-end mt-8 lg:mt-0 px-2">
          <div className="relative group max-w-[350px] w-full aspect-square sm:aspect-[4/5] rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-900/10 shadow-2xl">
            
            {/* Ambient background glowing bleed overlay */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-30 blur-md pointer-events-none" />
            
            {/* Image Crossfade Transition Container */}
            <AnimatePresence mode="wait">
              <motion.img 
                key={currentImgIdx}
                src={PROFILE_IMAGES[currentImgIdx]} 
                alt={`Ankur Mukherjee Portrait Gallery Sheet ${currentImgIdx + 1}`}
                initial={{ opacity: 0, scale: 1.01 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover" 
              />
            </AnimatePresence>

            {/* Indicator overlay counter tag for multi-images sheet */}
            {PROFILE_IMAGES.length > 1 && (
              <div className="absolute bottom-3 right-3 z-10 flex gap-1 bg-black/40 backdrop-blur-md px-2 py-1 rounded-md border border-neutral-800/60 text-[9px] text-neutral-400 font-mono items-center">
                <ImageIcon size={10} className="text-cyan-400" />
                <span>{currentImgIdx + 1}/{PROFILE_IMAGES.length}</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;