// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({
//     header: {
//       h1: "Projects.",
//     },
//     projects: [
//       {
//         title: "Grateful Dev",
//         slug: "grateful-dev",
//         url: "https://grateful-dev.com",
//         target: "_self",
//         client: "me",
//         isActive: true,
//         type: "Portfolio App",
//         description: "A complete overhaul of my portfolio.",
//         blurb: "Next.js - React - TypeScript - CSS Modules - Vercel",
//         cats: [
//           "Branding",
//           "Design",
//           "Copywriting",
//           "Development",
//           "Deployment",
//         ],
//         images: {
//           thumb: "/assets/images/projects/grateful-dev/thumb01.png",
//           imageSet: [
//             "/assets/images/projects/grateful-dev/thumb01.png",
//             "/assets/images/projects/grateful-dev/thumb02.png",
//             "/assets/images/projects/grateful-dev/thumb03.png",
//           ],
//         },
//         techs: [
//           {
//             category: "Languages",
//             items: [
//               "CSS3",
//               "HTML5",
//               "TypeScript",
//             ],
//           },
//           {
//             category: "FE Frameworks",
//             items: [
//               "Next.js",
//               "React",
//             ],
//           },
//           {
//             category: "Styling Tools",
//             items: [
//               "Tailwind",
//               "CSSModules",
//             ],
//           },
//           {
//             category: "Data Sources",
//             items: [
//               "JSON",
//             ],
//           },
//           {
//             category: "Design Tools",
//             items: [
//               "Figma",
//             ],
//           },
//           {
//             category: "Development Tools",
//             items: [
//               "Storybook",
//             ],
//           },
//           {
//             category: "Version Control",
//             items: [
//               "Git",
//             ],
//           },
//           {
//             category: "Hosting / CI/CD",
//             items: [
//               "Vercel",
//             ],
//           },
//         ],
//       },
//       {
//         title: "AI Cattle Monitoring",
//         slug: "ai-cattle-monitoring",
//         client: "The Main Branch",
//         isActive: false,
//         type: "AI Cattle Monitoring System",
//         description: "Feedlots and AI monitoring. Cool stuff.",
//         blurb: "Next.js - React - TypeScript - CSS Modules",
//         cats: [
//           "Design",
//           "Development",
//         ],
//         // images: {
//         //   thumb: "/assets/images/projects/grateful-dev/thumb01.png",
//         //   imageSet: [
//         //     "/assets/images/projects/grateful-dev/thumb01.png",
//         //     "/assets/images/projects/grateful-dev/thumb02.png",
//         //     "/assets/images/projects/grateful-dev/thumb03.png",
//         //   ],
//         // },
//         techs: [
//           {
//             category: "Languages",
//             items: [
//               "CSS3",
//               "JavaScript",
//               "TypeScript",
//             ],
//           },
//           {
//             category: "FE Frameworks",
//             items: [
//               "Next.js",
//               "React",
//               "React Native",
//             ],
//           },
//           {
//             category: "Styling Tools",
//             items: [
//               "CSSModules",
//               "Emotion",
//             ],
//           },
//           {
//             category: "Data Sources",
//             items: [
//               "JSON",
//               "REST APIs",
//             ],
//           },
//           {
//             category: "Design Tools",
//             items: [
//               "Figma",
//             ],
//           },
//           {
//             category: "Version Control",
//             items: [
//               "Git",
//             ],
//           },
//         ],
//       },
//       {
//         title: "Ag Monitoring Platform",
//         slug: "agriculture-monitoring",
//         client: "The Main Branch",
//         isActive: false,
//         type: "Ag Monitoring System",
//         description: "Field-mounted sensors and AI monitoring for the breadbasket.",
//         blurb: "Next.js - React - JS - React Native - PostgreSQL",
//         cats: [
//           "Design",
//           "Development",
//         ],
//         // images: {
//         //   thumb: "/assets/images/projects/grateful-dev/thumb01.png",
//         //   imageSet: [
//         //     "/assets/images/projects/grateful-dev/thumb01.png",
//         //     "/assets/images/projects/grateful-dev/thumb02.png",
//         //     "/assets/images/projects/grateful-dev/thumb03.png",
//         //   ],
//         // },
//         techs: [
//           {
//             category: "Languages",
//             items: [
//               "CSS3",
//               "JavaScript",
//             ],
//           },
//           {
//             category: "FE Frameworks",
//             items: [
//               "Next.js",
//               "React",
//               "React Native",
//             ],
//           },
//           {
//             category: "Styling Tools",
//             items: [
//               "CSSModules",
//             ],
//           },
//           {
//             category: "Data Sources",
//             items: [
//               "PostgreSQL",
//             ],
//           },
//           {
//             category: "Design Tools",
//             items: [
//               "Figma",
//             ],
//           },
//           {
//             category: "Version Control",
//             items: [
//               "Git",
//             ],
//           },
//         ],
//       },
//     ],
//   });
// }
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    header: {
      h1: "Projects.",
    },
    projects: [
      {
        title: "Grateful Dev",
        slug: "grateful-dev",
        client: "me",
        thumb: "/assets/images/projects/grateful-dev/thumb01.png",
        description: "My personal portfolio site, currently and always under active development.",
        stack: "Next.js (App Router) - React 19 - TypeScript - CSS Modules",
        aspects: [
          {
            label: "Data",
            display: "Served through internal API routes, currently hardcoded, but set up for CMS/database integration.",
          },
        ],
      },
      {
        title: "Ag Monitoring Platform",
        slug: "ag-monitoring-platform",
        client: "The Main Branch",
        description: "A platform allowing farm operators and customers to remotely monitor crops via a network of cameras.",
        stack: "Next.js frontend + Node.js/Express backend + PostgreSQL",
        aspects: [
          {
            label: "Camera management",
            display: 'Tracks field cameras with configurable image capture rates, and stores snapshots taken during runs',
          },
          {
            label: "Field runs & metrics",
            display: 'Records timed runs over fields, capturing images and associated metrics (likely crop health data)',
          },
          {
            label: "Multi-tenant",
            display: 'Supports multiple customers, each with farms and fields, with role-based account access',
          },
          {
            label: "Auth",
            display: 'JWT-based auth with access/refresh tokens, cookies, and password reset via email',
          },
          {
            label: "Localization",
            display: 'English and Portuguese translations',
          },
        ],
      },
      {
        title: "Ag Monitoring Mobile App",
        slug: "ag-monitoring-mobile-app",
        client: "The Main Branch",
        description: "Helps farmers/agronomists monitor crop fields by viewing camera-captured images from field cameras, tracking irrigation pivot runs, and analyzing crop health metrics.",
        stack: "React Native - React Navigation - Formik - React Native Paper",
        aspects: [
          {
            label: "Farm/Field management",
            display: "Select farms and fields, view associated data",
          },
          {
            label: "Camera monitoring",
            display: "Browse images captured by field-mounted cameras",
          },
          {
            label: "Pivot image viewer",
            display: "View images from irrigation pivot passes",
          },
          {
            label: "Metrics",
            display: "View field-level analytics/metrics per run",
          },
          {
            label: "Auth",
            display: "Login, signup, forgot/reset password flows",
          },
          {
            label: "Localization",
            display: "English and Portuguese",
          },
          {
            label: "Maps",
            display: "Uses react-native-maps with supercluster for clustering markers",
          },
        ],
      },
      {
        title: "Barn Management Platform",
        slug: "barn-management-platform",
        client: "The Main Branch",
        description: "A SaaS platform for horse barn management with camera monitoring capabilities.",
        stack: "React - Redux - React Query - Emotion - Styled Components - Node.js/Express - PostgreSQL - Prisma",
        aspects: [
          {
            label: "Auth",
            display: "Cookie-based auth with password reset and invite flows",
          },
          {
            label: "Barn management",
            display: "Manages horses, stalls, and barns",
          },
          {
            label: "Multiple user roles",
            display: "Owners, trainers, and vets, each with different routes and permissions",
          },
          {
            label: "IP Camera monitoring",
            display: "In-stall integration, capturing periodic snapshots and supporting live video streaming",
          },
        ],
      },
      {
        title: "Barn Management Mobile App",
        slug: "barn-management-mobile-app",
        client: "The Main Branch",
        description: "An application for managing equestrian facilities, letting barn staff and admins monitor horses, stalls, and barns with integrated IP camera support.",
        stack: "React - Expo - React Navigation - TanStack Query - Formik",
        aspects: [
          {
            label: "Manage horses, stalls",
            display: "Add, edit, and archive horses and stalls, assign horses to stalls, and track barn inventory",
          },
          {
            label: "Staff management",
            display: "Manage staff accounts, roles, and permissions for barn management",
          },
          {
            label: "Vet requests",
            display: "Submit veterinary services for horses.",
          },
        ],
      },
      {
        title: "Field Ops Management",
        slug: "field-ops-management",
        client: "The Main Branch",
        description: "A job/crew management platform for a utility line work company, used by foremen and field crews to track pole work.",
        stack: "React - React Router - Bootstrap - Node.js/Express - PostgreSQL",
        aspects: [
          {
            label: "Auth",
            display: "Role-based access for foremen and field crew, with cookie-based auth and password reset",
          },
          {
            label: "Job management",
            display: "Create, update, and track jobs for field crews, including job status and assignments",
          },
          {
            label: "Document management",
            display: "Upload, view, and manage documents related to field jobs, such as permits and reports",
          },
        ],
      },
      {
        title: "Equestrian Competition Management",
        slug: "equestrian-competition-management",
        client: "The Main Branch",
        description: "An admin platform for running youth horse shows, with a companion mobile-style interface for riders and families.",
        stack: "React - PrimeReact UI - SCSS/CSS Modules - Emotion - Node.js/Express - Prisma - PostgreSQL",
        aspects: [
          {
            label: "Multi-tenant",
            display: "Supports multiple shows, each with their own divisions, riders, and horses",
          },
          {
            label: "Role-based access",
            display: "Admins can manage shows, divisions, riders, and horses, while riders can view their own data and show info",
          },
          {
            label: "Show management",
            display: "Create and manage shows, divisions, riders, and horses, with scheduling and results tracking",
          },
        ],
      },
      {
        title: "Equestrian Competition Judging App",
        slug: "equestrian-competition-judging-app",
        client: "The Main Branch",
        description: "Judging app built for judges and show officials to manage and score competitors at youth equestrian shows.",
        stack: "React Native - React Navigation - TanStack Query - Formik - JWT-based authentication",
        aspects: [
          {
            label: "Auth",
            display: "JWT-based authentication for judges and show officials",
          },
          {
            label: "Show management",
            display: "View shows, divisions, riders, and horses, with scheduling and results tracking",
          },
          {
            label: "Scoring interface",
            display: "Intuitive interface for judges to score competitors during shows",
          },
          {
            label: "Horse management",
            display: "View and manage horse information, including rider assignments and show history",
          }
        ],
      },
      {
        title: "Equestrian Competition Rider App",
        slug: "equestrian-competition-rider-app",
        client: "The Main Branch",
        description: "A platform for equestrian show management, specifically from the rider/member perspective.",
        stack: "React Native - TS - React Navigation - TanStack Query - Formik - JWT-based authentication - React Native Paper",
        aspects: [
          {
            label: "Show & class management ",
            display: "Browsing show schedules, registering for classes, viewing class details and live scoring.",
          },
          {
            label: "Horse management",
            display: "Adding/editing horses, uploading documents and photos",
          },
          {
            label: "Results & awards",
            display: "Viewing scores, ribbons, award walls",
          },
          {
            label: "Club features",
            display: "Club meetings, officer info, leadership",
          },
          {
            label: "Profile management",
            display: "For both members and custodians (e.g. parents managing young riders)",
          },
          {
            label: "Notifications & chat",
            display: "Push notifications and messaging",
          },
        ],
      },
      {
        title: "Potato Inspection System",
        slug: "potato-inspection-system",
        client: "The Main Branch",
        description: "Real-time AI-powered potato inspection system to count and classify potatoes.",
        stack: "Kivy - KivyMD - Kivy Garden - Python",
        aspects: [
          {
            label: "Real-time image capture and processing",
            display: "Captures images of potatoes on a conveyor belt and processes them in real-time for inspection",
          },
          {
            label: "AI-based classification",
            display: "Uses a machine learning model to classify potatoes based on quality and type",
          },
          {
            label: "Session tagging and data storage",
            display: "Tags inspection data by session and stores it for later review",
          },
          {
            label: "Dashboard for data review",
            display: "Provides a dashboard interface for reviewing inspection data and images, with filtering and analysis capabilities",
          },
        ],
      },
      {
        title: "AI Phone Assistant",
        slug: "ai-phone-assistant",
        client: "The Main Branch",
        description: "An analytics and reporting dashboard for an AI phone assistant for automotive dealerships",
        stack: "Next.js - React - JS - Chart.js - Auth0 - Snowflake - PrimeReact UI",
        aspects: [
          {
            label: "Dashboard",
            display: "KPI stats (call handling rate, booking opportunities, rule-based transfers, etc.)",
          },
          {
            label: "Call Logs",
            display: "Browsable/filterable log of all calls with audio playback and issue reporting",
          },
          {
            label: "Campaigns",
            display: "Manage outbound calling campaigns and contact lists",
          },
          {
            label: "Action Center",
            display: "Task queue for follow-up actions",
          },
          {
            label: "Group Performance",
            display: "Multi-dealer rollup views",
          },
          {
            label: "Settings",
            display: "Per-tenant configuration",
          },
        ],
      },
    ],
  });
}