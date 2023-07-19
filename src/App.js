import React, { Fragment, useState } from "react";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";
import AddUser from "./86/Components/Users/AddUser/AddUser";
import UsersList from "./86/Components/Users/UsersList/UsersList";
import Wrapper from "./86/Components/Helpers/Wrapper";
import Header from "./123/components/Layout/Header/Header";
import Meals from "./123/components/Meals/Meals/Meals";
import Cart from "./123/components/Cart/Cart/Cart";
import CartProvider from "./123/store/CartProvider";

// const DUMMY_EXPENSES = [
//   {
//     id: "e1",
//     title: "Toilet Paper",
//     amount: 94.12,
//     date: new Date(2021, 2, 28),
//   },
//   { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 28) },
//   {
//     id: "e3",
//     title: "Car Insurance",
//     amount: 294.67,
//     date: new Date(2021, 2, 28),
//   },
//   {
//     id: "e4",
//     title: "New Desk (Wooden)",
//     amount: 450,
//     date: new Date(2021, 2, 28),
//   },
// ];

// function App() {
// const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
// const addExpenseDataHandler = (expenseData) => {
//   setExpenses((prevExpenses) => {
//     return [expenseData, ...prevExpenses];
//   });
// };

// }
// return (
// <div className="App">
//   <h2>React Practice</h2>
//   <NewExpense onAddExpense={addExpenseDataHandler}></NewExpense>
//   <Expenses lst={expenses}></Expenses>
// </div>

// );
// }

// export default App;

// function App() {
//   const [usersList, setUsersList] = useState([]);
//   const saveUser = (data) => {
//     setUsersList((prevUsersList) => {
//       return [data, ...prevUsersList]
//     })
//     // setUsersList([data, ...users])
//   };
//   return (
//     <React.Fragment>
//       <AddUser onAddUser={saveUser}></AddUser>
//       <UsersList users={usersList}></UsersList>
//     </React.Fragment>
//   );
// }


// 123
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}></Cart>}
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}
export default App;
