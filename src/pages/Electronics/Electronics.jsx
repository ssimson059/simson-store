import { Link } from "react-router-dom";
import products from "../../data/products";

function Electronics() {
  const electronicsProducts = products.filter((product) => product.category === "Electronics");

  return (
    <div className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">ELECTRONICS</p>
          <h1>Smart accessories for modern life.</h1>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/fashion">Fashion</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>

      <div className="card-grid">
        {electronicsProducts.map((product) => (
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

export default Electronics;
