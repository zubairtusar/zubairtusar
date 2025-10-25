import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  return (
    <div className="projects">
      <div className="container">
        <h1 className="page-title">Projects</h1>
        
        <section className="projects-section">
          <div className="project-card featured">
            <div className="project-header">
              <h3>Paralegal Agent & Visa Petition Agent</h3>
              <div className="project-tags">
                <span className="tag">Agentic AI</span>
                <span className="tag">RAG</span>
                <span className="tag">Full-Stack</span>
              </div>
            </div>
            <div className="project-description">
              <p>
                Implemented an agentic, retrieval-augmented drafting system: n8n-orchestrated multi-agent pipelines ingest PDFs/forms, extract facts, and generate petition drafts/LoRs with evaluation and versioning.
              </p>
            </div>
            <div className="tech-stack">
              <h4>Technology Stack:</h4>
              <div className="tech-tags">
                <span className="tech-tag">Supabase</span>
                <span className="tech-tag">PostgreSQL</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">React</span>
                <span className="tech-tag">Vector Search</span>
                <span className="tech-tag">n8n</span>
              </div>
            </div>
            <div className="project-features">
              <h4>Key Features:</h4>
              <ul>
                <li>Multi-agent orchestration with n8n</li>
                <li>PDF/form ingestion and fact extraction</li>
                <li>Automated petition draft generation</li>
                <li>Document versioning and evaluation</li>
                <li>Vectorization and reranking capabilities</li>
              </ul>
            </div>
          </div>

          <div className="project-card">
            <div className="project-header">
              <h3>Movement-Monitoring Wearable</h3>
              <div className="project-tags">
                <span className="tag">IoT</span>
                <span className="tag">Edge AI</span>
                <span className="tag">Healthcare</span>
              </div>
            </div>
            <div className="project-description">
              <p>
                Built a wearable that performs on-device inference to detect unusual patient movements and trigger caregiver alerts. Features real-time anomaly detection using embedded machine learning.
              </p>
            </div>
            <div className="tech-stack">
              <h4>Technology Stack:</h4>
              <div className="tech-tags">
                <span className="tech-tag">Raspberry Pi Zero W</span>
                <span className="tech-tag">MPU-9250 IMU</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">Machine Learning</span>
              </div>
            </div>
            <div className="project-features">
              <h4>Key Features:</h4>
              <ul>
                <li>On-device anomaly detection</li>
                <li>Real-time movement monitoring</li>
                <li>Caregiver alert system</li>
                <li>Low-power edge computing</li>
                <li>Wearable form factor</li>
              </ul>
            </div>
            <div className="project-links">
              <a 
                href="https://github.com/zubairtusar/movement_recognition_system" 
                target="_blank" 
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>
          </div>
        </section>

        <section className="research-projects">
          <h2>Research & Academic Projects</h2>
          
          <div className="research-grid">
            <div className="research-card">
              <h4>Sentiment Analysis with Transformer Ensembling</h4>
              <p>
                Developed SE-vocabulary augmentation and transformer ensembling techniques for sentiment polarity analysis, achieving 1–26% improvement in weighted/macro F1 scores across four software engineering datasets.
              </p>
              <div className="research-outcomes">
                <span className="outcome">📄 Published in ICSOFT 2023</span>
                <span className="outcome">📊 26% F1 Score Improvement</span>
              </div>
            </div>

            <div className="research-card">
              <h4>Complex Nurse Care Activity Recognition</h4>
              <p>
                Built a smartphone-accelerometer Human Activity Recognition (HAR) system featuring denoising filters, overlapping windows, multi-domain features, and Random Forest classification to handle high data/label noise.
              </p>
              <div className="research-outcomes">
                <span className="outcome">📄 UbiComp/ISWC'21 Workshop</span>
                <span className="outcome">🥉 3rd Place HASCA Challenge</span>
              </div>
            </div>

            <div className="research-card">
              <h4>Bangla License Plate Detection</h4>
              <p>
                Collaborated on synthetic data generation using Grand Theft Auto V (GTA V) to improve Bangla license plate detection models, addressing the lack of diverse training data in local contexts.
              </p>
              <div className="research-outcomes">
                <span className="outcome">🎮 Synthetic Data Generation</span>
                <span className="outcome">🔍 Computer Vision</span>
              </div>
            </div>
          </div>
        </section>

        <section className="technical-projects">
          <h2>Professional Technical Projects</h2>
          
          <div className="tech-project-grid">
            <div className="tech-project-card ai">
              <div className="project-icon">🤖</div>
              <h4>ARPU Enhancer Model</h4>
              <p>Contextual multi-armed bandit system integrated with offer-recommendation engine for revenue optimization.</p>
              <div className="impact">Impact: ARPU uplift optimization</div>
            </div>

            <div className="tech-project-card network">
              <div className="project-icon">📡</div>
              <h4>Network Coverage Monitor</h4>
              <p>Location intelligence system using KD/Ball-tree indexing for geospatial analysis, reducing processing time from weeks to hours.</p>
              <div className="impact">Impact: 2 weeks → 2 hours processing</div>
            </div>

            <div className="tech-project-card ml">
              <div className="project-icon">🎯</div>
              <h4>New-Site Recommender</h4>
              <p>Set-cover optimization problem solver for network site placement with greedy algorithm implementation.</p>
              <div className="impact">Impact: 58% business potential gain</div>
            </div>

            <div className="tech-project-card vision">
              <div className="project-icon">👁️</div>
              <h4>Trade Visibility System</h4>
              <p>End-to-end monitoring using object detection models across 700k+ retail outlets with real-time inference.</p>
              <div className="impact">Impact: ~75% recall in production</div>
            </div>

            <div className="tech-project-card analytics">
              <div className="project-icon">📊</div>
              <h4>Customer Segmentation</h4>
              <p>360° segmentation of 50M+ customers using statistical modeling and behavioral feature engineering.</p>
              <div className="impact">Impact: Targeted advertising platform</div>
            </div>

            <div className="tech-project-card prediction">
              <div className="project-icon">⏰</div>
              <h4>Intervention Time Model</h4>
              <p>Regression-based preferred intervention time modeling for conversion rate optimization.</p>
              <div className="impact">Impact: 67% conversion rate</div>
            </div>
          </div>
        </section>

        <section className="project-skills">
          <h2>Technical Expertise Demonstrated</h2>
          
          <div className="skills-showcase">
            <div className="skill-category">
              <h4>🧠 Machine Learning & AI</h4>
              <ul>
                <li>Multi-armed Bandit Systems</li>
                <li>LSTM/RNN Networks</li>
                <li>Ensemble Methods</li>
                <li>Anomaly Detection</li>
                <li>Recommender Systems</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>👁️ Computer Vision</h4>
              <ul>
                <li>Object Detection (YOLO)</li>
                <li>OCR Implementation</li>
                <li>Edge Detection</li>
                <li>Color Quantization</li>
                <li>Production Monitoring</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>🗺️ Geospatial Analysis</h4>
              <ul>
                <li>Spatial Indexing (KD/Ball Trees)</li>
                <li>Location Intelligence</li>
                <li>Network Propagation Modeling</li>
                <li>Coverage Analysis</li>
                <li>Optimization Algorithms</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>🤖 LLM & Agentic Systems</h4>
              <ul>
                <li>Retrieval Augmented Generation</li>
                <li>Multi-agent Orchestration</li>
                <li>Prompt Engineering</li>
                <li>Document Processing</li>
                <li>Workflow Automation</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;