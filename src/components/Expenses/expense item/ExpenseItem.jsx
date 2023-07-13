import ExpenseDate from "../expense date/ExpenseDate";
import "./ExpenseItem.css";

function ExpenseItem(props) {
  const expenseDate = props.props.date;
  let expenseTitle = props.props.title;
  const expenseAmount = props.props.amount;

  return (
    <li>
      <div className="expense-item">
        <ExpenseDate date={expenseDate}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{expenseTitle}</h2>
          <div className="expense-item__price">${expenseAmount}</div>
        </div>
      </div>
    </li>
  );
}

export default ExpenseItem;
