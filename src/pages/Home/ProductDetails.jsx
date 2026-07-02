import { useParams } from "react-router-dom";
import products from "../../data/products";
import { useCart } from "../../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  return (
    <div style={{ padding: "40px" }}>
      <img src={product.image} width="300" />

      <h1>{product.name}</h1>

      <h2>₹{product.price}</h2>

      <button onClick={() => addToCart(product)}>
        Add To Cart
      </button>
    </div>
  );
}

export default ProductDetails;