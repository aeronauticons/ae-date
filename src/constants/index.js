import { BiLogoFirebase, BiLogoTailwindCss } from "react-icons/bi";
import {
  FaBootstrap,
  FaCloudversify,
  FaCode,
  FaFacebook,
  FaGitAlt,
  FaGithub,
  FaHandshake,
  FaHtml5,
  FaInstagram,
  FaLaravel,
  FaLinkedin,
  FaReact,
  FaRegLightbulb,
} from "react-icons/fa";
import { FaMobileScreen, FaXTwitter } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";
import { SiApachecordova, SiJavascript, SiMysql } from "react-icons/si";
import { TbBrandVite } from "react-icons/tb";
import { RiCss3Fill } from "react-icons/ri";

// Logo
import myLogoDark from "../assets/MyLogo/aefolio_logo_dark.png";
import myLogoLight from "../assets/MyLogo/aefolio_logo_light.png";

// Work/Nexbridge
import NBLogo from "../assets/Work/Nexbridge/nb_logo.png";
import NBCover from "../assets/Work/Nexbridge/nb_cover.jpg";
import NBModalCover from "../assets/Work/Nexbridge/nb_modal_cover.jpg";
import NBMiniLogo from "../assets/Work/Nexbridge/nb_mini_logo.png";

// Work/Vértere
import VLogo from "../assets/Work/Vertere/vertere_logo.png";
import VCover from "../assets/Work/Vertere/vertere_cover.jpg";
import VModalCover from "../assets/Work/Vertere/vertere_mini_logo.png";

// Projects/QubeApp
import QLogo from "../assets/Projects/QubeApp/QLogo.png";
import QubeAppLogoLight from "../assets/Projects/QubeApp/QLogoLight.png";
import QubeAppLogoDark from "../assets/Projects/QubeApp/QLogoDark.png";
import QubeAppImage from "../assets/Projects/QubeApp/QubeAppIamge.png";

// Projects/Kapiton
import KLogo from "../assets/Projects/Kapiton/KLogo.png";
import KMiniLogo from "../assets/Projects/Kapiton/KMiniLogo.png";
import KImage from "../assets/Projects/Kapiton/KapitonImage.png";

// MyArts
import coffee_art1 from "../assets/MyArts/coffee_art1.jpg";
import flower_tulips from "../assets/MyArts/flower_tulips.jpg";
import lion from "../assets/MyArts/lion.jpg";
import moon from "../assets/MyArts/moon.jpg";
import nature1 from "../assets/MyArts/nature1.jpg";
import nature2 from "../assets/MyArts/nature2.jpg";
import nature3 from "../assets/MyArts/nature3.jpg";
import phone_case_art from "../assets/MyArts/phone_case_art.jpg";
import tree from "../assets/MyArts/tree.jpg";
import tree1 from "../assets/MyArts/tree1.jpg";
import tree2 from "../assets/MyArts/tree2.jpg";

// MyGames
import dota2 from "../assets/MyGames/Dota_logo.png";
import clash_of_clans from "../assets/MyGames/Clash_of_Clans_Logo.png";
import mobile_legends from "../assets/MyGames/Mobile-legends-logo.png";
import valorant from "../assets/MyGames/Valorant_logo_-_pink_color_version.png";
import basketball from "../assets/MyGames/basketball-svgrepo-com.png";
import chess from "../assets/MyGames/chess-svgrepo-com.png";
import jogging from "../assets/MyGames/running-run-svgrepo-com.png";
import badminton from "../assets/MyGames/badminton.png";

// Socials
import ig1 from "../assets/Socials/ig1.jpg";
import ig2 from "../assets/Socials/ig2.jpg";
import ig3 from "../assets/Socials/ig3.jpg";
import igLogo from "../assets/Socials/instagram-logo.png";
import twitterLogo from "../assets/Socials/twitterX.png";

const isFindingJob = false;
const myResumeLink =
  "https://drive.google.com/file/d/1OP8rw8fBuMImpBsv7oDUDuU1kuIugV7x/view?usp=sharing";

const myLogo = {
  dark: myLogoDark,
  light: myLogoLight,
};

const myRole = {
  firstWord: "FULL STACK",
  firstLetterForSecondWord: "D",
  secondWord: "EVELOPER",
};

const pathURL = ["/", "/more_about_me"];

// nav
const myContacts = [
  {
    name: "Mobile Number",
    value: "(+639)76 191 8238",
    href: "tel:+639761918238",
    icon: FaMobileScreen,
  },
  {
    name: "Email",
    value: "filoteoaeron27@gmail.com",
    href: "mailto:filoteoaeron27@gmail.com",
    icon: MdAlternateEmail,
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/aeronfiloteo",
    href: "https://www.linkedin.com/in/aeronfiloteo/",
    icon: FaLinkedin,
  },
  {
    name: "Github",
    value: "github.com/aeronauticons",
    href: "https://github.com/aeronauticons",
    icon: FaGithub,
  },
];

