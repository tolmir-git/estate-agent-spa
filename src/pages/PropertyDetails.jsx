import { useParams, Link } from "react-router-dom";
import propertiesData from "../data/properties.json";

function PropertyDetails() {
  const { id } = useParams();

  const property = propertiesData.properties.find(
    (p) => p.id === id
  );

  function formatDate(added) {
    return `${added.day} ${added.month} ${added.year}`;
  }


  return (
  <div style={{ padding: "20px", maxWidth: "800px" }}>
    <Link to="/">← Back to search</Link>

    <h2>{property.type}</h2>
    <p>{property.location}</p>

    {property.picture && (
    <img
        src={`/${property.picture}`}
        alt={property.type}
        style={{
        width: "100%",
        maxWidth: "600px",
        margin: "20px 0",
        }}
    />
    )}


    <p>
      <strong>Price:</strong> £{property.price}
    </p>

    <p>
      <strong>Bedrooms:</strong> {property.bedrooms}
    </p>

    <p>
      <strong>Tenure:</strong> {property.tenure}
    </p>

    <p>
      <strong>Date added:</strong> {formatDate(property.added)}
    </p>

    <p style={{ marginTop: "20px" }}>
      {property.description}
    </p>
  </div>
);

}

export default PropertyDetails;
