import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

function ExpensesList(props) {
  if (props.items.length === 0) {
    return <h2 className={'expenses-list__fallback'}>No expenses</h2>
  }

  return (
    <ul className={'expenses-list'}>
      {props.items.map((el, idx) => {
        return <ExpenseItem
          key={idx}
          title={el.title}
          amount={el.amount}
          date={el.date}/>
      })}
    </ul>
  )
}

export default ExpensesList
