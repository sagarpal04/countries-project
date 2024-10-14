const Card = ({ countryName, image, region, capital, population }) => {
  return (
    <div className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out scale-90 bg-white">
      <div className="h-80 w-96 bg-[#DAF7A6] relative rounded-lg rounded-b-none">
        <img
          src={image}
          alt={countryName}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-75 rounded-lg"
        />
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-2xl font-bold mb-3">{countryName}</h3>
        <ul className="flex flex-col gap-1">
          <li className="flex gap-3">
            <span className="text-lg font-medium">Population: </span>
            <span className="text-lg">{population.toLocaleString()}</span>
          </li>
          <li className="flex gap-3">
            <span className="text-lg font-medium">Region: </span>
            <span className="text-lg">{region}</span>
          </li>
          <li className="flex gap-3">
            <span className="text-lg font-medium">Capital: </span>
            <span className="text-lg">{capital}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
