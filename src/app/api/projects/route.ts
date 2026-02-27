import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    h1: "Projects",
    introLeft: "UI Engineer.",
    introRight: "Projects page intro copy...",
  });
}