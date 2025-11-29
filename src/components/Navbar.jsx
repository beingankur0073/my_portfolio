import logo from "../assets/images/logo.png"


import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
 import {FaSquareXTwitter} from "react-icons/fa6"
import {FaInstagram} from "react-icons/fa"



const Navbar=()=>{
    return <nav className="mb-5 flex items-center justify-between py-6">

        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-12" src={logo} alt="logo" />
            
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/ankur73/">
            <FaLinkedin  className="hover:text-blue-500"/>
            </a>
            <a href="https://github.com/beingankur0073">

            <FaGithub className="hover:text-neutral-400"/>
            </a>
            <a href="https://www.instagram.com/literally_ankur/">
            <FaInstagram className="cursor-pointer hover:text-purple-700" />
            </a>
            

            <a href="https://x.com/literally_ankur">
            <FaSquareXTwitter className="hover:text-neutral-500"/>
            </a>

           
        </div>
    </nav>
}

export default Navbar;