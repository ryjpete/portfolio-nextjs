"use client";

// import { useState } from "react";

// import { Bars3Icon } from "@heroicons/react/24/solid";

import BreatheEffect from "../breathe-effect";
import Logo from "../logo";
// import Navigation from "../navigation";

import styles from "./header.module.css";

export default function Header() {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

	// const toggleTrigger = () => {
	// 	setIsMenuOpen(!isMenuOpen);
	// };

	const logo = (
		<BreatheEffect>
			<Logo />
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
		<header className={styles.header}>
			{logo}
		</header>
	);
}
