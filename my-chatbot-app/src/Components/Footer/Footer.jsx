import React from 'react';

import indiaImg from '../../assets/Images/india.png';
import instagramImg from '../../assets/Images/instagram.png';
import linkedinImg from '../../assets/Images/linkedin.png';
import twitterImg from '../../assets/Images/twitter.png';
// import roboDogImg from '../assets/Images/ai4.png'
import '../../assets/CSS/Footer.css';
import companyImg from '../../assets/Images/company_logo.png';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo-container">
          <img className="companylogo" src={companyImg} alt="Company Logo" />
        </div>
        <div className="columns">
          <div className="column">
            
            <div className="office">
            <h4>OFFICE</h4>
              <div className="office-location">
                <img src={indiaImg} alt="India Logo" />
                <p>CLC Tower, Plot 146, Sector 44, Gurugram, Haryana 122003</p>
              </div>
              <div className="office-location">
                <img src={indiaImg} alt="India Logo" />
                <p>C21 Business Park, 2nd Floor, Scheme no. 131, Indore (M.P.) 452010</p>
              </div>
            </div>
          </div>
          <div className="column">
            <h4>SERVICES</h4>
            <ul>
              <li>Data Science Services</li>
              <li>Natural Language Processing</li>
              <li>Computer Vision</li>
              <li>Machine Learning Development</li>
            </ul>
          
          
          </div>
          <div className="column">
            <h4>COMPANY</h4>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact Us</li>
             
            </ul>
            
          </div>
          <div className="column" id='connect'>
            <h4>CONNECT</h4>
            <div className="social-icons">
              <img src={linkedinImg} alt="LinkedIn Logo" />
              <img src={twitterImg} alt="Twitter Logo" />
              <img src={instagramImg} alt="Instagram Logo" />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 Green Rider Technology LLP. All rights reserved</p>
        <div className="footer-links">
          <a href="#">Privacy Notice</a>
          <span>|</span>
          <a href="#">Cookie Policy</a>
          <span>|</span>
          <a href="#">Disclaimer</a>
          <span>|</span>
          <a href="#">Security Policy</a>
          <span>|</span>
          <a href="#">Customize cookies</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;