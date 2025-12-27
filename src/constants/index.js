import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  gaminghome,
  prepwise,
  growero,
  bosscoder,
  landing,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "FrontEnd Developer",
    icon: web,
  },
  {
    title: "Devops",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "FullStack Developer",
    company_name: "Brain Mentors",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using MERN Stack and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full Stack and CI/CD Developer Intern",
    company_name: "Growero.io",
    icon: growero,
    iconBg: "#383E56",
    date: "July 2024 - November 2024",
    points: [
      "Implemented CI/CD pipeline, reducing deployment time by 30% and increasing development efficiency by 25%. Conducted unit testing to improve code quality and reliability. Created and optimized Docker images for containerized application deployment.",
      "Worked with AWS services, specifically EC2 for scalable compute capacity and S3 for cloud storage solutions.",
      "Integrated AI-powered output generation, improving user satisfaction by 30% and increasing product functionality by 20%.",
      "Built RelationsAI, a full-stack platform providing WhatsApp Business users with insights on message charges, delivery metrics, and contact history, leading to a 5% increase in user engagement.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Bosscoder Academy",
    icon: bosscoder,
    iconBg: "#383E56",
    date: "February 2025 - July 2025",
    points: [
      "Developed a website from scratch using Next.js , Framer Motion and Tailwind CSS with several pages .",
      "Implemented a price calculator feature that allows users to select options and receive an estimated price, improving functionality by 20%.",
      "Integrated Firebase for efficient data storage and connected it to Google Sheets for better visibility and management.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Mohak proved me wrong.",
    name: "Varun Saxena",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Rushat Yadav",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Abhay Yadav",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "PrepWise",
    description:
      "An AI-powered platform that generates tailored practice questions and detailed explanations for students preparing for competitive exams, enhancing their learning experience and exam readiness.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "vapiAi",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
    ],
    image: prepwise,
    source_code_link: "https://github.com/mohakksingh/video_call_app",
  },
  {
    name: "Gaming Website Homepage",
    description:
      "Gaming Home is a responsive gaming website homepage built with React, Tailwind CSS and GSAP, featuring modern design, interactive elements, and amazing animations to enhance user engagement.",
    tags: [
      {
        name: "Reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Gsap",
        color: "green-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "pink-text-gradient",
      },
      {
        name: "eslint",
        color: "blue-text-gradient",
      },
    ],
    image: gaminghome,
    source_code_link: "https://github.com/mohakksingh/awards",
  },
  {
    name: "Video Calling App",
    description:
      "Web-based platform that allows users to create instant , schedule and join meetings providing a convenient and efficient solution for video calling with multiple users.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "web-streamSDK",
        color: "green-text-gradient",
      },
      {
        name: "clerk",
        color: "pink-text-gradient",
      },
      {
        name: "shadcn",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/mohakksingh/video_call_app",
  },
  {
    name: "Quanta INC",
    description:
      "A landing page for Quanta Inc, a company that provides AI-powered solutions for businesses to optimize their operations and enhance customer experiences.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "aceternity",
        color: "green-text-gradient",
      },
      {
        name: "framermotion",
        color: "pink-text-gradient",
      },
      {
        name: "tailwindCSS",
        color: "blue-text-gradient",
      },
    ],
    image: landing,
    source_code_link: "https://landingpage-delta-one.vercel.app/",
  },
  {
    name: "Blogging Website",
    description:
      " A simple blogging website where users can create, edit, and delete blogs. It is built using Node.js, Hono,Cloudfare workers and Postgress. It also includes user authentication and authorization.",
    tags: [
      {
        name: "tailwindCSS",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "postgresSQL",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/mohakksingh/BlogApp",
  },
  {
    name: "E-commerce Website",
    description:
      "An Ecommerce website where users can view products, add them to cart, and make payments.It also has an admin dashboard in which admin can add, delete,and update products.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "backend development",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/mohakksingh/project",
  },
];

export { services, technologies, experiences, testimonials, projects };
