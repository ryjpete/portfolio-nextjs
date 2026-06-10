import { NextResponse } from "next/server";

import {
	iconCss3,
	iconJavaScript,
	iconFigma,
	iconGit,
	iconGitHub,
	iconNextJs,
	iconReact,
	iconReactNative,
	iconStorybook,
	iconTypeScript,
	iconVercel,
  iconBootstrap,
  iconPrimeReact,
} from "../resume/icons";

const PROJECTS = [
	{
		id: 1,
		company: "Personal",
		route: "./projects/grateful-dev",
		logo: "/assets/images/logos/bolt/logo.svg",
		name: "Grateful-Dev.com",
		desc: "My personal portfolio site, currently and always under active development.",
		detailedDesc:
			"Personal portfolio site designed and built from scratch — custom branding, logo, and full design system including color tokens, typography, and component architecture. Built with Next.js App Router, React 19, TypeScript, and CSS Modules, with a component library documented in Storybook. Data served through internal API routes, AI-assisted development with GitHub Copilot, and deployed on Vercel with continuous deployment from GitHub.",
		roleDesc:
			"I designed and built this site from scratch, with a focus on clean, modern aesthetics and a unique visual style. The project involved custom branding and logo design, as well as the development of a full design system including color tokens, typography, and component architecture. I also set up a component library documented in Storybook for showcasing UI components.  AI-assisted development was utilized with GitHub Copilot to enhance productivity while maintaining a human-centered approach to design and development.",
		highlights: [
			{
				id: 0,
				label: "Branding",
				entry: "Custom logo and branding, with a focus on a clean, modern aesthetic and a unique visual style.",
			},
			{
				id: 1,
				label: "Design",
				entry: "Custom design and branding, with a focus on typography and a unique visual style.",
			},
			{
				id: 2,
				label: "Development",
				entry: "Built with Next.js and React, using TypeScript for type safety and CSS Modules for styling.",
			},
			{
				id: 3,
				label: "AI Development",
				entry: "AI-assisted development using GitHub Copilot, with a focus on leveraging AI for code generation and problem-solving while maintaining a human-centered approach to design and development.",
			},
			{
				id: 4,
				label: "Design System",
				entry: "Custom design system, focusing on accessibility and reusability.",
			},
			{
				id: 5,
				label: "Component Documentation",
				entry: "Uses Storybook for documenting and showcasing UI components, with a focus on accessibility and reusability.",
			},
			{
				id: 6,
				label: "Data",
				entry: "Served through internal API routes, currently hardcoded, but set up for CMS/database integration.",
			},
			{
				id: 7,
				label: "Deployment",
				entry: "Hosted on Vercel with continuous deployment from GitHub.",
			},
		],
		tech: [
			{
				name: "Next.js",
				svg: iconNextJs,
			},
			{
				name: "React",
				svg: iconReact,
			},
			{
				name: "TypeScript",
				svg: iconTypeScript,
			},
			// {
			//   name: "CSS Modules",
			//   svg: iconCssModules,
			// },
			{
				name: "Figma",
				svg: iconFigma,
			},
			{
				name: "Storybook",
				svg: iconStorybook,
			},
			{
				name: "Git",
				svg: iconGit,
			},
			{
				name: "GitHub",
				svg: iconGitHub,
			},
			{
				name: "Vercel",
				svg: iconVercel,
			},
		],
		cats: ["Web", "Design"],
	},
	{
		id: 2,
		company: "The Main Branch",
		route: "./projects/ai-cattle-monitoring",
		logo: "/assets/images/logo-tmb.svg",
		name: "Livestock Management Platform",
		desc: "Livestock and live intelligence meet.",
		detailedDesc:
			"Cattle health monitoring and management platform spanning a web portal and mobile app (iOS & Android) for agricultural producers, veterinarians, and administrators. Supports multiple user roles with distinct portals — producers manage pens and monitor herd health in real time with live camera feeds, vets conduct remote consultations and track cattle history via an integrated chat system, and admins oversee customers, locations, and system users. Mobile app features biometric login, GPS-based location services, push notifications, live camera streaming, IoT device management, and background automation.",
		roleDesc:
			"Served as the primary styling engineer on a collaborative team across both the React web portal and React Native mobile app, owning the design system, visual consistency, and component styling across the producer, vet, and admin portals. Built and organized the reusable component library for both platforms, established cross-platform style conventions, and maintained frontend file structure throughout the project.",
		tech: [
			{
				name: "Next.js",
				svg: iconNextJs,
			},
			{
				name: "React",
				svg: iconReact,
			},
			{
				name: "React Native",
				svg: iconReactNative,
			},
			{
				name: "TypeScript",
				svg: iconTypeScript,
			},
			// {
			//   name: "CSS Modules",
			//   // icon: "/assets/images/tech/icon-css-modules.svg",
			//   svg: iconCssModules,
			// },
			{
				name: "Figma",
				svg: iconFigma,
			},
			{
				name: "Git",
				svg: iconGit,
			},
			{
				name: "GitHub",
				svg: iconGitHub,
			},
		],
		cats: ["Web", "Mobile"],
	},
	{
		id: 3,
		company: "The Main Branch",
		route: "./projects/agriculture-monitoring",
		logo: "/assets/images/logo-tmb.svg",
		name: "Barn & Horse Management",
		desc: "A full-stack barn and horse management platform for owners, vets, and barn managers.",
		detailedDesc:
			"A full-stack horse and barn management platform built for owners, barn managers, and veterinarians. Features include horse profiles, stall assignments, vet request workflows, camera integration per stall, image uploads via AWS, and role-based access control across barns. Built with a React web admin (Redux, React Query, Emotion), a Node.js/Express REST API, PostgreSQL with Prisma ORM, and a React Native mobile app for on-the-go barn management. Deployed with Docker and supports push notifications via FCM and biometric device registration.",
		roleDesc:
			"Part of a collaborative development team across both the React web admin and React Native mobile app. My focus was styling and frontend structure — building and organizing the component library, establishing CSS conventions, and ensuring visual consistency across the owner, barn manager, and vet portals. Set up the frontend file structure and component architecture for both platforms, and handled the detailed UI work that brought the designs to life.",
		tech: [
			{ name: "Next.js", svg: iconNextJs },
			{ name: "React", svg: iconReact },
			{ name: "React Native", svg: iconReactNative },
			{ name: "TypeScript", svg: iconTypeScript },
			{ name: "Figma", svg: iconFigma },
			{ name: "Git", svg: iconGit },
			{ name: "GitHub", svg: iconGitHub },
		],
		cats: ["Web", "Mobile"],
	},
	{
		id: 4,
		company: "The Main Branch",
		route: "./projects/field-operations-management",
		logo: "/assets/images/logo-tmb.svg",
		name: "Field Operations Management",
		desc:
      "A full-stack field operations platform for utility line crews, foremen, and project managers.",
    detailedDesc:
      "A full-stack utility line work management platform built for owners, project managers, foremen, and field crews. Features include job and work order tracking, per-pole ticket workflows, task management, crew and role management, digital tailboard safety forms, permit tracking (Dig Safe, NRA, DNR), spec sheet storage, media uploads (photos and video per ticket), job packet exports, and push notifications to field crew. Built with a React frontend using Context API and CSS Modules, a Node.js/Express REST API, and PostgreSQL with raw SQL migrations. Deployed on Heroku with a Procfile-based setup.",
    roleDesc:
      "Part of a collaborative development team, focusing on styling and frontend structure. Built and organized the component library, established CSS conventions, and ensured visual consistency across the job, ticket, and tailboard flows. Set up the frontend file structure and component architecture, and handled the detailed UI work that translated designs into clean, maintainable React.",
		tech: [
			{ name: "React", svg: iconReact },
			{ name: "Bootstrap", svg: iconBootstrap },
			{ name: "Figma", svg: iconFigma },
			{ name: "CSS", svg: iconCss3 },
			{ name: "JavaScript", svg: iconJavaScript },
			{ name: "Git", svg: iconGit },
			{ name: "GitHub", svg: iconGitHub },
		],
		cats: ["Web"],
	},
	{
		id: 5,
		company: "The Main Branch",
		route: "./projects/equestrian-show-management",
		logo: "/assets/images/logo-tmb.svg",
		name: "Equestrian Show Management",
		desc:
      "A full-stack show management platform for 4-H equestrian events, riders, clubs, and judges.",
    detailedDesc:
      "A full-stack equestrian show management platform built for administrators, judges, riders, and custodians. Features include show and class management across multiple disciplines (Trail, Rail, Pattern, Generic), arena scheduling, member registration with pre/post entry pricing, digital waiver signing, real-time judging and score delivery to riders, pattern management with visual diagrams and step-by-step instructions, awards and ribbon wall tracking, high-point calculations, club and chapter management, and push notifications to mobile users. The admin panel is built with React, Emotion, MUI, PrimeReact, and SCSS, backed by a Node.js/Express REST API using Prisma ORM with PostgreSQL. Companion mobile apps for riders and judges are built in React Native. File storage is handled via Azure Blob Storage, payments via Stripe, and push notifications via Firebase.",
    roleDesc:
      "Part of a collaborative development team, focusing on styling and frontend structure across the web admin panel and React Native mobile apps. Built and organized the component library, established CSS and styling conventions, and ensured visual consistency across the show, class, scoring, and registration flows. Set up the frontend file structure and component architecture, and handled the detailed UI work that translated designs into clean, maintainable React and React Native.",
		tech: [
			{ name: "React", svg: iconReact },
			{ name: "PrimeReact", svg: iconPrimeReact },
			{ name: "Figma", svg: iconFigma },
			{ name: "CSS", svg: iconCss3 },
			{ name: "JavaScript", svg: iconJavaScript },
			{ name: "Git", svg: iconGit },
			{ name: "GitHub", svg: iconGitHub },
		],
		cats: ["Web", "Mobile"],
	},
	{
		id: 6,
		company: "The Main Branch",
		route: "./projects/ai-powered-automotive-assistant",
		logo: "/assets/images/logo-tmb.svg",
		name: "AI-Powered Automotive Assistant",
		desc:
      "AI and automotive ... always meant to be.",
    detailedDesc:
      "A web platform built for dealership administrators to monitor and manage an AI-powered phone agent deployed across multi-brand automotive groups. Features include a real-time KPI dashboard (call handling rate, booking rate, appointment volume, transfers, and hangup metrics), filterable call log review with audio playback, outbound campaign management (service, sales, promotional, survey, and recall campaign types), an action center for surfacing calls requiring human follow-up, group and tenant-level performance reporting, appointment tracking, contact list management, and configurable dealer settings. Built with Next.js (App Router), React, CSS Modules, and PrimeReact, with Chart.js powering data visualizations.",
    roleDesc:
      "Part of a collaborative development team, contributing across the full frontend of the web platform. Built and maintained UI components for the dashboard, call logs, campaigns, action center, and settings flows. Established CSS and styling conventions using CSS Modules, ensured visual consistency across multi-tenant dealer group views, and handled the detailed UI work that translated designs into clean, maintainable React and Next.js.",
		tech: [
			{ name: "React", svg: iconReact },
			{ name: "PrimeReact", svg: iconPrimeReact },
			{ name: "Figma", svg: iconFigma },
			{ name: "CSS", svg: iconCss3 },
			{ name: "TypeScript", svg: iconTypeScript },
			{ name: "Git", svg: iconGit },
			{ name: "GitHub", svg: iconGitHub },
		],
		cats: ["Web"],
	},
	{
		id: 7,
		company: "The Main Branch",
		route: "./projects/crop-monitoring-platform",
		logo: "/assets/images/logo-tmb.svg",
		name: "Crop Monitoring Platform",
		desc:
      "Monitor crops. Manage farms. See what's growing.",
    detailedDesc:
      "A full-stack crop monitoring platform built for agricultural operators to oversee field cameras, analyze crop imagery, and manage farm operations across multi-tenant customer groups. Features include a real-time field and camera dashboard, image capture review with pinch-to-zoom playback, field run tracking, farm and customer management, an action center for flagged field events, and configurable farm settings. Built with Next.js (App Router), React, PrimeReact, and CSS, with a Node.js/Express REST API and PostgreSQL backend. Native mobile apps (iOS and Android) built with React Native, React Native Paper, and React Navigation.",
    roleDesc:
      "Part of a collaborative development team, contributing across the full frontend of the web platform and both mobile applications. Built and maintained UI components for the dashboard, camera and image views, field run tracking, and settings flows. Established styling conventions and ensured visual consistency across multi-tenant farm group views. Handled detailed UI work translating designs into clean, maintainable React, Next.js, and React Native code.",
		tech: [
			{ name: "Next.js", svg: iconNextJs },
			{ name: "React", svg: iconReact },
			{ name: "PrimeReact", svg: iconPrimeReact },
			{ name: "Figma", svg: iconFigma },
			{ name: "CSS", svg: iconCss3 },
			{ name: "Git", svg: iconGit },
			{ name: "GitHub", svg: iconGitHub },
		],
		cats: ["Web", "Mobile"],
	},
];

export async function GET() {
	return NextResponse.json({
		projects: {
			header: {
				h1: "Projects",
				title: "Selected projects I've lent my talents to.",
			},
			items: PROJECTS,
		},
		"mobile-apps": {
			header: {
				h1: "Projects",
				title: "Selected projects I've lent my talents to.",
			},
			items: PROJECTS,
		},
		"web-apps": {
			header: {
				h1: "Projects",
				title: "Selected projects I've lent my talents to.",
			},
			items: PROJECTS,
		},
		design: {
			header: {
				h1: "Projects",
				title: "Selected projects I've lent my talents to.",
			},
			items: PROJECTS,
		},
		"all-projects": {
			header: {
				h1: "All Projects",
				title: "Selected projects I've lent my talents to.",
			},
			items: PROJECTS,
		},
	});
}
