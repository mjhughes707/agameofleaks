import React, { useContext } from "react";
import { Context } from "../../Context";
import "./Sidebar.css";
import Social from "./Components/Social";
import Search from "./Components/Search";
import Dropdown from "./Components/Dropdown";
import Footer from "../Footer/Footer";

function Sidebar() {
  const context = useContext(Context);
  const { get: dropdown } = context.dropdown;

  return (
    <div className="Sidebar hide-sm">
      <div className="sidebar-top">
        <Social />
        <Search />
        {dropdown && <Dropdown />}
      </div>
      <div className="sidebar-bottom">
        <Footer />
      </div>
    </div>
  );
}

export default Sidebar;
