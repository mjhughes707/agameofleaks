import React, { useState } from "react";
import "./Sidebar.css";
import Social from "./Components/Social";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Footer from "../Footer/Footer";

function Sidebar() {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="Sidebar hide-sm">
      <div className="sidebar-top">
        <Social />
        <Search onClick={toggleDropdown} />
        {dropdown && <Dropdown />}
      </div>
      <div className="sidebar-bottom">
        <Footer />
      </div>
    </div>
  );
}

export default Sidebar;
