import { RiReactjsLine } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa';
import { TbBrandCpp } from 'react-icons/tb';
import { SiMongodb, SiJavascript, SiPython, SiTailwindcss, SiExpress, SiMysql, SiFlask, SiC } from 'react-icons/si';
import matUi from '../assets/Modified.png';
import { motion } from 'framer-motion';
import AnimatedHeading from './utils/AnimateHeading.jsx';

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
    <div className="border-b border-neutral-800 pb-24">
      <AnimatedHeading/>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4 mb-5"
      >
        <motion.div variants={iconVaraints(2.5)} initial="initial" animate="animate" className="flex h-[110px] w-[110px] items-center justify-center rounded-2xl ring-2 ring-cyan-400 shadow-cyan-400/40 shadow-lg">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        <motion.div variants={iconVaraints(4)} initial="initial" animate="animate" className="flex h-[110px] w-[110px] items-center justify-center rounded-2xl ring-2 ring-green-500 shadow-green-500/40 shadow-lg">
          <SiMongodb className="text-7xl text-green-500" />
        </motion.div>

        <motion.div variants={iconVaraints(3)} initial="initial" animate="animate" className="flex h-[110px] w-[110px] items-center justify-center rounded-2xl ring-2 ring-green-500 shadow-green-500/40 shadow-lg">
          <FaNodeJs className="text-7xl text-green-500" />
        </motion.div>

        <motion.div variants={iconVaraints(5)} initial="initial" animate="animate" className="flex h-[110px] w-[110px] items-center justify-center rounded-2xl ring-2 ring-purple-500 shadow-purple-500/40 shadow-lg">
          <TbBrandCpp className="text-7xl text-purple-500" />
        </motion.div>

        <motion.div variants={iconVaraints(4.7)} initial="initial" animate="animate" className="flex h-[110px] w-[110px] items-center justify-center rounded-2xl ring-2 ring-blue-400 shadow-blue-400/40 shadow-lg">
          <SiC className="text-7xl text-blue-400" />
        </motion.div>

        <motion.div variants={iconVaraints(4)} initial="initial" animate="animate" className="flex h-[110px] w-[110px] items-center justify-center rounded-2xl ring-2 ring-indigo-400 shadow-indigo-400/40 shadow-lg">
          <img src={matUi} alt="Material UI" className="w-16 h-16 object-contain" />
        </motion.div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div variants={iconVaraints(6)} initial="initial" animate="animate" className="flex h-[110px] w-[110px] items-center justify-center rounded-2xl ring-2 ring-yellow-400 shadow-yellow-400/40 shadow-lg">
          <SiJavascript className="text-7xl text-yellow-500" />
        </motion.div>

        <motion.div variants={iconVaraints(3.5)} initial="initial" animate="animate" className="flex h-[110px] w-[110px] items-center justify-center rounded-2xl ring-2 ring-blue-500 shadow-blue-500/40 shadow-lg">
          <SiPython className="text-7xl text-blue-500" />
        </motion.div>

        <motion.div variants={iconVaraints(2.8)} initial="initial" animate="animate" className="flex h-[110px] w-[110px] items-center justify-center rounded-2xl ring-2 ring-sky-400 shadow-sky-400/40 shadow-lg">
          <SiTailwindcss className="text-7xl text-sky-400" />
        </motion.div>

        <motion.div variants={iconVaraints(3.8)} initial="initial" animate="animate" className="flex h-[110px] w-[110px] items-center justify-center rounded-2xl ring-2 ring-white shadow-white/40 shadow-lg">
          <SiExpress className="text-7xl text-white" />
        </motion.div>

        <motion.div variants={iconVaraints(4.2)} initial="initial" animate="animate" className="flex h-[110px] w-[110px] items-center justify-center rounded-2xl ring-2 ring-blue-600 shadow-blue-600/40 shadow-lg">
          <SiMysql className="text-7xl text-blue-600" />
        </motion.div>

        <motion.div variants={iconVaraints(4.5)} initial="initial" animate="animate" className="flex h-[110px] w-[110px] items-center justify-center rounded-2xl ring-2 ring-white shadow-white/40 shadow-lg">
          <SiFlask className="text-7xl text-white" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Technologies;
