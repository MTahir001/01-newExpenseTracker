import { useState } from "react";
import ExpenseItem from "./EspenseItem";
import Card from "../UI/Card";
import ExpenseList from "./ExpenseList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

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

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filteredChangeHandler}
        />
        <ExpensesChart expenses={filteredArray} />
        <ExpenseList expenseArray={filteredArray} expenseYear={filteredYear} />
      </Card>
    </div>
  );
}

export default Expenses;
