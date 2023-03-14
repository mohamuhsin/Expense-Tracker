import React from "react";
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
        <select>
          <option value="2022" onChange={buttonChangeHandler}>
            2023
          </option>
          <option value="2021" onChange={buttonChangeHandler}>
            2022
          </option>
          <option value="2020" onChange={buttonChangeHandler}>
            2021
          </option>
          <option value="2019" onChange={buttonChangeHandler}>
            2020
          </option>
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
