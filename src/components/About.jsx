import aboutImg from "../assets/images/bin.png";
import techImg1 from "../assets/images/tech.jpg";
import techImg2 from "../assets/images/tech2.jpg";
import { ABOUT_TEXT } from "../constants/index.js";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral-500">Me</span>
      </h2>

      <div className="flex flex-wrap">
        {/* Left: Images stacked vertically */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex flex-col gap-4 items-center justify-center">
            <img
              className="rounded-2xl w-[80%] max-w-md"
              src={aboutImg}
              alt="Main"
            />
            <img
              className="rounded-2xl w-[80%] max-w-md"
              src={techImg1}
              alt="Tech 1"
            />
            <img
              className="rounded-2xl w-[80%] max-w-md"
              src={techImg2}
              alt="Tech 2"
            />
          </div>
        </motion.div>

        {/* Right: Text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <div
              className="my-2 max-w-xl text-sm leading-7"
              dangerouslySetInnerHTML={{ __html: ABOUT_TEXT }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
