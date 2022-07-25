import ExpenseForm from './ExpenseForm'

import './NewExpense.css'
import {useState} from "react";


function NewExpense(props) {
  const [active, setActive] = useState(false)

  function addExpenseHandler(expense) {
    expense = {
      ...expense,
      id: Math.random().toString()
    }
    props.onAddExpense(expense)
  }

  function renderExpenseForm() {
    setActive(true)
  }

  function hideExpenseForm() {
    setActive(false)
  }

  if (active) {
    return <div className={'new-expense'}>
      <ExpenseForm onSaveExpenseForm={addExpenseHandler} reset={hideExpenseForm}/>
    </div>
  }

  return <div className={'new-expense'}>
    <button type={'button'} onClick={renderExpenseForm}>Add New Expense</button>
  </div>
}

export default NewExpense
