import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <div
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

      <Link to={`/property/${property.id}`}>
        View details
      </Link>
    </div>
  );
}

export default PropertyCard;
