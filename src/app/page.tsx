import Link from "next/link";

export default function Home() {

  const content = (
    <div className="container">
      <h1>
        HI. I&rsquo;M <Link href="/about">RYAN</Link>.<br />
        I&rsquo;M A <Link href="/resume">UI ENGINEER</Link>.<br />
        I <Link href="/projects">BUILD THINGS</Link>.

        <div className="subs">
          <span>CREATE</span>
          <span>DEVELOP</span>
          <span>DESIGN</span>
          <span>WRITE</span>
          <span>PLAY</span>
        </div>
      </h1>
    </div>
  );

  return <>{content}</>;
}
