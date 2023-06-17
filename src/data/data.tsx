import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

import GithubIcon from "../components/Icon/GithubIcon";
import InstagramIcon from "../components/Icon/InstagramIcon";
import LinkedInIcon from "../components/Icon/LinkedInIcon";
import StackOverflowIcon from "../components/Icon/StackOverflowIcon";
import TwitterIcon from "../components/Icon/TwitterIcon";
import aiTestimonialImage from "../images/generativeai.png";
import heroImage from "../images/header-background.webp";
import porfolioImageNpcSite from "../images/portfolio/npc-site.jpg";
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
// import profilepic from "../images/profilepic.jpg";
import profilepic from "../images/profile.jpg";
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
  imageSrc: heroImage,
  name: `I'm Johnson Tseng.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a college student from Taipei, interesting in{" "}
        <strong className="text-stone-100">Full Stack Development</strong>,
        currently working at{" "}
        <strong className="text-stone-100">City Science, MIT Media Lab</strong>{" "}
        transforming cities through innovative research and empowering decision
        makers for urban progress.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my leisure, you can catch me embark upon{" "}
        <strong className="text-stone-100">Outdoor Activities</strong>,
        immersing on{" "}
        <strong className="text-stone-100">Postmodernist Literature</strong>, or
        engaging in{" "}
        <strong className="text-stone-100">Volunteering Actives</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: "/assets/resume.pdf",
      text: "Resume",
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    // {
    //   href: "/assets/_resume.pdf",
    //   text: "Portfolio",
    //   primary: true,
    //   Icon: ArrowDownTrayIcon,
    // },
    {
      href: `#${SectionId.Contact}`,
      text: "Contact",
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am a senior year student currently working in MIT Media Lab Lab @ Taipei, 
  My previous programming experience including  C, C#, Python, TypeScript, SQL, Git, Docker, React.js, GraphQL, 
  Tensorflow, FastAPI, Unity`,
  aboutItems: [
    { label: "Location", text: "Taipei, Taiwan", Icon: MapIcon },
    { label: "Age", text: "21", Icon: CalendarIcon },
    // { label: "Nationality", text: "Taiwanese", Icon: FlagIcon },
    {
      label: "Interests",
      text: "Startups, Outdoor Activities, Cooking, Fitness, Reading",
      Icon: SparklesIcon,
    },
    {
      label: "Study",
      text: "National Taipei University of Technology",
      Icon: AcademicCapIcon,
    },
    {
      label: "Employment",
      text: "City Science, MIT Media Lab",
      Icon: BuildingOffice2Icon,
    },
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
    title: "Project title 1",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage1,
  },
  {
    title: "Project title 2",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage2,
  },
  {
    title: "Project title 3",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage3,
  },
  {
    title: "Project title 4",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage4,
  },
  {
    title: "NTUT Programming Club Animated Introduction",
    description:
      "Introduce our club using scroll animation. Built with Vue.js and Vite",
    url: "https://ntut-club-animation.vercel.app",
    image: porfolioImageNpcSite,
  },
  {
    title: "Project title 6",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage6,
  },
  {
    title: "Project title 7",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage7,
  },
  {
    title: "Project title 8",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage8,
  },
  {
    title: "Project title 9",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage9,
  },
  {
    title: "Project title 10",
    description: "Give a short description of your project here.",
    url: "https://timbaker.me",
    image: porfolioImage10,
  },
  {
    title: "Project title 11",
    description: "Give a short description of your project here.",
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
      <p>
        Describe your experience at school, what you learned, what useful skills
        you have acquired etc.
      </p>
    ),
  },
  // {
  //   date: "March 2003",
  //   location: "School of Business",
  //   title: "What did you study 101",
  //   content: (
  //     <p>
  //       Describe your experience at school, what you learned, what useful skills
  //       you have acquired etc.
  //     </p>
  //   ),
  // },
];

export const experience: TimelineItem[] = [
  {
    date: "March 2010 - Present",
    location: "Awesome Development Company",
    title: "Senior UX Engineer",
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies
        you have been working with, and anything else that would be useful for
        an employer to know.
      </p>
    ),
  },
  {
    date: "March 2007 - February 2010",
    location: "Garage Startup Studio",
    title: "Junior bug fixer",
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies
        you have been working with, and anything else that would be useful for
        an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: aiTestimonialImage,
  testimonials: [
    {
      name: "John Doe",
      text: "A photograph of a busy street in a downtown area, with buildings and traffic in the background, during the golden hour with warm, orange lighting, and shot with a tilt-shift lens using a 24mm lens. (臺北市敦化南路1段)",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg",
    },
    {
      name: "Jane Doe",
      text: "A sketch of a modern building street view captured at dusk with a warm orange light, showcasing the busy street with pedestrians and vehicles passing by, in the bustling city of Tokyo, Japan. (忠孝復興SOGO)",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg",
    },
    {
      name: "Someone else",
      text: "A photograph of an intersection on a street, showcasing the revitalization efforts taken by the city. The photo should include newly planted trees and modern buildings replacing the old ones, and a bus route passing through the intersection, highlighting the improved public transportation infrastructure. during the golden hour with warm, orange lighting, and shot with a tilt-shift lens using a 24mm lens. (37民權東路二段)",
      image:
        "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg",
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
    // {
    //   type: ContactType.Instagram,
    //   text: "@tbakerx",
    //   href: "https://www.instagram.com/tbakerx/",
    // },
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
