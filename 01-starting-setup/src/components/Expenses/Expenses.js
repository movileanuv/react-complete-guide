import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props) {
  const [year, setYear] = useState('')
  function filterExpensesHandler(year) {
    console.log('expenses.js', year)
    setYear(year)
  }
  const expenses = props.expenses.map((el, idx) => {
    return <ExpenseItem
      key={idx}
      title={el.title}
      amount={el.amount}
      date={el.date}/>
  })
  return (
    <div>
      <Card className={'expenses'}>
        <ExpensesFilter onFilterExpenses={filterExpensesHandler}/>
        {expenses}
      </Card>
    </div>
  );
}

export default Expenses