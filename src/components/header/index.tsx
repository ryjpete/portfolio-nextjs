"use client";

import { Bars3Icon } from "@heroicons/react/24/solid";
import BreatheEffect from "../breathe-effect";
import Logo from "../logo";
import Navigation from "../navigation";

import styles from "./header.module.css";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleTrigger = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const logo = (
		// <div className={styles.logo}>
			// {/* <BreatheEffect> */}
			<Logo />
			// {/* </BreatheEffect> */}
		// </div>
	);

	// const nav = <Navigation isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />;

	// const trigger = (
	// 	<button aria-label="Toggle navigation" onClick={toggleTrigger}>
	// 		<Bars3Icon />
	// 	</button>
	// );

	const top = (
		<>
			{logo}
			{/* {nav} */}
			{/* {trigger} */}
		</>
	);

	// const sidebar = <div className={styles.sidebar} />;

	return (
		<header className={styles.header}>
			{top}
			{/* {sidebar} */}
		</header>
	);
}
