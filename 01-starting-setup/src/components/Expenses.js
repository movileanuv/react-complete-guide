import './Expenses.css'
import ExpenseItem from "./ExpenseItem";

function Expenses(props){
  return (
    <div className={'expenses'}>
      <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
    </div>
  )
}

export default Expenses