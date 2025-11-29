import { EDUCATION } from "../constants/index.jsx";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 font-mono">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h1>

      <div className="space-y-16">
        {EDUCATION.map((edu, index) => (
          <div key={index} className="w-full flex justify-center">
            <div className="flex items-center justify-center gap-10 max-w-4xl w-full px-4 flex-wrap lg:flex-nowrap">

              {/* Image with conditional right padding */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 1 }}
                className={`flex justify-center items-center ${
                index !== EDUCATION.length - 1 ? 'lg:pr-10' : ''
                }`}
              >
                <img
                  src={edu.image}
                  width={150}
                  height={150}
                  className="rounded object-contain"
                  alt={edu.title}
                />
              </motion.div>

              {/* Text */}
              <motion.div
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
                 className={`flex flex-col justify-center text-center lg:text-left ${
                    index === EDUCATION.length - 1 ? 'lg:pl-0' : ''
                }`}
                            >
                <h6 className="mb-2 font-semibold">{edu.title}</h6>
                <p className="mb-2 text-neutral-400">{edu.description}</p>
                <p className="text-neutral-400">{edu.address}</p>
              </motion.div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
