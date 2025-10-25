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
              <p className="venue">ICSOFT 2023 - Volume 1 [Conference]</p>
              <div className="publication-description">
                <p>Proposed SE-vocabulary augmentation and transformer ensembling for sentiment polarity, improving weighted/macro F1 by 1–26% on four SE datasets over prior baselines.</p>
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
              <p className="venue">UbiComp/ISWC'21 Adjunct [Workshop, non-archival]</p>
              <div className="publication-description">
                <p>Built a smartphone-accelerometer HAR system with denoising filters, overlapping windows, multi-domain features, and RF battling high data/label noise.</p>
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
            <p className="institution">Islamic University of Technology, Gazipur, Bangladesh</p>
            <p className="gpa">CGPA 3.64/4.00 (last 4 semesters: 3.88)</p>
            
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
                <li><strong>Student Mentor</strong> - Conducted applied sessions on wireframing and prototyping</li>
                <li><strong>Head of Creative Fields</strong> - Islamic University of Technology Photography Society (IUTPS)</li>
              </ul>
            </div>
          </div>

          <div className="education-card">
            <div className="education-header">
              <h3>Higher Secondary School Certificate</h3>
              <span className="duration">Jun 2015 – Apr 2017</span>
            </div>
            <p className="institution">Adamjee Cantonment College, Dhaka, Bangladesh</p>
            <p className="gpa">GPA 5.00/5.00</p>
            
            <div className="leadership">
              <h4>Leadership Roles:</h4>
              <ul>
                <li><strong>Vice President of Photography</strong> - Neutrino ACC Science Club - Covered event photographs and managed photography wing of the club</li>
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
                <span className="score-value">7.5</span>
              </div>
              <div className="individual-scores">
                <div className="score-item">
                  <span>Speaking:</span>
                  <span>8.0</span>
                </div>
                <div className="score-item">
                  <span>Listening:</span>
                  <span>7.5</span>
                </div>
                <div className="score-item">
                  <span>Writing:</span>
                  <span>7.0</span>
                </div>
                <div className="score-item">
                  <span>Reading:</span>
                  <span>6.5</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Academia;