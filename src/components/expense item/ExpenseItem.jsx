import { useState } from 'react';
import ExpenseDate from '../expense date/ExpenseDate';
import './ExpenseItem.css'

function ExpenseItem (props) {
    const expenseDate = props.props.date;
    let expenseTitle = props.props.title;
    const expenseAmount = props.props.amount;

    const clickHandler = () => {
        expenseTitle = "Updated"
    }
    useState
    return (
        <div className="expense-item"> 
            <ExpenseDate date={expenseDate}></ExpenseDate>
            <div className="expense-item__description">
                <h2>{expenseTitle}</h2>
                <div className="expense-item__price">${expenseAmount}</div>
            </div>
            {/* <button onClick={() => {console.log("Clicked")}}>Change Title</button> */}
            <button onClick={clickHandler}>Change Title</button>
        </div>
    )
}

export default ExpenseItem;