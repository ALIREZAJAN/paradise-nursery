import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-brand">
        <span className="brand-icon">🌿</span>

        <span>
          <strong>Paradise Nursery</strong>
          <small>Where Green Meets Serenity</small>
        </span>
      </Link>

      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/plants">Plants</Link>

        <Link to="/cart" className="cart-link" aria-label="Shopping cart">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{totalQuantity}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;