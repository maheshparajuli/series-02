import React from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Mail, 
  MapPin 
} from 'lucide-react';

function Footer() {
  const socialLinks = [
    { 
      icon: <Github className="social-icon github-icon" />, 
      link: "https://github.com/yourusername" 
    },
    { 
      icon: <Linkedin className="social-icon linkedin-icon" />, 
      link: "https://linkedin.com/in/yourusername" 
    },
    { 
      icon: <Twitter className="social-icon twitter-icon" />, 
      link: "https://twitter.com/yourusername" 
    },
    { 
      icon: <Instagram className="social-icon instagram-icon" />, 
      link: "https://instagram.com/yourusername" 
    }
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-info">
            <p className="copyright">
              &copy; {new Date().getFullYear()} Mahesh Parajuli. All rights reserved.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <Mail className="contact-icon" />
                <a href="mailto:contact@maheshparajuli.com">
                  contact@maheshparajuli.com
                </a>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>Kathmandu, Nepal</span>
              </div>
            </div>
          </div>
          
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        
        <div className="footer-decoration"></div>
      </div>
    </footer>
  );
}

export default Footer;