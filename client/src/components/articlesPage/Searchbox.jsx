import React, { useState } from "react";
import "./searchBox.scss";
import { BiSearchAlt } from "react-icons/bi";

function SearchBox(props) {
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Search query submitted: ${query}`);
  };

  return (
    <div className="search-container">
      <form className="search-box" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={props.placeholder || "Search..."}
          value={query}
          onChange={handleInputChange}
        />
        <div className="lupe">
          <BiSearchAlt tabIndex="" />
        </div>
      </form>
    </div>
  );
}

export default SearchBox;
