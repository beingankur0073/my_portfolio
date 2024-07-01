import { motion } from "framer-motion"
import {STATS} from "../constants/index.js"


const CPStats=()=>{
    return <div className="border-b border-neutral-900 pb-4">
        <motion.h2 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className="my-20 text-center text-4xl"
        >CP Stats</motion.h2>

        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className="flex flex-wrap items-center justify-center gap-4 ">
            {STATS.map((plat,index)=>(
                <a href={plat.link} key={index} className="w-full max-w-xl lg:w-1/6 flex flex-col items-center bg-neutral-900 pt-3 rounded-2xl hover:bg-violet-600 ">
                    <img  width={100} height={100} className="mb-2 rounded" src={plat.image} alt="" />
                    <p className="font-bold text-xl mb-2">{plat.title}</p>
                    <div className="flex justify-end px-2 text-sm gap-3 mb-4">
                        <p className="font-semibold">Max-Rating:<span className="font-light">{plat.rating}</span></p>
                        <p className="font-semibold">Problems:<span className="font-light">{plat.count}</span></p>
                
                </div>

                </a>

            ))}
        </motion.div>

    </div>
} 

export default CPStats;