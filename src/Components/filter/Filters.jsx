import React, { useState } from "react";
import "./Filter.css";
import { FaSearch } from "react-icons/fa";

const Filters = ({ onSearch, onFilter }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [region, setRegion] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleFilterChange = (e) => {
    setRegion(e.target.value);
    onFilter(e.target.value);
  };

  return (
    <div className="main">
      <div className="inputContainer">
        <FaSearch className="icon" />
        <div style={{ paddingLeft: "10px" }}>
          <input
            type="text"
            placeholder="Search country..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="input"
          />
        </div>
      </div>
      <div className="select">
        <select
          value={region}
          onChange={handleFilterChange}
          className="dropdown"
        >
          <option value="">Search by</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
