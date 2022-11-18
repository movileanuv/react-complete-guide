import React, {useState} from "react";

const CartContext = React.createContext({
  cartItems: [],
  totalAmount: NaN
})

export function CartContextProvider(props) {
  const [cartItems, updateCartItems] = useState([])

  function calculateTotal() {
    return 0
  }

  return <CartContext.Provider value={{
    cartItems: cartItems,
    totalAmount: calculateTotal()
  }}>{props.children}</CartContext.Provider>
}

export default CartContext
