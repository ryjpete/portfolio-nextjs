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
			workExperiences: [
				{
					id: 1,
					company: "The Main Branch",
					route: "./resume/experience/the-main-branch",
					logo: "/assets/images/logo-tmb.svg",
					role: "Software Developer, Frontend",
					roleDesc:
						"Frontend engineer at a tech consulting firm, building responsive React and Next.js web apps with a heavy emphasis on CSS craftsmanship — design systems, fluid typography, CSS Modules, the works. Also shipped cross-platform mobile apps in React Native, consumed APIs, and sweated the details on animations and micro-interactions. Wrote clean TypeScript, set code quality standards, mentored devs, and delivered pixel-perfect UIs straight from Figma to production.",
					description:
						"A full-service technology consulting firm helping businesses streamline operations, reduce costs, and create new revenue opportunities with AI and emerging tech.",
					contact: {
						url: "https://themainbranch.com/",
					},
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
					route: "./resume/experience/connections-marketing",
					description:
						"A full-service digital marketing agency helping clients to realize their goals for achieving success.",
					logo: "/assets/images/logo-cm.svg",
					contact: {
						url: "https://connectionsmarketing.com/",
					},
					role: "Lead Frontend Developer",
					roleDesc:
						"Lead frontend dev at a digital marketing agency, juggling multiple client projects across varying stacks and CMS platforms. Worked closely with designers and PMs to nail requirements, kept code clean and maintainable for the whole team, and helped build the company's client onboarding and scoping process from scratch.",
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
					route: "./resume/experience/hy-connect",
					description:
						"A full-service integrated marketing and advertising agency.",
					role: "Web Developer - Contract",
					roleDesc:
						"Contract web developer at a marketing agency, contributing to a responsive web experience for a multinational enterprise client. Focused on cross-device styling and template customization within the Drupal framework to ensure a consistent user experience across desktop, tablet, and mobile platforms.",
					tenure: {
						start: "2013-10-15T00:00:00Z",
						end: "2013-12-15T00:00:00Z",
					},
					responsibilities: [
						"Contributed to the development team building a responsive web experience for a multinational enterprise client, implementing cross-device styling and template customization within the Drupal framework to ensure consistent user experience across desktop, tablet, and mobile platforms",
					],
					tech: [
						{
							name: "CSS3",
							icon: "/assets/images/icon-css.svg",
						},
						{
							name: "Drupal",
							icon: "/assets/images/tech/icon-drupal.svg",
						},
						{
							name: "PHP",
							icon: "/assets/images/icon-php.svg",
						},
						{
							name: "jQuery",
							icon: "/assets/images/icon-jQuery.svg",
						},
					]
				},
				{
					id: 4,
					company: "SEM Visibility",
					route: "./resume/experience/sem-visibility",
					description:
						"A digital marketing firm specializing in SEO, e-commerce solutions, and development.",
					role: "Senior Web Developer",
					roleDesc:
						"Senior web developer at a digital marketing firm, leading the migration of legacy client sites to modern, mobile-responsive designs. Acted as the sole developer during a critical transition period, independently integrating payment gateways and customizing ecommerce experiences across Magento and WooCommerce platforms. Proactively managed remote collaboration by initiating cross-departmental meetings to ensure alignment on project requirements, timelines, and deliverables.",
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
					tech: [
						{
							name: "CSS3",
							icon: "/assets/images/tech/icon-css3.svg",
						},
						{
							name: "Magento",
							icon: "/assets/images/tech/icon-magento.svg",
						},
						{
							name: "PHP",
							icon: "/assets/images/tech/icon-php.svg",
						},
						{
							name: "jQuery",
							icon: "/assets/images/tech/icon-jQuery.svg",
						},
						{
							name: "WordPress",
							icon: "/assets/images/tech/icon-wordpress.svg",
						},
					]
				},
				{
					id: 5,
					company: "Dealer HD",
					route: "./resume/experience/dealer-hd",
					logo: "/assets/images/logo-dhd.svg",
					description:
						"A digital marketing and advertising agency specializing in services for car dealerships.",
					role: "Web Designer",
					roleDesc:
						"Web designer at a digital marketing agency specializing in car dealerships, building custom-branded sites on a templated framework while maintaining code consistency. Used jQuery for dynamic layouts and interactive UI components. Sole owner of a company podcast initiative from concept to launch, handling design, WordPress integration, hosting, and RSS configuration.",
					tenure: {
						start: "2010-06-15T00:00:00Z",
						end: "2011-06-15T00:00:00Z",
					},
					responsibilities: [
						"Designed and developed custom-branded car dealership websites by extending a templated framework, creating unique visual experiences that aligned with each dealer's brand identity while maintaining code consistency and efficient deployment workflows",
						"Enhanced user experience through strategic jQuery implementation, creating dynamic layout adjustments, interactive UI components, and DOM-based content manipulation that improved site engagement and responsiveness",
						"Led the complete lifecycle of a company podcast initiative from concept to production, overseeing design, WordPress integration, audio hosting setup, RSS feed configuration, and launch strategy as the sole technical owner",
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
							name: "Photoshop",
							icon: "/assets/images/icon-photoshop.svg",
						},
					],
				},
				{
					id: 6,
					company: "Envisionit",
					route: "./resume/experience/envisionit",
					logo: "/assets/images/logo-env.svg",
					description: "A digital marketing and advertising agency.",
					contact: {
						url: "https://envisionitagency.com/",
					},
					role: "Web Developer",
					roleDesc:
						"Web developer at a digital marketing agency, modernizing legacy Joomla! sites and bridging the gap between design and dev teams. Leveraged a graphic design background to step into design roles as needed — wireframes, mockups, and visual assets. Also built and maintained cross-client HTML email campaigns.",
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
							name: "Photoshop",
							icon: "/assets/images/icon-photoshop.svg",
						},
					],
				},
				{
					id: 7,
					company: "Takeda Pharmaceuticals",
					route: "./resume/experience/takeda-pharmaceuticals",
					logo: "/assets/images/logo-takeda.svg",
					description:
						"A multinational pharmaceuticals company originating in Japan.",
					contact: {
						url: "https://www.takeda.com/",
					},
					role: "Medical Graphics Technologist",
					roleDesc:
						"Created medical graphics and visual content for presentations, publications, and educational materials within the Medical & Scientific Affairs (MSA) department. Collaborated with cross-functional teams to ensure accuracy and clarity of complex scientific information. Utilized graphic design skills to produce high-quality visuals that supported the department's communication objectives.",
					tenure: {
						start: "2005-01-15T00:00:00Z",
						end: "2008-03-15T00:00:00Z",
					},
					responsibilities: [
						"Worked with all senior members of MSA (Medical & Scientiﬁc Affairs) department to accomplish interconnected SMART program of audio/video recordings of expert clinician presentations; distributed through SMART intranet",
						"Oversaw all web activity for MSA department",
						"Captained design, planning, and development plan of a Flash-based, ActionScript driven website for MSA and RMSA (Regional Medical & Scientiﬁc Affairs) interactive biography site for each team member",
					],
					tech: [
						{
							name: "Photoshop",
							icon: "/assets/images/icon-photoshop.svg",
						},
						{
							name: "CSS3",
							icon: "/assets/images/icon-css.svg",
						},
						{
							name: "HTML",
							icon: "/assets/images/tech/icon-html5.svg",
						},
					],
				},
			],
		},
		skills: {
			header: {
				h1: "Ryan Peterson",
				title: "Design System Engineer || Senior Frontend",
			},
			sklz: [
				{
					id: 1,
					title: "Primary Stack",
					desc:
						"My comfort zone. My go-tos. Like mac 'n cheese and Blind Melon. This is my wheelhouse.",
					items: [
						"/assets/images/tech/icon-nextjs.svg",
						"/assets/images/tech/icon-react.svg",
						"/assets/images/tech/icon-react-native.svg",
						"/assets/images/tech/icon-css3.svg",
						"/assets/images/tech/icon-css-modules.svg",
						"/assets/images/tech/icon-tailwindcss.svg",
						"/assets/images/tech/icon-html5.svg",
						"/assets/images/tech/icon-js.svg",
						"/assets/images/tech/icon-typescript.svg",
						"/assets/images/tech/icon-figma.svg",
						"/assets/images/tech/icon-git.svg",
						"/assets/images/tech/icon-github.svg",
						"/assets/images/tech/icon-github-copilot.svg",
						"/assets/images/tech/icon-claude.svg",
						"/assets/images/tech/icon-json.svg",
						"/assets/images/tech/icon-primereact.svg",
						"/assets/images/tech/icon-bootstrap.svg",
						"/assets/images/tech/icon-storybook.svg",
						"/assets/images/tech/icon-vercel.svg",
					],
				},
				{
					id: 2,
					title: "Backup Squad",
					desc:
						"Not used every day, but still in there rattling around and ready to go.",
					items: [
						"/assets/images/tech/icon-jquery.svg",
						"/assets/images/tech/icon-sass.svg",
						"/assets/images/tech/icon-less.svg",
						"/assets/images/tech/icon-php.svg",
						"/assets/images/tech/icon-wordpress.svg",
						"/assets/images/tech/icon-gatsby.svg",
						"/assets/images/tech/icon-photoshop.svg",
					],
				},
				{
					id: 3,
					title: "Foundation",
					desc:
						"The building blocks. Might not be heavily used, but still part of my coding DNA.",
					items: [
						"/assets/images/tech/icon-csharp.svg",
						"/assets/images/tech/icon-umbraco.svg",
						"/assets/images/tech/icon-magento.svg",
						"/assets/images/tech/icon-joomla.svg",
						"/assets/images/tech/icon-drupal.svg",
					],
				},
			]
		},
		education: {
			header: {
				h1: "Ryan Peterson",
				title: "Design System Engineer || Senior Frontend",
			},
			eds: [
				{
					id: 1,
					company: "Purdue University",
					logo: "/assets/images/logos/logo-purdue.svg",
					role: "Computer Graphics Technology",
					roleDesc:
						"Specializing in Interactive Multimedia & Design",
					tenure: {
						start: "1999-08-15T00:00:00Z",
						end: "2004-05-15T00:00:00Z",
					},
				}
			]
		},
	});
}
