import React, { useContext } from "react";
import { Context } from "../../../Context";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search() {
  const context = useContext(Context);
  const { get: dropdown, set: setDropdown } = context.dropdown;
  const { set: setSearchValue } = context.searchValue;

  // hides and displays search fields + resets values
  const toggleDropdown = () => {
    setDropdown(!dropdown);
    setSearchValue({
      Character: "",
      Scene: "",
      Page: "",
    });
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
