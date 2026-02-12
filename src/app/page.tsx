export default function Home() {

  const content = (
    <div className="container">
      <h1>
        Hey. I&apos;m Ryan. I build and style digital things.
      </h1>
      <h2>I&apos;m a UI Engineer.</h2>
      <p>
        Or a web developer. Or a front software engineer. Sometimes I do a bit of designing. Whatever the title, I&apos;ve been doing it for 20 years now.
      </p>
      <p>
        Here&apos;s me in a nutshell: I love building and organizing code to create digital experiences that are fast, accessible, and enjoyable for not only users, but also for my fellow developers.
      </p>
      <p>
        This site is a portfolio of sorts. It&apos;s also a playground for me to experiment with new web technologies and ideas. It&apos;s bare bones and simple. Definitely a work in progress. Keep checking back.
      </p>
      <p>
        Want to learn more or reach out to me? Find me on <a href="https://www.linkedin.com/in/ryanjenningspeterson/" target="_blank" className="underline">LinkedIn</a>. Or check out my <a href="/resume" className="underline">resume</a>.
      </p>
    </div>
  );

  return <>{content}</>;
}
