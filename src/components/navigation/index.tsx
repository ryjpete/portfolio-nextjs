"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navigationItems } from "@/config/navigation";

import styles from "./navigation.module.css";

interface NavigationProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

export default function Navigation({ isOpen, setIsOpen }: NavigationProps) {
	const pathname = usePathname();

  const closeNav = () => {
    setIsOpen(false);
  };

	return (
		<nav
			className={`${styles.navigation} ${isOpen === true ? styles.open : ""}`}
		>
			<ul>
				{navigationItems.map((item) => {
					const isActive = pathname === item.href;

					return (
						<li key={item.href}>
							<Link
								href={item.href}
								className={isActive ? "active" : ""}
								aria-current={isActive ? "page" : undefined}
                onClick={closeNav}
							>
								{item.icon && <item.icon />}
							</Link>
						</li>
					);
				})}
			</ul>
		</nav>
	);
}
