import "./ExpenseForm.css";
import { useState } from "react";
const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  //_____________________________Handling via single function and SWITCH statements

  const inputChangeHandler = (identifier, value) => {
    console.log(value);
    switch (identifier) {
      case "title":
        {
          setUserInput((prev) => {
            // console.log(userInput);
            return { ...prev, enteredTitle: value };
          });
        }

        break;
      case "amount":
        {
          setUserInput((prev) => {
            console.log(userInput);
            return { ...prev, enteredAmount: value };
          });
        }
        break;
      default: {
        setUserInput((prev) => {
          console.log(userInput);
          return { ...prev, enteredDate: new Date(value) };
        });
      }
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(userInput);

    //Passing data upward direction child->parent
    props.onSaveExpenseData(userInput);

    //clearing the screen fields and reseting obj to empty str -> using TWO-WAY binding
    setUserInput({
      enteredTitle: "",
      enteredAmount: "",
      enteredDate: "",
    });
  };

  //_____________________________ Handling each element seperatly

  //   const titleChangeHandler = (event) => {
  //     setUserInput((prev) => {
  //       console.log(userInput);
  //       return { ...prev, enteredTitle: event.target.value };
  //     });
  //   };
  //   const amountChangeHandler = (event) => {
  //     setUserInput((prev) => {
  //       console.log(userInput);
  //       return { ...prev, enteredAmount: event.target.value };
  //     });
  //   };
  //   const dateChangeHandler = (event) => {
  //     setUserInput((prev) => {
  //       console.log(userInput);
  //       return { ...prev, enteredDate: event.target.value };
  //     });
  //   };

  //_____________________________

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={userInput.enteredTitle}
            onChange={(event) => {
              inputChangeHandler("title", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={userInput.enteredAmount}
            min="0.01"
            step="0.01"
            onChange={(event) => {
              inputChangeHandler("amount", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={userInput.enteredDate}
            min="2019-01-01"
            max="2022-12-31"
            onChange={(event) => {
              inputChangeHandler("date", event.target.value);
            }}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
export default ExpenseForm;
