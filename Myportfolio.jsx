import React from 'react';
import'./myportfolio.css';

function Myportfolio() {
  return (
    <div className="portfolio-container">
      <header className="header">
        <h1>Salima M</h1>
        <p className="bio">
          A passionate web developer with experience in building dynamic and responsive web applications. I enjoy learning new technologies and solving problems with creative solutions.
        </p>
      </header>
      
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript (ES6+)</li>
          <li>React</li>
          <li>HTML5 & CSS3</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>Git & GitHub</li>
        </ul>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        
        <div className="project">
          <h3>Projecdct One: Portfolio Website</h3>
          <p>A personal portfolio website built using React and styled-.components. Displays my work, skills, and contact information.</p>
        </div>
        
        <div className="project">
          <h3>Project Two: Task Manager</h3>
          <p>A full-stack task manager app where users can create, edit, and delete tasks. Built with React on the frontend and Node.js on the backend.</p>
        </div>
        
        <div className="project">
          <h3>Project Three: Weather App</h3>
          <p>A weather application that fetches real-time weather data from an API and displays it with dynamic visuals based on weather conditions.</p>
        </div>
      </section>

      <footer className="footer">
        <p>Connect with me on <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a> and <a href="https://www.linkedin.com/in/your-username/" target="_blank" rel="noopener noreferrer">LinkedIn</a>.</p>
      </footer>
    </div>
  );
}

export default Myportfolio;