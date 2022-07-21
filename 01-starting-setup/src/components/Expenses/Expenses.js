import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props) {
  const [year, setYear] = useState('2020')
  function filterExpensesHandler(year) {
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
        <ExpensesFilter selectedYear={year} onFilterExpenses={filterExpensesHandler}/>
        {expenses}
      </Card>
    </div>
  );
}

export default Expenses