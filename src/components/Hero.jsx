import {HERO_CONTENT} from '../constants/index.js'
import profilePic from "../assets/images/pfpic_2.jpg"
import { motion } from "framer-motion"

const container=(delay)=>({
    hidden:{x:-100,opacity:0},
    visible:{
        x:0,
        opacity:1,
        transition:{duration:0.5,delay:delay}
    }
})

const Hero=()=>{
    return <div className="border-b border-neutral-900 pb-4 lg:mb-35 ">
        <div className="flex flex-wrap">

            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className="pb-16 text-6xl font-thin tracking-tigh lg:mt-26 lg:text-8xl">
                        Ankur Mukherjee</motion.h1>

                    <motion.span
                         variants={container(0.5)}
                         initial="hidden"
                         animate="visible"
                     className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
                        Full Stack Developer
                    </motion.span >

                    <motion.p 
                         variants={container(1)}
                         initial="hidden"
                         animate="visible"
                    className='my-2 max-w-xl py-6 font-light tracking-tighter'>
                        <p dangerouslySetInnerHTML={{ __html: HERO_CONTENT }} />
                    </motion.p>

                  
                    <motion.a
                        href="https://drive.google.com/file/d/1ffSX5oUtBvWw6btckAv3hUmClJZi1AXQ/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={container(1.2)}
                        initial="hidden"
                        animate="visible"
                        className="mt-4 inline-block rounded border border-neutral-700 px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 bg-blue-500"
                    >
                    Resume
                    </motion.a>


                </div>
            </div>

            <div className='w-full lg:w-1/2 lg:p-8 mt-8 lg:mt-0'>
                <div className='flex justify-start'>
                 <motion.img 
                 className="rounded-2xl m-auto lg:w-[500px]" 
                 initial={{ x: 100, opacity: 0 }}
                 animate={{x:0,opacity:1}}
                 transition={{duration:1,delay:1.2}}
                  src={profilePic} alt="Ankur Mukherjee" />
                </div>
            </div>


        </div>
    </div>
}

export default Hero; 