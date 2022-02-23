import React from "react";
import "./footer.css";

const Links = () => (
  <div className="reli__footer-links">
    <div className="face"></div>
    <div className="linked"></div>
    <div className="twitter"></div>
    <div className="pint"></div>
  </div>
);

const Footer = () => {
  return (
    <div className="reli__footer">
      <div className="reli__footer-items">
        <div>
          <a className="reli__footer-contact" href="/contact">
            Contact
          </a>
        </div>
        <div className="reli__footer-phone">
          <p>514 500 3605</p>
        </div>
        <div className="reli__footer-links_container">
          <Links />
        </div>
        <div className="reli__footer-year">
          <p>© 2022</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
