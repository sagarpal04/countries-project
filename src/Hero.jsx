import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import MenuBox from "./MenuBox";
import Card from "./Card";

const Hero = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [abortController, setAbortController] = useState(null); // Keep track of the abort controller

  useEffect(() => {
    const fetchCountries = async () => {
      if (abortController) {
        abortController.abort(); // Cancel the previous request if it exists
      }

      const controller = new AbortController(); // Create a new abort controller
      setAbortController(controller);

      try {
        const response = await fetch("https://restcountries.com/v3.1/all", {
          signal: controller.signal, // Pass the signal to the fetch call
        });
        const data = await response.json();
        setCountries(data);
        setFilteredCountries(data); // Initialize with all countries
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Fetch aborted");
        } else {
          console.error("Error fetching countries:", error);
        }
      }
    };
    fetchCountries();
  }, []); // Fetch countries on initial load

  useEffect(() => {
    // Filter by region
    if (selectedRegion) {
      const filtered = countries.filter(
        (country) => country.region === selectedRegion
      );
      setFilteredCountries(filtered);
    } else {
      setFilteredCountries(countries); // Show all countries if no region is selected
    }
  }, [selectedRegion, countries]);

  useEffect(() => {
    // Filter by search query
    const filtered = countries.filter((country) =>
      country.name.official.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCountries(filtered);
  }, [searchQuery, countries]);

  return (
    <div className="bg-gray-100">
      <div className="w-9/12 mx-auto py-10 flex items-center justify-between">
        <SearchBar setSearchQuery={setSearchQuery} />{" "}
        {/* Pass setSearchQuery */}
        <MenuBox setSelectedRegion={setSelectedRegion} />{" "}
      </div>
      <div className="grid grid-cols-4">
        {filteredCountries.map((el) => (
          <Card
            key={el.cca3}
            countryName={el.name.official}
            image={el.flags.svg}
            region={el.region}
            capital={el.capital && el.capital[0]}
            population={el.population}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
