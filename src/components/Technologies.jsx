import { RiReactjsLine } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa';
import { TbBrandCpp } from 'react-icons/tb';
import { SiMongodb, SiJavascript, SiPython, SiTailwindcss, SiExpress, SiMysql, SiFlask, SiC,SiRedux, SiGit, SiPostman, SiCloudinary  } from 'react-icons/si';
import matUi from '../assets/Modified.png';
import { motion } from 'framer-motion';
import AnimatedHeading from './utils/AnimateHeading.jsx';
import numpy from '../assets/Numpy.svg';
import pandas from '../assets/Pandas.png';

const iconVaraints = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration,
      ease: 'linear',
      repeat: Infinity,
      repeatType: 'reverse',
    },
  },
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 flex flex-col items-center justify-center">
      <AnimatedHeading/>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 place-items-center mb-5 w-[70%] md:w-[60%] lg:w-[40%] max-w-6xl"
      >
        <motion.div variants={iconVaraints(2.5)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-cyan-400 shadow-cyan-400/40 shadow-lg">
          <RiReactjsLine className="text-5xl md:text-7xl text-cyan-400" />
        </motion.div>

        <motion.div variants={iconVaraints(4)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-green-500 shadow-green-500/40 shadow-lg">
          <SiMongodb className="text-5xl md:text-7xl text-green-500" />
        </motion.div>

        <motion.div variants={iconVaraints(3)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-green-500 shadow-green-500/40 shadow-lg">
          <FaNodeJs className="text-5xl md:text-7xl text-green-500" />
        </motion.div>

        <motion.div variants={iconVaraints(5)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-purple-500 shadow-purple-500/40 shadow-lg">
          <TbBrandCpp className="text-5xl md:text-7xl text-purple-500" />
        </motion.div>

        <motion.div variants={iconVaraints(4.7)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-blue-400 shadow-blue-400/40 shadow-lg">
          <SiC className="text-5xl md:text-7xl text-blue-400" />
        </motion.div>

        <motion.div variants={iconVaraints(4)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-indigo-400 shadow-indigo-400/40 shadow-lg">
          <img src={matUi} alt="Material UI" className="w-12 h-12 md:w-16 md:h-16  object-contain" />
        </motion.div>
    

   
        <motion.div variants={iconVaraints(6)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-yellow-400 shadow-yellow-400/40 shadow-lg">
          <SiJavascript className="text-5xl md:text-7xl text-yellow-500" />
        </motion.div>

        <motion.div variants={iconVaraints(3.5)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-blue-500 shadow-blue-500/40 shadow-lg">
          <SiPython className="text-5xl md:text-7xl text-blue-500" />
        </motion.div>

        <motion.div variants={iconVaraints(2.8)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-sky-400 shadow-sky-400/40 shadow-lg">
          <SiTailwindcss className="text-5xl md:text-7xl text-sky-400" />
        </motion.div>

        <motion.div variants={iconVaraints(3.8)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-white shadow-white/40 shadow-lg">
          <SiExpress className="text-5xl md:text-7xl text-white" />
        </motion.div>

        <motion.div variants={iconVaraints(4.2)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-blue-600 shadow-blue-600/40 shadow-lg">
          <SiMysql className="text-5xl md:text-7xl text-blue-600" />
        </motion.div>

        <motion.div variants={iconVaraints(4.5)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-white shadow-white/40 shadow-lg">
          <SiFlask className="text-5xl md:text-7xl text-white" />
        </motion.div>
     

     
    
        <motion.div variants={iconVaraints(3)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-orange-400 shadow-orange-400/40 shadow-lg">
      <SiPostman className="text-5xl md:text-7xl text-orange-400" />
    </motion.div>

    <motion.div variants={iconVaraints(3.3)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-neutral-400 shadow-neutral-400/40 shadow-lg">
      <SiGit className="text-5xl md:text-7xl text-neutral-400" />
    </motion.div>

    <motion.div variants={iconVaraints(3.6)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-indigo-500 shadow-indigo-500/40 shadow-lg">
      <SiRedux className="text-5xl md:text-7xl text-indigo-500" />
    </motion.div>

    <motion.div variants={iconVaraints(4.1)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-blue-400 shadow-blue-400/40 shadow-lg">
      <SiCloudinary className="text-5xl md:text-7xl text-blue-400" />
    </motion.div>

      <motion.div
        variants={iconVaraints(3.7)}
        initial="initial"
        animate="animate"
        className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-yellow-300 shadow-yellow-300/40 shadow-lg"
      >
        <img src={numpy} alt="NumPy" className="w-12 h-12 md:w-16 md:h-16  object-contain" />
      </motion.div>

      <motion.div
        variants={iconVaraints(3.9)}
        initial="initial"
        animate="animate"
        className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-pink-400 shadow-pink-400/40 shadow-lg"
      >
        <img src={pandas} alt="Pandas" className="w-12 h-12 md:w-16 md:h-16  object-contain" />
      </motion.div>
          

      </motion.div>

    </div>
  );
};

export default Technologies;
