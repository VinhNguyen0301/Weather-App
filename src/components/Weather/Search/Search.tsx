import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "../../../assets/images/search.png";

const Search = (props) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };
  const onSearch = (searchTerm) => {
    props.onSearchCity(searchTerm);
    setValue('')
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter the city"
        spellCheck="false"
        value={value}
        onChange={onChange}
      />
      <button onClick={() => onSearch(value)}>
        <img src={SearchIcon} alt="SearchIcon" />
      </button>
    </div>
  );
};

export default Search;
