import { useCart } from "../../context/CartContext";

function Cart() {

const {
cart,
increase,
decrease,
removeFromCart
} = useCart();

const total = cart.reduce(
(sum,item)=>sum+item.price*item.quantity,
0
);

return(

<div>

<h1>Shopping Cart</h1>

{
cart.map(item=>(

<div key={item.id}>

<img src={item.image} width="120"/>

<h2>{item.name}</h2>

<h3>₹{item.price}</h3>

<button onClick={()=>decrease(item.id)}>-</button>

{item.quantity}

<button onClick={()=>increase(item.id)}>+</button>

<button onClick={()=>removeFromCart(item.id)}>
Remove
</button>

</div>

))
}

<h2>Total : ₹{total}</h2>

<button>
Proceed Checkout
</button>

</div>

)

}

export default Cart;