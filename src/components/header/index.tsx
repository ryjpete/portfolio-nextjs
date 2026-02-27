"use client";

import { useEffect, useRef } from "react";
// import { useState } from "react";

// import { Bars3Icon } from "@heroicons/react/24/solid";

import BreatheEffect from "../breathe-effect";
import Logo from "../logo";
// import Navigation from "../navigation";

import styles from "./header.module.css";

export default function Header() {
	const headerRef = useRef<HTMLDivElement>(null);
	const logoRef = useRef<HTMLDivElement>(null);
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (logoRef.current) {
				if (window.innerWidth >= 768) {
					if (window.scrollY > 25) {
						logoRef.current.style.transform = "scale(0.4)";
						logoRef.current.style.transformOrigin = "top right";
					} else {
						logoRef.current.style.transform = "scale(1)";
					}
				} else {
					logoRef.current.style.transform = "scale(1)";
				}
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	// const toggleTrigger = () => {
	// 	setIsMenuOpen(!isMenuOpen);
	// };

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
			{logo}
		</header>
	);
}
