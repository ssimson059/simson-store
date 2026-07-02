import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-4">

      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover rounded-lg"
      />

      <h2 className="mt-4 text-xl font-bold">
        {product.name}
      </h2>

      <p className="text-2xl font-bold text-green-600">
        ₹{product.price}
      </p>

      <button className="w-full mt-4 bg-yellow-400 py-3 rounded-lg font-bold hover:bg-yellow-500">
        Add To Cart
      </button>

      <Link
        to={`/product/${product.id}`}
        className="block text-center mt-3 text-blue-600"
      >
        View Details
      </Link>

    </div>
  );
}

export default ProductCard;