import React, { useContext } from "react";
import { Context } from "../../../Context";
import "./Dropdown.css";

function Dropdown() {
  const context = useContext(Context);
  const { get: searchValue, set: setSearchValue } = context.searchValue;

  const Categories = ["characters", "scene", "page"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchValue({ ...searchValue, [name]: value });
  };

  return (
    <div className="Dropdown">
      {Categories.map((category, i) => (
        <input
          type="text"
          placeholder={category}
          name={category}
          value={searchValue[category]}
          onChange={(e) => handleChange(e)}
          key={i}
          className="category-button"
        />
      ))}
    </div>
  );
}

export default Dropdown;
