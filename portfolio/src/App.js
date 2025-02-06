import React from "react";

function App() {
  return (
    <div>
      <header>
        <h1>Welcome to Aamna Shahab's Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>Hi! I'm Aamna, a software developer specializing in frontend and AI development.</p>
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        <p>Coming soon...</p>
      </section>

      <section id="contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:your-email@example.com">your-email@example.com</a></p>
      </section>

      <footer>
        <p>© {new Date().getFullYear()} Aamna Shahab. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
