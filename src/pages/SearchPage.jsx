import { useState } from "react";
import propertiesData from "../data/properties.json";

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
    <div style={{ padding: "20px" }}>
      <h2>Search Page</h2>

      <p>Total properties loaded: {properties.length}</p>

      {/* FILTER UI */}
      <div style={{ marginBottom: "20px" }}>
        <label>
          Property Type:
          <select
            value={filters.type}
            onChange={(e) =>
              setFilters({ ...filters, type: e.target.value })
            }
          >
            <option value="">Any</option>
            <option value="House">House</option>
            <option value="Flat">Flat</option>
          </select>
        </label>

        <label style={{ marginLeft: "15px" }}>
          Min Price:
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) =>
              setFilters({ ...filters, minPrice: e.target.value })
            }
          />
        </label>

        <label style={{ marginLeft: "15px" }}>
          Max Price:
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters({ ...filters, maxPrice: e.target.value })
            }
          />
        </label>

        <label style={{ marginLeft: "15px" }}>
            Min Bedrooms:
            <input
                type="number"
                value={filters.minBedrooms}
                onChange={(e) =>
                setFilters({ ...filters, minBedrooms: e.target.value })
                }
            />
        </label>
        <label style={{ marginLeft: "15px" }}>
            Postcode:
            <input
                type="text"
                value={filters.postcode}
                onChange={(e) =>
                setFilters({ ...filters, postcode: e.target.value })
                }
            />
        </label>
        <label style={{ marginLeft: "15px" }}>
            Added After:
            <input
                type="date"
                value={filters.addedAfter}
                onChange={(e) =>
                setFilters({ ...filters, addedAfter: e.target.value })
                }
            />
        </label>


      </div>

      {/* PROPERTY LIST */}
      <div>
        {filteredProperties.map((property) => (
          <div
            key={property.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginBottom: "15px",
              background: "#fff",
            }}
          >
            <h3>{property.type}</h3>
            <p>{property.location}</p>
            <p>
              <strong>£{property.price}</strong>
            </p>
            <p>{property.bedrooms} bedrooms</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
