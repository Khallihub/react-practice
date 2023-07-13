import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter/ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList/ExpensesList";
import ExpensesChart from "./ExpensesChart/ExpensesChart";

function Expenses(data) {
  const [filteredYear, setFilteredYear] = useState("2021");
  const expenses = data.lst;
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let filteredItems = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <div className="expenses">
      <div>
        <ExpenseFilter
          selectedYear={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>
      </div>
      <ExpensesChart expenses={filteredItems}></ExpensesChart>
      {/* {filteredItems.length === 0 ? (
        <p>No Expenses Found!</p>
      ) : (
        filteredItems.map((expense) => (
          <ExpenseItem key={expense.id} props={expense}></ExpenseItem>
        ))
      )} */}
      {/* {filteredItems.length === 0 && <p>No Expenses Found!</p>}
      {filteredItems.length > 0 &&
        filteredItems.map((expense) => (
          <ExpenseItem key={expense.id} props={expense}></ExpenseItem>
        ))} */}
      <ExpensesList items={filteredItems}></ExpensesList>
    </div>
  );
}

export default Expenses;
