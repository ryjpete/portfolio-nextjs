"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";

import { useProject } from "@/context/ProjectContext";

import BreatheEffect from "../breathe-effect";
import IconButton from "../icon-button";
import Logo from "../logo";

import iconBack from "../../../public/assets/images/icons/icon-back.svg";

import styles from "./header.module.css";

const SPRING = { type: "spring", stiffness: 200, damping: 24, mass: 0.8 } as const;

export default function Header() {
	const pathname = usePathname();
	const { activeProject, setActiveProject } = useProject();
	const isHome = pathname === "/";

	const { scrollY } = useScroll();
	const logoScale = useTransform(scrollY, [0, 80], [1, 0.5]);
	const backScale = useTransform(scrollY, [0, 80], [1, 0.7]);

	// const toggleTrigger = () => {
	// 	setIsMenuOpen(!isMenuOpen);
	// };

	const handleCloseProject = () => {
		setActiveProject(null);
		window.history.back();
	};

	const handleBack = () => {
		window.history.back();
	};

	const back = (
		<AnimatePresence>
			{!isHome && (
				<motion.div
					key="back-button"
					className={`${styles.back} ${activeProject ? styles.projectBack : ""}`}
					style={{ scale: backScale, originX: 0, originY: 0 }}
					initial={{ opacity: 0, x: -24 }}
					animate={{ opacity: 1, x: 0 }}
					exit={{ opacity: 0, x: -24 }}
					transition={SPRING}
				>
					<IconButton
						onClick={activeProject ? handleCloseProject : handleBack}
						src={iconBack}
						ariaLabel="Back"
					/>
				</motion.div>
			)}
		</AnimatePresence>
	);

	const logo = (
		<motion.div
			layoutId="header-logo"
			layout
			className={styles.logoWrap}
			style={{
				scale: logoScale,
				originX: isHome ? 0.5 : 1,
				originY: 0,
				marginInlineStart: isHome ? "auto" : "auto",
				marginInlineEnd: isHome ? "auto" : "0",
			}}
			transition={SPRING}
		>
			<BreatheEffect>
				<Logo />
			</BreatheEffect>
		</motion.div>
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
			{back}
			{logo}
		</header>
	);
}
