import './Expenses.css'
import ExpenseItem from "./ExpenseItem";

function Expenses(props) {
  const expenses = props.expenses.map(el => {
    return <ExpenseItem
      title={el.title}
      amount={el.amount}
      date={el.date}/>
  })
  return (
    <div className={'expenses'}>
      {expenses}
    </div>
  )
}

export default Expenses