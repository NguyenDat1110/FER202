import { useState } from 'react';
import './SearchFilter.css';

function SearchFilter() {
  const [searchQuery, setSearchQuery] = useState('');

  const items = [
    'Apple',
    'Banana',
    'Cherry',
    'Date',
    'Elderberry',
    'Fig',
    'Grape',
    'Honeydew',
    'Kiwi',
    'Lemon',
    'Mango',
    'Orange',
    'Papaya',
    'Quince',
    'Raspberry',
    'Strawberry',
    'Tangerine',
    'Watermelon'
  ];

  const filteredItems = items.filter(item =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="search-filter-container">
      <h2>Search Filter</h2>
      
      <div className="search-section">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search items..."
          className="search-input"
        />
      </div>

      <div className="results-section">
        <p className="results-count">
          Found {filteredItems.length} item(s)
          {searchQuery && ` for "${searchQuery}"`}
        </p>
        
        <ul className="items-list">
          {filteredItems.length === 0 ? (
            <li className="no-results">No items match your search</li>
          ) : (
            filteredItems.map((item, index) => (
              <li key={index} className="item">
                {item}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default SearchFilter;