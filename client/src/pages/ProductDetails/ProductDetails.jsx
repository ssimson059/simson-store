import { useParams, Link } from "react-router-dom";
import products from "../../data/products";
import { useCart } from "../../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-10">
      <img
        src={product.image}
        alt={product.name}
        className="w-full rounded-xl shadow-lg"
      />

      <div>
        <h1 className="text-4xl font-bold">{product.name}</h1>

        <p className="text-green-600 text-3xl font-bold mt-4">
          ₹{product.price}
        </p>

        <p className="mt-4 text-gray-600">
          {product.description}
        </p>

        <div className="flex gap-4 mt-8">
          <button
            onClick={() => addToCart(product)}
            className="bg-yellow-400 px-6 py-3 rounded-lg font-bold hover:bg-yellow-500"
          >
            Add To Cart
          </button>

          <Link to="/cart">
            <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600">
              Go To Cart
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;