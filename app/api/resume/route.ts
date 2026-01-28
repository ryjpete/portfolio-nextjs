export async function GET() {
  const workExperiences = [
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
        "Constructed comprehensive React applications with responsive designs and modern UI/UX patterns.",
        "Developed cross-platform mobile applications with React Native for iOS and Android, integrating native modules and device APIs.",
        "Created Python-based Kivy applications for AI technology products.",
        "Delivered technical mentorship to team members and junior developers.",
        "Enhanced system performance by maintaining and optimizing existing codebases.",
      ],
    },
    // {
    //   id: 2,
    //   company: "Digital Innovations Inc",
    //   position: "Full Stack Developer",
    //   duration: "2021 - 2023",
    //   description: "Developed and maintained full-stack applications with Node.js and React. Collaborated with cross-functional teams to deliver 15+ projects on schedule and mentored 3 junior developers.",
    //   logo: "/assets/images/logo.svg"
    // }
  ];

  return Response.json(workExperiences);
}
