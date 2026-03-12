"use client";

import imgBack from "../../../public/assets/images/icons/icon-back.svg";
import imgGo from "../../../public/assets/images/icons/icon-go.svg";

import IconButton from "../icon-button";

import styles from "./carousel.module.css";

interface CarouselTab {
	name: string;
	panel: React.ReactNode | (() => React.ReactNode);
}

export default function Carousel({
	carousel,
	activeTab,
	onTabClick,
}: {
	carousel: CarouselTab[];
	activeTab: string;
	onTabClick: (tabName: string) => void;
}) {
	const activeIndex = carousel.findIndex((tab) => tab.name === activeTab);
	console.log(
		"Carousel rendered with activeTab:",
		activeTab,
		"activeIndex:",
		activeIndex,
	);
	const offset = activeIndex * -100;

	const tabs = (
		<div
			className={styles.tabs}
			style={{ transform: `translateX(${offset}vw)` }}
		>
			{carousel.map((tab, index) => (
				<div
					key={index}
					className={`${styles.tab} ${activeTab === tab.name ? styles.active : ""} ${index === 0 ? styles.first : ""} ${index === carousel.length - 1 ? styles.last : ""}`}
				>
					{index > 0 && (
						<IconButton
							src={imgBack}
							onClick={() => onTabClick(carousel[index - 1].name)}
						/>
					)}
					<span>{tab.name}</span>
					{index < carousel.length - 1 && (
						<IconButton
							src={imgGo}
							onClick={() => onTabClick(carousel[index + 1].name)}
						/>
					)}
				</div>
			))}
		</div>
	);

	const panels = (
		<div
			className={styles.panels}
			style={{ transform: `translateX(${offset}vw)` }}
		>
			{carousel.map((panel, index) => (
    	  <div key={index} className={styles.panel}>
					{typeof panel.panel === "function" ? panel.panel() : panel.panel}
      	</div>
			))}
		</div>
	);

	return (
		<div
			className={`${styles.carousel} ${activeIndex === 0 ? styles.first : ""} ${activeIndex === carousel.length - 1 ? styles.last : ""}`}
			style={{ "--num-tabs": carousel.length } as React.CSSProperties}
		>
			{tabs}
			{panels}
		</div>
	);
}
