import {EDUCATION} from "../constants"
import { motion } from "framer-motion"

const Education=()=>{
    return <div>
        <div className="border-b border-neutral-900 pb-4">
            <motion.h1 
            whileInView={{opacity:1,y:0}}
            initial={{opacity:0,y:-100}}
            transition={{duration:0.5}}
            className="my-20 text-center text-4xl">Education</motion.h1>

            <div>{EDUCATION.map((edu,index)=>(
                <div key={index} className="mb-8 flex flex-wrap justify-center">

                    <motion.div
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:-100}}
                    transition={{duration:1}}
                     className="w-full lg:w-1/4 lg:flex justify-center">
                         <img src={edu.image} width={150} height={150} className="mb-6 rounded" alt={edu.title} />
                    </motion.div>

                    <motion.div 
                    whileInView={{opacity:1,x:0}}
                    initial={{opacity:0,x:100}}
                    transition={{duration:1}}
                    className="w-full max-w-xl lg:w-3/4 lg:flex-col items-center">
                        <h6 className="mb-2 font-semibold">{edu.title}</h6>
                        <p className="mb-4 text-neutral-400">{edu.description}</p>
                        <p  className="mb-4 text-neutral-400">{edu.address}</p>
                    </motion.div>

                </div>
                
            ))}</div>
        </div>
    </div>
}

export default Education