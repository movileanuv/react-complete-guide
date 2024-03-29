import {useContext} from "react";
import CartContext from "../store/cart-context";

function Cart(props) {
  const ctx = useContext(CartContext)
  return <div>
    <h2>Cart</h2>
    <ul>
      {ctx.cartItems.map((el, idx) => <li key={idx}>{el.name} {`(${el.amount})`}</li>)}
    </ul>
    <span>Total: {ctx.totalAmount}</span>
  </div>
}

export default Cart
