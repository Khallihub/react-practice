import ExpenseItem from "./expense item/ExpenseItem";
import './Expenses.css'

function Expenses(data) {
    const expenses = data.lst
  return (
    <div className="expenses">
      <ExpenseItem props={expenses[0]}></ExpenseItem>
      <ExpenseItem props={expenses[1]}></ExpenseItem>
      <ExpenseItem props={expenses[2]}></ExpenseItem>
      <ExpenseItem props={expenses[3]}></ExpenseItem>
    </div>
  );
}

export default Expenses