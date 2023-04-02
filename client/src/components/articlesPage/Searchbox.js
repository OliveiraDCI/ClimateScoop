import "./searchBox.scss";

function SearchBox({ value, onChange }) {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") e.preventDefault();
  };

  return (
    <div className="search-container">
      <form className="search-box">
        <input
          tabIndex="0"
          type="text"
          placeholder="Search..."
          value={value}
          onChange={onChange}
          onKeyDown={handleKeyDown}
        />
      </form>
    </div>
  );
}

export default SearchBox;
