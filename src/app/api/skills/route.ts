export async function GET() {
  const skills = [
    {
      name: "CSS3",
      level: 1,
      op: "It's my jam. I've met a bunch of frontend devs who can't stand styling. For whatever reason, I love it. I've been known to wow people with my CSS skills."
    },
    {
      name: "HTML5",
      level: 1,
      op: "It's the backbone of the web. And you know it. I feel like it's not even worth mentioning because of its ubiquity, but then someone would mention it not being a skill. So here we are."
    },
    {
      name: "React",
      level: 1,
      op: "React is my bread and butter. Since the moment I discovered it I have been hooked."
    },
    {
      name: "Next.js",
      level: 1,
      op: "Like everyone and their mother, I also started with Create React App. And I, too, moved on to Next.js. It's my go-to framework for React development."
    },
    {
      name: "JavaScript",
      level: 1,
      op: ""
    },
    {
      name: "TypeScript",
      level: 1,
      op: ""
    },
    {
      name: "React Native",
      level: 1,
    },
    {
      name: "Figma",
      level: 1,
    },
    {
      name: "Git",
      level: 1,
    },
    {
      name: "API Implementation",
      level: 1,
    },
    {
      name: "Bootstrap",
      level: 1,
    },
    {
      name: "Material UI",
      level: 1,
    },
    {
      name: "Bulma",
      level: 3,
    },
    {
      name: "Emotion",
      level: 1,
    },
    {
      name: "Framer Motion",
      level: 2,
    },
    {
      name: "LESS",
      level: 2,
    },
    {
      name: "SASS",
      level: 2,
    },
    {
      name: "PrimeReact",
      level: 1,
    },
    {
      name: "Tailwind CSS",
      level: 1,
    },
    {
      name: "PHP",
      level: 2,
    },
    {
      name: "jQuery",
    },
    {
      name: "Photoshop",
      level: 2,
    },
    {
      name: "Umbraco",
      level: 3,
    },
    {
      name: "ASP.NET",
      level: 3,
    },
    {
      name: "WordPress",
      level: 2,
    },
    {
      name: "CSS-in-JS",
      level: 1,
    },
    {
      name: "Python",
      level: 3,
    },
    {
      name: "Drupal",
      level: 3,
    },
    {
      name: "Joomla!",
      level: 3,
    },
    {
      name: "Kivy",
      level: 3,
    },
    {
      name: "jQuery",
      level: 3,
    },
    {
      name: "JSON",
      level: 2,
    },
  ];

  return Response.json(skills);
}
