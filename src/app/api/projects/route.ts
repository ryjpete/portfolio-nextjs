import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    header: {
      h1: "Projects.",
    },
    projects: [
      {
        title: "Grateful Dev",
        client: "me",
        type: "Portfolio App",
        description: "Project built with creativity, good clean code, and a lot of early '90s Pacific Northwest tunes.",
        cats: [
          "Design",
          "Development",
          "Deployment",
        ],
        images: {
          thumb: "/assets/images/projects/proj_grateful-dev.png",
        },
      }
    ],
  });
}