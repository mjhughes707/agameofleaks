import React, { useState } from "react";
import "./Dropdown.css";

function Dropdown() {
  const [searchValue, setSearchValue] = useState({
    Character: "",
    Scene: "",
    Page: "",
  });
  const Categories = ["Character", "Scene", "Page"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchValue({ ...searchValue, [name]: value });
    console.log(searchValue);
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
