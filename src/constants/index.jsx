
import knight from "../assets/images/Knight.gif"
import cc3 from "../assets/images/3_star.png"
import pup from "../assets/images/spl.png"



import hs from "../assets/images/education/hs.jpeg"
import college from "../assets/images/education/college.png"
import ns from "../assets/images/education/National.png"

import cc from "../assets/images/cp/cc.jpeg"
import cf from "../assets/images/cp/cf1.png"
import lc from "../assets/images/cp/lc.png"



// Projects
import ac from "../assets/images/projects/AlgoCrack.png";
import mv from "../assets/images/projects/Movie.png";
import ch from "../assets/images/projects/Chat.png";
import nf from "../assets/images/projects/Nf.png";
import gl from "../assets/images/projects/GhostLine.png";

import fn from "../assets/frontend.png";
import bck from "../assets/backend.png";
import ds from "../assets/dsa.jpg";
import ml from "../assets/ml.jpg";
import cr from "../assets/core.jpg";




// icons
import {
  RiReactjsLine,
} from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import {
  SiMongodb,
  SiJavascript,
  SiPython,
  SiTailwindcss,
  SiExpress,
  SiMysql,
  SiFlask,
  SiC,
  SiRedux,
  SiGit,
  SiPostman,
  SiCloudinary,
  SiHtml5,
  SiCss3,
  SiVercel,
  SiRender,
} from "react-icons/si";

import matUi from "../assets/Modified.png";
import numpy from "../assets/Numpy.svg";
import pandas from "../assets/Pandas.png";
import firebase from "../assets/firebase.png";
import vscode from "../assets/vscode.png";


export const HERO_CONTENT = `
  Hey there 👋, I'm 
  <span class="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-extrabold text-3xl animate-pulse">
    Ankur
  </span>!  
  I'm an engineering student passionate about 
  <span class="bg-gradient-to-r from-cyan-400 to-sky-500 bg-clip-text text-transparent font-bold text-2xl">
    Full Stack Web Development
  </span>, 
  curious about 
  <span class="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-bold text-2xl">
    Machine Learning
  </span>, and skilled in 
  <span class="bg-gradient-to-r from-emerald-400 to-green-500 bg-clip-text text-transparent font-bold text-2xl">
    Data Structures & Algorithms
  </span>.  
 
  I love exploring 
  <span class="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent font-bold">
    new technologies
  </span> 
  and gaining knowledge about 
  <span class="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent font-bold">
    Geopolitics
  </span>, 
  <span class="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent font-bold">
    History
  </span>, and other fascinating domains.  
 
  Outside of tech, I like to play 
  <span class="bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent font-semibold">
    Cricket
  </span>, enjoy 
  <span class="bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent font-semibold">
    Drawing
  </span>, and spend time with 
  <span class="bg-gradient-to-r from-sky-400 to-indigo-500 bg-clip-text text-transparent font-semibold">
    Computer & Mobile Games
  </span>.  
  <br/><br/>
  <span class="bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-pink-500 bg-clip-text text-transparent font-extrabold text-3xl animate-gradient">
    Techie by passion, learner by curiosity, artist at heart ✨
  </span>
  <br/><br/>
  <span class="bg-gradient-to-r from-indigo-400 via-sky-400 to-cyan-400 bg-clip-text text-transparent font-semibold text-base">
     💡 Want to collaborate on a project or just have a chat? Feel free to reach out!
  </span>
`;



export const ABOUT_DATA = [
  {
    type: 'intro',
    content: "I am currently a 4th-year B.Tech student in Information Technology at IIEST, Shibpur. I’m eager to explore opportunities that allow me to enhance my skills and stay up-to-date with emerging technologies."
  },
  {
    type: 'skill',
    title: 'Frontend Development',
    description: "I focus on building dynamic, responsive, and scalable web applications using modern tools and libraries to create clean, user-friendly interfaces.",
    image: fn, // Replace with your actual image path
    technologies: ['React', 'Redux', 'Tailwind CSS', 'Material UI', 'Bootstrap']
  },
  {
    type: 'skill',
    title: 'Backend Development',
    description: "I develop robust web services and APIs, ensuring efficient data management and server-side logic for full-stack applications.",
    image: bck, // Replace with your actual image path
    technologies: ['Node.js', 'Express.js', 'Flask', 'MongoDB']
  },
  {
    type: 'skill',
    title: 'Languages & Algorithms',
    description: "With a strong foundation in C++, I regularly solve problems and participate in coding contests to sharpen my skills in data structures and algorithms.",
    image: ds, // Replace with your actual image path
    technologies: ['C++', 'JavaScript', 'Python', 'Data Structures', 'Algorithms']
  },
  {
    type: 'skill',
    title: 'Core Computer Science',
    description: "I have a solid understanding of core CS fundamentals, which are crucial for building efficient and well-structured software.",
    image: cr, // Replace with your actual image path
    technologies: ['Operating Systems', 'DBMS', 'Computer Networks', 'OOP']
  },
  {
    type: 'skill',
    title: 'Data Science & ML',
    description: "I’ve recently started exploring the exciting field of data science and machine learning, working with foundational data manipulation and analysis libraries.",
    image: ml, // Replace with your actual image path
    technologies: ['NumPy', 'Pandas', 'Scikit-learn', 'Matplotlib']
  }
];






