import React, {useState} from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = () => {
  const [date, setDate] = useState("");
  const buttonChangeHandler = () => {
    setDate("selectedDate");
    console.log(date);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={buttonChangeHandler}>
          <option value="2022" >
            2023
          </option>
          <option value="2021">
            2022
          </option>
          <option value="2020">
            2021
          </option>
          <option value="2019">
            2020
          </option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
