import React, {useMemo, useState} from "react";

const CartContext = React.createContext({
  cartItems: [],
  totalAmount: NaN,
  updateCart: (item, amount) => {},
  reset: () => {}
})

export function CartContextProvider(props) {
  const [cartItems, updateCartItems] = useState([])
  const [trigger, recalculateTotal] = useState(false)

  function calculateTotal(items) {
    return items.reduce((acc, curr) => acc + curr.price * curr.amount, 0)
  }

  const total = useMemo(() => calculateTotal(cartItems), [cartItems, trigger])

  function updateCart(item, amount) {
    if (amount === 0) {
      updateCartItems([...cartItems.filter(el => el.id !== item.id)])
      recalculateTotal(prev => !prev)
      return
    }
    const cartItem = cartItems.find(el => el.id === item.id)
    if (cartItem) {
      cartItem.amount = amount
    } else {
      item.amount = amount
      updateCartItems([...cartItems, item])
    }
    recalculateTotal(prev => !prev)
  }

  function reset() {
    updateCartItems([])
  }

  return <CartContext.Provider value={{
    cartItems: cartItems,
    totalAmount: total,
    updateCart,
    reset
  }}>{props.children}</CartContext.Provider>
}

export default CartContext
