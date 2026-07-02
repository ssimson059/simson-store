import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">PROFILE</p>
          <h1>Your account overview.</h1>
        </div>
        <nav className="nav-links">
          <Link to="/orders">Orders</Link>
          <Link to="/">Home</Link>
        </nav>
      </header>

      <div className="hero-card">
        <h2>Welcome back, Alex</h2>
        <p>Manage saved addresses, payment methods, and recent orders from here.</p>
      </div>
    </div>
  );
}

export default Profile;
