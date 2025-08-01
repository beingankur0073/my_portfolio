import { RiReactjsLine } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa';
import { TbBrandCpp } from 'react-icons/tb';
import { SiMongodb, SiJavascript, SiPython, SiTailwindcss, SiExpress, SiMysql, SiFlask, SiC,SiRedux, SiGit, SiPostman, SiCloudinary,SiGithub, SiHtml5, SiCss3, SiVercel, SiRender  } from 'react-icons/si';
import matUi from '../assets/Modified.png';
import { motion } from 'framer-motion';
import AnimatedHeading from './utils/AnimateHeading.jsx';
import numpy from '../assets/Numpy.svg';
import pandas from '../assets/Pandas.png';
import firebase from '../assets/firebase.png';
import vscode from '../assets/vscode.png';
import { Tooltip as ReactTooltip } from 'react-tooltip'


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

const mynologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24 flex flex-col items-center justify-center">
       <ReactTooltip
        id="my-tooltip"
        effect="solid"
        place="top"
        className="custom-tooltip"
      />

      <AnimatedHeading/>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 place-items-center mb-5 w-[70%] md:w-[60%] lg:w-[40%] max-w-6xl"
      >
       <motion.div  
          data-tooltip-id="my-tooltip"
          data-tooltip-content="React"
          
        variants={iconVaraints(2.5)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-cyan-400 shadow-cyan-400/40 shadow-lg">
          <RiReactjsLine className="text-4xl md:text-6xl text-cyan-400" />
        </motion.div>

        <motion.div
          data-tooltip-id="my-tooltip"
          data-tooltip-content="MongoDB"
         variants={iconVaraints(4)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-green-500 shadow-green-500/40 shadow-lg">
          <SiMongodb className="text-4xl md:text-6xl text-green-500" />
        </motion.div>

        <motion.div 
        data-tooltip-id="my-tooltip"
          data-tooltip-content="NodeJS"
        variants={iconVaraints(3)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-green-500 shadow-green-500/40 shadow-lg">
          <FaNodeJs className="text-4xl md:text-6xl text-green-500" />
        </motion.div>

        <motion.div 
          data-tooltip-id="my-tooltip"
          data-tooltip-content="C++"
        variants={iconVaraints(5)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-purple-500 shadow-purple-500/40 shadow-lg">
          <TbBrandCpp className="text-4xl md:text-6xl text-purple-500" />
        </motion.div>

        <motion.div 
        data-tooltip-id="my-tooltip"
          data-tooltip-content="C"
        variants={iconVaraints(4.7)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-blue-400 shadow-blue-400/40 shadow-lg">
          <SiC className="text-4xl md:text-6xl text-blue-400" />
        </motion.div>

        <motion.div 
        data-tooltip-id="my-tooltip"
          data-tooltip-content="Material UI"
        variants={iconVaraints(4)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-indigo-400 shadow-indigo-400/40 shadow-lg">
          <img src={matUi} alt="Material UI" className="w-10 h-10 md:w-14 md:h-14  object-contain" />
        </motion.div>
    

   
        <motion.div 
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Javascript"
        variants={iconVaraints(6)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-yellow-400 shadow-yellow-400/40 shadow-lg">
          <SiJavascript className="text-4xl md:text-6xl text-yellow-500" />
        </motion.div>

        <motion.div 
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Python"
        variants={iconVaraints(3.5)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-blue-500 shadow-blue-500/40 shadow-lg">
          <SiPython className="text-4xl md:text-6xl text-blue-500" />
        </motion.div>

        <motion.div 
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Tailwind CSS"
        variants={iconVaraints(2.8)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-sky-400 shadow-sky-400/40 shadow-lg">
          <SiTailwindcss className="text-4xl md:text-6xl text-sky-400" />
        </motion.div>

        <motion.div 
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Express"
        variants={iconVaraints(3.8)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-white shadow-white/40 shadow-lg">
          <SiExpress className="text-4xl md:text-6xl text-white" />
        </motion.div>

        <motion.div 
        data-tooltip-id="my-tooltip"
        data-tooltip-content="MySQL"
        variants={iconVaraints(4.2)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-blue-600 shadow-blue-600/40 shadow-lg">
          <SiMysql className="text-4xl md:text-6xl text-blue-600" />
        </motion.div>

        <motion.div 
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Flask"
        variants={iconVaraints(4.5)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-white shadow-white/40 shadow-lg">
          <SiFlask className="text-4xl md:text-6xl text-white" />
        </motion.div>
     

     
    
        <motion.div 
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Postman"
        variants={iconVaraints(3)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-orange-400 shadow-orange-400/40 shadow-lg">
      <SiPostman className="text-4xl md:text-6xl text-orange-400" />
    </motion.div>

    <motion.div 
    data-tooltip-id="my-tooltip"
    data-tooltip-content="Git"
    variants={iconVaraints(3.3)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-neutral-400 shadow-neutral-400/40 shadow-lg">
      <SiGit className="text-4xl md:text-6xl text-neutral-400" />
    </motion.div>

    <motion.div 
    data-tooltip-id="my-tooltip"
    data-tooltip-content="Redux"
    variants={iconVaraints(3.6)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-indigo-500 shadow-indigo-500/40 shadow-lg">
      <SiRedux className="text-4xl md:text-6xl text-indigo-500" />
    </motion.div>

    <motion.div 
    data-tooltip-id="my-tooltip"
    data-tooltip-content="Cloudinary"
    variants={iconVaraints(4.1)} initial="initial" animate="animate" className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-blue-400 shadow-blue-400/40 shadow-lg">
      <SiCloudinary className="text-4xl md:text-6xl text-blue-400" />
    </motion.div>

      <motion.div
        variants={iconVaraints(3.7)}
        initial="initial"
        animate="animate"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="NumPy"
        className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-yellow-300 shadow-yellow-300/40 shadow-lg"
      >
        <img src={numpy} alt="NumPy" className="w-10 h-10 md:w-14 md:h-14  object-contain" />
      </motion.div>

      <motion.div
        variants={iconVaraints(3.9)}
        initial="initial"
        animate="animate"
        data-tooltip-id="my-tooltip"
        data-tooltip-content="Pandas"
        className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-pink-400 shadow-pink-400/40 shadow-lg"
      >
        <img src={pandas} alt="Pandas" className="w-10 h-10 md:w-14 md:h-14  object-contain" />
      </motion.div>
        <motion.div
      variants={iconVaraints(4.2)}
      initial="initial"
      animate="animate"
      data-tooltip-id="my-tooltip"
      data-tooltip-content="Firebase"
      className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-amber-400 shadow-amber-400/40 shadow-lg"
    >
      <img src={firebase} alt="Firebase" className="w-10 h-10 md:w-14 md:h-14 object-contain" />
    </motion.div>

      <motion.div
      variants={iconVaraints(4.4)}
      initial="initial"
      animate="animate"
      data-tooltip-id="my-tooltip"
      data-tooltip-content="VS Code"
      className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-blue-600 shadow-blue-600/40 shadow-lg"
    >
      <img src={vscode} alt="VS Code" className="w-10 h-10 md:w-14 md:h-14 object-contain" />
    </motion.div>


    {/* <motion.div
  variants={iconVaraints(4.3)}
  initial="initial"
  animate="animate"
  data-tooltip-id="my-tooltip"
  data-tooltip-content="GitHub"
  className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-black shadow-black/40 shadow-lg"
>
  <SiGithub className="text-4xl md:text-6xl text-black" />
</motion.div> */}

<motion.div
  variants={iconVaraints(4.4)}
  initial="initial"
  animate="animate"
  data-tooltip-id="my-tooltip"
  data-tooltip-content="HTML"
  className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-orange-500 shadow-orange-500/40 shadow-lg"
>
  <SiHtml5 className="text-4xl md:text-6xl text-orange-600" />
</motion.div>

<motion.div
  variants={iconVaraints(4.5)}
  initial="initial"
  animate="animate"
  data-tooltip-id="my-tooltip"
  data-tooltip-content="CSS"
  className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-blue-500 shadow-blue-500/40 shadow-lg"
>
  <SiCss3 className="text-4xl md:text-6xl text-blue-500" />
</motion.div>

<motion.div
  variants={iconVaraints(4.6)}
  initial="initial"
  animate="animate"
  data-tooltip-id="my-tooltip"
  data-tooltip-content="Vercel"
  className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-black shadow-black/40 shadow-lg"
>
  <SiVercel className="text-4xl md:text-6xl text-black" />
</motion.div>

<motion.div
  variants={iconVaraints(4.7)}
  initial="initial"
  animate="animate"
  data-tooltip-id="my-tooltip"
  data-tooltip-content="Render"
  className="flex h-[70px] w-[70px] md:h-[80px] md:w-[80px] items-center justify-center rounded-2xl ring-2 ring-sky-600 shadow-sky-600/40 shadow-lg"
>
  <SiRender className="text-4xl md:text-6xl text-sky-600" />
</motion.div>


      </motion.div>

    </div>
  );
};

export default mynologies;
