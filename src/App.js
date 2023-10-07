import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense.js";

const DUMMY_Expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: "2020-7-14",
  },
  { id: "e2", title: "New TV", amount: 799.49, date: "2021-2-1" },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: "2021-2-28",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: "2021-5-12",
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_Expenses);
  const addExpenseHandler = (expense) => {
    setExpenses((prev) => {
      return [expense, ...prev];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
