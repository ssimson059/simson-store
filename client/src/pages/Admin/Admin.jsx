import { Link } from "react-router-dom";

function Admin() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">ADMIN</p>
          <h1>Store management dashboard.</h1>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
        </nav>
      </header>

      <div className="hero-card">
        <h2>Admin tools</h2>
        <p>Manage products, orders, and customer insights from this central panel.</p>
      </div>
    </div>
  );
}

export default Admin;
