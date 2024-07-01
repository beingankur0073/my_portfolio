import project1 from "../assets/images/projects/project-1.jpg";
import project2 from "../assets/images/projects/project-2.jpg";
import project3 from "../assets/images/projects/project-3.jpg";
import project4 from "../assets/images/projects/project-4.jpg";

import hs from "../assets/images/education/hs.jpeg"
import college from "../assets/images/education/college.png"
import md from "../assets/images/education/md.jpeg"

import cc from "../assets/images/cp/cc.jpeg"
import cf from "../assets/images/cp/cf1.png"
import lc from "../assets/images/cp/lc.png"

export const HERO_CONTENT = `A beginner-level full stack developer passionate about learning new technologies and continuously improving my skills. My expertise lies in front-end development with React.js and Next.js, as well as back-end development using Express, Node.js, and MongoDB. I'm eager to take on new challenges and contribute to innovative projects.`;

export const ABOUT_TEXT = `I am currently pursuing a B.Tech (UG) course in Information Technology from IIEST, Shibpur, and I am in my 3rd year. I am actively seeking opportunities to enhance my skills and learn new technologies.

As a passionate, self-taught web developer, I specialize in using React as the frontend framework, and Node.js, Express.js, and MongoDB for the backend. This combination allows me to create dynamic, responsive, and scalable web applications.

In addition to web development, I have a strong interest in data structures and algorithms. I actively participate in numerous contests across various platforms, primarily using C++. These experiences have honed my problem-solving skills and deepened my understanding of computer science principles.`;


export const PROJECTS = [
  {
    title: "Memory Game",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Todo Application",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "React", "Express","MongoDB","Node.js"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
];

export const CONTACT = {
  address: "Priti Apartment,Hridaypur Station Road,Barasat,Kolkata-700127",
  phoneNo: "+91 9123865346",
  email: "mukherjeeankur0073@gmail.com",
};


export const EDUCATION = [
  {
    title: "Secondary",
    image: md,
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
    des:"",
    image: lc,
    rating:"1660",
    count:"383"
  },
  {
    title: "Codechef",
    link:"https://www.codechef.com/users/beingankur",
    des:"3 star",
    image: cc,
    rating:"1616",
    count:"157"
  },
  {
    title: "Codeforces",
    link:"https://codeforces.com/profile/mukherjeeankur0073",
    des:"Pupil",
    image: cf,
    rating:"1224",
      count:"253"
  },
]