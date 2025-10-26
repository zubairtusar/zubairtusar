import React from 'react';
import './Others.css';
import poltuImage from '../assets/poltu.png';
import peronaImage from '../assets/perona.png';
import putiImage from '../assets/puti.png';
import flickrImage from '../assets/flickr.jpg';
import behanceImage from '../assets/behance.png';

const Others: React.FC = () => {
  return (
    <div className="others">
      <div className="container">
        <h1 className="page-title">My Passions</h1>
        
        <section className="intro-section">
          <div className="intro-card">
            <p className="intro-text">
              Beyond AI and data science, I express myself through <strong>photography</strong> and 
              <strong> graphic design</strong>. I work with lighting, composition, post-processing, and Adobe's creative 
              suite, creating in the moment. I'm also a proud parent to three amazing cats who remind me that 
              life happens now, not later.
            </p>
          </div>
        </section>

        <section className="creative-section">
          <h2>🎨 Creative Work</h2>
          
          <div className="creative-grid">
            <div className="creative-card photography">
              <div className="creative-header">
                <h3>📸 Photography</h3>
                <span className="badge">Former IUTPS Head</span>
              </div>
              <div className="creative-image-wrapper">
                <img src={flickrImage} alt="Photography Portfolio" className="creative-image" />
              </div>
              <div className="creative-body">
                <p>
                  Capturing moments through the lens is how I stay present. From street photography 
                  to portraits, I focus on composition, lighting, and storytelling as they happen. 
                  My time as <strong> Head of Creative Fields at IUTPS</strong> and <strong>VP Photography at Neutrino ACC</strong> 
                  taught me that the best shots come from being fully in the now.
                </p>
                <div className="skills-tags">
                  <span>Composition</span>
                  <span>Lighting</span>
                  <span>Post-Processing</span>
                  <span>Visual Storytelling</span>
                </div>
              </div>
              <a href="https://flickr.com/photos/138682360@N04/" target="_blank" rel="noopener noreferrer" className="portfolio-button">
                📷 View Flickr Gallery
              </a>
            </div>

            <div className="creative-card design">
              <div className="creative-header">
                <h3>🎨 Graphic Design</h3>
                <span className="badge">Adobe Suite</span>
              </div>
              <div className="creative-image-wrapper">
                <img src={behanceImage} alt="Design Portfolio" className="creative-image" />
              </div>
              <div className="creative-body">
                <p>
                  My design work complements my photography, allowing me to craft complete visual stories 
                  in the present. I work with Adobe's creative tools, color theory, and layout composition, 
                  transforming ideas into visuals today. From photo manipulation to digital art, 
                  I enjoy the creative process as it unfolds.
                </p>
                <div className="skills-tags">
                  <span>Adobe Creative Suite</span>
                  <span>Color Theory</span>
                  <span>Visual Design</span>
                  <span>Layout Composition</span>
                </div>
              </div>
              <a href="https://www.behance.net/zubairtusar" target="_blank" rel="noopener noreferrer" className="portfolio-button">
                🎨 View Behance Portfolio
              </a>
            </div>
          </div>
        </section>

        <section className="pets-section">
          <h2>🐾 My Furry Companions</h2>
          
          <div className="cats-grid">
            <div className="cat-card">
              <div className="cat-image-wrapper">
                <img src={poltuImage} alt="Poltu" className="cat-image" />
              </div>
              <div className="cat-info">
                <h4>Poltu</h4>
                <p>The adventurous explorer</p>
              </div>
            </div>
            
            <div className="cat-card">
              <div className="cat-image-wrapper">
                <img src={peronaImage} alt="Perona" className="cat-image" />
              </div>
              <div className="cat-info">
                <h4>Perona</h4>
                <p>The gentle soul</p>
              </div>
            </div>
            
            <div className="cat-card">
              <div className="cat-image-wrapper">
                <img src={putiImage} alt="Puti" className="cat-image" />
              </div>
              <div className="cat-info">
                <h4>Puti</h4>
                <p>The house princess</p>
              </div>
            </div>
          </div>
        </section>

        <section className="footer-info">
          <div className="footer-grid">
            <div className="footer-card">
              <h4>🌐 Languages</h4>
              <div className="language-list">
                <div className="lang-item">
                  <span>English</span>
                  <strong>IELTS 7.5</strong>
                </div>
                <div className="lang-item">
                  <span>Bengali</span>
                  <strong>Native</strong>
                </div>
              </div>
            </div>

            <div className="footer-card philosophy">
              <h4>🎯 Life Philosophy</h4>
              <p>
                Balance technical expertise with creative expression; See the world through multiple lenses; 
                Find beauty in both data and nature; Create in the present moment; 
                Next time is next time, now is now...
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Others;