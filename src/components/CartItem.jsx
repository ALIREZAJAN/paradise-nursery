import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { updateQuantity, removeItem } from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    window.alert("Coming Soon!");
  };

  return (
    <div className="cart-page">
      <Navbar />

      <main className="cart-container">
        <header className="cart-header">
          <p>Your green collection</p>
          <h1>Shopping Cart</h1>
          <p>
            Total items: <strong>{totalItems}</strong>
          </p>
        </header>

        {cartItems.length === 0 ? (
          <section className="empty-cart">
            <div className="empty-cart-icon">🪴</div>
            <h2>Your cart is empty</h2>
            <p>Add some beautiful plants to your collection.</p>

            <Link to="/plants" className="continue-shopping-button">
              Continue Shopping
            </Link>
          </section>
        ) : (
          <div className="cart-layout">
            <section className="cart-items-list">
              {cartItems.map((item) => {
                const itemTotal = item.price * item.quantity;

                return (
                  <article className="cart-item-card" key={item.id}>
                    <div className="cart-item-image-container">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="cart-item-image"
                      />
                    </div>

                    <div className="cart-item-details">
                      <h2>{item.name}</h2>

                      <p className="unit-price">
                        Unit price: £{item.price.toFixed(2)}
                      </p>

                      <p className="item-total">
                        Total: £{itemTotal.toFixed(2)}
                      </p>

                      <div className="quantity-controls">
                        <button
                          type="button"
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: item.id,
                                quantity: item.quantity - 1,
                              })
                            )
                          }
                          disabled={item.quantity === 1}
                          aria-label={`Decrease quantity of ${item.name}`}
                        >
                          −
                        </button>

                        <span>{item.quantity}</span>

                        <button
                          type="button"
                          onClick={() =>
                            dispatch(
                              updateQuantity({
                                id: item.id,
                                quantity: item.quantity + 1,
                              })
                            )
                          }
                          aria-label={`Increase quantity of ${item.name}`}
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <button
                      type="button"
                      className="delete-item-button"
                      onClick={() => dispatch(removeItem(item.id))}
                    >
                      Delete
                    </button>
                  </article>
                );
              })}
            </section>

            <aside className="cart-summary">
              <h2>Order Summary</h2>

              <div className="summary-row">
                <span>Total items</span>
                <strong>{totalItems}</strong>
              </div>

              <div className="summary-row total-row">
                <span>Total amount</span>
                <strong>£{totalAmount.toFixed(2)}</strong>
              </div>

              <button
                type="button"
                className="checkout-button"
                onClick={handleCheckout}
              >
                Checkout
              </button>

              <Link to="/plants" className="continue-shopping-link">
                Continue Shopping
              </Link>
            </aside>
          </div>
        )}
      </main>
    </div>
  );
}

export default CartItem;