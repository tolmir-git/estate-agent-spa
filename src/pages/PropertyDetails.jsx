import { useParams, Link } from "react-router-dom";
import propertiesData from "../data/properties.json";
import { useState } from "react";

function PropertyDetails() {
  const { id } = useParams();

  const property = propertiesData.properties.find(
    (p) => p.id === id
  );
  if (!property) {
    return <p>Property not found</p>;
  }
    const allImages = property.pictures || [];

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
    <p>{property.location}</p>

    {mainImage && (
  <div className="property-gallery">
    <div className="main-image">
      <img src={`/${mainImage}`} alt="Main property view" />
    </div>

    <div className="thumbnail-row">
      {photos.map((img, index) => (
        <img
          key={index}
          src={`/${img}`}
          alt={`Property view ${index + 1}`}
          className={`thumbnail ${
            img === mainImage ? "active" : ""
          }`}
          onClick={() => setMainImage(img)}
        />
      ))}
    </div>
    {floorPlan && (
  <div className="floorplan-section">
    <h3>Floor Plan</h3>
    <img
      src={`/${floorPlan}`}
      alt="Property floor plan"
      className="floorplan-image"
    />
  </div>
)}
  </div>
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
  <strong>Date added:</strong>{" "}
  {property.added ? formatDate(property.added) : "Date not available"}
</p>

    <p style={{ marginTop: "20px" }}>
      {property.description}
    </p>
  </div>
);

}

export default PropertyDetails;
