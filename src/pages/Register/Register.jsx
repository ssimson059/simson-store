import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">REGISTER</p>
          <h1>Create your account.</h1>
        </div>
        <nav className="nav-links">
          <Link to="/login">Back to login</Link>
        </nav>
      </header>

      <div className="hero-card">
        <h2>Join SIMSON Store</h2>
        <p>Register to save addresses, track orders, and get updates.</p>
        <Link className="btn btn-primary" to="/profile">Create account</Link>
      </div>
    </div>
  );
}

export default Register;
