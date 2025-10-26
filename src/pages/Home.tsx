import React from 'react';
import './Home.css';
import profileImage from '../assets/zbdp.png';

const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-content">
          <div className="profile-section">
            <img 
              src={profileImage} 
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
            AI & Data Science Manager at Robi Axiata Limited, focused on what matters today, building 
            production-scale AI solutions in machine learning, deep learning, and data science. From 
            recommendation systems to network optimization and generative AI, I work on creating value 
            now while learning what comes next. Published researcher with work in sentiment analysis 
            and human activity recognition.
          </p>

          <div className="highlights">
            <div className="highlight-card">
              <h3>👁️ Computer Vision</h3>
              <p><strong>PyTorch, TensorFlow, OpenCV</strong></p>
              <p><strong>YOLO Detection & OCR</strong></p>
              <p>Production-scale CV systems</p>
            </div>
            
            <div className="highlight-card">
              <h3>🎓 Education</h3>
              <p><strong>B.Sc in Software Engineering</strong></p>
              <p><strong>Islamic University of Technology</strong></p>
              <p><strong>CGPA: 3.64/4.00</strong></p>
            </div>
            
            <div className="highlight-card">
              <h3>💼 Experience</h3>
              <p><strong>3+ years</strong> in AI & Data Science</p>
              <p>Led <strong>nation-wide AI deployments</strong></p>
              <p><strong>Top 5% performer</strong> (2023-2024)</p>
            </div>
            
            <div className="highlight-card">
              <h3>📚 Publications</h3>
              <p><strong>ICSOFT 2023</strong> Conference Paper</p>
              <p><strong>UbiComp/ISWC 2021</strong> Workshop</p>
              <p>Focus on <strong>ML & SE</strong> applications</p>
            </div>
          </div>

          <div className="creative-teaser">
            <h3>✨ Beyond the Code</h3>
            <p>
              While I'm passionate about AI and data science, I'm also a hobbyist <strong>photographer</strong> and <strong>graphic designer</strong>. I understand lighting, composition, and the creative process, skills  that complement my technical expertise. When I'm not working with algorithms, you'll find me capturing the present moment through my lens or spending time with my three cats: <strong>Poltu</strong>, <strong>Perona</strong>, and <strong>Puti</strong>.
            </p>
            <p className="creative-link">
              🎨 <em>Learn more about my creative side in the <a href="#/passions">Passions</a> section</em>
            </p>
          </div>

          <div className="recent-achievements">
            <h3>Recent Achievements</h3>
            <ul>
              <li>🏆 Awarded Divisional Champion in Hall of Honor for innovation and collaboration</li>
              <li>⭐ Star performer for Q3'2024 for delivering nation-wide site recommendation rollout</li>
              <li>🤖 Leading organization-wide generative AI adoption happening right now</li>
              <li>📊 Developed network propagation models with ~200 Meter RMSE accuracy in production</li>
              <li>💡 Implemented multi-armed bandit systems currently driving ARPU enhancement</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;