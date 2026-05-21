import { NextResponse } from "next/server";

const PROJECTS = [
  {
    id: 1,
    company: "Personal",
    route: "./projects/grateful-dev",
    logo: "/assets/images/logos/bolt/logo.svg",
    name: "Grateful-Dev.com",
    desc:
      "My personal portfolio site, currently and always under active development.",
    detailedDesc:
      "Personal portfolio site designed and built from scratch — custom branding, logo, and full design system including color tokens, typography, and component architecture. Built with Next.js App Router, React 19, TypeScript, and CSS Modules, with a component library documented in Storybook. Data served through internal API routes, AI-assisted development with GitHub Copilot, and deployed on Vercel with continuous deployment from GitHub.",
    roleDesc:
      "I designed and built this site from scratch, with a focus on clean, modern aesthetics and a unique visual style. The project involved custom branding and logo design, as well as the development of a full design system including color tokens, typography, and component architecture. I also set up a component library documented in Storybook for showcasing UI components.  AI-assisted development was utilized with GitHub Copilot to enhance productivity while maintaining a human-centered approach to design and development.",
    highlights: [
      {
        id: 0,
        label: "Branding",
        entry:
          "Custom logo and branding, with a focus on a clean, modern aesthetic and a unique visual style."
      },
      {
        id: 1,
        label: "Design",
        entry:
          "Custom design and branding, with a focus on typography and a unique visual style."
      },
      {
        id: 2,
        label: "Development",
        entry:
          "Built with Next.js and React, using TypeScript for type safety and CSS Modules for styling."
      },
      {
        id: 3,
        label: "AI Development",
        entry:
          "AI-assisted development using GitHub Copilot, with a focus on leveraging AI for code generation and problem-solving while maintaining a human-centered approach to design and development."
      },
      {
        id: 4,
        label: "Design System",
        entry:
          "Custom design system, focusing on accessibility and reusability."
      },
      {
        id: 5,
        label: "Component Documentation",
        entry:
          "Uses Storybook for documenting and showcasing UI components, with a focus on accessibility and reusability."
      },
      {
        id: 6,
        label: "Data",
        entry:
          "Served through internal API routes, currently hardcoded, but set up for CMS/database integration."
      },
      {
        id: 7,
        label: "Deployment",
        entry:
          "Hosted on Vercel with continuous deployment from GitHub."
      },
    ],
    tech: [
      {
        name: "Next.js",
        icon: "/assets/images/tech/icon-nextjs.svg",
      },
      {
        name: "React",
        icon: "/assets/images/tech/icon-react.svg",
      },
      {
        name: "TypeScript",
        icon: "/assets/images/tech/icon-typescript.svg",
      },
      {
        name: "CSS Modules",
        icon: "/assets/images/tech/icon-css-modules.svg",
      },
      {
        name: "Figma",
        icon: "/assets/images/tech/icon-figma.svg",
      },
      {
        name: "Storybook",
        icon: "/assets/images/tech/icon-storybook.svg",
      },
      {
        name: "Git",
        icon: "/assets/images/tech/icon-git.svg",
      },
      {
        name: "GitHub",
        icon: "/assets/images/tech/icon-github.svg",
      },
      {
        name: "Vercel",
        icon: "/assets/images/tech/icon-vercel.svg",
      },
    ],
    cats: [
      "Web",
      "Design",
    ],


    // slug: "grateful-dev",
    // url: "https://grateful-dev.com",
    // isActive: true,
    // stack: ["Next.js", "React", "TypeScript", "CSS Modules", "Storybook", "Vercel"],
    // thumb: "/assets/images/projects/grateful-dev/thumb01.png",
    // cats: ["Branding", "Design", "Copywriting", "Development", "Deployment"],
  },
  // {
  //   id: 2,
  //   company: "The Main Branch",
  //   route: "./projects/ai-cattle-monitoring",
  //   logo: "/assets/images/logo-tmb.svg",
  //   name: "Livestock Management Platform",
  //   desc:
  //     "Livestock and live intelligence meet.",
  //   detailedDesc:
  //     "This project involved designing and building a system of field-mounted sensors to monitor cattle health and behavior, with AI algorithms analyzing the data to provide insights and alerts to farm operators. The system was built using Next.js App Router, Node.js, and PostgreSQL. The project also involved custom hardware integration for the sensors, as well as a focus on scalability and reliability for deployment in remote agricultural settings.",
  //     // "This is a livestock monitoring platform consisting of a React Native mobile app and a Node.js/Express backend. The mobile app supports producer and vet user roles, providing features like real-time pen/cattle monitoring, live feeds, map views, and vet-to-producer chat. It uses React Query for data fetching, Socket.IO for real-time updates, and GPS location tracking. The admin side includes a separate React web client alongside end-to-end Playwright tests.",
  //     // "A livestock monitoring platform with a React Native mobile app for producers and vets — featuring real-time pen/cattle monitoring, live feeds, map views, and in-app chat. Backed by a Node.js/Express API with Socket.IO for real-time updates, React Query for data fetching, and GPS tracking, plus a React web admin client and end-to-end Playwright tests.",
  //   roleDesc:
  //     "Primarily frontend development on this project, I played a key role in building and maintaining the web application interface using Next.js and React, translating requirements into responsive, functional UI while collaborating with backend and hardware teams.",
  //   highlights: [
  //     {
  //       id: 0,
  //       label: "Branding",
  //       entry:
  //         "Custom logo and branding, with a focus on a clean, modern aesthetic and a unique visual style."
  //     }
  //   ],
  //   tech: [
  //     {
  //       name: "Next.js",
  //       icon: "/assets/images/tech/icon-nextjs.svg",
  //     },
  //     {
  //       name: "React",
  //       icon: "/assets/images/tech/icon-react.svg",
  //     },
  //     {
  //       name: "React Native",
  //       icon: "/assets/images/tech/icon-react-native.svg",
  //     },
  //     {
  //       name: "TypeScript",
  //       icon: "/assets/images/tech/icon-typescript.svg",
  //     },
  //     {
  //       name: "CSS Modules",
  //       icon: "/assets/images/tech/icon-css-modules.svg",
  //     },
  //     {
  //       name: "Figma",
  //       icon: "/assets/images/tech/icon-figma.svg",
  //     },
  //     {
  //       name: "Git",
  //       icon: "/assets/images/tech/icon-git.svg",
  //     },
  //     {
  //       name: "GitHub",
  //       icon: "/assets/images/tech/icon-github.svg",
  //     },
  //   ],
  //   cats: [
  //     "Web",
  //   ],
  // },
  // {
  //   id: 3,
  //   company: "The Main Branch",
  //   route: "./projects/agriculture-monitoring",
  //   logo: "/assets/images/logo-tmb.svg",
  //   name: "Agriculture Monitoring System",
  //   desc:
  //     "A platform allowing farm operators and customers to remotely monitor crops via a network of cameras.",
  //   highlights:
  //     "",
  //   tech: [
  //     {
  //       name: "Next.js",
  //       icon: "/assets/images/tech/icon-nextjs.svg",
  //     },
  //     {
  //       name: "React",
  //       icon: "/assets/images/tech/icon-react.svg",
  //     },
  //     {
  //       name: "TypeScript",
  //       icon: "/assets/images/tech/icon-typescript.svg",
  //     },
  //     {
  //       name: "CSS Modules",
  //       icon: "/assets/images/tech/icon-css-modules.svg",
  //     },
  //     {
  //       name: "Figma",
  //       icon: "/assets/images/tech/icon-figma.svg",
  //     },
  //     {
  //       name: "Git",
  //       icon: "/assets/images/tech/icon-git.svg",
  //     },
  //     {
  //       name: "GitHub",
  //       icon: "/assets/images/tech/icon-github.svg",
  //     },
  //   ],
  //   cats: [
  //     "Web",
  //   ],
  // },
  // {
  //   id: 4,
  //   company: "The Main Branch",
  //   route: "./projects/agriculture-monitoring",
  //   logo: "/assets/images/logo-tmb.svg",
  //   name: "Agriculture Monitoring System",
  //   desc:
  //     "Field-mounted sensors and AI monitoring for the breadbasket.",
  //   highlights:
  //     "",
  //   tech: [
  //     {
  //       name: "Next.js",
  //       icon: "/assets/images/tech/icon-nextjs.svg",
  //     },
  //     {
  //       name: "React",
  //       icon: "/assets/images/tech/icon-react.svg",
  //     },
  //     {
  //       name: "JavaScript",
  //       icon: "/assets/images/tech/icon-js.svg",
  //     },
  //     {
  //       name: "CSS Modules",
  //       icon: "/assets/images/tech/icon-css-modules.svg",
  //     },
  //     {
  //       name: "Figma",
  //       icon: "/assets/images/tech/icon-figma.svg",
  //     },
  //     {
  //       name: "Git",
  //       icon: "/assets/images/tech/icon-git.svg",
  //     },
  //     {
  //       name: "GitHub",
  //       icon: "/assets/images/tech/icon-github.svg",
  //     },
  //     // {
  //     //   name: "PostgreSQL",
  //     //   icon: "/assets/images/tech/icon-postgresql.svg",
  //     // },
  //   ],
  //   cats: [
  //     "Web",
  //   ],
  // },
];

export async function GET() {
  return NextResponse.json({
    projects: {
      header: {
        h1: "Projects",
        title: "Selected projects I've lent my talents to.",
      },
      items: PROJECTS,
    },
    "mobile-apps": {
      header: {
        h1: "Projects",
        title: "Selected projects I've lent my talents to.",
      },
      items: PROJECTS,
    },
    "web-apps": {
      header: {
        h1: "Projects",
        title: "Selected projects I've lent my talents to.",
      },
      items: PROJECTS,
    },
    design: {
      header: {
        h1: "Projects",
        title: "Selected projects I've lent my talents to.",
      },
      items: PROJECTS,
    },
    "all-projects": {
      header: {
        h1: "All Projects",
        title: "Selected projects I've lent my talents to.",
      },
      items: PROJECTS,
    },
  });
}