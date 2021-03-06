import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState('2020')

  function filterExpensesHandler(year) {
    setSelectedYear(year)
  }

  let expenses = props.expenses.filter(i => i.date.getFullYear() === Number(selectedYear))

  return (
    <div>
      <Card className={'expenses'}>
        <ExpensesFilter selectedYear={selectedYear} onFilterExpenses={filterExpensesHandler}/>
        <ExpensesChart expenses={expenses}/>
        <ExpensesList items={expenses}/>
      </Card>
    </div>
  );
}

export default Expenses