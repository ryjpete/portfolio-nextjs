export default function Home() {

  const content = (
    <div className="container">
      <h1>
        Hey. I&apos;m Ryan. I build things.
      </h1>
      <p>
        I&apos;m a developer. Or a software engineer. Or a frontend engineer. Sometimes I do a bit of designing. Whatever the title, I&apos;ve been doing it for 20 years now.
      </p>
      <p>
        Here&apos;s me in a nutshell: I love building and organizing code to create digital experiences that are fast, accessible, and enjoyable for not only users, but also for my fellow developers.
      </p>
      <p>
        This site is a portfolio of sorts. It&apos;s also a playground for me to experiment with new web technologies and ideas. It&apos;s bare bones and simple. Definitely a work in progress. Keep checking back.
      </p>
      <p>
        Want to learn more or reach out to me? Find me on <a href="https://www.linkedin.com/in/ryanjenningspeterson/" className="underline">LinkedIn</a>.
      </p>
    </div>
  );

  return <>{content}</>;
}
