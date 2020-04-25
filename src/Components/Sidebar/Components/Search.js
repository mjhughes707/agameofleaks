import React, { useContext } from "react";
import { Context } from "../../../Context";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  const context = useContext(Context);
  const { get: dropdown, set: setDropdown } = context.dropdown;

  // hides and displays search fields
  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="Search">
      <button className="search-button" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faSearch} className="fa-2x" />
      </button>
    </div>
  );
}

export default Search;
