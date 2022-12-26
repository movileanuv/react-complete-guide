import {useContext, useEffect, useState} from "react";
import CartContext from "../store/cart-context";

export default function ProductItem({item}) {
  const [inputValue, setInputValue] = useState(0)
  const ctx = useContext(CartContext)

  function removeOne() {
    if (inputValue <= 0) return
    const amount = inputValue - 1
    ctx.updateCart(item, amount)
    setInputValue(amount)
  }

  function addOne() {
    const amount = inputValue + 1
    ctx.updateCart(item, amount)
    setInputValue(amount)
  }

  function setAmount(evt) {
    const amount = evt.target.value
    if (amount < 0) {
      setInputValue(0)
      return
    }
    ctx.updateCart(item, amount)
    setInputValue(amount)
  }

  // set to 0 when cart is empty (e.g. order submit)
  const isCartEmpty = ctx.cartItems.length === 0
  useEffect(() => {
    if (isCartEmpty) setInputValue(0)
  }, [isCartEmpty])

  return <li>
    <b>{item.name}</b>: {item.price}€
    <button onClick={removeOne}>-</button>
    <input value={inputValue} type="number" onChange={setAmount}/>
    <button onClick={addOne}>+</button>
  </li>
}