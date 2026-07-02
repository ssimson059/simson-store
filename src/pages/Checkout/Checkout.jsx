import { Link } from "react-router-dom";

function Checkout() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">CHECKOUT</p>
          <h1>Secure checkout in a few steps.</h1>
        </div>
        <nav className="nav-links">
          <Link to="/cart">Back to cart</Link>
          <Link to="/orders">Orders</Link>
        </nav>
      </header>

      <section className="hero-card">
        <h2>Order summary</h2>
        <p>Subtotal: $218</p>
        <p>Shipping: Free</p>
        <p>Total: $218</p>
        <Link className="btn btn-primary" to="/orders">Place order</Link>
      </section>
    </div>
  );
}

export default Checkout;
