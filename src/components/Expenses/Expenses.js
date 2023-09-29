import ExpenseItem from "./EspenseItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

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

  console.log(filteredArray);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filteredChangeHandler}
        />
        <ExpenseList expenseArray={filteredArray} expenseYear={filteredYear} />
      </Card>
    </div>
  );
}

export default Expenses;
