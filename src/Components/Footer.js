
import React from 'react';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">
          &copy; {new Date().getFullYear()} Mahesh Parajuli. All rights reserved.
        </p>
        <div className="footer-decoration"></div>
      </div>
    </footer>
  );
}
export default Footer;