export const PROJECTS = [
  {
    title: "Real-Time Chat Application",
    image: ch,
    description: `
      A full-stack <strong>real-time chat application</strong> using 
      <strong>React</strong>, <strong>Redux Toolkit</strong>, <strong>Node.js</strong>, 
      <strong>Express.js</strong>, and <strong>MongoDB</strong>, with 
      <strong>Socket.io</strong> for instant messaging. 
      Implemented <strong>JWT authentication</strong>, real-time notifications, 
      <strong>Cloudinary media uploads</strong>, friend requests, group chats, and read receipts. 
      Includes a <strong>feature-rich admin dashboard</strong> to manage users and monitor conversations.
    `,
    technologies: ["ReactJS", "Material UI", "NodeJS", "MongoDB", "Socket.io", "Express","Redux Toolkit", "Cloudinary", "JWT"],
    github: [
      { label: "GitHub Repo", url: "https://github.com/beingankur0073/chat-app" }
    ],
  },
  {
    title: "Movie Recommender App",
    image: mv,
    description: `
      A <strong>movie recommendation system</strong> built using the 
      <strong>TMDB 5000 dataset</strong>. 
      Developed using <strong>React</strong>, <strong>Material UI</strong> for frontend and 
      <strong>Flask</strong> on the backend. 
      Uses <strong>Bag of Words</strong> and <strong>vectorization</strong> to recommend similar movies. 
      Also includes fallback recommendations using <strong>keywords</strong> and <strong>genres</strong>.
    `,
    technologies: [ "React", "Material UI", "Flask", "Python"],
    github: [
      { label: "GitHub Repo", url: "https://github.com/beingankur0073/Movie_Recommender" }
    ],
  },
  {
    "title": "AlgoCrack",
    "image": ac,
    "description": "<strong>LeetCode-style</strong> full-stack coding platform built with the <strong>MERN stack</strong> and <strong>Judge0 API</strong> for real-time code execution and instant feedback. Features include user profiles, submission tracking, role-based access controls, and an admin dashboard for problem management and analytics, all wrapped in a modern, responsive UI with smooth animations.",
    "technologies": [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Judge0 API",
      "Tailwind CSS",
      "Zod",
      "Cloudinary",
      "JWT",
      "Redux",
      "Framer Motion",
      "React Query",
      "PrismJS",
      "Monaco Editor"
    ],
    "github": [
      { "label": "Frontend", "url": "https://github.com/beingankur0073/AlgoCrack-Frontend" },
      { "label": "Backend", "url": "https://github.com/beingankur0073/AlgoCrack-Backend" }
    ],
    "live": "https://algo-crack-frontend.vercel.app/auth"
  },
  {
    title: "Finder- GenAI Movie Platform",
    image: nf, 
    description: `
      A <strong>movie discovery</strong> web app built with <strong>React</strong> and 
      <strong>Redux</strong>, powered by <strong>Firebase</strong> for backend services and 
      authentication. Utilizes the <strong>TMDB API</strong> to fetch rich movie data and 
      integrates <strong>Perplexity AI</strong> for intelligent movie recommendations. 
      Features include <strong>real-time search</strong>, <strong>watchlist management</strong>, and 
      <strong>AI-powered suggestions</strong>.
    `,
    technologies: ["React", "Redux", "Firebase", "TMDB API", "Perplexity AI", "Tailwind CSS"],
    github: [
      { label: "GitHub Repo", url: "https://github.com/beingankur0073/netflix-gpt" }
    ],
    live: "https://finder-c4645.web.app"
  },
  {
    title: "Ghost Line - Anonymous Messaging Platform",
    image: gl, // Replace with actual imported image reference
    description: `
      An <strong>anonymous messaging platform</strong> built with <strong>Next.js</strong>, 
      <strong>TypeScript</strong>, and <strong>Shadcn/UI</strong>. 
      Implemented <strong>OTP-based authentication</strong> using <strong>Resend</strong> and <strong>Auth.js</strong> 
      for secure user verification. 
      Features include a <strong>debounced search</strong> for real-time unique username checking, 
      <strong>AI-powered message generation</strong> via the <strong>Perplexity API</strong>, 
      and a <strong>responsive, accessible UI</strong> designed with modern components for smooth interactions. 
      Configured secure routes, environment variables, and optimized API calls to ensure scalability and reliability.
    `,
    technologies: ["Next.js", "TypeScript", "Shadcn/UI", "React", "Auth.js", "Resend", "Perplexity API"],
    github: [
      { label: "GitHub Repo", url: "https://github.com/beingankur0073/Ghost_Line" }
    ],
    live: "https://ghost-line.vercel.app"
  }
];




