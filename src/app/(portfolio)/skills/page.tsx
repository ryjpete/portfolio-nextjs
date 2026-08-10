"use client";

import { useEffect, useState } from "react";

import styles from "./skills.module.css";

export default function Skills() {
	const [skills, setSkills] = useState<
		{
      name: string;
      level?: number;
      op?: string;
    }[]
	>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		fetch("/api/skills")
			.then((res) => res.json())
			.then((data) => {
				setSkills(data);
				setLoading(false);
			});
	}, []);

	if (loading) return <div>Loading skills...</div>;

	const skillsList = skills.length > 0 && (
		<>
			{skills.filter((sk) => sk.level === 1).length > 0 && (
				<section>
					<div className={styles.head}>
						<h3>Primary Stack</h3>
						<h4>
							My comfort zones. Like mac n cheese and Blind Melon.
						</h4>
					</div>
					<div className={styles.list}>
						{skills
							.filter((sk) => sk.level === 1)
							.map((sk) => (
								<div key={sk.name} className={styles.skillItem}>{sk.name}</div>
							))}
					</div>
				</section>
			)}

      {skills.filter((sk) => sk.level ===2).length > 0 && (
        <section>
          <div className={styles.head}>
            <h3>The B-Squad</h3>
            <h4>These are a little rusty, but still reliable.</h4>
          </div>
          <div className={styles.list}>
            {skills
              .filter((sk) => sk.level === 2)
              .map((sk) => (
                <div key={sk.name} className={styles.skillItem}>{sk.name}</div>
              ))}
          </div>
        </section>
      )}

      {skills.filter((sk) => sk.level ===3).length > 0 && (
        <section>
          <div className={styles.head}>
            <h3>Bottom Tier</h3>
            <h4>Been awhile. But it&apos;s all like riding a bike.</h4>
          </div>
          <div className={styles.list}>
            {skills
              .filter((sk) => sk.level === 3)
              .map((sk) => (
                <div key={sk.name} className={styles.skillItem}>{sk.name}</div>
              ))}
          </div>
        </section>
      )}
		</>
	);

	const intro = (
		<section className={styles.intro}>
			<h1>The Tech Lowdown</h1>
			<h2>All the things I know and (maybe) still love.</h2>
		</section>
	);

	const content = (
		<div className={styles.content}>
			{intro}
			{skillsList}
		</div>
	);

	return <div className={`container`}>{content}</div>;
}