// keypoints
const keyPoints = [
  {
    title: "Code Enthusiast",
    desc: "Showcasing the style of easy-to-read code and maintainable code.",
    icon: FaCode,
  },
  {
    title: "Problem Solver",
    desc: "Dedicated on solving errors, bugs and obstacles through ingenuity.",
    icon: FaRegLightbulb,
  },
  {
    title: "Continous Learner",
    desc: "Consistently seeks opportunities to expand knowledge.",
    icon: FaCloudversify,
  },
  {
    title: "Team Player",
    desc: "Excels in team environments and contribute effectively.",
    icon: FaHandshake,
  },
];

// socials
const mySocials = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/aeronauticons/",
    icon: FaFacebook,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/aeronauticons/",
    icon: FaInstagram,
  },
  {
    name: "XTwitter",
    href: "https://x.com/aeronauticssss",
    icon: FaXTwitter,
  },
];

const aboutMe = [
  {
    id: 1,
    text: `Hello! I’m Aeron, an aspiring full stack developer. By
          profession, I am a mathematician, as that is my field of study.
          I truly love coding; in fact, I enjoy solving problems,
          organizing complex logic, and analyzing system structures.`,
  },
  {
    id: 2,
    text: `Currently, I work as a programmer analyst in Makati,
          Philippines, and I am expanding my skill set as I pursue full
          stack development.`,
  },
  {
    id: 3,
    text: `Outside of work, I am a painter. I love painting nature, which
          helps me relieve stress and unwind.`,
  },
  {
    id: 4,
    text: `I am actively looking for opportunity where I can merge my coding
          skills with my creativity. If you know any projects that
          might suit me, let's connect! 🔗`,
  },
];

// capabilites
const myTechStack = [
  {
    name: "Laravel",
    icon: FaLaravel,
  },
  {
    name: "React",
    icon: FaReact,
  },
  {
    name: "Vite",
    icon: TbBrandVite,
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
  },
  {
    name: "Git",
    icon: FaGitAlt,
  },
  {
    name: "Tailwind",
    icon: BiLogoTailwindCss,
  },
  {
    name: "Bootstrap",
    icon: FaBootstrap,
  },
  {
    name: "MySQL",
    icon: SiMysql,
  },
  {
    name: "Firebase",
    icon: BiLogoFirebase,
  },
  {
    name: "Cordova",
    icon: SiApachecordova,
  },
];

const yearExp = 2;

const techStackDetails = `
  I have a strong knowledge of popular programming languages, tech
  stacks, and development tools essential to modern software
  development. Below, are the technologies I rely on to deliver
  quality systems.
`;

// my experience
const myWorkExperiences = [
  {
    id: 1,
    name: "Vértere Global Solutions",
    logo: VLogo,
    miniLogo: VModalCover,
    cover: VCover,
    modalCover: null,
    date: "January 2025 - Present",
    role: "Programmer Analyst",
    link: "https://www.vertere-gs.com/",
    responsibilities: [
      { 
        id: 1, 
        text: "Engineered backend solutions" 
      },
      { 
        id: 2, 
        text: "Parsed data files into a customer specific formats." },
      {
        id: 3,
        text: "Enhanced code structure to fasten processing of data files.",
      },
    ],
    full_details: [
      {
        id: 1,
        text: `Engineered and maintained backend solutions for web applications using the PHP, delivering scalable and efficient backend architectures.`,
      },
      {
        id: 2,
        text: `Parsed data files into a customer specific formats with Zero-defects strategy.`,
      },
      {
        id: 3,
        text: `Enhanced code structure to fasten processing and maintaining the integrity of data files.`,
      },
    ],
  },
  {
    id: 2,
    name: "Nexbridge Technologies Inc.",
    logo: NBLogo,
    miniLogo: NBMiniLogo,
    cover: NBCover,
    modalCover: NBModalCover,
    date: "October 2022 - December 2024",
    role: "Software Engineer",
    link: "https://nexbridgetech.com/",
    responsibilities: [
      { 
        id: 1, 
        text: "Engineered end-to-end full-stack solutions and APIs." 
      },
      { 
        id: 2, 
        text: "Enhanced the frontend experience for a seamless UI." 
      },
      {
        id: 3,
        text: "Designed and optimized relational databases to ensure data integrity.",
      },
      { 
        id: 4, 
        text: "Refactored and streamlined code structures." },
    ],
    full_details: [
      {
        id: 1,
        text: `Engineered end-to-end full-stack solutions and APIs for
                mobile and web applications using the Laravel PHP
                framework, delivering scalable and efficient backend
                architectures.`,
      },
      {
        id: 2,
        text: `Developed interactive, high-performance web
                applications utilizing ReactJS with Vite, enhancing the
                frontend experience for a seamless user interface.`,
      },
      {
        id: 3,
        text: `Designed and optimized relational databases to ensure
                data integrity, improve query performance, and support
                high-traffic applications.`,
      },
      {
        id: 4,
        text: `Refactored and streamlined code structures,
                establishing scalable and maintainable codebases across
                multiple projects.`,
      },
    ],
  },
];

