import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "./Card";

function Expenses(props) {
  const expenses = props.expenses.map(el => {
    return <ExpenseItem
      title={el.title}
      amount={el.amount}
      date={el.date}/>
  })
  return (
    <Card className={'expenses'}>
      {expenses}
    </Card>
  )
}

export default Expenses