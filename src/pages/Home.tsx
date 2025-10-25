import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <div className="profile-section">
            <img 
              src="/zubair-dp.jpg" 
              alt="Zubair Rahman Tusar" 
              className="profile-image"
            />
            <div className="profile-info">
              <h1 className="name">Zubair Rahman Tusar</h1>
              <h2 className="title">Manager, AI & Data Science</h2>
              <p className="location">📍 Dhaka, Bangladesh</p>
              <div className="contact-links">
                <a href="https://linkedin.com/in/ztusar" target="_blank" rel="noopener noreferrer">
                  LinkedIn
                </a>
                <a href="https://github.com/zubairtusar" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://scholar.google.com/citations?user=nRQqx3wAAAAJ" target="_blank" rel="noopener noreferrer">
                  Google Scholar
                </a>
                <a href="mailto:zubairrahman@iut-dhaka.edu">
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="summary-section">
        <div className="container">
          <h2>Professional Summary</h2>
          <p className="summary-text">
            AI & Data Science Manager at Robi Axiata Limited with expertise in machine learning, 
            deep learning, and data science. Experienced in developing production-scale AI solutions 
            including recommendation systems, network optimization models, and generative AI initiatives. 
            Published researcher with contributions to sentiment analysis and human activity recognition.
          </p>

          <div className="highlights">
            <div className="highlight-card">
              <h3>🎓 Education</h3>
              <p>B.Sc in Software Engineering</p>
              <p>Islamic University of Technology</p>
              <p>CGPA: 3.64/4.00</p>
            </div>
            
            <div className="highlight-card">
              <h3>💼 Experience</h3>
              <p>3+ years in AI & Data Science</p>
              <p>Led nation-wide AI deployments</p>
              <p>Top 5% performer (2023-2024)</p>
            </div>
            
            <div className="highlight-card">
              <h3>📚 Publications</h3>
              <p>ICSOFT 2023 Conference Paper</p>
              <p>UbiComp/ISWC 2021 Workshop</p>
              <p>Focus on ML & SE applications</p>
            </div>
            
            <div className="highlight-card">
              <h3>🔧 Expertise</h3>
              <p>PyTorch, TensorFlow, OpenCV</p>
              <p>LLM Systems & RAG</p>
              <p>Geospatial Analysis & ML</p>
            </div>
          </div>

          <div className="recent-achievements">
            <h3>Recent Achievements</h3>
            <ul>
              <li>🏆 Awarded Divisional Champion in Hall of Honor for innovation and collaboration</li>
              <li>⭐ Star performer for Q3'2024 for piloting nation-wide site recommendation rollout</li>
              <li>🤖 Led organization-wide generative AI adoption and execution strategy</li>
              <li>📊 Developed network propagation models with ~200 Meter RMSE accuracy</li>
              <li>💡 Implemented multi-armed bandit systems for ARPU enhancement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;