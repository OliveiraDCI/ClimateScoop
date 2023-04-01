import "./searchBox.scss";
// import { BiSearchAlt } from "react-icons/bi";

function SearchBox({ value, onChange }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") e.preventDefault();
  };

  return (
    <div className="search-container">
      <form className="search-box">
        <input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
        {/* <div className="lupe">
          <BiSearchAlt tabIndex="" />
        </div> */}
      </form>
    </div>
  );
}

export default SearchBox;
