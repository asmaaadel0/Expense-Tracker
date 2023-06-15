import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const filteredDate = props.items.filter((item) => {
    const date = new Date(item.date);
    return date.getFullYear().toString() === year;
  });

  const filterYear = (year) => {
    setYear(year);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected={year} onFilterYear={filterYear} /> {""}{" "}
      <ExpensesChart expenses={filteredDate} />{" "}
      <ExpensesList filteredDate={filteredDate} />{" "}
    </Card>
  );
};

export default Expenses;
