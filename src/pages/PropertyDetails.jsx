import { useParams, Link } from "react-router-dom";
import propertiesData from "../data/properties.json";

function PropertyDetails() {
  const { id } = useParams();

  const property = propertiesData.properties.find(
    (p) => p.id === id
  );

  if (!property) {
    return <p>Property not found</p>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <Link to="/">← Back to search</Link>

      <h2>{property.type}</h2>
      <p>{property.location}</p>
      <p>
        <strong>£{property.price}</strong>
      </p>
      <p>{property.bedrooms} bedrooms</p>
      <p>{property.description}</p>
    </div>
  );
}

export default PropertyDetails;
