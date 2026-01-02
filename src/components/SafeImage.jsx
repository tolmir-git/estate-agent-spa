function SafeImage({ src, alt, className }) {
  const fallback = "/images/placeholder.jpg";

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={(e) => {
        e.target.onerror = null;
        e.target.src = fallback;
      }}
    />
  );
}

export default SafeImage;