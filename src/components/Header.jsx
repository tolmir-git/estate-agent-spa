import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      style={{
        padding: "15px 20px",
        background: "#222",
        color: "#fff",
        marginBottom: "20px",
      }}
    >
      <Link
        to="/"
        style={{
          color: "#fff",
          textDecoration: "none",
          fontSize: "20px",
          fontWeight: "bold",
        }}
      >
        Estate Agent SPA
      </Link>
    </header>
  );
}

export default Header;
