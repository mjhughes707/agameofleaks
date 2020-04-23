import React from "react";
import "./Search.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Search(props) {
  const { onClick } = props;

  return (
    <div className="Search">
      <button className="search-button" onClick={onClick}>
        <FontAwesomeIcon icon={faSearch} className="fa-2x" />
      </button>
    </div>
  );
}

export default Search;
