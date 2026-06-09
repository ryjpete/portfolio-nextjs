import { NextResponse } from "next/server";

import { iconCssModules, iconFigma, iconGit, iconNextJs, iconReact, iconReactNative, iconStorybook, iconTypeScript, iconVercel } from "../resume/icons";

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
        svg: iconNextJs,
      },
      {
        name: "React",
        svg: iconReact,
      },
      {
        name: "TypeScript",
        svg: iconTypeScript,
      },
      {
        name: "CSS Modules",
        svg: iconCssModules,
      },
      {
        name: "Figma",
        svg: iconFigma,
      },
      {
        name: "Storybook",
        svg: iconStorybook,
      },
      {
        name: "Git",
        // icon: "/assets/images/tech/icon-git.svg",
        svg: iconGit,
      },
        // {
        //   name: "GitHub",
        //   icon: "/assets/images/tech/icon-github.svg",
        // },
      {
        name: "Vercel",
        svg: iconVercel,
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
  {
    id: 2,
    company: "The Main Branch",
    route: "./projects/ai-cattle-monitoring",
    logo: "/assets/images/logo-tmb.svg",
    name: "Livestock Management Platform",
    desc:
      "Livestock and live intelligence meet.",
    detailedDesc:
      "Cattle health monitoring and management platform spanning a web portal and mobile app (iOS & Android) for agricultural producers, veterinarians, and administrators. Supports multiple user roles with distinct portals — producers manage pens and monitor herd health in real time with live camera feeds, vets conduct remote consultations and track cattle history via an integrated chat system, and admins oversee customers, locations, and system users. Mobile app features biometric login, GPS-based location services, push notifications, live camera streaming, IoT device management, and background automation.",
    roleDesc:
      "Served as the primary styling engineer on a collaborative team across both the React web portal and React Native mobile app, owning the design system, visual consistency, and component styling across the producer, vet, and admin portals. Built and organized the reusable component library for both platforms, established cross-platform style conventions, and maintained frontend file structure throughout the project.",
    // highlights: [
    //   {
    //     id: 0,
    //     label: "Branding",
    //     entry:
    //       "Custom logo and branding, with a focus on a clean, modern aesthetic and a unique visual style."
    //   }
    // ],
    tech: [
      {
        name: "Next.js",
        // icon: "/assets/images/tech/icon-nextjs.svg",
        svg: iconNextJs,
      },
      {
        name: "React",
        // icon: "/assets/images/tech/icon-react.svg",
        svg: iconReact,
      },
      {
        name: "React Native",
        // icon: "/assets/images/tech/icon-react-native.svg",
        svg: iconReactNative,
      },
      {
        name: "TypeScript",
        // icon: "/assets/images/tech/icon-typescript.svg",
        svg: iconTypeScript,
      },
      {
        name: "CSS Modules",
        // icon: "/assets/images/tech/icon-css-modules.svg",
        svg: iconCssModules,
      },
      {
        name: "Figma",
        // icon: "/assets/images/tech/icon-figma.svg",
        svg: iconFigma,
      },
      {
        name: "Git",
        // icon: "/assets/images/tech/icon-git.svg",
        svg: iconGit,
      },
      // {
      //   name: "GitHub",
      //   // icon: "/assets/images/tech/icon-github.svg",
      //   svg: iconGitHub,
      // },
    ],
    cats: [
      "Web",
    ],
  },
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