// projects
const myProjects = [
  {
    id: 1,
    name: "Kapiton",
    dev_type: "Collaborator-based project",
    acronym: null,
    desc: "Multi-vendor E-commerce platform for businesses.",
    mini_logo: {
      dark: KMiniLogo,
      light: KMiniLogo,
    },
    logo: KLogo,
    image: KImage,
    githubLink: null,
    projectLink: "https://kapiton.store/",
    description:
      "A large-scale e-commerce platform designed to provide a robust marketplace for businesses. This web application enhance the virtual shopping experience for customers and vendors.",
    long_desc: `
      A multi-vendor e-commerce that is a large-scale project/application built with Laravel framework. <br/><br/>
      This application contains comprehensive and feature-rich modules and functionalities. It is designed to provide a robust platform for businesses to create their online marketplaces, allowing multiple vendors to sell their products and manage their stores within a single platform. <br/><br/>
      Additionally, this application has its own dedicated extensive API, which requires authentication using Laravel Passport package. <br><br>
      This app are composed of admin, customer and vendor components`,
    languages: [
      {
        id: 1,
        name: "Laravel",
        icon: FaLaravel,
      },
      {
        id: 2,
        name: "HTML",
        icon: FaHtml5,
      },
      {
        id: 3,
        name: "JavaScript",
        icon: SiJavascript,
      },
    ],
  },
  {
    id: 2,
    name: "QuBE App",
    dev_type: "Collaborator-based project",
    acronym: "Quality Board for Educators",
    desc: "Quality Board for Educators: A progressive web whiteboard application for BS Mathematics programs.",
    mini_logo: {
      dark: QubeAppLogoLight,
      light: QubeAppLogoDark,
    },
    logo: QLogo,
    image: QubeAppImage,
    githubLink: "https://github.com/aeronauticons/QuBE-App",
    projectLink: "https://qube-app.github.io/index.html",
    description:
      "This web-based whiteboard enhances the virtual classroom experience, offering intuitive tools for mathematics educators to deliver engaging and accessible lessons.",
    long_desc: `
      The QuBE app was developed in response to the challenges of asynchronous learning during the pandemic from 2020 to 2022. Acknowledging the difficulties of teaching mathematics online, this project aims to simplify the process for educators, particularly those at the college level. Created by a team of two developers, QuBE encompasses a variety of functionalities designed to enhance the teaching experience.<br/><br/>
      The main purpose of the app is the interactive whiteboard area, which includes essential tools such as adjustable pen sizes, color selections, shapes, and erasers. These features helps educators to present mathematical concepts clearly and creatively. Additionally, QuBE allows for the instant plotting of formulas, planes, and graphs, providing a visualization tool.<br/><br/>
      Following that, the app also includes different sections for generating various mathematical tables, which are exclusively for college-level math topics. These table generation tools help streamline lesson preparation, allowing educators to focus more on engaging with their students.<br/><br/>
      The QuBE app has been recognized as the best thesis project among all computer science presentations in our batch, highlighting its significance in transforming mathematics education in an online learning environment.`,
    languages: [
      {
        id: 1,
        name: "HTML",
        icon: FaHtml5,
      },
      {
        id: 2,
        name: "CSS",
        icon: RiCss3Fill,
      },
      {
        id: 3,
        name: "JavaScript",
        icon: SiJavascript,
      },
    ],
  },
];

// get in touch
const yearUpdate = "2024";

// more about me
const messageIntro = [
  {
    id: 1,
    text: `Whenever I feel grateful, lonely, or bored, I express my feelings
          through creating arts or by playing online games. At times, I become extremely dedicated to my goals, while other times, I struggle with laziness. 
          That's why I turn to my hobbies—they help me find balance and bring me a sense of ease.`,
  },
  {
    id: 2,
    text: `In my art, I often draw nature, as it brings me a sense of comfort and
          peace. Here are some samples of my work.`,
  },
];

