import { Link } from "react-router-dom";
import { useFavourites } from "../context/FavouritesContext";
import SafeImage from "./SafeImage";

function PropertyCard({ property }) {
  const {
    addFavourite,
    removeFavourite,
    isFavourite,
  } = useFavourites();

  const favourite = isFavourite(property.id);

  function handleFavouriteClick() {
    if (favourite) {
      removeFavourite(property.id);
    } else {
      addFavourite(property);
    }
  }

  return (
    <div className="property-card" aria-labelledby={`property-${property.id}`}>
      <SafeImage
        src={`/${property.pictures?.[0]}`}
        alt={property.type}
      />
      <h3 id={`property-${property.id}`}>{property.type}</h3>
      <p>{property.location}</p>
      <p>£{property.price}</p>
      <p>{property.bedrooms} bedrooms</p>

      <button       
      aria-pressed={isFavourite(property.id)}
      aria-label={
        isFavourite(property.id)
          ? "Remove property from favourites"
          : "Add property to favourites"
      }
        onClick={() =>
          isFavourite(property.id)
            ? removeFavourite(property.id)
            : addFavourite(property)
        }
      >
        {isFavourite(property.id) ? "Remove from favourites" : "Add to favourites"}
      </button>

      <br />

      <Link
        to={`/property/${property.id}`}
        className="button"
      >
        View details
      </Link>
    </div>
  );
}

export default PropertyCard;
