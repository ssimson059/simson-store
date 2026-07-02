import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">LOGIN</p>
          <h1>Welcome back.</h1>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/register">Create account</Link>
        </nav>
      </header>

      <div className="hero-card">
        <h2>Sign in to continue</h2>
        <p>Email</p>
        <p>Password</p>
        <Link className="btn btn-primary" to="/profile">Log in</Link>
      </div>
    </div>
  );
}

export default Login;
