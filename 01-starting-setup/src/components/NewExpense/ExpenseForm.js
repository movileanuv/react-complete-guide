import './ExpenseForm.css'
import {useState} from "react";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  function titleChangeHandler(evt) {
    setEnteredTitle(evt.target.value)
  }

  function amountChangeHandler(evt) {
    setEnteredAmount(evt.target.value)
  }

  function dateChangeHandler(evt) {
    setEnteredDate(evt.target.value)
  }

  function submitHandler(evt) {
    evt.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    }
    props.onSaveExpenseForm(expenseData)
    setEnteredTitle('')
    setEnteredDate('')
    setEnteredAmount('')
    props.hideForm()
  }

  return <form action="" onSubmit={submitHandler}>
    <div className={'new-expense__controls'}>
      <div className={'new-expense__control'}>
        <label htmlFor={'title'}>Title</label>
        <input name={'title'} value={enteredTitle} type="text" onChange={titleChangeHandler}/>
      </div>
      <div className={'new-expense__control'}>
        <label htmlFor="amount">Amount</label>
        <input name={'amount'} value={enteredAmount} type="number" min={0.01} step={0.01}
               onChange={amountChangeHandler}/>
      </div>
      <div className={'new-expense__control'}>
        <label htmlFor="date">Date</label>
        <input name={'date'} value={enteredDate} type="date" min={'2019-01-01'} max={'2022-12-31'}
               onChange={dateChangeHandler}/>
      </div>
    </div>
    <div className={'new-expense__actions'}>
      <button type={'button'} onClick={props.hideForm}>Cancel</button>
      <button type={'submit'}>Add Expense</button>
    </div>
  </form>
}

export default ExpenseForm