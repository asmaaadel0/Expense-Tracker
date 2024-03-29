import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredDate: '',
  //   enteredAmount: ''
  // })

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput(prevState => {
    //   return { ...prevState, enteredTitle: event.target.value }
    // })
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  // const inputChangeHandler = (indetifier, value) => {
  //   if (indetifier === 'title') {
  //     setEnteredTitle(value)
  //   } else if (indetifier === 'date') {
  //     setEnteredDate(value)
  //   } else {
  //     setEnteredAmount(value)
  //   }
  // }

  const submitHandler = (event) => {
    event.preventDefault();

    const userInput = {
      title: enteredTitle,
      date: enteredDate,
      amount: +enteredAmount,
    };
    props.onSaveExpenseData(userInput);
    setEnteredTitle("");
    setEnteredDate("");
    setEnteredAmount("");
    triggerHandler();
  };
  const triggerHandler = () => {
    setShowForm(!showForm);
  };

  const [showForm, setShowForm] = useState(false);

  let content = <button onClick={triggerHandler}> Add New Expense </button>;

  if (showForm) {
    content = (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label> Title </label>{" "}
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />{" "}
          </div>{" "}
          <div className="new-expense__control">
            <label> Amount </label>{" "}
            <input
              type="number"
              min="0.01"
              step={0.01}
              value={enteredAmount}
              onChange={amountChangeHandler}
            />{" "}
          </div>{" "}
          <div className="new-expense__control">
            <label> Date </label>{" "}
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              value={enteredDate}
              onChange={dateChangeHandler}
            />{" "}
          </div>{" "}
        </div>{" "}
        <div className="new-expense__actions">
          <button type="submit" onClick={triggerHandler}>
            {" "}
            Cancel{" "}
          </button>{" "}
          <button type="submit"> Add Expense </button>{" "}
        </div>{" "}
      </form>
    );
  }

  return <div> {content} </div>;
};

export default ExpenseForm;
