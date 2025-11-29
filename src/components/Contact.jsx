import { CONTACT } from "../constants/index.jsx";
import { motion } from "framer-motion"

const Contact=()=>{
    return <div className="border-b border-neutral-900 pb-5 font-mono">

        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:0.5}}
        className="my-10 text-center text-4xl">Get in Touch</motion.h1>

        <div className="text-center tracking-tighter">
             
            <a href="#" className="border-b">{CONTACT.email}</a>
        </div>
         <footer className="mt-20 text-center text-sm text-neutral-400">
            <p>
            Made with <span className="text-red-500">❤️</span> by{" "}
            <span className="font-semibold text-white">Ankur Mukherjee</span>
            </p>
      </footer>
    </div>
}

export default Contact;