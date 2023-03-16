import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from "../New Expense/ExpenseFilter";
import ExpenseList from "./ExpenseList";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpenseList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
