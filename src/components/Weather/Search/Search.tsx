import React from "react";
import "./Search.css";
import SearchIcon from "../../../assets/images/search.png";

const Search = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Enter the city" spellCheck="false" />
      <button>
        <img src={SearchIcon} alt="SearchIcon"/>
      </button>
    </div>
  );
};

export default Search;
