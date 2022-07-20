import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

function Expenses(props) {
  const expenses = props.expenses.map((el, idx) => {
    return <ExpenseItem
      key={idx}
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