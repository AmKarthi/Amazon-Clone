import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="back-to-top">
        <a href="#top">Back to top</a>
      </div>
      <div className="footer-container">
        <div className="footer-column">
          <h3>Get to Know Us</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#press">Press Releases</a></li>
            <li><a href="#blog">Amazon Blog</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Make Money with Us</h3>
          <ul>
            <li><a href="#sell">Sell on Amazon</a></li>
            <li><a href="#affiliate">Become an Affiliate</a></li>
            <li><a href="#advertise">Advertise Your Products</a></li>
            <li><a href="#self-publish">Self-Publish with Us</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Amazon Payment Products</h3>
          <ul>
            <li><a href="#credit-cards">Amazon Credit Cards</a></li>
            <li><a href="#shop-with-points">Shop with Points</a></li>
            <li><a href="#reload">Reload Your Balance</a></li>
            <li><a href="#currency-converter">Amazon Currency Converter</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Let Us Help You</h3>
          <ul>
            <li><a href="#your-account">Your Account</a></li>
            <li><a href="#shipping">Shipping Rates & Policies</a></li>
            <li><a href="#returns">Returns & Replacements</a></li>
            <li><a href="#help">Help</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024, Your Amazon Clone, Inc. or its affiliates</p>
      </div>
    </footer>
  );
}

export default Footer;
