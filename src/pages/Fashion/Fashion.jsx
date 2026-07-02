import { Link } from "react-router-dom";
import products from "../../data/products";

function Fashion() {
  const fashionProducts = products.filter((product) => product.category === "Fashion");

  return (
    <div className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">FASHION</p>
          <h1>Elevated essentials with everyday comfort.</h1>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/electronics">Electronics</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>

      <div className="card-grid">
        {fashionProducts.map((product) => (
          <article className="product-card" key={product.id}>
            <p className="eyebrow">{product.badge}</p>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
            <Link className="text-link" to={`/product/${product.id}`}>View product</Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Fashion;
