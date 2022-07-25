import ExpenseForm from './ExpenseForm'

import './NewExpense.css'
import {useState} from "react";


function NewExpense(props) {
  const [formOpen, setFormOpen] = useState(false)

  function addExpenseHandler(expense) {
    expense = {
      ...expense,
      id: Math.random().toString()
    }
    props.onAddExpense(expense)
  }

  function showExpenseForm() {
    setFormOpen(true)
  }

  function hideExpenseForm() {
    setFormOpen(false)
  }

  if (formOpen) {
    return <div className={'new-expense'}>
      <ExpenseForm onSaveExpenseForm={addExpenseHandler} hideForm={hideExpenseForm}/>
    </div>
  }

  return <div className={'new-expense'}>
    <button type={'button'} onClick={showExpenseForm}>Add New Expense</button>
  </div>
}

export default NewExpense
