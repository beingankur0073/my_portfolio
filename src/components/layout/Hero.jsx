import { HERO_CONTENT, RESUME_LINK } from '../../constants/index.jsx'; // Path adjusted for layout/ subfolder
import profilePic from "../../assets/images/pfpic_2.jpg";
import { motion } from "framer-motion";
import AnimatedHeading from "../ui/AnimateHeading.jsx";

// Extracted variant configuration to keep the JSX clean
const containerVariants = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay }
  }
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">

        {/* Text and Copy Panel */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            
            {/* Main Title Name */}
            <motion.h1 
              variants={containerVariants(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-26 lg:text-8xl"
            >
              Ankur Mukherjee
            </motion.h1>

            {/* Rotating Animated Headlines Wrapper */}
            <motion.div
              variants={containerVariants(0.5)}
              initial="hidden"
              animate="visible"
              className="text-center font-mono"
            >
              <AnimatedHeading
                /* Fixed typo: Programmar -> Programmer */
                words={["Competitive Programmer", "Data Science Enthusiast", "Tech Lover", "Full Stack Developer"]}
                typingSpeed={100}
                holdingDelay={1000}
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
                style={{ display: "inline-block" }}
              />
            </motion.div>

            {/* ✅ FIXED: Changed outer wrapper from motion.p to motion.div to eliminate invalid nested p tags */}
            <motion.div 
              variants={containerVariants(1)}
              initial="hidden"
              animate="visible"
              className="max-w-xl py-5 font-light tracking-tighter"
            >
              <p className="text-neutral-300 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: HERO_CONTENT }} />
            </motion.div>

            {/* Interactive Call to Action (Resume Button) */}
            <motion.a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              variants={containerVariants(1.2)}
              initial="hidden"
              animate="visible"
              className="inline-block rounded-xl border border-neutral-700 px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 bg-blue-500 shadow-lg"
            >
              Resume
            </motion.a>

          </div>
        </div>

        {/* Profile Image Panel */}
        <div className="w-full lg:w-1/2 lg:p-8 mt-8 lg:mt-0">
          <div className="flex justify-start">
            <motion.img 
              className="rounded-2xl m-auto lg:w-[500px] shadow-2xl" 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic} 
              alt="Ankur Mukherjee" 
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;