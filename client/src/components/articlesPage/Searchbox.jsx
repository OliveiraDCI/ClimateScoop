import React, { useState } from 'react';
import './searchBox.scss';
import {BiSearchAlt} from 'react-icons/bi'

function SearchBox(props) {
  const [query, setQuery] = useState('');

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // Hier kannst du die Suchfunktion implementieren und die Ergebnisse anzeigen lassen
    console.log(`Search query submitted: ${query}`);
  };

  return (
    <form className="search-box" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={props.placeholder || 'Search...'}
        value={query}
        onChange={handleInputChange}
      />
      <div className='lupe'><BiSearchAlt tabIndex=''/></div>
    </form>
  );
}

export default SearchBox;
