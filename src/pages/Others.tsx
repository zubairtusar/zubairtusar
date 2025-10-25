import React from 'react';
import './Others.css';

const Others: React.FC = () => {
  return (
    <div className="others">
      <div className="container">
        <h1 className="page-title">Skills & Additional Information</h1>
        
        <section className="skills-section">
          <h2>Technical Skills</h2>
          
          <div className="skills-grid">
            <div className="skill-category">
              <h3>🤖 Vision & Machine Learning</h3>
              <div className="skills-list">
                <span className="skill-item expert">PyTorch</span>
                <span className="skill-item expert">TensorFlow</span>
                <span className="skill-item expert">OpenCV</span>
                <span className="skill-item advanced">YOLO Detection</span>
                <span className="skill-item advanced">OCR</span>
                <span className="skill-item expert">LSTM/RNN</span>
                <span className="skill-item advanced">Contextual Bandits</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>🧠 LLM Systems</h3>
              <div className="skills-list">
                <span className="skill-item expert">Prompt Engineering</span>
                <span className="skill-item expert">Context Engineering</span>
                <span className="skill-item advanced">Retrieval Strategies</span>
                <span className="skill-item advanced">Vectorization</span>
                <span className="skill-item expert">RAG</span>
                <span className="skill-item advanced">Agentic Systems</span>
                <span className="skill-item advanced">LLM APIs</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>📊 Data & Geospatial</h3>
              <div className="skills-list">
                <span className="skill-item expert">SQL</span>
                <span className="skill-item advanced">PySpark</span>
                <span className="skill-item advanced">GeoPandas</span>
                <span className="skill-item expert">Spatial Indexing</span>
                <span className="skill-item advanced">KD/Ball Tree</span>
                <span className="skill-item advanced">Tableau</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>🔧 Infrastructure & Web</h3>
              <div className="skills-list">
                <span className="skill-item advanced">Docker</span>
                <span className="skill-item intermediate">Kubernetes</span>
                <span className="skill-item advanced">Streamlit</span>
                <span className="skill-item advanced">Next.js</span>
                <span className="skill-item advanced">React</span>
                <span className="skill-item advanced">Flask</span>
                <span className="skill-item intermediate">Azure</span>
                <span className="skill-item intermediate">AWS</span>
              </div>
            </div>

            <div className="skill-category">
              <h3>💻 Programming Languages</h3>
              <div className="skills-list">
                <span className="skill-item expert">Python</span>
                <span className="skill-item advanced">C/C++</span>
                <span className="skill-item advanced">JavaScript</span>
                <span className="skill-item expert">SQL</span>
                <span className="skill-item intermediate">TypeScript</span>
              </div>
            </div>
          </div>
        </section>

        <section className="references-section">
          <h2>References</h2>
          
          <div className="references-grid">
            <div className="reference-card">
              <div className="reference-header">
                <h4>Mohayeminul Islam</h4>
                <span className="title">Assistant Professor</span>
              </div>
              <p className="institution">Islamic University of Technology</p>
              <div className="contact-info">
                <a href="mailto:mohayemin@iut-dhaka.edu" className="contact-link">
                  📧 mohayemin@iut-dhaka.edu
                </a>
              </div>
              <div className="reference-context">
                <p>Academic advisor and mentor during undergraduate studies in Software Engineering.</p>
              </div>
            </div>

            <div className="reference-card">
              <div className="reference-header">
                <h4>Syed Md Taukir Imam</h4>
                <span className="title">Senior General Manager</span>
              </div>
              <p className="institution">AI & Data Science, Robi Axiata Limited</p>
              <div className="contact-info">
                <a href="mailto:syed.taukir@robi.com.bd" className="contact-link">
                  📧 syed.taukir@robi.com.bd
                </a>
              </div>
              <div className="reference-context">
                <p>Direct supervisor and mentor in AI & Data Science initiatives at Robi Axiata.</p>
              </div>
            </div>

            <div className="reference-card">
              <div className="reference-header">
                <h4>Raihan Alam</h4>
                <span className="title">Senior Data Engineer</span>
              </div>
              <p className="institution">Microsoft</p>
              <div className="contact-info">
                <a href="mailto:raihan.alam@gmail.com" className="contact-link">
                  📧 raihan.alam@gmail.com
                </a>
              </div>
              <div className="reference-context">
                <p>Professional colleague and industry mentor in data engineering and cloud technologies.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="additional-info">
          <h2>Additional Information</h2>
          
          <div className="info-grid">
            <div className="info-card language">
              <h4>🌐 Languages</h4>
              <div className="language-skills">
                <div className="language-item">
                  <span className="language">English</span>
                  <span className="proficiency expert">IELTS 7.5</span>
                </div>
                <div className="language-item">
                  <span className="language">Bengali</span>
                  <span className="proficiency expert">Native</span>
                </div>
                <div className="language-item">
                  <span className="language">Hindi</span>
                  <span className="proficiency intermediate">Conversational</span>
                </div>
              </div>
            </div>

            <div className="info-card interests">
              <h4>🎯 Professional Interests</h4>
              <ul>
                <li>Agentic AI Systems</li>
                <li>Large Language Models</li>
                <li>Geospatial Intelligence</li>
                <li>Edge Computing</li>
                <li>Computer Vision Applications</li>
                <li>MLOps & Production ML</li>
              </ul>
            </div>

            <div className="info-card hobbies">
              <h4>📸 Hobbies & Interests</h4>
              <ul>
                <li>Photography (Former IUTPS Head)</li>
                <li>Technology Research</li>
                <li>Open Source Contribution</li>
                <li>Scientific Writing</li>
                <li>Workshop Facilitation</li>
                <li>Mentoring Students</li>
              </ul>
            </div>

            <div className="info-card volunteering">
              <h4>🤝 Leadership & Volunteering</h4>
              <ul>
                <li>Student Mentor - Wireframing & Prototyping</li>
                <li>Head of Creative Fields - IUTPS</li>
                <li>VP Photography - Neutrino ACC Science Club</li>
                <li>Workshop Leader - Generative AI</li>
                <li>Peer Review Champion - Hall of Honor</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <h2>Get In Touch</h2>
          
          <div className="contact-grid">
            <div className="contact-card">
              <h4>📍 Location</h4>
              <p>Dhaka, Bangladesh</p>
            </div>
            
            <div className="contact-card">
              <h4>📧 Email</h4>
              <a href="mailto:zubairrahman@iut-dhaka.edu">zubairrahman@iut-dhaka.edu</a>
            </div>
            
            <div className="contact-card">
              <h4>💼 LinkedIn</h4>
              <a href="https://linkedin.com/in/ztusar" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/ztusar
              </a>
            </div>
            
            <div className="contact-card">
              <h4>💻 GitHub</h4>
              <a href="https://github.com/zubairtusar" target="_blank" rel="noopener noreferrer">
                github.com/zubairtusar
              </a>
            </div>
            
            <div className="contact-card">
              <h4>🎓 Google Scholar</h4>
              <a href="https://scholar.google.com/citations?user=nRQqx3wAAAAJ" target="_blank" rel="noopener noreferrer">
                View Publications
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Others;