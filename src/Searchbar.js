import React, { useState } from "react";

const SearchBar = ({ placeholder, data }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(-1); // State to track the selected suggestion
  const [showSuggestions, setShowSuggestions] = useState(true); // Control visibility of suggestions

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setSelectedIndex(-1); // Reset selection when typing
    setShowSuggestions(true); 
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      // Move selection down
      setSelectedIndex((prevIndex) =>
        prevIndex < filteredData.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (event.key === "ArrowUp") {
      // Move selection up
      setSelectedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : -1
      );
    } else if (event.key === "Enter" && selectedIndex >= 0) {
      // Set search term to the selected suggestion when Enter is pressed
      setSearchTerm(filteredData[selectedIndex]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (item) => {
    setSearchTerm(item);
    setShowSuggestions(false); // Hide suggestions after selection
  };

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        style={{ padding: "10px", width: "300px", borderRadius: "10px" }}
      />
      
      {/* Conditionally render the list when there's a search term and suggestions are visible */}
      {searchTerm && showSuggestions && (
        <ol>
          {filteredData.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(item)}
              style={{
                //backgroundColor: selectedIndex === index ? "#ddd" : "#fff",
                padding: "5px",
                cursor: "pointer",
              }}
            >
              {item}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
};

export default SearchBar;  