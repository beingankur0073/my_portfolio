import project1 from "../assets/images/projects/project-1.jpg";
import project2 from "../assets/images/projects/project-2.jpg";
import project3 from "../assets/images/projects/project-3.jpg";
import project4 from "../assets/images/projects/project-4.jpg";

import knight from "../assets/images/Knight.gif"
import cc3 from "../assets/images/3_star.png"
import pup from "../assets/images/pupil.webp"

import sp1 from "../assets/images/special2.png"

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


export const HERO_CONTENT = `
  A full stack developer passionate about learning new technologies and continuously improving my skills. 
  My expertise lies in front-end development with 
  <span class="font-bold text-cyan-400">React.js</span> and back-end development using 
  <span class="font-bold text-green-500">Express</span>, 
  <span class="font-bold text-green-600">Node.js</span>, 
  <span class="font-bold text-emerald-500">MongoDB</span>, and 
  <span class="font-bold text-orange-500">Flask</span>. 
  I use <span class="font-bold text-blue-500">Material UI</span> and 
  <span class="font-bold text-sky-400">Tailwind CSS</span> to build responsive, modern user interfaces. 
  I have good experience in building full stack web applications and am eager to take on new challenges and contribute to innovative projects.
`;


export const ABOUT_TEXT = `
<div class="space-y-6">

   <section>
    <p>
      I am currently pursuing a <span class="font-bold">B.Tech</span> in 
      <span class="font-bold">Information Technology</span> at 
      <span class="font-bold">IIEST, Shibpur</span>, and am in my 
      <span class="font-bold">4th year</span>. I’m eager to explore opportunities that allow me to enhance my skills and stay up-to-date with emerging technologies.
    </p>
  </section>

 <section>
  <h2 class="text-xl font-semibold mb-2">Frontend Development</h2>
  <p>
    I focus on building dynamic, responsive, and scalable web applications. On the frontend, I work with 
    <a href="https://reactjs.org" target="_blank" class="font-bold text-cyan-400">React</a> and manage application state using 
    <a href="https://redux.js.org" target="_blank" class="font-bold text-purple-500">Redux</a> and React's 
    <span class="font-semibold text-neutral-300">Context API (useContext)</span>. I also use modern UI libraries such as 
    <a href="https://tailwindcss.com" target="_blank" class="font-bold text-sky-400">Tailwind CSS</a>, 
    <a href="https://mui.com" target="_blank" class="font-bold text-indigo-500">Material UI</a>, and 
    <a href="https://getbootstrap.com" target="_blank" class="font-bold text-blue-700">Bootstrap</a> to create clean and user-friendly interfaces.
  </p>
</section>

  <section>
    <h2 class="text-xl font-semibold mb-2">Backend Development</h2>
    <p>
      On the backend, I develop web services and APIs using 
      <a href="https://nodejs.org" target="_blank" class="font-bold text-green-600">Node.js</a>, 
      <a href="https://expressjs.com" target="_blank" class="font-bold text-green-500">Express.js</a>, 
      <a href="https://flask.palletsprojects.com" target="_blank" class="font-bold text-gray-400">Flask</a>, and 
      <a href="https://www.mongodb.com" target="_blank" class="font-bold text-emerald-500">MongoDB</a>.
    </p>
  </section>

  <section>
    <h2 class="text-xl font-semibold mb-2">Languages & Algorithms</h2>
    <p>
      I am familiar with multiple programming languages including 
      <a href="https://isocpp.org" target="_blank" class="font-bold text-purple-500">C++</a> (my primary language), 
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" class="font-bold text-yellow-500">JavaScript</a>, and 
      <a href="https://www.python.org" target="_blank" class="font-bold text-blue-500">Python</a>. I regularly participate in coding contests, which helps me practice data structures and algorithms.
    </p>
  </section>

  <section>
    <h2 class="text-xl font-semibold mb-2">Core Computer Science</h2>
    <p>
      I have studied the fundamentals of core computer science subjects such as Operating Systems, Computer Networks, DBMS, and Object-Oriented Programming.
    </p>
  </section>

  <section>
    <h2 class="text-xl font-semibold mb-2">Data Science & Machine Learning</h2>
    <p>
      Additionally, I’ve recently started exploring the field of data science and machine learning using libraries like 
      <a href="https://numpy.org/" target="_blank" class="font-bold text-orange-400">NumPy</a>, 
      <a href="https://pandas.pydata.org/" target="_blank" class="font-bold text-yellow-600">Pandas</a>, and others.
    </p>
  </section>

</div>
`;





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
  image: nf, // Replace 'mf' with the actual imported image reference
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

export const STATS=[
  {
    title: "LeetCode",
    link:"https://leetcode.com/u/Beingankur0073/",
    des:"Knight",
    image: lc,
    rating:"1920",
    count:"1040",
    badgeImg: knight
  },
  {
    title: "Codechef",
    link:"https://www.codechef.com/users/beingankur",
    des:"3 star",
    image: cc,
    rating:"1670",
    count:"270",
    badgeImg: cc3
  },
  {
    title: "Codeforces",
    link:"https://codeforces.com/profile/mukherjeeankur0073",
    des:"Pupil",
    image: cf,
    rating:"1372",
    count:"450",
    badgeImg: pup
  },
]

export const RESUME_LINK="https://drive.google.com/file/d/1ffSX5oUtBvWw6btckAv3hUmClJZi1AXQ/view";