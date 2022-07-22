import React from "react";

const TopButtons = ({ setQuery }) => {
  const cities = [
    { id: 1, title: "Dhaka" },
    { id: 2, title: "New York" },
    { id: 3, title: "Tokyo" },
    { id: 4, title: "Beijing" },
    { id: 5, title: "Toronto" },
  ];
  return (
    <div className="flex justify-around items-center my-6">
      {cities.map((city) => (
        <button
          className="text-white text-lg font-medium"
          onClick={() => setQuery({ q: city.title })}
          key={city.id}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
