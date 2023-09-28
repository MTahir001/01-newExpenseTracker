import "./ExpenseDate.css";
function ExpenseDate(props) {
  const strTodate = new Date(props.date);
  console.log(props.date);
  const month = strTodate.toLocaleString("en-US", { month: "long" });
  const day = strTodate.toLocaleString("en-US", { day: "2-digit" });
  const year = strTodate.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default ExpenseDate;
