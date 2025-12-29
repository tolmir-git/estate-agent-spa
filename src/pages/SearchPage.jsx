import propertiesData from "../data/properties.json";

function SearchPage() {
  const properties = propertiesData.properties;

  return (
    <div>
      <h2>Search Page</h2>
      <p>Total properties loaded: {properties.length}</p>
    </div>
  );
}

export default SearchPage;
