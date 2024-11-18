import React from 'react';
import { Mail, Github } from 'lucide-react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="contact-info">
          <div className="contact-item">
            <Mail className="contact-icon" />
            <a href="mailto:contact@maheshparajuli.com">
              maheshparajuli717@gmail.com
            </a>
          </div>
          <div className="contact-item">
            <Github className="contact-icon" />
            <a 
              href="https://github.com/maheshparajuli" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </div>
        </div>
        
        <p className="copyright">
          &copy; {new Date().getFullYear()} Mahesh Parajuli. All rights reserved.
        </p>
        
        <div className="footer-decoration"></div>
      </div>
    </footer>
  );
}

export default Footer;