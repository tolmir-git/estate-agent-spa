function SafeImage({ src, alt, className, onClick }) {
  const fallback = "/images/placeholder.jpg";
// Fallback safe image in case of error
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onClick={onClick}
      tabIndex={onClick ? 0 : -1}
      role={onClick ? "button" : undefined}
      aria-label={onClick ? alt : undefined}
      style={{ cursor: onClick ? "pointer" : "default" }} /*made to be able to click the image on the property details page */
      onKeyDown={(e) => {
        if (onClick && (e.key === "Enter" || e.key === " ")) {
          e.preventDefault();
          onClick();
        }
      }}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = fallback;
      }}
    />
  );
}

export default SafeImage;
