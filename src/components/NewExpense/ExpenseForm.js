import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState('')
  // const [enteredDate, setEnteredDate] = useState('')
  // const [enteredAmount, setEnteredAmount] = useState('')

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredDate: '',
    enteredAmount: ''
  })

  // const titleChangeHandler = event => {
  //   // setUserInput({ ...userInput, enteredTitle: event.target.value })
  //   setUserInput(prevState => {
  //     return { ...prevState, enteredTitle: event.target.value }
  //   })
  // }
  // const dateChangeHandler = event => {
  //   // setUserInput({ ...userInput, enteredDate: event.target.value })
  //   setUserInput(prevState => {
  //     return { ...prevState, enteredDate: event.target.value }
  //   })
  // }
  // const amountChangeHandler = event => {
  //   // setUserInput({ ...userInput, enteredAmount: event.target.value })
  //   setUserInput(prevState => {
  //     return { ...prevState, enteredAmount: event.target.value }
  //   })
  // }

  const inputChangeHandler = (indetifier, value) => {
    if (indetifier === 'title') {
      setUserInput(prevState => {
        return { ...prevState, enteredTitle: value }
      })
    } else if (indetifier === 'date') {
      setUserInput(prevState => {
        return { ...prevState, enteredDate: value }
      })
    } else {
      setUserInput(prevState => {
        return { ...prevState, enteredAmount: value }
      })
    }
  }

  return (
    <form>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label> Title </label>{' '}
          <input
            type='text'
            onChange={event => inputChangeHandler('title', event)}
          />{' '}
        </div>{' '}
        <div className='new-expense__control'>
          <label> Amount </label>{' '}
          <input
            type='number'
            min='0.01'
            step={0.01}
            onChange={event => inputChangeHandler('amount', event)}
          />{' '}
        </div>{' '}
        <div className='new-expense__control'>
          <label> Date </label>{' '}
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={event => inputChangeHandler('date', event)}
          />{' '}
        </div>{' '}
      </div>{' '}
      <div className='new-expense__actions'>
        <button type='submit'> Add Expense </button>{' '}
      </div>{' '}
    </form>
  )
}

export default ExpenseForm