export const CONTACT = {
  email: "mukherjeeankur0073@gmail.com",
};


export const EDUCATION = [
  {
    title: "Secondary",
    image: ns,
    description:
      "2019|National Model High School",
    address:"Michaelnagar,Dumdum Kolkata-700133"
  },
  {
    title: "Higher Secondary",
    image: hs,
    description:
      "2021|Michealnagar Sikshaniketan(H.S)",
    address:"Michaelnagar,Dumdum Kolkata-700133"
  },
  {
    title: "Bachelor of Technology",
    image: college,

    description:
      "2026|IIEST Shibpur(Information Technology)",
      address:"Shibpur,Howrah Kolkata-711103"
  },

];

export const STATS = [
  {
    title: "LeetCode",
    link: "https://leetcode.com/u/Beingankur0073/",
    des: "Knight",
    image: lc,
    rating: "1920",
    count: "1110",
    badgeImg: knight,
    colors: ['#F89F1B', '#000000'] // Vibrant orange to black gradient
  },
  {
    title: "Codechef",
    link: "https://www.codechef.com/users/beingankur",
    des: "3 star",
    image: cc,
    rating: "1675",
    count: "290",
    badgeImg: cc3,
    colors: ['#5B4638', '#A07F69'] // Dark brown to lighter, warm brown
  },
  {
    title: "Codeforces",
    link: "https://codeforces.com/profile/mukherjeeankur0073",
    des: "Specialist",
    image: cf,
    rating: "1452",
    count: "500",
    badgeImg: pup,
    colors: ['#445F9D', '#7B1F8C', '#EC1C24'] // Blue to purple to red, reflecting their branding and rating colors
  },
];

export const RESUME_LINK="https://drive.google.com/file/d/1s4GkGTfy7uHDxaWOVaE-xPGlUQ-85KL0/view";





