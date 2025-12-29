import { Link } from "react-router-dom";

function PropertyCard({ property, isFavourite, toggleFavourite }) {
  return (
    <div className="property-card">

      <h3>{property.type}</h3>
      <p>{property.location}</p>
      <p>
        <strong>£{property.price}</strong>
      </p>
      <p>{property.bedrooms} bedrooms</p>

      <Link to={`/property/${property.id}`} className="button">
      View details
      </Link>
      <button
      onClick={toggleFavourite}
      className="button"
      style={{ marginLeft: "10px" }}
      >
      {isFavourite ? "★ Favourite" : "☆ Add to favourites"}
    </button>

    </div>
  );
}

export default PropertyCard;