const myArts = [
  {
    name: "Red Tulip",
    image: flower_tulips,
    orientation: "landscape",
    date: "August 2024",
    description:
      "A vibrant, close-up view of a tulip in full bloom, showcasing its elegant petals and rich colors in my hand.",
    medium: "Acrylic Paint",
  },
  {
    name: "Sunset Case",
    image: phone_case_art,
    orientation: "portrait",
    date: "November 2023",
    description:
      "Vibrant sunset of the sun across the sea that was companioned on a phone case.",
    medium: "Acrylic Paint",
  },
  {
    name: "Hope Behind the Forest",
    image: nature3,
    orientation: "landscape",
    date: "Febuary 2022",
    description:
      "A hope at the end of the messy forest. Never forget that every negative event has a positive outcome.",
    medium: "Acrylic Paint",
  },
  {
    name: "Fire-ice Lion",
    image: lion,
    orientation: "landscape",
    date: "December 2021",
    description:
      "Fierce and calm hybird lion, it showcase how calm and beautiful a lion was.",
    medium: "Acrylic Paint",
  },
  {
    name: "Nature Coffee Art",
    image: coffee_art1,
    orientation: "landscape",
    date: "September 2021",
    description:
      "A beautiful nature inside a jail. We can find more beauty outside the surroundings than we used to. Strive outside of your box.",
    medium: "Coffee",
  },
  {
    name: "Peaceful Evening",
    image: moon,
    orientation: "portrait",
    date: "May 2021",
    description:
      "Wonders of the moon that shines in the darkness days of our lives.",
    medium: "Acrylic Paint",
  },
  {
    name: "Beyond the Shore",
    image: nature2,
    orientation: "landscape",
    date: "December 2020",
    description:
      "Sometimes we are all curious how rocks are formed, how they are shaped, and what things we could see inside the huge rocks and terrains.",
    medium: "Acrylic Paint",
  },
  {
    name: "Twin Mountain",
    image: nature1,
    orientation: "landscape",
    date: "October 2020",
    description:
      "There always a myth where the sun is always rising in the middle of the two mountains. But in my art, it wont, haha.",
    medium: "Acrylic Paint",
  },
  {
    name: "Winter Tree",
    image: tree1,
    orientation: "portrait",
    date: "May 2020",
    description:
      "A tree standing bare in the cold of winter; its leaves are full of snow that is so beautiful to see. I am looking forward to seeing one of these in South Korea someday.",
    medium: "Acrylic Paint",
  },
  {
    name: "Summer Tree",
    image: tree2,
    orientation: "portrait",
    date: "May 2020",
    description:
      "A lush, full tree basking under the hot summer sun, its vibrant yellowish leaves providing shade and a sense of calm during the warmest season of the year.",
    medium: "Acrylic Paint",
  },
  {
    name: "Tree",
    image: tree,
    orientation: "portrait",
    date: "April 2020",
    description:
      "A common tree with a well-balanced structure, showcasing the simplicity and beauty of nature's life cycle throughout the seasons.",
    medium: "Acrylic Paint",
  },
];

// myGames
const gamesAndHobbiesDesc = `
When coding feels overwhelming, or I need a break, I usually
play online games or watch contents to relax and reset.
I usually play strategic gameplay, with teamwork. 
Beyond gaming, I’m also passionate about staying active, enjoying activities 
like running and various sports.
`;

const myGames = [
  {
    name: "Mobile Legends",
    logo: mobile_legends,
    type: "games",
  },
  {
    name: "Valorant",
    logo: valorant,
    type: "games",
  },
  {
    name: "Dota 2",
    logo: dota2,
    type: "games",
  },
  {
    name: "Clash of Clans",
    logo: clash_of_clans,
    type: "games",
  },
  {
    name: "Jogging",
    logo: jogging,
    type: "sports",
  },
  {
    name: "Chess",
    logo: chess,
    type: "sports",
  },
  {
    name: "Basketball",
    logo: basketball,
    type: "sports",
  },
  {
    name: "Badminton",
    logo: badminton,
    type: "sports",
  },
];

// mySocials
const mySocialsPage = [
  {
    logo: twitterLogo,
    name: "TwitterX",
    username: "@aeronauticssss",
    upload: {
      content_type: "text",
      contents:
        "Remember to sip your coffee before diving into thinking, and coding.",
      date: "November 10, 2024",
    },
    total_posts: 2055,
    post: "tweets",
    link: "https://x.com/aeronauticssss",
  },
  {
    logo: igLogo,
    name: "Instagram",
    username: "@aeronauticons",
    upload: {
      content_type: "image",
      contents: [ig1, ig2, ig3],
      date: "",
    },
    total_posts: 48,
    post: "posts",
    link: "https://www.instagram.com/aeronauticons/",
  },
];

export {
  pathURL,
  myContacts,
  myResumeLink,
  isFindingJob,
  keyPoints,
  mySocials,
  aboutMe,
  myTechStack,
  yearExp,
  techStackDetails,
  myWorkExperiences,
  myProjects,
  yearUpdate,
  myRole,
  myArts,
  messageIntro,
  myLogo,
  myGames,
  gamesAndHobbiesDesc,
  mySocialsPage,
};
