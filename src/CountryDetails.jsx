import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { useTheme } from "./ThemeContext"; // Adjust the path if necessary

const CountryDetails = () => {
  const { isDarkMode, setDarkMode } = useTheme();
  const { countryName } = useParams();
  const location = useLocation();
  const [countryData, setCountryData] = useState(location.state || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        // Use encodeURIComponent to handle spaces and special characters
        const encodedCountryName = encodeURIComponent(countryName);
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${encodedCountryName}?fullText=true`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch country data");
        }
        const data = await response.json();
        setCountryData(data[0]); // Assuming the response is an array of countries
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    if (!countryData) {
      fetchCountryData();
    } else {
      setLoading(false); // If countryData exists, no need to load
    }
  }, [countryData, countryName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!countryData) {
    return <div>No country data available.</div>;
  }

  const {
    name: { common, official },
    flags: { svg },
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    demonyms,
    maps,
  } = countryData;

  return (
    <div
      className={`${
        isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"
      } w-full h-screen`}
    >
      <div className="w-10/12 mx-auto">
        <Link to="/">
          <div
            className={`${
              isDarkMode ? "bg-white text-black " : "bg-gray-700 text-white"
            } gap-2 items-center px-3 py-2 bg-gray-200 inline-flex shadow-sm mt-14 rounded-lg`}
          >
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            <span>Back</span>
          </div>
        </Link>
        <div className="my-20 grid grid-cols-2 gap-x-16">
          <div>
            <img src={svg} alt={`Flag of ${common}`} />
          </div>
          <div className="p-4 flex flex-col gap-6">
            <h3 className="text-xl font-bold">{official}</h3>
            <div className="flex gap-6">
              <div>
                <ul className="flex flex-col gap-2">
                  <li>
                    <span className="font-medium">Native Name: </span>
                    <span>{common}</span>
                  </li>
                  <li>
                    <span className="font-medium">Population: </span>
                    <span>{population.toLocaleString()}</span>
                  </li>
                  <li>
                    <span className="font-medium">Region: </span>
                    <span>{region}</span>
                  </li>
                  <li>
                    <span className="font-medium">Sub Region: </span>
                    <span>{subregion}</span>
                  </li>
                  <li>
                    <span className="font-medium">Capital: </span>
                    <span>{capital[0]}</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex flex-col gap-2">
                  <li>
                    <span className="font-medium">Top Level Domain: </span>
                    <span>{tld.join(", ")}</span>
                  </li>
                  <li>
                    <span className="font-medium">Currencies: </span>
                    <span>
                      {Object.values(currencies)
                        .map((c) => c.name)
                        .join(", ")}
                    </span>
                  </li>
                  <li>
                    <span className="font-medium">Languages: </span>
                    <span>{Object.values(languages).join(", ")}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              <h4 className="font-medium">Demonym:</h4>
              <span>{demonyms.eng.m}</span>
            </div>
            <div className="flex gap-3 items-center">
              <h4 className="font-medium">Maps:</h4>
              <a
                href={maps.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View on Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryDetails;
