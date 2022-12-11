import ReactDOM from "react-dom";
import Cart from "./Cart";
import {useContext, useState} from "react";
import CartContext from "../store/cart-context";

function Navigation(props) {
  const [cartVisible, setCartVisible] = useState(false)
  const ctx = useContext(CartContext)
  return <nav>
    <button onClick={() => setCartVisible(!cartVisible)}>
      {!cartVisible ? `Show Cart (${ctx.cartItems.length} items)` : "Hide Cart"}
    </button>
    {cartVisible && ReactDOM.createPortal(<Cart></Cart>, document.getElementById('cart'))}
  </nav>
}

export default Navigation