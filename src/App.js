import "./App.css";
import "./components/Expenses";
function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2021, 2, 28),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 28) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 2, 28),
    },
  ];
  return (
    <div className="App">
      <h2>React Practice</h2>
      <Expenses lst={expenses} ></Expenses>
    </div>
  );
}

export default App;
