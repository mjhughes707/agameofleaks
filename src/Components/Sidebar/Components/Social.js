import React from "react";
import "./Social.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTumblr,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Social() {
  return (
    <div className="Social">
      <a
        href="https://agameofleaks.tumblr.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTumblr} className="font-awesome fa-2x" />
      </a>

      <a
        href="https://twitter.com/agameofleaks"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faTwitter} className="font-awesome fa-2x" />
      </a>

      <a
        href="https://www.instagram.com/gameofleaks_/?hl=en"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faInstagram} className="font-awesome fa-2x" />
      </a>
    </div>
  );
}

export default Social;
