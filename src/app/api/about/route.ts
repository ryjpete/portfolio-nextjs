import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    header: {
      h1: "Me, as a dev.",
      start: "I'm a UI Engineer.",
      mid: {
        text: "If we're talking titles, I've been a:",
        list: ['Frontend Developer', 'Lead Frontend Developer', 'Contract Web Developer', 'Sr. Web Developer', 'Web Designer', 'Medical Graphics Technologist'],
      },
      end: {
        list: ["Wild how many titles there are for what I've done for the past two decades.","Here's the skinny: I'm a UI Engineer that loves to build and style. Give me a mockup, some React, a great deal of clean CSS, and all the Blind Melon a guy could ask for, and I'm good.","My career goal has always been parity between design and build. Creatives work too hard to see their vision built clumsily. And I take too much pride in my work to half-ass it."],
      },
    },
  });
}