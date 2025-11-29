import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import AnimatedHeading from "./utils/AnimateHeading.jsx";
import FlippingTechBox from "./utils/FlippingTechBox.jsx";
import { techPairs } from "../constants/index.jsx"


const Technologies = () => {
  
  return (
    <div className="border-b border-neutral-800 pb-24 flex flex-col items-center justify-center font-mono">
      <ReactTooltip id="my-tooltip" effect="solid" place="top" className="custom-tooltip" />
      <AnimatedHeading
        words={["Technologies", "Skills", "Languages", "Tools"]}
        typingSpeed={100}
        holdingDelay={1000}
        className="my-20 text-4xl font-bold text-white"
      />
     

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 place-items-center mb-5 w-[70%] md:w-[60%] lg:w-[40%] max-w-6xl"
      >
      {techPairs.map((item, idx) => (
  <FlippingTechBox
    key={idx}
    frontRing={item.frontRing}
    frontShadow={item.frontShadow}
    backRing={item.backRing}
    backShadow={item.backShadow}
    duration={item.duration}
    front={item.front}
    back={item.back}
  />
))}
      </motion.div>
    </div>
  );
};

export default Technologies;
