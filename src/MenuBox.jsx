import { useState } from "react";

const MenuBox = ({ setSelectedRegion }) => {
  // Accept prop from Hero
  const handleChange = (event) => {
    setSelectedRegion(event.target.value); // Call the prop function
  };

  return (
    <select
      onChange={handleChange}
      className="focus:outline-none focus:ring-2 ring-cyan-400 rounded-lg bg-none text-lg px-3 py-2 shadow-lg"
    >
      <option value="">Filter By Region</option>
      <option value="Africa">Africa</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
};

export default MenuBox;
