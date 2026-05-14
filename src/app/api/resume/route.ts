import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json({
		resume: {
			header: {
				h1: "Ryan Peterson",
				desc: "A Design System Engineer with 20 years bridging the gap between design and development, specializing in building scalable, component-driven UI architectures using React, Next.js, and CSS Modules. I craft robust design systems — from color token pipelines and fluid typography scales to responsive layout patterns — ensuring pixel-perfect Figma-to-code parity across web and mobile platforms. My work lives at the intersection of visual precision and engineering discipline: clean, maintainable TypeScript, living component libraries in Storybook, and micro-interactions that bring interfaces to life.",
			},
		},
		experience: {
			header: {
				h1: "Ryan Peterson",
				title: "Design System Engineer || Senior Frontend",
			},
		},
		skills: {
			header: {
				h1: "Ryan Peterson",
				title: "Design System Engineer || Senior Frontend",
			},
		},
		education: {
			header: {
				h1: "Ryan Peterson",
				title: "Design System Engineer || Senior Frontend",
			},
		},

		tabs: [
			{
				title: "Work Experience",
				workExperiences: [
					{
						id: 1,
						company: "The Main Branch",
						description:
							"A full-service technology consulting firm helping businesses streamline operations, reduce costs, and create new revenue opportunities with AI and emerging tech.",
						logo: "/assets/images/logo-tmb.svg",
						contact: {
							url: "https://themainbranch.com/",
						},
						position: [
							"Frontend Engineer",
							"Software Developer",
							"CSS Engineer",
							"Designer",
							"Coding Mentor",
						],
						tenure: {
							start: "2021-04-15T00:00:00Z",
							end: "2026-01-15T00:00:00Z",
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
							// "Contribute to progressive web app (PWA) features including manifests, icons, and offline support",
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
						],
					},
					{
						id: 2,
						company: "Connections Marketing",
						description:
							"A full-service digital marketing agency helping clients to realize their goals for achieving success.",
						logo: "/assets/images/logo-cm.svg",
						contact: {
							url: "https://connectionsmarketing.com/",
						},
						position: [
							"Lead Front End Developer",
							"CSS Engineer",
							"Occasional Designer",
							"Contract Programmer/Dev",
						],
						tenure: {
							start: "2013-12-15T00:00:00Z",
							end: "2020-07-15T00:00:00Z",
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
						],
					},
					{
						id: 3,
						company: "HY Connect",
						description:
							"A full-service integrated marketing and advertising agency.",
						position: ["Web Developer - Contract"],
						tenure: {
							start: "2013-10-15T00:00:00Z",
							end: "2013-12-15T00:00:00Z",
						},
						responsibilities: [
							"Contributed to the development team building a responsive web experience for a multinational enterprise client, implementing cross-device styling and template customization within the Drupal framework to ensure consistent user experience across desktop, tablet, and mobile platforms",
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
						description:
							"A digital marketing firm specializing in SEO, e-commerce solutions, and development.",
						position: ["Sr. Web Developer"],
						tenure: {
							start: "2011-06-15T00:00:00Z",
							end: "2013-09-15T00:00:00Z",
						},
						responsibilities: [
							"Spearheaded the migration of legacy fixed-width and table-based layouts to modern, mobile-responsive designs across multiple WordPress and Magento client sites, improving mobile user experience and search performance",
							"Built strong client relationships through clear technical communication and requirements gathering, resulting in repeat business and the successful delivery of custom WordPress solutions tailored to specific business needs",
							"Served as sole developer during a critical transition period, independently integrating payment gateways (Stripe, PayPal, Authorize.net) and customizing ecommerce experiences across Magento and WooCommerce platforms",
							"Proactively managed full-time remote collaboration by initiating cross-departmental meetings with leadership, designers, and project managers to ensure alignment on project requirements, timelines, and deliverables",
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
						description:
							"A digital marketing and advertising agency specializing in services for car dealerships.",
						position: ["Web Designer"],
						tenure: {
							start: "2010-06-15T00:00:00Z",
							end: "2011-06-15T00:00:00Z",
						},
						responsibilities: [
							"Designed and developed custom-branded car dealership websites by extending a templated framework, creating unique visual experiences that aligned with each dealer's brand identity while maintaining code consistency and efficient deployment workflows",
							"Enhanced user experience through strategic jQuery implementation, creating dynamic layout adjustments, interactive UI components, and DOM-based content manipulation that improved site engagement and responsiveness",
							"Led the complete lifecycle of a company podcast initiative from concept to production, overseeing design, WordPress integration, audio hosting setup, RSS feed configuration, and launch strategy as the sole technical owner",
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
						position: ["Web Developer"],
						tenure: {
							start: "2008-03-15T00:00:00Z",
							end: "2010-06-15T00:00:00Z",
						},
						responsibilities: [
							"Played a key role in modernizing legacy Joomla! sites by restructuring table-based layouts into semantic, standards-compliant div-based markup, improving accessibility, SEO performance, and long-term maintainability",
							"Served as primary technical liaison between development and design teams, translating creative concepts into feasible technical solutions and ensuring design integrity throughout the development process",
							"Leveraged graphic design background to step into design roles as needed, creating wireframes, mockups, and visual assets that maintained project momentum and reduced external dependencies",
							"Developed and maintained responsive HTML email campaigns for clients, building cross-client compatible templates and managing deployment through email marketing platforms",
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
						description:
							"A multinational pharmaceuticals company originating in Japan.",
						contact: {
							url: "https://www.takeda.com/",
						},
						position: ["Medical Graphics Technologist"],
						tenure: {
							start: "2005-01-15T00:00:00Z",
							end: "2008-03-15T00:00:00Z",
						},
						responsibilities: [
							"Worked with all senior members of MSA (Medical & Scientiﬁc Affairs) department to accomplish interconnected SMART program of audio/video recordings of expert clinician presentations; distributed through SMART intranet",
							"Oversaw all web activity for MSA department",
							"Captained design, planning, and development plan of a Flash-based, ActionScript driven website for MSA and RMSA (Regional Medical & Scientiﬁc Affairs) interactive biography site for each team member",
						],
						// tech: [
						//   {
						//     name: "CSS3",
						//     icon: "/assets/images/icon-css.svg",
						//   },
						// ]
					},
				],
			},

			{
				title: "Education",
				education: [
				{
					id: 1,
					company: "Purdue University",
					description:
						"A world-renowned, public resarch university that advances discoveries in science, technology, engineering, and math.",
					logo: "/assets/images/logos/logo-purdue.svg",
					contact: {
						url: "https://www.purdue.edu/",
					},
					position: ["Computer Graphics Technology"],
					tenure: {
						start: "1999-08-15T00:00:00Z",
						end: "2004-05-15T00:00:00Z",
					},
					responsibilities: [
						"Specialty: Interactive Multimedia & Design",
					],
				},
			],},

			{
				title: "Tech Stack",
				stack: [
					{
						id: 1,
						company: "Primary Stack",
						description: "My comfort zone. My go-tos. Like mac 'n cheese and Blind Melon. This is my wheelhouse.",
						stack: [
						{
							name: "Next.js",
							icon: "/assets/images/tech/icon-nextjs.svg"
						},
						{
							name: "React",
							icon: "/assets/images/tech/icon-react.svg"
						},
						{
							name: "React Native",
							icon: "/assets/images/tech/icon-react-native.svg"
						},
						{
							name: "CSS3",
							icon: "/assets/images/tech/icon-css3.svg"
						},
						{
							name: "CSS Modules",
							icon: "/assets/images/tech/icon-css-modules.svg"
						},
						{
							name: "Tailwind CSS",
							icon: "/assets/images/tech/icon-tailwindcss.svg"
						},
						{
							name: "HTML5",
							icon: "/assets/images/tech/icon-html5.svg"
						},
						{
							name: "JavaScript",
							icon: "/assets/images/tech/icon-js.svg"
						},
						{
							name: "TypeScript",
							icon: "/assets/images/tech/icon-typescript.svg"
						},
						{
							name: "Figma",
							icon: "/assets/images/tech/icon-figma.svg"
						},
						{
							name: "GitHub",
							icon: "/assets/images/tech/icon-github.svg"
						},
						{
							name: "JSON",
							icon: "/assets/images/tech/icon-json.svg"
						},
						{
							name: "PrimeReact",
							icon: "/assets/images/tech/icon-primereact.svg"
						},
						{
							name: "Bootstrap",
							icon: "/assets/images/tech/icon-bootstrap.svg"
						},
						{
							name: "Storybook",
							icon: "/assets/images/tech/icon-storybook.svg"
						},
						{
							name: "Vercel",
							icon: "/assets/images/tech/icon-vercel.svg"
						},
					],
				},
				{
					id: 2,
					company: "Backup Squad",
					description: "Not used every day, but still in there rattling around and ready to go.",
					stack: [
						{
							name: "jQuery",
							icon: "/assets/images/tech/icon-jQuery.svg"
						},
						{
							name: "SASS",
							icon: "/assets/images/tech/icon-sass.svg"
						},
						{
							name: "LESS",
							icon: "/assets/images/tech/icon-less.svg"
						},
						{
							name: "PHP",
							icon: "/assets/images/tech/icon-php.svg"
						},
						{
							name: "WordPress",
							icon: "/assets/images/tech/icon-wordpress.svg"
						},
						{
							name: "Gatsby",
							icon: "/assets/images/tech/icon-gatsby.svg"
						},
						{
							name: "Photoshop",
							icon: "/assets/images/tech/icon-photoshop.svg"
						},
					],
				},
				{
					id: 3,
					company: "Foundation",
					description: "The building blocks. Might not be heavily used, but still part of my DNA.",
					stack: [
						{
							name: "C#",
							icon: "/assets/images/tech/icon-csharp.svg"
						},
						{
							name: "Umbraco",
							icon: "/assets/images/tech/icon-umbraco.svg"
						},
						{
							name: "Magento",
							icon: "/assets/images/tech/icon-magento.svg"
						},
						{
							name: "Joomla!",
							icon: "/assets/images/tech/icon-joomla.svg"
						},
						{
							name: "Drupal",
							icon: "/assets/images/tech/icon-drupal.svg"
						},
					],
				},
			],},

		],

	});
}
