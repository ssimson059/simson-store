import { useCart } from "../../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "40px" }}>
      <h1>Shopping Cart</h1>

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>

          <p>₹{item.price}</p>

          <p>Qty : {item.quantity}</p>

          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>

          <hr />
        </div>
      ))}

      <h2>Total : ₹{total}</h2>
    </div>
  );
}

export default Cart;