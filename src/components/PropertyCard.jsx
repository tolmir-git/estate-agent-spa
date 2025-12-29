import { Link } from "react-router-dom";

function PropertyCard({ property }) {
  return (
    <div className="property-card">

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
