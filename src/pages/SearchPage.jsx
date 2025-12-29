import { useState } from "react";
import propertiesData from "../data/properties.json";
import PropertyCard from "../components/PropertyCard";


function SearchPage() {
  const properties = propertiesData.properties;

  const [filters, setFilters] = useState({
    type: "",
    minPrice: "",
    maxPrice: "",
    minBedrooms: "",
    postcode: "",
    addedAfter: "",
});
    function getPropertyDate(property) {
  const { year, month, day } = property.added;

  return new Date(`${month} ${day}, ${year}`);
}

  const filteredProperties = properties.filter((property) => {
    if (filters.type && property.type !== filters.type) {
      return false;
    }

    if (filters.minPrice && property.price < Number(filters.minPrice)) {
      return false;
    }

    if (filters.maxPrice && property.price > Number(filters.maxPrice)) {
      return false;
    }
    if (filters.minBedrooms && property.bedrooms < Number(filters.minBedrooms)) {
      return false;
    }
    if (filters.postcode && !property.postcode.toLowerCase().includes(filters.postcode.toLowerCase())) {
      return false;
    }
    if (filters.addedAfter) {
    const propertyDate = getPropertyDate(property);
    const filterDate = new Date(filters.addedAfter);

    if (propertyDate < filterDate) {
      return false;
    }
  }



    return true;
  });

  return (
    <div className="container">
      <h2>Search Page</h2>

      <p>Total properties loaded: {properties.length}</p>

      {/* FILTER UI */}
      <div className="form">
        <h3>Filter properties</h3>

        <div className="form-group">
          <label className="label">Property Type</label>
          <select className="input-field" value={filters.type}
            onChange={(e) =>
              setFilters({ ...filters, type: e.target.value })}>            
            <option value="">Any</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option></select>
        </div>
        <div className="form-group">
          <label className="label">Min Price:</label>
          <select className="input-field" type="number" value={filters.minPrice}
            onChange={(e) =>
              setFilters({ ...filters, minPrice: e.target.value })}>
            <option value="">Any</option>
            <option value="50000">£50,000</option>
            <option value="100000">£100,000</option>
            <option value="250000">£250,000</option>
          </select>
        </div>

        <div className="form-group">
          <label className="label">Max Price:</label>
          <select className="input-field" type="number" value={filters.maxPrice}
            onChange={(e) =>
              setFilters({ ...filters, maxPrice: e.target.value })}>
            <option value="">Any</option>
            <option value="100000">£100,000</option>
            <option value="250000">£250,000</option>
            <option value="500000">£500,000</option>
          </select>
        </div>
        <div className="form-group">
          <label className="label">Min Bedrooms:</label>
          <input
            type="number"
            value={filters.minBedrooms}
            onChange={(e) =>
              setFilters({ ...filters, minBedrooms: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label className="label">Postcode:</label>
          <input
            type="text"
            value={filters.postcode}
            onChange={(e) =>
              setFilters({ ...filters, postcode: e.target.value })
            }
          />
        </div>
        <div className="form-group">
          <label className="label">Added After:</label>
          <input
            type="date"
            value={filters.addedAfter}
            onChange={(e) =>
              setFilters({ ...filters, addedAfter: e.target.value })
            }
          />
        </div>
      </div>

      {/* PROPERTY LIST */}
      <div className="property-grid">
        {filteredProperties.map((property) => (
            <PropertyCard
                key={property.id}
                property={property}
            />
        ))}

      </div>
    </div>
  );
}

export default SearchPage;
