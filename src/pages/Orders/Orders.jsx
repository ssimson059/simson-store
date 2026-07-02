import { Link } from "react-router-dom";

function Orders() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">ORDERS</p>
          <h1>Your recent purchases.</h1>
        </div>
        <nav className="nav-links">
          <Link to="/profile">Profile</Link>
          <Link to="/">Home</Link>
        </nav>
      </header>

      <div className="hero-card">
        <h2>No orders yet</h2>
        <p>Once you place an order, it will appear here for easy tracking.</p>
      </div>
    </div>
  );
}

export default Orders;
