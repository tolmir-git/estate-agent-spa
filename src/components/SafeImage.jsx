function SafeImage({ src, alt, className, onClick }) {
  const fallback = "/images/placeholder.jpg";

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onClick={onClick}
      style={{ cursor: onClick ? "pointer" : "default" }}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = fallback;
      }}
    />
  );
}

export default SafeImage;
