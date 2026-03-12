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
        url: "https://grateful-dev.com",
        target: "_self",
        client: "me",
        type: "Portfolio App",
        blurb: "Project built with creativity, good clean code, and a lot of early '90s Pacific Northwest tunes.",
        description: "A personal portfolio site using the latest and greatest.",
        cats: [
          "Design",
          "Development",
          "Deployment",
        ],
        images: {
          thumb: "/assets/images/projects/proj_grateful-dev.png",
          imageSet: [
            "/assets/images/projects/grateful-dev/thumb01.png",
            "/assets/images/projects/grateful-dev/thumb02.png",
            "/assets/images/projects/grateful-dev/thumb03.png",
          ],
        },
        techs: {
          "Core Framework": [
            "Next.js (v16 || App Router)",
            "React (v19+)",
            "TypeScript",
          ],
          "Styling": [
            "CSS Modules",
            "Custom design system (color tokens, typography scale, fluid spacing)",
          ],
          "Data": [
            "Custom REST API routes via Next.js API handlers",
            "Static JSON (served via API routes)",
            "Live image feed via proxied API route (NASA Hubble Site API)",
          ],
          "Dev Tooling": [
            "Storybook",
            "ESLint",
            "TurboPack (Next.js dev bundler)",
          ],
          "Deployment": [
            "GitHub (source control)",
            "Vercel (hosting & CI/CD)",
          ],
        },
      }
    ],
  });
}