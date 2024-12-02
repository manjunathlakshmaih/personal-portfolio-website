import React from "react";
import "./Aboutpage.css"; // Include styles here

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>Hi, I'm Manjunath L!</h1>
        <p>A passionate Frontend Developer specializing in React and JavaScript.</p>
        <img 
          src="/path/to/your-image.jpg" 
          alt="Manjunath L" 
          className="about-photo" 
        />
      </header>
      
      <section className="about-details">
        <h2>About Me</h2>
        <p>
          I'm a creative Frontend Developer with experience in building modern, 
          responsive, and user-friendly websites and applications. I love coding 
          and solving complex problems with clean and efficient code.
        </p>
        <ul>
          <li>React</li>
          <li>JavaScript</li>
          <li>CSS/HTML</li>
          <li>Responsive Design</li>
        </ul>
      </section>
      
      <section className="experience-section">
        <h2>What I Do</h2>
        <p>
          From designing pixel-perfect user interfaces to optimizing web performance, 
          I bring ideas to life with modern frontend technologies.
        </p>
      </section>

      <footer className="about-footer">
        <p>Connect with me:</p>
        <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/manjunathlakshmaih" target="_blank" rel="noopener noreferrer">GitHub</a>
      </footer>
    </div>
  );
};

export default AboutPage;