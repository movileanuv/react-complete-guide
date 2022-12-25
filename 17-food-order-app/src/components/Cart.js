import {useContext} from "react";
import CartContext from "../store/cart-context";
import placeOrder from "../client/place-order";
import useInput from "../hooks/use-input";

function validateName(value) {
  return value.trim() !== ""
}

function validateEmail(value) {
  return value.includes("@")
}


function Cart(props) {
  const ctx = useContext(CartContext)
  const {
    value: firstNameValue,
    isValid: isFirstNameValid,
    hasError: firstNameHasError,
    setValue: setFirstName,
    reset: resetFirstName,
    setTouched: touchFirstName
  } = useInput(validateName)

  const {
    value: lastNameValue,
    isValid: isLastNameValid,
    hasError: lastNameHasError,
    setValue: setLastName,
    reset: resetLastName,
    setTouched: touchLastName
  } = useInput(validateName)

  const {
    value: emailValue,
    isValid: isEmailValid,
    hasError: emailHasError,
    setValue: setEmail,
    reset: resetEmail,
    setTouched: touchEmail
  } = useInput(validateEmail)

  function handleFormSubmit(evt) {
    evt.preventDefault()

    if (isFirstNameValid && isLastNameValid && isEmailValid && ctx.cartItems.length > 0) {
      placeOrder(
        {
          firstName: document.getElementById("first-name").value,
          lastName: document.getElementById("last-name").value,
          email: document.getElementById("email").value,
          items: ctx.cartItems
        }
      ).then(success => {
        if (success) {
          ctx.reset()
          resetFirstName()
          resetLastName()
          resetEmail()
          alert("Order was placed successfully")
        } else {
          alert("Order could not be placed")
        }
      })
    } else {
      alert("Invalid Cart")
    }
  }

  return <div>
    <h2>Cart</h2>
    <ul>
      {ctx.cartItems.map((el, idx) => <li key={idx}>{el.name} {`(${el.amount})`}</li>)}
    </ul>
    <span>Total: {ctx.totalAmount}</span>
    <form onSubmit={handleFormSubmit}>
      <div style={{backgroundColor: firstNameHasError ? "orange" : "transparent"}}>
        <label htmlFor="first-name">First Name:&nbsp;</label>
        <input id="first-name" name="first-name" type="text" onBlur={() => touchFirstName(true)}
               value={firstNameValue}
               onChange={evt => setFirstName(evt.target.value)}/>
      </div>
      <div style={{backgroundColor: lastNameHasError ? "orange" : "transparent"}}>
        <label htmlFor="last-name">Last Name:&nbsp;</label>
        <input id="last-name" name="last-name" type="text" onBlur={() => touchLastName(true)}
               value={lastNameValue}
               onChange={evt => setLastName(evt.target.value)}/>
      </div>
      <div style={{backgroundColor: emailHasError ? "orange" : "transparent"}}>
        <label htmlFor="email">Address:&nbsp;</label>
        <input id="email" name="email" type="email" onBlur={() => touchEmail(true)}
               value={emailValue}
               onChange={evt => setEmail(evt.target.value)}/>
      </div>
      <button>Place Order</button>
    </form>
  </div>
}

export default Cart
