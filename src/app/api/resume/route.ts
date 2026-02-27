import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    header: {
      h1: "Ryan Peterson.",
      start: "UI Engineer.",
      mid: {
        text: "Frontend Software Dev. React enthusiast. CSS superhero. Overall nerd.",
      },
      end: "I'm a versatile UI Engineer that has straddled the line between design and development for 20 years. I've been labeled as a designer, frontend developer, software engineer, etc. No matter the title, I love building clean, organized code that creates parity between beautifully crafted designs and streamlined functional applications. Figma, CSS, and React are my best friends.",
    },
    workExperiences: [
      {
        id: 1,
        company: "The Main Branch",
        description: "A full-service technology consulting firm helping businesses streamline operations, reduce costs, and create new revenue opportunities with AI and emerging tech.",
        logo: "/assets/images/logo-tmb.svg",
        contact: {
          url: "https://themainbranch.com/",
        },
        position: [
          "Frontend Engineer",
          "Software Developer",
          "CSS Engineer",
          "Designer",
          "Coding Mentor"
        ],
        tenure: {
          start: "2021-04-15T00:00:00Z",
          end: "2026-01-15T00:00:00Z"
        },
        responsibilities: [
          "Design and develop responsive, accessible web applications using React and Next.js",
          "Architect and implement component-based UIs with a strong focus on CSS craftsmanship (modern CSS features, CSS Modules, fluid typography, color systems)",
          "Build and maintain cross-platform mobile applications using React Native",
          "Collaborate closely with design teams to achieve high-fidelity Figma-to-code parity",
          "Develop and consume RESTful APIs and integrate data-driven components",
          "Implement design systems including color tokens, typography scales, and responsive layout patterns",
          "Create engaging micro-interactions and visual effects (animations, transitions, effects)",
          "Write clean, maintainable JavaScript/TypeScript across the full frontend stack",
          "Establish and enforce code quality standards via linting and best practices",
          "Mentor junior developers and contribute to technical decision-making",
          "Optimize application performance and ensure cross-browser/device compatibility",
          "Contribute to progressive web app (PWA) features including manifests, icons, and offline support",
        ],
        tech: [
          {
            name: "React",
            icon: "/assets/images/icon-react.svg",
          },
          {
            name: "React Native",
            icon: "/assets/images/icon-react-native.svg",
          },
          {
            name: "CSS3",
            icon: "/assets/images/icon-css.svg",
          },
          {
            name: "JavaScript",
            icon: "/assets/images/icon-js.svg",
          },
          {
            name: "TypeScript",
            icon: "/assets/images/icon-typescript.svg",
          },
          {
            name: "Bootstrap",
            icon: "/assets/images/icon-bootstrap.svg",
          },
          {
            name: "PrimeReact",
            icon: "/assets/images/icon-primereact.svg",
          },
          {
            name: "Figma",
            icon: "/assets/images/icon-figma.svg",
          },
          {
            name: "Git",
            icon: "/assets/images/icon-github.svg",
          },
          {
            name: "HTML5",
            icon: "/assets/images/icon-html5.svg",
          },
          {
            name: "JSON",
            icon: "/assets/images/icon-json.svg",
          },
          {
            name: "Next.js",
            icon: "/assets/images/icon-nextjs.svg",
          },
          {
            name: "Python",
            icon: "/assets/images/icon-python.svg",
          },
          {
            name: "SASS",
            icon: "/assets/images/icon-sass.svg",
          },
        ]
      },
      {
        id: 2,
        company: "Connections Marketing",
        description: "A full-service digital marketing agency helping clients to realize their goals for achieving success.",
        logo: "/assets/images/logo-cm.svg",
        contact: {
          url: "https://connectionsmarketing.com/",
        },
        position: [
          "Lead Front End Developer",
          "CSS Engineer",
          "Occasional Designer",
          "Contract Programmer/Dev"
        ],
        tenure: {
          start: "2013-12-15T00:00:00Z",
          end: "2020-07-15T00:00:00Z"
        },
        responsibilities: [
          "Led development of numerous projects while determining code base language and CMS best suited for clients' needs",
          "Closely worked with internal designers and project managers to fully understand scope of creative assets to produce applications that match client requirements",
          "Ensured ease-of-use for clients within various CMS back-ends while maintaining professional, best practice code to ensure all developers could understand structure",
          "Built custom, responsive web applications for clients to ensure user retention",
          "Use of frameworks and libraries to boost traffic to client sites while maintaining a small footprint",
          "Co-creation of company-wide client acquisition and development process with a focus on gathering all necessary requirements for project while planning for out-of-scope items",
        ],
        tech: [
          {
            name: "CSS3",
            icon: "/assets/images/icon-css.svg",
          },
          {
            name: "WordPress",
            icon: "/assets/images/icon-wordpress.svg",
          },
          {
            name: "PHP",
            icon: "/assets/images/icon-php.svg",
          },
          {
            name: "jQuery",
            icon: "/assets/images/icon-jQuery.svg",
          },
          {
            name: "JavaScript",
            icon: "/assets/images/icon-js.svg",
          },
          {
            name: "Bootstrap",
            icon: "/assets/images/icon-bootstrap.svg",
          },
          {
            name: "Photoshop",
            icon: "/assets/images/icon-photoshop.svg",
          },
          {
            name: "Figma",
            icon: "/assets/images/icon-figma.svg",
          },
          {
            name: "HTML5",
            icon: "/assets/images/icon-html5.svg",
          },
          {
            name: "JSON",
            icon: "/assets/images/icon-json.svg",
          },
          {
            name: "SASS",
            icon: "/assets/images/icon-sass.svg",
          },
          {
            name: "LESS",
            icon: "/assets/images/icon-less.svg",
          },
          {
            name: "Umbraco",
            icon: "/assets/images/icon-umbraco.svg",
          },
        ]
      },
      {
        id: 3,
        company: "HY Connect",
        description: "A full-service integrated marketing and advertising agency.",
        position: [
          "Web Developer - Contract"
        ],
        tenure: {
          start: "2013-10-15T00:00:00Z",
          end: "2013-12-15T00:00:00Z"
        },
        responsibilities: [
          "Member of development team working on a project for a well-known, international company. Responsible for desktop, tablet and mobile styling in Drupal framework, as well as template file adjustments."
        ],
        // tech: [
        //   {
        //     name: "CSS3",
        //     icon: "/assets/images/icon-css.svg",
        //   },
        // ]
      },
      {
        id: 4,
        company: "SEM Visibility",
        description: "A digital marketing firm specializing in SEO, e-commerce solutions, and development.",
        position: [
          "Sr. Web Developer"
        ],
        tenure: {
          start: "2011-06-15T00:00:00Z",
          end: "2013-09-15T00:00:00Z"
        },
        responsibilities: [
          "Key role in implementing responsive design and development to applications with ﬁxed-widths and tabled formats",
          "Client communication and understanding of technical requirements led to retention and production of new custom website built within WordPress",
          "Successfully integrated payment gateways and a knowledge of ecommerce platforms as sole developer during transition period",
          "Full-time remote working led to self-starting meetings with superiors as well as colleagues within other departments to gain knowledge and cohesion for projects and deadlines "
        ],
        // tech: [
        //   {
        //     name: "CSS3",
        //     icon: "/assets/images/icon-css.svg",
        //   },
        // ]
      },
      {
        id: 5,
        company: "Dealer HD",
        logo: "/assets/images/logo-dhd.svg",
        description: "A digital marketing and advertising agency specializing in services for car dealerships.",
        position: [
          "Web Designer"
        ],
        tenure: {
          start: "2010-06-15T00:00:00Z",
          end: "2010-06-15T00:00:00Z"
        },
        responsibilities: [
          "Created stylized mockups for car dealership websites based on a pre-themed structure of template ﬁles",
          "Incorporated jQuery for DOM manipulation into web applications to alter layouts",
          "Spearheaded project for WordPress based company podcast; design-to-launch lead for all aspects of application"
        ],
        // tech: [
        //   {
        //     name: "CSS3",
        //     icon: "/assets/images/icon-css.svg",
        //   },
        // ]
      },
      {
        id: 6,
        company: "Envisionit",
        logo: "/assets/images/logo-env.svg",
        description: "A digital marketing and advertising agency.",
        contact: {
          url: "https://envisionitagency.com/",
        },
        position: [
          "Web Developer"
        ],
        tenure: {
          start: "2008-03-15T00:00:00Z",
          end: "2010-06-15T00:00:00Z"
        },
        responsibilities: [
          "Key role in revamping structure of websites from table-based to div-based",
          "Integral part of development team working as liaison with design department",
          "Filled in as designer on numerous projects due to background in graphics",
          "Maintained email marketing design and builds for clients"
        ],
        // tech: [
        //   {
        //     name: "CSS3",
        //     icon: "/assets/images/icon-css.svg",
        //   },
        // ]
      },
      {
        id: 7,
        company: "Takeda Pharmaceuticals",
        logo: "/assets/images/logo-takeda.svg",
        description: "A multinational pharmaceuticals company originating in Japan.",
        contact: {
          url: "https://www.takeda.com/",
        },
        position: [
          "Medical Graphics Technologist"
        ],
        tenure: {
          start: "2005-01-15T00:00:00Z",
          end: "2008-03-15T00:00:00Z"
        },
        responsibilities: [
          "Worked with all senior members of MSA (Medical & Scientiﬁc Affairs) department to accomplish interconnected SMART program of audio/video recordings of expert clinician presentations; distributed through SMART intranet",
          "Oversaw all web activity for MSA department",
          "Captained design, planning, and development plan of a Flash-based, ActionScript driven website for MSA and RMSA (Regional Medical & Scientiﬁc Affairs) interactive biography site for each team member"
        ],
        // tech: [
        //   {
        //     name: "CSS3",
        //     icon: "/assets/images/icon-css.svg",
        //   },
        // ]
      },
    ],
  });
}
