import { useParams, Link } from "react-router-dom";
import propertiesData from "../data/properties.json";
import { useState } from "react";
import { useFavourites } from "../context/FavouritesContext";
import SafeImage from "../components/SafeImage";


function PropertyDetails() {
  const [showFloorplan, setShowFloorplan] = useState(false);
  const { id } = useParams();
  const { addFavourite, removeFavourite, isFavourite } = useFavourites();
  const property = propertiesData.properties.find(
    (p) => p.id === id
  );
  if (!property) {
    return (
      <div className="container">
        <h2>Property not found</h2>
        <p>The requested property does not exist.</p>
        <Link to="/">Return to search</Link>
      </div>
    );
  }
  const allImages = property.pictures || [];
  const mapQuery = encodeURIComponent(property.location);
  const mapUrl = `https://www.google.com/maps?q=${mapQuery}&output=embed`;
// Property photos only (exclude floor plans)
const photos = allImages.filter(
  (img) => !img.toLowerCase().includes("floorplan")
);

// Floor plan (single image)
const floorPlan = allImages.find(
  (img) => img.toLowerCase().includes("floorplan")
);
const [mainImage, setMainImage] = useState(
  photos.length > 0 ? photos[0] : null
);

function formatDate(added) {
  if (!added) {
    return "Date not available";
  }

  return `${added.day} ${added.month} ${added.year}`;
}



  return (
  <div className="container property-details">
    <Link to="/">← Back to search</Link>

    <h2>{property.type}</h2>
    <button
  className="button"
  onClick={() =>
    isFavourite(property.id)
      ? removeFavourite(property.id)
      : addFavourite(property)
  }
>
  {isFavourite(property.id)
    ? "Remove from favourites"
    : "Add to favourites"}
</button>

    <p>{property.location}</p>

    {mainImage && (
  <div className="property-gallery">
    <div className="main-image">
      <SafeImage src={`/${mainImage}`} alt="Main property view" />
    </div>

    <div className="thumbnail-row">
      {photos.map((img, index) => (
        <SafeImage
          key={index}
          src={`/${img}`}
          alt={`Property view ${index + 1}`}
          className={`thumbnail ${img === mainImage ? "active" : ""}`}
          onClick={() => setMainImage(img)}
        />
      ))}
    </div>
    {floorPlan && (
      <div className="floorplan-section">
        <h3>Floor Plan</h3>
        <SafeImage
          src={`/${floorPlan}`}
          alt="Property floor plan"
          className="floorplan-image"
          onClick={() => setShowFloorplan(true)}
        />
      </div>
    )}
    {showFloorplan && (
      <div className="modal-overlay" onClick={() => setShowFloorplan(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <img src={`/${floorPlan}`} alt="Large floor plan" />
        </div>
      </div>
    )}

  </div>
)}




    <div className="big-desc-group">
      <div className="small-desc-group">
        <h2>About the {property.type}</h2>
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
        <strong>Date added:</strong>{" "}
        {property.added ? formatDate(property.added) : "Date not available"}
      </p> 
  </div>

      <div className="description-section">
        <h3>Description</h3>
        <p className="bigger-description">{property.bigger_description}</p>
      </div>
      <div className="map-section">
        <h3>Location</h3>
        <iframe
          title="Property location map"
          src={mapUrl}
          width="100%"
          height="350"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
</div>
);

}

export default PropertyDetails;
