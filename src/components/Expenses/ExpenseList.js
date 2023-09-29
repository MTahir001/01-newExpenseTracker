import "./ExpenseList.css";
import ExpenseItem from "./EspenseItem";
const ExpenseList = (props) => {
  if (props.expenseArray.length === 0) {
    return (
      <h2 className="expenses-list__fallback">
        No expenses found for {props.expenseYear} year
      </h2>
    );
  }
  return (
    <ul className="expenses-list">
      <li>
        {props.expenseArray.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </li>
    </ul>
  );
};

export default ExpenseList;
