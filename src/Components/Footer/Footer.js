import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="Footer">
      <p className="footer-text">
        Artwork by{" "}
        <a
          href="https://twitter.com/fawnilu_?lang=en"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          @fawnilu_
        </a>
      </p>
    </footer>
  );
}

export default Footer;
