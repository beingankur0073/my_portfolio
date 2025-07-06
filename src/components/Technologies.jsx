import {RiReactjsLine} from 'react-icons/ri'
import {TbBrandNextjs} from 'react-icons/tb'
import {FaNodeJs} from 'react-icons/fa'
import { TbBrandCpp } from "react-icons/tb";
import { SiMongodb, SiJavascript, SiPython,SiTailwindcss,SiExpress,SiMysql,SiFlask,SiC  } from 'react-icons/si';
import matUi from '../assets/Modified.png'

import { animate, motion } from "framer-motion"


const iconVaraints=(duration)=>(
    {
        initial:{y:-10},
        animate:{
            y:[10,-10],
            transition:{
                duration:duration,
                ease:"linear",
                repeat:Infinity,
                repeatType:"reverse",
            }
        }
    }
)

const Technologies=()=>{
    return <div className="border-b border-neutral-800 pb-24">
        <motion.h1 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="my-20 text-center text-4xl">Technologies</motion.h1>

        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4 mb-5">

            <motion.div 
            variants={iconVaraints(2.5)}
            initial="initail"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>

            {/* <motion.div
             variants={iconVaraints(2.5)}
             initial="initail"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className='text-7xl'/>
            </motion.div> */}

            <motion.div
             variants={iconVaraints(4)}
             initial="initail"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className='text-7xl text-green-500'/>
            </motion.div>

            <motion.div
             variants={iconVaraints(3)}
             initial="initail"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className='text-7xl text-green-500'/>
            </motion.div>

            <motion.div
             variants={iconVaraints(5)}
             initial="initail"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandCpp className='text-7xl text-purple-500'/>
            </motion.div>

        <motion.div
        variants={iconVaraints(4.7)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4"
        >
        <SiC className="text-7xl text-blue-400" />
        </motion.div>

      <motion.div
        variants={iconVaraints(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center w-[110px] h-[110px]"
        >
        <img src={matUi} alt="Material UI" className="w-18 h-18 object-contain" />
        </motion.div>
       
        </motion.div>


         <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1.5}}
        className="flex flex-wrap items-center justify-center gap-4">

           
            {/* <motion.div
             variants={iconVaraints(2.5)}
             initial="initail"
             animate="animate"
             className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className='text-7xl'/>
            </motion.div> */}

       
         
            <motion.div 
             variants={iconVaraints(6)}
             initial="initail"
             animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiJavascript className='text-7xl text-yellow-500'/>
            </motion.div>


            <motion.div variants={iconVaraints(3.5)} initial="initial" animate="animate" className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPython className="text-7xl text-blue-500" />
                </motion.div>

                <motion.div
                variants={iconVaraints(2.8)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                <SiTailwindcss className="text-7xl text-sky-400" />
                </motion.div>

                {/* <motion.div
                variants={iconVaraints(3.2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                <SiMaterialui className="text-7xl text-indigo-500" />
                </motion.div> */}

                <motion.div
                variants={iconVaraints(3.8)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                <SiExpress className="text-7xl text-white" />
                </motion.div>

                <motion.div
                variants={iconVaraints(4.2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                <SiMysql className="text-7xl text-blue-600" />
                </motion.div>

                <motion.div
                variants={iconVaraints(4.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4"
                >
                <SiFlask className="text-7xl text-white" />
                </motion.div>

           
        </motion.div>

    </div>
}

export default Technologies