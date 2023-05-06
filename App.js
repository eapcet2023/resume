import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('summary');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container">
      <header>
        <h1>J Dinesh</h1>
        <h3>CSE Student</h3>
      </header>
      <nav>
        <ul>
          <li>
            <button
              className={activeTab === 'summary' ? 'active' : ''}
              onClick={() => handleTabClick('summary')}
            >
              Summary
            </button>
          </li>
          <li>
            <button
              className={activeTab === 'experience' ? 'active' : ''}
              onClick={() => handleTabClick('experience')}
            >
              Experience
            </button>
          </li>
          <li>
            <button
              className={activeTab === 'education' ? 'active' : ''}
              onClick={() => handleTabClick('education')}
            >
              Education
            </button>
          </li>
        </ul>
      </nav>
      {activeTab === 'summary' && (
        <section>
          <h2>Summary</h2>
          <p>
            I am a highly motivated and experienced software engineer with a
            passion for solving complex problems and delivering high-quality
            products. I have experience working on a wide range of technologies,
            including ReactJS, Node.js, AWS, and Docker.
          </p>
        </section>
      )}
      {activeTab === 'experience' && (
        <section>
          <h2>Experience</h2>
          <ul>
            <li>
              <h3>Student Intern</h3>
              <p>Microsoft | May-2022  - July-2022</p>
              <ul>
                <li>
                  Developed and maintained a customer-facing web application
                  using ReactJS and Node.js, resulting in a 20% increase in
                  user engagement.
                </li>
                <li>
                  Designed and implemented a CI/CD pipeline using AWS and
                  Docker, resulting in a significant reduction in deployment
                  time and improved overall reliability.
                </li>
              </ul>
            </li>
            <li>
              <h3>Frontend Developer intern</h3>
              <p>XYZ Inc. | 2022 - 2022</p>
              <ul>
                <li>
                  Worked on a variety of projects ranging from small-scale web
                  applications to large-scale enterprise software solutions.
                </li>
                <li>
                  Collaborated with cross-functional teams to gather
                  requirements, design solutions, and deliver high-quality
                  products on time and within budget.
                </li>
              </ul>
            </li>
          </ul>
        </section>
      )}
      {activeTab === 'education' && (
        <section>
          <h2>Education</h2>
          <ul>
            <li>
              <h3>BTECH in Computer Science and Engineering</h3>
              <p>PVPSIT | 2020- 2024</p>
            </li>
          </ul>
        </section>
      )}
      <footer>
        <p>Vijayawada</p>
        <p>Phone: 8143122034</p>
        <p>Email: dienshjnld22@gmail.com</p>
        </footer>
</div>
);
}
export default App;