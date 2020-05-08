import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="Header">
      <h1 className="header-title">A Game of Leaks</h1>
      <hr className="line-single" />
      <p className="header-intro">
        This project explores what Game of Thrones - Season 8{" "}
        <span className="might">might</span> have looked like, based off a few
        rumored original outlines. The legitimacy of them is irrelevant.
      </p>
      <hr className="line-double" />
    </header>
  );
}

export default Header;
