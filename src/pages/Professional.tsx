import React from 'react';
import './Professional.css';

const Professional: React.FC = () => {
  return (
    <div className="professional">
      <div className="container">
        <h1 className="page-title">Professional Experience</h1>
        
        <section className="experience-section">
          <div className="company-card">
            <div className="company-header">
              <div className="company-info">
                <h2>Robi Axiata Limited</h2>
                <a href="https://www.robi.com.bd/en" target="_blank" rel="noopener noreferrer" className="company-link">
                  Visit Company
                </a>
              </div>
            </div>

            <div className="position-card current">
              <div className="position-header">
                <h3>Manager, AI and Data Science</h3>
                <span className="duration">Feb 2024 – present</span>
              </div>

              <div className="portfolio-section">
                <h4>Customer Portfolio</h4>
                <div className="project">
                  <h5>ARPU Enhancer Model</h5>
                  <p>Designed a contextual multi-armed bandit–based module (under-development) integrated with the offer-recommendation engine to drive ARPU uplift.</p>
                </div>
              </div>

              <div className="portfolio-section">
                <h4>Network Portfolio</h4>
                <div className="project">
                  <h5>Network Coverage Monitor</h5>
                  <p>Enabled last-mile coverage monitoring via location intelligence, summarizing billions of geospatial rows using KD/Ball-tree indexing - reducing ~2 weeks of work to 2 hours with higher precision.</p>
                </div>
                <div className="project">
                  <h5>Network Propagation Model</h5>
                  <p>Developed and piloted an urbanization-aware network-propagation regressor (~200 Meter RMSE) to simulate new-site placement.</p>
                </div>
                <div className="project">
                  <h5>New-Site Recommender</h5>
                  <p>Formulated and piloted site selection as a set-cover problem and implemented a greedy solver to maximize business potential. Observed 58% business potential gain over previous approach.</p>
                </div>
              </div>

              <div className="portfolio-section">
                <h4>Generative AI</h4>
                <div className="project">
                  <h5>AI Adoption Strategy</h5>
                  <p>Led hands-on workshops on prompt engineering and RAG concepts. Co-led the organization-wide generative-AI adoption and execution strategy.</p>
                </div>
              </div>
            </div>

            <div className="position-card">
              <div className="position-header">
                <h3>Specialist, Data Science</h3>
                <span className="duration">Sep 2022 – Jan 2024</span>
              </div>

              <div className="portfolio-section">
                <h4>Customer Portfolio</h4>
                <div className="project">
                  <h5>Offer Response Model</h5>
                  <p>Developed an MVP to predict customer response to product offers using a custom LSTM on historical behavior; enabled offer-simulation workflows. Achieved ~70% recall in lab settings.</p>
                </div>
                <div className="project">
                  <h5>Preferred Intervention Time Model</h5>
                  <p>Modeled and piloted "preferred intervention time" via regression to maximize conversion. Observed 67% conversion rate in production environment.</p>
                </div>
                <div className="project">
                  <h5>Advertising-as-a-Service</h5>
                  <p>Performed 360° segmentation of 50M+ customers to enable targeted advertising, using statistical modeling and behavioral features.</p>
                </div>
              </div>

              <div className="portfolio-section">
                <h4>Sales Portfolio</h4>
                <div className="project">
                  <h5>Trade Visibility</h5>
                  <p>Developed and launched end-to-end monitoring of competitive brand-material visibility across 700k+ retail outlets using object-detection models observing ~75% recall in production with 80% IoU threshold.</p>
                </div>
                <div className="project">
                  <h5>Acquisition Quality Prediction</h5>
                  <p>Developed LSTM-based models with efficacy monitoring to provide early indicators of subscriber quality - achieving ~80% accuracy in lab settings.</p>
                </div>
                <div className="project">
                  <h5>Operational Dashboards</h5>
                  <p>Built executive dashboards (daily national sales, forecast vs. actual, Distribution Bot), enabling proactive, data-driven actions by senior leadership.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="company-card">
            <div className="company-header">
              <div className="company-info">
                <h2>Intelligent Machines Ltd</h2>
                <a href="https://bangladesh.ai/" target="_blank" rel="noopener noreferrer" className="company-link">
                  Visit Company
                </a>
              </div>
            </div>

            <div className="position-card">
              <div className="position-header">
                <h3>AI Engineer</h3>
                <span className="duration">May 2022 – Sep 2022</span>
              </div>
              <div className="project">
                <h5>Product Line Fault Detection</h5>
                <p>Piloted a real-time production-quality validation system using color quantization and edge-detection techniques.</p>
              </div>
              <div className="project">
                <h5>Counterfeit Product Detection</h5>
                <p>Researched state-of-the-art approaches for counterfeit detection via invisible-watermark embedding and decoding.</p>
              </div>
            </div>

            <div className="position-card">
              <div className="position-header">
                <h3>AI Engineer Intern</h3>
                <span className="duration">Sep 2021 – Apr 2022</span>
              </div>
              <div className="project">
                <h5>Document Verification</h5>
                <p>Co-developed an identity-document fraud detector using OCR and edge-detection techniques.</p>
              </div>
              <div className="project">
                <h5>Dharapat</h5>
                <p>Built a suite of bank-statement analyzers using OCR and computer-vision techniques.</p>
              </div>
              <div className="project">
                <h5>Bangla License-Plate Detection</h5>
                <p>Collaborated on synthetic-data generation using Grand Theft Auto V (GTA V) to improve a Bangla license-plate detection model.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="achievements-section">
          <h2>Professional Achievements</h2>
          
          <div className="achievements-grid">
            <div className="achievement-card professional-award">
              <h4>🏆 Top Performer</h4>
              <p>Top 5% of the division in 2023-2024 performance evaluations</p>
            </div>
            
            <div className="achievement-card innovation-award">
              <h4>🌟 Divisional Champion</h4>
              <p>Awarded Divisional Champion in Hall of Honor (peer review program) for innovation and collaboration</p>
            </div>
            
            <div className="achievement-card star-performer">
              <h4>⭐ Star Performer Q3'2024</h4>
              <p>Awarded star performer for Q3'2024 for piloting nation-wide site recommendation rollout</p>
            </div>
            
            <div className="achievement-card ai-initiative">
              <h4>🤖 AI Leadership</h4>
              <p>Awarded star performer for Q1 and Q2 of 2024, consecutively for generative AI initiatives</p>
            </div>
            
            <div className="achievement-card sales-delivery">
              <h4>📊 Sales AI Excellence</h4>
              <p>Awarded star performer for Q1, Q2 and Q3 of 2023, consecutively for delivering e2e sales related AI use cases</p>
            </div>
          </div>
        </section>

        <section className="competitions-section">
          <h2>Co-Curricular Achievements</h2>
          
          <div className="competition-list">
            <div className="competition-item">
              <h4>🥈 Robi Datathon 2.0 (2022)</h4>
              <p>Placed top 2% in national competition</p>
            </div>
            
            <div className="competition-item">
              <h4>🥉 Third Nurse Care Activity Challenge - HASCA (2021)</h4>
              <p>Secured 3rd position in international competition</p>
            </div>
            
            <div className="competition-item">
              <h4>🥈 Photography Contest - Capture with The Third Eye, Season 2 (2019)</h4>
              <p>Secured 2nd position in national photography contest</p>
            </div>
            
            <div className="competition-item">
              <h4>🥈 Intra University Freshers' Programming Contest (2018)</h4>
              <p>Secured 2nd position in university programming competition</p>
            </div>
            
            <div className="competition-item">
              <h4>🥉 VNEC 1st National Earth Carnival (2016)</h4>
              <p>Secured 3rd position in photography contest</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Professional;