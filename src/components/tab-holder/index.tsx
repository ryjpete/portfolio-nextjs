"use client";

import Tab from "../tab";
import styles from "./tab-holder.module.css";

export default function TabHolder({ tab }: { tab: { name: string } }) {
  console.log("TabHolder rendered with tab:", tab);

  const tabElement = <h3>{tab.name}</h3>;

  return (
    <div className={styles.tabHolder}>
      {tabElement}
    </div>
  );
}
