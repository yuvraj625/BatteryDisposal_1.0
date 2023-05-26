import React, { useState, useEffect } from "react";
import "./styles.css";
import GoogleMapReact from "google-map-react";
const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sites, setSites] = useState([]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchFormSubmit = (event) => {
    event.preventDefault();
    // fetch data from API and update 'sites' state
  };

  useEffect(() => {
    // fetch initial data from API and update 'sites' state
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Battery Waste Disposal Site Finder</h1>
        <form onSubmit={handleSearchFormSubmit}>
          <label htmlFor="searchQuery">Search by location:</label>
          <input
            type="text"
            id="searchQuery"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <main>
        <Map sites={sites} />
        <SiteList sites={sites} />
      </main>
      <footer>
        <p>&copy; 2023 Battery Waste Disposal Site Finder</p>
      </footer>
    </div>
  );
};

const Map = ({ sites }) => {
  // render a map using a library like Leaflet or Mapbox
  return (
    <div className="Map">
      Map goes here
      <h1>Locate</h1>
    </div>
  );
};

const SiteList = ({ sites }) => {
  return (
    <ul className="SiteList">
      {sites.map((site) => (
        <li key={site.id}>
          <h2>{site.name}</h2>
          <p>{site.address}</p>
          <p>Hours of operation: {site.hours}</p>
          <p>Accepted materials: {site.acceptedMaterials.join(", ")}</p>
        </li>
      ))}
    </ul>
  );
};

export default App;
