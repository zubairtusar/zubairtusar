import React from 'react';
import './Academia.css';

const Academia: React.FC = () => {
  return (
    <div className="academia">
      <div className="container">
        <h1 className="page-title">Academia</h1>
        
        <section className="publications-section">
          <h2>Publications</h2>
          
          <div className="publication-card">
            <h3>Effectiveness of Data Augmentation and Ensembling Using Transformer-Based Models for Sentiment Analysis: Software Engineering Perspective</h3>
            <div className="publication-details">
              <p className="authors">
                <strong>Zubair Tusar</strong>, Sadat Bin Sharfuddin, Muhtasim Abid, Md. Haque, Md. Mostafa
              </p>
              <p className="venue"><strong>ICSOFT 2023</strong> - Volume 1 [Conference]</p>
              <div className="publication-description">
                <p>Proposed SE-vocabulary augmentation and transformer ensembling for sentiment polarity, improving weighted/macro F1 by <strong>1–26%</strong> on four SE datasets over prior baselines.</p>
              </div>
              <a href="https://www.scitepress.org/Link.aspx?doi=10.5220/0012092500003538" target="_blank" rel="noopener noreferrer" className="publication-link">
                View Publication
              </a>
            </div>
          </div>

          <div className="publication-card">
            <h3>Accelerometer-based Complex Nurse Care Activity Recognition using Machine Learning Approach</h3>
            <div className="publication-details">
              <p className="authors">
                <strong>Zubair Tusar</strong>, Maksuda Islam, Sadia Sharmin
              </p>
              <p className="venue"><strong>UbiComp/ISWC'21</strong> Adjunct [Workshop, non-archival]</p>
              <div className="publication-description">
                <p>Built a smartphone-accelerometer HAR system with denoising filters, overlapping windows, multi-domain features, and <strong>RF</strong> battling high data/label noise.</p>
              </div>
              <a href="https://dl.acm.org/doi/10.1145/3460418.3479390" target="_blank" rel="noopener noreferrer" className="publication-link">
                View Publication
              </a>
            </div>
          </div>
        </section>

        <section className="education-section">
          <h2>Education</h2>
          
          <div className="education-card">
            <div className="education-header">
              <h3>B.Sc in Software Engineering</h3>
              <span className="duration">Jan 2018 – Apr 2022</span>
            </div>
            <p className="institution">
              <strong>
                <a href="https://www.iutoic-dhaka.edu/" target="_blank" rel="noopener noreferrer">
                  Islamic University of Technology
                </a>
              </strong>, Gazipur, Bangladesh
            </p>
            <p className="gpa"><strong>CGPA 3.64/4.00</strong> (last 4 semesters: <strong>3.88</strong>)</p>
            
            <div className="coursework">
              <h4>Notable Coursework:</h4>
              <div className="coursework-grid">
                <div className="coursework-category">
                  <h5>Core Computer Science</h5>
                  <ul>
                    <li>Data Structures</li>
                    <li>Algorithms</li>
                    <li>Database Management</li>
                    <li>Operating Systems</li>
                    <li>Microprocessor</li>
                  </ul>
                </div>
                <div className="coursework-category">
                  <h5>AI & Data Science</h5>
                  <ul>
                    <li>Probability and Statistics</li>
                    <li>Big Data Analysis</li>
                    <li>Machine Learning</li>
                    <li>Artificial Intelligence</li>
                  </ul>
                </div>
                <div className="coursework-category">
                  <h5>Software Engineering</h5>
                  <ul>
                    <li>Software Security</li>
                    <li>Software Maintenance</li>
                    <li>Software Requirement and Specification</li>
                    <li>Design Patterns</li>
                    <li>Technical Report Writing</li>
                  </ul>
                </div>
                <div className="coursework-category">
                  <h5>Development</h5>
                  <ul>
                    <li>Embedded Software Development</li>
                    <li>Server Programming</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="leadership">
              <h4>Leadership Roles:</h4>
              <ul>
                <li><strong>Student Mentor</strong> - Guided students through applied sessions on wireframing and prototyping</li>
                <li><strong>Head of Creative Fields</strong> - Islamic University of Technology Photography Society (IUTPS)</li>
              </ul>
            </div>
          </div>

          <div className="education-card">
            <div className="education-header">
              <h3>Higher Secondary School Certificate</h3>
              <span className="duration">Jun 2015 – Apr 2017</span>
            </div>
            <p className="institution">
              <strong>
                <a href="https://acc.edu.bd/" target="_blank" rel="noopener noreferrer">
                  Adamjee Cantonment College
                </a>
              </strong>, Dhaka, Bangladesh
            </p>
            <p className="gpa"><strong>GPA 5.00/5.00</strong></p>
            
            <div className="leadership">
              <h4>Leadership Roles:</h4>
              <ul>
                <li><strong>Vice President of Photography</strong> - Neutrino ACC Science Club - Covered event photographs and led photography initiatives</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="standardized-tests">
          <h2>Standardized Tests</h2>
          <div className="test-card">
            <h3>IELTS</h3>
            <p className="test-date">September 2023</p>
            <div className="test-scores">
              <div className="overall-score">
                <span className="score-label">Overall Band Score:</span>
                <span className="score-value"><strong>8.0 / 9.0</strong></span>
              </div>
              <div className="individual-scores">
                <div className="score-item" data-score="100">
                  <span>Speaking: 9.0 / 9.0</span>
                  <span className="score-bar"></span>
                </div>
                <div className="score-item" data-score="89">
                  <span>Listening: 8.0 / 9.0</span>
                  <span className="score-bar"></span>
                </div>
                <div className="score-item" data-score="83">
                  <span>Reading: 7.5 / 9.0</span>
                  <span className="score-bar"></span>
                </div>
                <div className="score-item" data-score="78">
                  <span>Writing: 7.0 / 9.0</span>
                  <span className="score-bar"></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="technical-skills-section">
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

        <section className="interests-section">
          <h2>Research Interests</h2>
          <div className="interests-grid">
            <div className="interest-card">
              <h4>👁️ Computer Vision</h4>
              <p>Real-world CV applications and visual recognition systems</p>
            </div>
            <div className="interest-card">
              <h4>� Agentic AI Systems</h4>
              <p>Exploring autonomous AI agents and multi-agent systems</p>
            </div>
            <div className="interest-card">
              <h4>🗺️ Geospatial Intelligence</h4>
              <p>Spatial data analysis and location-based AI solutions</p>
            </div>
            <div className="interest-card">
              <h4>🧠 Large Language Models</h4>
              <p>Advanced LLM applications and optimization techniques</p>
            </div>
            <div className="interest-card">
              <h4>� MLOps & Production ML</h4>
              <p>Deploying and maintaining ML systems at scale</p>
            </div>
            <div className="interest-card">
              <h4>� Edge Computing</h4>
              <p>AI at the edge and resource-constrained environments</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Academia;