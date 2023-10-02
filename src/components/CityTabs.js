import React from "react";

function CityTabs({ activeTab, setActiveTab }) {
  const cities = ["New York", "Mumbai", "Paris", "London"];

  return (
    <div className="city-tabs">
      {cities.map((city, index) => (
        <button
          key={index}
          className={`tab ${index === activeTab ? "active" : ""}`}
          onClick={() => setActiveTab(index)}
        >
          {city}
        </button>
      ))}
    </div>
  );
}

export default CityTabs;
