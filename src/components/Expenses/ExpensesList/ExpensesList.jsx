import ExpenseItem from "../expense item/ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  let expensesContent = <h2 className="expenses-list__fallback">No Expenses Found.</h2>;

  if (props.items.length > 0) {
    expensesContent = props.items.map((expense) => (
      <ExpenseItem key={expense.id} props={expense} ></ExpenseItem>
    ));
  }

  return (
    <ul className="expenses-list">
        {expensesContent }
    </ul>
  )
};

export default ExpensesList;
