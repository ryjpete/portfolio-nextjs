"use client";

import { useEffect, useRef } from "react";
// import { useState } from "react";

// import { Bars3Icon } from "@heroicons/react/24/solid";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

import BreatheEffect from "../breathe-effect";
import Logo from "../logo";
// import Navigation from "../navigation";

import styles from "./header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {
	const pathname = usePathname();
	
	const headerRef = useRef<HTMLDivElement>(null);
	const logoRef = useRef<HTMLDivElement>(null);
	const backRef = useRef<HTMLButtonElement>(null);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (logoRef.current) {
				if (window.innerWidth >= 576) {
					if (window.scrollY > 25) {
						logoRef.current.style.transform = "scale(0.4)";
						logoRef.current.style.transformOrigin = "top right";

						if (backRef.current) {
							backRef.current.style.transform = "scale(0.65)";
							backRef.current.style.transformOrigin = "top left";
							backRef.current.style.top = "2px";
						}
					} else {
						logoRef.current.style.transform = "scale(1)";
						if (backRef.current) {
							backRef.current.style.transform = "scale(1)";
							backRef.current.style.transformOrigin = "top left";
							backRef.current.style.top = "40px";
						}
					}
				} else {
					logoRef.current.style.transform = "scale(1)";
					if (backRef.current) {
						backRef.current.style.transform = "scale(1)";
						backRef.current.style.transformOrigin = "top left";
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// const toggleTrigger = () => {
	// 	setIsMenuOpen(!isMenuOpen);
	// };

	const handleBack = () => {
		window.history.back();
	};

	const back = pathname !== "/" && (
		<button ref={backRef} aria-label="Go back" onClick={handleBack} className={styles.back}>
			<ArrowLeftIcon strokeWidth={1} height={48} width={48} color="var(--clr-gray-white)" />
		</button>
	);

	const logo = (
		<BreatheEffect>
			<div ref={logoRef} className={styles.logoScroll}>
				<Logo />
			</div>
		</BreatheEffect>
	);

	// const nav = <Navigation isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />;

	// const trigger = (
	// 	<button aria-label="Toggle navigation" onClick={toggleTrigger}>
	// 		<Bars3Icon />
	// 	</button>
	// );

	// const top = (
	// 	<>
	// 		{/* {nav} */}
	// 		{/* {trigger} */}
	// 	</>
	// );

	return (
		<header ref={headerRef} className={styles.header}>
			{back}
			{logo}
		</header>
	);
}
