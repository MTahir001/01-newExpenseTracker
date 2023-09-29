import ExpenseItem from "./EspenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filteredChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredArray = props.items.filter((e) => {
    //the date is in STRING format as "yyyy-mm-dd"
    //slice used to selct yyyy only, and math with filteredYear

    return e.date.slice(0, 4) === filteredYear;
  });

  let expensesContent =
    filteredArray.length === 0 ? (
      <p>No expenses found for {filteredYear} year</p>
    ) : (
      filteredArray.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))
    );

  console.log(filteredArray);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filteredChangeHandler}
        />

        {expensesContent}
      </Card>
    </div>
  );
}

export default Expenses;
