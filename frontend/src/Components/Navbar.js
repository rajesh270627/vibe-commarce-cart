import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4 shadow-sm">
      <h3 className="navbar-brand">🛒 Vibe Commerce</h3>
      <div className="ms-auto">
        <Link to="/" className="btn btn-light mx-2">Products</Link>
        <Link to="/cart" className="btn btn-warning">Cart</Link>
      </div>
    </nav>
  );
}
