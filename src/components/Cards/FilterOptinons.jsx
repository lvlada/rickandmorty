import React from "react";
import './FilterOptions.scss'

const FilterOptinons = () => {
  return (
    <>
    <label>
      Select a filter:
      </label>
      <select name="selectedOption" className="filter">
        <option value="0">Deafault</option>
        <option value="1">A-Z</option>
        <option value="2">Z-A</option>
      </select>

    </>

  );
};

export default FilterOptinons;
