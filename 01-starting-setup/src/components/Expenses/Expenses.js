import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2020')

  function filterExpensesHandler(year) {
    setSelectedYear(year)
  }

  let expenseItems = props.expenses
    .filter(i => i.date.getFullYear() === Number(selectedYear))
    .map((el, idx) => {
      return <ExpenseItem
        key={idx}
        title={el.title}
        amount={el.amount}
        date={el.date}/>
    })

  return (
    <div>
      <Card className={'expenses'}>
        <ExpensesFilter selectedYear={selectedYear} onFilterExpenses={filterExpensesHandler}/>
        {expenseItems}
      </Card>
    </div>
  );
}

export default Expenses