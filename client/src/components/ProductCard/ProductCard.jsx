import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover rounded-lg"
      />

      <div className="mt-4 flex-1">
        <div className="flex items-center justify-between gap-2">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>

        <p className="text-2xl font-bold text-green-600 mt-2">
          ₹{product.price}
        </p>

        {product.rating && (
          <p className="text-sm text-yellow-600 mt-1">⭐ {product.rating}</p>
        )}
      </div>

      <button
        onClick={() => addToCart(product)}
        className="w-full mt-4 bg-yellow-400 py-3 rounded-lg font-bold hover:bg-yellow-500"
      >
        Add To Cart
      </button>

      <Link
        to={`/product/${product.id}`}
        className="block text-center mt-3 text-blue-600 hover:underline"
      >
        View Details
      </Link>
    </div>
  );
}

export default ProductCard;