import { Link, useParams } from "react-router-dom";

const products = {
  1: { name: "Aurora Headphones", price: "$129", description: "Immersive sound with noise cancellation and 30-hour battery life." },
  2: { name: "Nova Smartwatch", price: "$199", description: "Track workouts, notifications, and health insights from your wrist." },
  3: { name: "Lumen Laptop Stand", price: "$79", description: "Elevate your workspace with ergonomic aluminum construction." },
  4: { name: "Urban Jacket", price: "$89", description: "Weather-ready outerwear with a slim, modern silhouette." },
  5: { name: "Studio Tote", price: "$64", description: "A polished everyday tote with ample room for essentials." },
  6: { name: "Luna Sneakers", price: "$109", description: "Lightweight comfort for long days and city strolls." },
};

function ProductDetails() {
  const { id } = useParams();
  const product = products[id];

  if (!product) {
    return (
      <div className="page-shell">
        <h1>Product not found</h1>
        <Link to="/">Return home</Link>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">PRODUCT</p>
          <h1>{product.name}</h1>
        </div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </nav>
      </header>

      <div className="hero-card">
        <h2>{product.price}</h2>
        <p>{product.description}</p>
        <Link className="btn btn-primary" to="/checkout">Buy now</Link>
      </div>
    </div>
  );
}

export default ProductDetails;