export const techPairs = [
  {
    frontRing: "ring-cyan-400",
    frontShadow: "shadow-cyan-400/40",
    backRing: "ring-green-500",
    backShadow: "shadow-green-500/40",
    duration: 2.2,
    front: <RiReactjsLine data-tooltip-id="my-tooltip" data-tooltip-content="React" className="text-4xl md:text-6xl text-cyan-400" />,
    back: <SiMongodb data-tooltip-id="my-tooltip" data-tooltip-content="MongoDB" className="text-4xl md:text-6xl text-green-500" />,
  },
  {
    frontRing: "ring-green-500",
    frontShadow: "shadow-green-500/40",
    backRing: "ring-purple-500",
    backShadow: "shadow-purple-500/40",
    duration: 2.5,
    front: <FaNodeJs data-tooltip-id="my-tooltip" data-tooltip-content="NodeJS" className="text-4xl md:text-6xl text-green-500" />,
    back: <TbBrandCpp data-tooltip-id="my-tooltip" data-tooltip-content="C++" className="text-4xl md:text-6xl text-purple-500" />,
  },
  {
    frontRing: "ring-blue-400",
    frontShadow: "shadow-blue-400/40",
    backRing: "ring-indigo-400",
    backShadow: "shadow-indigo-400/40",
    duration: 2.8,
    front: <SiC data-tooltip-id="my-tooltip" data-tooltip-content="C" className="text-4xl md:text-6xl text-blue-400" />,
    back: <img src={matUi} alt="Material UI" data-tooltip-id="my-tooltip" data-tooltip-content="Material UI" className="w-10 h-10 md:w-14 md:h-14 object-contain" />,
  },
  {
    frontRing: "ring-yellow-400",
    frontShadow: "shadow-yellow-400/40",
    backRing: "ring-blue-500",
    backShadow: "shadow-blue-500/40",
    duration: 3,
    front: <SiJavascript data-tooltip-id="my-tooltip" data-tooltip-content="JavaScript" className="text-4xl md:text-6xl text-yellow-500" />,
    back: <SiPython data-tooltip-id="my-tooltip" data-tooltip-content="Python" className="text-4xl md:text-6xl text-blue-500" />,
  },
  {
    frontRing: "ring-sky-400",
    frontShadow: "shadow-sky-400/40",
    backRing: "ring-white",
    backShadow: "shadow-white/40",
    duration: 2.3,
    front: <SiTailwindcss data-tooltip-id="my-tooltip" data-tooltip-content="Tailwind CSS" className="text-4xl md:text-6xl text-sky-400" />,
    back: <SiExpress data-tooltip-id="my-tooltip" data-tooltip-content="Express" className="text-4xl md:text-6xl text-white" />,
  },
  {
    frontRing: "ring-blue-600",
    frontShadow: "shadow-blue-600/40",
    backRing: "ring-white",
    backShadow: "shadow-white/40",
    duration: 2.6,
    front: <SiMysql data-tooltip-id="my-tooltip" data-tooltip-content="MySQL" className="text-4xl md:text-6xl text-blue-600" />,
    back: <SiFlask data-tooltip-id="my-tooltip" data-tooltip-content="Flask" className="text-4xl md:text-6xl text-white" />,
  },
  {
    frontRing: "ring-orange-400",
    frontShadow: "shadow-orange-400/40",
    backRing: "ring-neutral-400",
    backShadow: "shadow-neutral-400/40",
    duration: 2.7,
    front: <SiPostman data-tooltip-id="my-tooltip" data-tooltip-content="Postman" className="text-4xl md:text-6xl text-orange-400" />,
    back: <SiGit data-tooltip-id="my-tooltip" data-tooltip-content="Git" className="text-4xl md:text-6xl text-neutral-400" />,
  },
  {
    frontRing: "ring-indigo-500",
    frontShadow: "shadow-indigo-500/40",
    backRing: "ring-blue-400",
    backShadow: "shadow-blue-400/40",
    duration: 2.9,
    front: <SiRedux data-tooltip-id="my-tooltip" data-tooltip-content="Redux" className="text-4xl md:text-6xl text-indigo-500" />,
    back: <SiCloudinary data-tooltip-id="my-tooltip" data-tooltip-content="Cloudinary" className="text-4xl md:text-6xl text-blue-400" />,
  },
  {
    frontRing: "ring-yellow-300",
    frontShadow: "shadow-yellow-300/40",
    backRing: "ring-pink-400",
    backShadow: "shadow-pink-400/40",
    duration: 3.1,
    front: <img src={numpy} alt="NumPy" data-tooltip-id="my-tooltip" data-tooltip-content="NumPy" className="w-10 h-10 md:w-14 md:h-14 object-contain" />,
    back: <img src={pandas} alt="Pandas" data-tooltip-id="my-tooltip" data-tooltip-content="Pandas" className="w-10 h-10 md:w-14 md:h-14 object-contain" />,
  },
  {
    frontRing: "ring-amber-400",
    frontShadow: "shadow-amber-400/40",
    backRing: "ring-blue-400",
    backShadow: "shadow-blue-400/40",
    duration: 2.4,
    front: <img src={firebase} alt="Firebase" data-tooltip-id="my-tooltip" data-tooltip-content="Firebase" className="w-10 h-10 md:w-14 md:h-14 object-contain" />,
    back: <img src={vscode} alt="VS Code" data-tooltip-id="my-tooltip" data-tooltip-content="VS Code" className="w-10 h-10 md:w-14 md:h-14 object-contain" />,
  },
  {
    frontRing: "ring-orange-500",
    frontShadow: "shadow-orange-500/40",
    backRing: "ring-blue-500",
    backShadow: "shadow-blue-500/40",
    duration: 3.2,
    front: <SiHtml5 data-tooltip-id="my-tooltip" data-tooltip-content="HTML" className="text-4xl md:text-6xl text-orange-600" />,
    back: <SiCss3 data-tooltip-id="my-tooltip" data-tooltip-content="CSS" className="text-4xl md:text-6xl text-blue-500" />,
  },
  {
    frontRing: "ring-sky-600",
    frontShadow: "shadow-sky-600/40",
    backRing: "ring-sky-400",
    backShadow: "shadow-sky-400/40",
    duration: 2.5,
    front: <SiVercel data-tooltip-id="my-tooltip" data-tooltip-content="Vercel" className="text-4xl md:text-6xl text-white" />,
    back: <SiRender data-tooltip-id="my-tooltip" data-tooltip-content="Render" className="text-4xl md:text-6xl text-sky-600" />,
  },
];
