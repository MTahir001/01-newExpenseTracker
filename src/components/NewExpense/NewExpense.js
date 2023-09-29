import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    console.log(expenseData, enteredExpenseData);

    props.onAddExpense(expenseData);
  };

  const [isOpen, setIsOpen] = useState(false);
  const expenseFormHandler = () => {
    setIsOpen(true);
  };
  const cancelHandelr = () => {
    setIsOpen(false);
  };

  return (
    <div className="new-expense">
      {!isOpen ? <button onClick={expenseFormHandler}>Add Expense</button> : ""}
      {isOpen ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClickCancel={cancelHandelr}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default NewExpense;
