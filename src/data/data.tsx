import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { title } from "process";
import { text } from "stream/consumers";

import GithubIcon from "../components/Icon/GithubIcon";
import InstagramIcon from "../components/Icon/InstagramIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import StackOverflowIcon from "../components/Icon/StackOverflowIcon";
import TwitterIcon from "../components/Icon/TwitterIcon";
import aiTestimonialImage from "../images/generativeai.png";
import aiImageOne from "../images/generativeai-1.png";
import aiImageTwo from "../images/generativeai-2.png";
import heroImage from "../images/header-background.webp";
import heroImageMediaLab from "../images/media-lab.webp";
import porfolioImageNpcSite from "../images/portfolio/npc-site.jpg";
import porfolioImageOpenhci from "../images/portfolio/openhci.jpg";
import porfolioImagePblCar from "../images/portfolio/pbl-car.jpg";
// import heroImage from "../images/background.webp";
import porfolioImage1 from "../images/portfolio/portfolio-1.jpg";
import porfolioImage2 from "../images/portfolio/portfolio-2.jpg";
import porfolioImage3 from "../images/portfolio/portfolio-3.jpg";
import porfolioImage4 from "../images/portfolio/portfolio-4.jpg";
import porfolioImage5 from "../images/portfolio/portfolio-5.jpg";
import porfolioImage6 from "../images/portfolio/portfolio-6.jpg";
import porfolioImage7 from "../images/portfolio/portfolio-7.jpg";
import porfolioImage8 from "../images/portfolio/portfolio-8.jpg";
import porfolioImage9 from "../images/portfolio/portfolio-9.jpg";
import porfolioImage10 from "../images/portfolio/portfolio-10.jpg";
import porfolioImage11 from "../images/portfolio/portfolio-11.jpg";
import porfolioImageBlueprint from "../images/portfolio/portfolio-blueprint.jpg";
import porfolioImageCoralTrack from "../images/portfolio/portfolio-coral-track.jpg";
import porfolioImageKharkiv from "../images/portfolio/portfolio-kharkiv.jpg";
import porfolioImageOpenHCI from "../images/portfolio/portfolio-openhci.jpg";
import porfolioImagePbl from "../images/portfolio/portfolio-pbl.jpg";
import porfolioImageTaipeiGisWeb from "../images/portfolio/portfolio-taipei-gis-web.jpg";
import porfolioImageTat from "../images/portfolio/portfolio-tat.jpg";
import porfolioImageTaipeiBasinSite from "../images/portfolio/taipei-basin-site.jpg";
import porfolioImageTaipeiBlueprint from "../images/portfolio/taipei-blueprint.jpg";
// import profilepic from "../images/profilepic.jpg";
import profilepic from "../images/profile.jpg";
import profilepicBlackWhite from "../images/profile-black-white.jpg";
// import testimonialImage from "../images/testimonial.webp";
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from "./dataDef";

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Johnson Tseng",
  description: "Johnson Tseng's personal website",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: "hero",
  About: "about",
  Contact: "contact",
  Portfolio: "portfolio",
  Resume: "resume",
  Skills: "skills",
  Stats: "stats",
  Testimonials: "testimonials",
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImageMediaLab,
  name: `I'm Johnson Tseng.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am Johnson Tseng (曾紘遠), a college student from Taipei. I am now
        interesting in{" "}
        <strong className="text-stone-100">Full Stack Development</strong>,
        currently working at{" "}
        <strong className="text-stone-100">
          City Science Taipei, MIT Media Lab
        </strong>{" "}
        {/* transforming cities through aiming at making urban city better, by doing
        research and survey. */}
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I often use <strong className="text-stone-100">johnsonafool</strong> as
        my account user name or ID, inspired by the quote of Steve Jobs{" "}
        <strong className="text-stone-100">Stay hungry. Stay foolish.</strong>
        Remind me stay curious, thinking differently, and maintaining a
        childlike sense of wonder.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my leisure, you can catch me embark upon{" "}
        <strong className="text-stone-100">Outdoor Activities</strong>,
        immersing on{" "}
        <strong className="text-stone-100">Postmodernist Literature</strong>.
        {/* , or
        engaging in{" "}
        <strong className="text-stone-100">Volunteering Actives</strong>. */}
      </p>
    </>
  ),
  actions: [
    {
      // TODO: add update resume
      href: "/assets/resume.pdf",
      text: "Resume",
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `mailto:johnsonafool@gmail.com`,
      text: "Contact",
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepicBlackWhite,
  // description: `I am a senior year student currently working in MIT Media Lab Lab @ Taipei,
  // My previous programming experience including  C, C#, Python, TypeScript, SQL, Git, Docker, React.js, GraphQL,
  // Tensorflow, FastAPI, Unity`,
  description: `I'm currently pursuing my degree and gaining valuable 
  hands-on experience at City Science Lab. As an eager 
  problem solver, I approach challenges by analyzing problem patterns 
  and employing programming techniques to find effective solutions. 
  My work primarily focuses on leveraging technology to enhance modern 
  urban environments, where I conduct surveys, perform research.`,
  aboutItems: [
    {
      label: "Study",
      text: "National Taipei University of Technology",
      Icon: AcademicCapIcon,
    },
    {
      label: "Work",
      text: "City Science Lab (CSL) @ Taipei",
      Icon: BuildingOffice2Icon,
    },
    {
      label: "Interests",
      text: "Startups, Outdoor Activities, Cooking, Fitness, Reading, Traveling, Volunteering",
      Icon: SparklesIcon,
    },
    {
      label: "Personality",
      text: "ESFJ-A",
    },
    { label: "Age", text: "21", Icon: CalendarIcon },
    { label: "Location", text: "Taipei, Taiwan", Icon: MapIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: "Spoken languages",
    skills: [
      {
        name: "English",
        level: 10,
      },
      {
        name: "French",
        level: 4,
      },
      {
        name: "Spanish",
        level: 3,
      },
    ],
  },
  {
    name: "Frontend development",
    skills: [
      {
        name: "React",
        level: 9,
      },
      {
        name: "Typescript",
        level: 7,
      },
      {
        name: "GraphQL",
        level: 6,
      },
    ],
  },
  {
    name: "Backend development",
    skills: [
      {
        name: "Node.js",
        level: 8,
      },
      {
        name: "Rust",
        level: 5,
      },
      {
        name: "Golang",
        level: 4,
      },
    ],
  },
  {
    name: "Mobile development",
    skills: [
      {
        name: "React Native",
        level: 9,
      },
      {
        name: "Flutter",
        level: 4,
      },
      {
        name: "Swift",
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: "Self Driving Car",
    description: "Win a International Project Based Learning Competition",
    url: "https://timbaker.me",
    image: porfolioImageCoralTrack,
  },
  {
    title: "OpenHCI 2022 Project",
    description:
      "Campus Chicken Crisis: Betting Half of the Future. Gaining Best Technical Achievement Award",
    url: "https://timbaker.me",
    image: porfolioImageOpenHCI,
  },
  {
    title: "Project title 3",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImageTaipeiGisWeb,
  },
  {
    title: "Project title 4",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImageTat,
  },
  {
    title: "NTUT Programming Club Animated Introduction",
    description:
      "Introduce our club using scroll animation. Built with Vue.js and Vite",
    url: "https://ntut-club-animation.vercel.app",
    image: porfolioImagePbl,
  },
  {
    title: "Project title 6",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImageKharkiv,
  },
  {
    title: "Taipei Blueprint",
    description: "Give a short description of your project here.",
    url: "taipei-blueprint.vercel.app",
    image: porfolioImageBlueprint,
  },
  {
    title: "Project title 8",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage8,
  },
  {
    title: "CSL x TUIC Smart Taipei",
    description: "Give a short description of your project here.",
    url: "https://taipei-basin-dashboard.vercel.app/",
    image: porfolioImage9,
  },
  {
    title: "Project title 10",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage10,
  },
  {
    title: "Object Detection and Tracking in Edge Device",
    description: "Using Tensorflow Lite and OpenCV to detect and track object",
    url: "https://timbaker.me",
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: "June 2023",
    location: "National Taipei University of Technology",
    title:
      "Bachelor Major in Engineering Science, Double Major in Computer Science",
    content: (
      <div className="flex flex-col gap-4">
        <p>
          During my time at university, I have acquired a versatile skill set
          that includes understanding in programming languages such as
          TypeScript, Python, and C++ and C#. Collaborating with peers, as well
          as hands-on experience.
        </p>
        <p>
          In school, I enrolled few courses, such as Algorithm, Digital Signal
          Processing, Image Processing and Compression, Machine Learning,
          Database Design, Web Development, Computer Network, Operating System,
          help to build a solid foundation in computer science and utilize the
          knowledge by doing projects.
        </p>
        <p>
          My involvement also includes active participation in the several
          clubs, and engagement in various extracurricular activities and
          competitions, which broadened my skill set, and strengthened my
          ability to collaborate, communicate effectively, and thrive in diverse
          environments.
        </p>
      </div>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: "March 2022 - Present",
    location: "City Science Taipei, MIT Media Lab",
    title: "Undergraduate Research Opportunity Program",
    content: (
      <div className="flex flex-col gap-4">
        <p>
          Working with a insightful project in City Science, CityScope,
          dedicating to leveraging data to solve complex problems in modern
          cities. The CityScope project aimed to analyze vast amounts of urban
          data, ranging from transportation patterns to energy consumption, in
          order to gain insights into city dynamics and develop innovative
          solutions.
        </p>
        <p>
          My work include data analysis, data engineering, machine learning,
          deep learning and visualization tools to uncover meaningful patterns
          and trends. This allowed myself to gain insights into the functioning
          of the city, detect inefficiencies, and propose data-driven solutions
          for urban planning and development. Working here not only exposed me
          to cutting-edge research methodologies but also fostered a culture of
          collaboration and innovation.
        </p>
        <p>
          Skills: Problem Solving, Collaboration, Interdisciplinary Research,
          Data Engineering, Data Science, Predictive Modeling, Edge Computing
          Programming, Web Development
        </p>
      </div>
    ),
  },
  {
    date: "June 2022 - June 2022",
    location: "National Taipei University of Technology",
    title: "President of School Programming Club",
    content: (
      <div className="flex flex-col gap-4">
        <p>
          As the President of NTUT Programming Club (a.k.a NPC), I conducted
          several events (workshop, club gathering, tech talk etc.) and
          programming courses. In teaching, I like to start with fundamental
          concepts in plain words and follow by apply skills in the group
          project, through project based learning, fellows learn how to use what
          they learned in real case, and consolidate the knowledge by debugging
          and develop required features. Aside for programming stuff, I also
          organized few social events and activities to promote the club and
          attract new members.
        </p>
        <p>
          Besides, I actively contributed to various club owned projects, I
          collaborated with core club members on software development
          initiatives, ranging from mobile applications (Campus Course App, TAT)
          to web-based systems (Club Official Site) and social app chatbot
          service (Discord Bot, Line Bot). One of my significant accomplishments
          was serving as a project manager for TAT. Recognizing the need for
          efficient project management, I implemented agile development
          methodologies, enabling our team to adapt to changing requirements and
          deliver high-quality results in a timely manner. By effectively
          coordinating the efforts of team members and fostering effective
          communication, we were able to deliver a feature-rich beta version of
          the app.
        </p>
        <p>
          Skills: Leadership, Team Management, Project Management, Agile
          Development, Software Development
        </p>
      </div>
    ),
  },
  {
    date: "March 2022 - August 2022",
    location: "Open HCI",
    title: "Open HCI 2022 Technical Teaching Assistant",
    content: (
      <div className="flex flex-col gap-4">
        <p>
          Open HCI (OpenHCI 人機互動工作坊) is a prestigious workshop in the
          field of Human-Computer Interaction in Taiwan. As a Technical Teaching
          Assistant Department, I collaborate with other TAs in organizing the
          events regarding to technical sides, such as P5.js Arduino, Computer
          Vision. Try to making these differentiate from typical school course
          by leading with real case implementation. During the workshop, TAs
          were assigned with few fellows to cooperate making project, I provide
          guidance and support relating to technical aspect to the group
          participants, ensuring their understanding and able to further
          utilizing with their ideas on HCI.
        </p>
        <p>
          Throughout the workshop progress, I emphasized the importance of
          user-centered design and usability testing that I learned from Media
          Lab. Guiding the participants in conducting user research and
          incorporating user feedback into the iterative design process. By
          incorporating human factors and usability principles, we ensured that
          the final project provided a seamless and intuitive experience for
          users.
        </p>
        <p>
          Skills: Leadership, Team Management, Project Management, Design
          Thinking
        </p>
      </div>
    ),
  },
];

export const skill: TimelineItem[] = [
  {
    date: "",
    location: "Mandarin, English, Japanese",
    title: "Language",
    content: (
      <div className="flex flex-col gap-4">
        {/* <p>
          English: TOEIC: 925, TOEFL: 91, International volunteer, English
          tutor, School international affair department volunteering
        </p> */}
      </div>
    ),
  },
  {
    date: "",
    location: `FastAPI, Django, Node.js, Express.js, Fastify, Colyseus, 
      Socket Programming, Web Sockets, RESTful, GraphQL`,
    title: "Backend Development",
    content: (
      <div className="flex flex-col gap-4">
        <p>
          For me backend development is like a vivid book about what I learned
          from courses. In networking, I have to consider IP addressing, TCP/IP,
          UDP, DNS, and HTTP, according to need.
        </p>
        <p>
          It also have strong connection with operating systems, like async,
          process management, threading, memory management, file systems, and
          interprocess communication. To make the server scalable, they are all
          important.
        </p>
        <p>
          Some of my friends like to joke around backend is really easy, since
          stuff we done on course only about CRUD, and my experience in CSL give
          me chance to design real system and consider more beyond that.
        </p>
        <p>
          Recently I have extend my backend knowledge to learn MLOps and DevOps,
          as working on deploy model on API and collect data continuously with
          distributed task scheduler such Airflow.
        </p>
      </div>
    ),
  },
  {
    date: "",
    location: `React.js, Next.js, Redux-Saga, Zustand, React Query, 
    TailwindCSS, Styled Components`,
    // , Babylon.js, Three.js, WebGL, WebGPU
    title: "Frontend Development",
    content: (
      <div className="flex flex-col gap-4">
        <p>
          I enjoy frontend a lot, in past I develop in React.js since the team I
          work with it. But recently I start to go with Next.js, since it
          provide more flexibility and better performance and SSR gradually
          become the go to standard in web development.
        </p>
        <p>
          In state management, I usually use Redux-Saga and it is very handful
          for dealing with side effects.
        </p>
        <p>
          In styling, I usually work with styled component, usually I got layout
          from Figma, and implement it with styled component. I also use
          TailwindCSS these days, when I am doing my own project or prototype
          that no design layout is provided. I found it super convenient and
          easy to use.
        </p>
        <p>
          In CityScope project, there are many visualizations relating to urban,
          We usually doing the stack with React.js, Redux-Saga, DeckGL, and
          Mapbox to integrate with backend and database.
        </p>
      </div>
    ),
  },
  {
    date: "",
    location: "Postgres, MySQL, MongoDB, Redis, Neo4j, Prisma",
    title: "Database Design & Management",
    content: (
      <div className="flex flex-col gap-4">
        <p>""""</p>
      </div>
    ),
  },
  {
    date: "",
    location: "Tensorflow, Scikit-Learn, Airflow, Kafka, Spark, Hadoop, Pandas",
    title: "Data Engineering & Data Science",
    content: (
      <div className="flex flex-col gap-4">
        <p>""""</p>
      </div>
    ),
  },
  {
    date: "",
    location:
      "Linux (Ubuntu), GCP, Git Flow, Github CI / CD, Docker, Nginx, Terraform",
    title: "DevOps",
    content: (
      <div className="flex flex-col gap-4">
        <p>""""</p>
      </div>
    ),
  },
  {
    date: "",
    location: "Babylon.js, Three.js, Unity",
    title: "ThreeD Modeling & Rendering",
    content: (
      <div className="flex flex-col gap-4">
        <p>""""</p>
      </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: aiTestimonialImage,
  // TODO: change aiImageTwo to real generate image
  imageSrcCollection: [aiTestimonialImage, aiImageOne, aiImageTwo],
  testimonials: [
    {
      name: "",
      text: `A photograph of a busy street in a downtown area, 
      with buildings and traffic in the background, 
      during the golden hour with warm, orange lighting, 
      and shot with a tilt-shift lens using a 24mm lens. (臺北市敦化南路一段)`,
      image: "",
    },
    {
      name: "",
      text: `A sketch of a modern building street view captured at dusk with 
      a warm orange light, showcasing the busy street with pedestrians 
      and vehicles passing by, in the bustling city of Tokyo, 
      Japan. (忠孝復興 SOGO)`,
      image: "",
    },
    {
      name: "",
      text: `A photograph of an intersection on a street, 
      showcasing the revitalization efforts taken by the city. 
      The photo should include newly planted trees and modern 
      buildings replacing the old ones, and a bus route passing 
      through the intersection, highlighting the improved public 
      transportation infrastructure. during the golden hour with warm, 
      orange lighting, and shot with a tilt-shift lens 
      using a 24mm lens. (民權東路二段)`,
      image: "",
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: "Get in touch.",
  description:
    "Here is a good spot for a message to your readers to let them know how best to reach out to you.",
  items: [
    {
      type: ContactType.Email,
      text: "johnsonafool@gmail.com",
      href: "mailto:johnson@gmail.com",
    },
    {
      type: ContactType.Location,
      text: "Taipei, Taiwan",
      href: "https://www.google.ca/maps/place/%E5%8F%B0%E5%8C%97%E5%B8%82/@25.0854061,121.5615012,11z",
    },
    {
      type: ContactType.Github,
      text: "johnsonafool",
      href: "https://github.com/johnsonafool",
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {
    label: "Github",
    Icon: GithubIcon,
    href: "https://github.com/johnsonafool",
  },
  {
    label: "Stack Overflow",
    Icon: StackOverflowIcon,
    href: "https://stackoverflow.com/users/19559608/johnson",
  },
  {
    label: "LinkedIn",
    Icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/hungyuan/",
  },
  // {
  //   label: "Instagram",
  //   Icon: InstagramIcon,
  //   href: "https://www.instagram.com/tbakerx/",
  // },
  {
    label: "Twitter",
    Icon: TwitterIcon,
    href: "https://twitter.com/johnsonafooll",
  },
];
