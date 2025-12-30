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
    const images = property.pictures
    ? property.pictures
    : property.picture
    ? [property.picture]
    : [];

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

    {images.length > 0 && (
  <div className="property-gallery">
    {images.map((img, index) => (
      <img
        key={index}
        src={`/${img}`}
        alt={`${property.type} view ${index + 1}`}
        className="property-image"
      />
    ))}
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
