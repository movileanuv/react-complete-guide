import ExpenseForm from './ExpenseForm'

import './NewExpense.css'


function NewExpense(props) {
  function addExpenseHandler(expense) {
    expense = {
      ...expense,
      id: Math.random().toString()
    }
    props.onAddExpense(expense)
  }
  return <div className={'new-expense'}>
    <ExpenseForm onSaveExpenseForm={addExpenseHandler}/>
  </div>
}

export default NewExpense
