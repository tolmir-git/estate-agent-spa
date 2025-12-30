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
    const images = property.pictures
    ? property.pictures
    : property.picture
    ? [property.picture]
    : [];
  const [mainImage, setMainImage] = useState(
  images.length > 0 ? images[0] : null
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
      {images.map((img, index) => (
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
