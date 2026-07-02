import { useParams } from "react-router-dom";
import products from "../../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div style={{padding:"40px",display:"flex",gap:"50px"}}>
      <img
        src={product.image}
        alt={product.name}
        style={{width:"400px",borderRadius:"10px"}}
      />

      <div>
        <h1>{product.name}</h1>

        <h2 style={{color:"green"}}>₹{product.price}</h2>

        <h4 style={{textDecoration:"line-through"}}>
          ₹{product.oldPrice}
        </h4>

        <h3>⭐ {product.rating}</h3>

        <p>{product.description}</p>

        <button>Add To Cart</button>

        <button style={{marginLeft:20}}>
          Buy Now
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;