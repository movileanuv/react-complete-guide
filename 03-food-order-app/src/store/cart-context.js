import React, {useState} from "react";

const CartContext = React.createContext({
  cartItems: [],
  totalAmount: NaN,
  updateCart: (item, amount) => {}
})

export function CartContextProvider(props) {
  const [cartItems, updateCartItems] = useState([])

  function calculateTotal() {
    return 0
  }

  function updateCart(item, amount) {
    if (amount === 0) {
      updateCartItems([...cartItems.filter(el => el.id !== item.id)])
      return
    }
    const cartItem = cartItems.find(el => el.id === item.id)
    if (cartItem) {
      cartItem.amount = amount
    } else {
      item.amount = amount
      updateCartItems([...cartItems, item])
    }
  }

  return <CartContext.Provider value={{
    cartItems: cartItems,
    totalAmount: calculateTotal(),
    updateCart
  }}>{props.children}</CartContext.Provider>
}

export default CartContext
