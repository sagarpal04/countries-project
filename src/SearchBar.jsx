import React, { useState } from "react";

const SearchBar = ({ setSearchQuery }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setSearchQuery(e.target.value); // Pass the value to the parent component
  };

  return (
    <div
      tabIndex={0}
      className="flex items-center justify-between bg-white rounded-full shadow-lg pl-4 pr-3 py-2 space-x-4 hover:shadow-xl transition-all focus:ring-2 focus:ring-blue-500"
    >
      <div className="flex items-center space-x-2 w-80">
        <input
          type="text"
          placeholder="Search for a country"
          className="text-gray-600 focus:outline-none w-full"
          value={inputValue}
          onChange={handleInputChange} // Handle user input
        />
      </div>

      <button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full p-3 focus:outline-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
