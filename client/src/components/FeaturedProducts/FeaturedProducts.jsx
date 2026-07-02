import ProductCard from "../ProductCard/ProductCard";
import products from "../../data/products";

function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-8">

      <h1 className="text-4xl font-bold mb-10">
        🔥 Featured Products
      </h1>

      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;