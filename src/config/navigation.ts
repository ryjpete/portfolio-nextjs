import { AdjustmentsHorizontalIcon, FaceSmileIcon, IdentificationIcon, HomeModernIcon } from "@heroicons/react/24/outline";

export interface NavItem {
	label: string;
	href: string;
	description?: string;
	icon?: React.ComponentType;
}

export const navigationItems: NavItem[] = [
	{
		label: "Home",
		href: "/",
		description: "Home page",
    icon: HomeModernIcon,
	},
	{
		label: "Resume",
		href: "/resume",
		description: "Resume page",
    icon: IdentificationIcon,
	},
	// {
	// 	label: "About",
	// 	href: "/about",
	// 	description: "About page",
  //   icon: FaceSmileIcon,
	// },
	{
		label: "Skills",
		href: "/skills",
		description: "Skills page",
    icon: AdjustmentsHorizontalIcon,
	},
];
