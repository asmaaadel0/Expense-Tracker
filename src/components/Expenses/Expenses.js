import React, { useState } from 'react'

import ExpensesList from './ExpensesList'
import ExpensesFilter from './ExpensesFilter'

import Card from '../UI/Card'

import './Expenses.css'

const Expenses = props => {
    const [year, setYear] = useState('2020')

    const filteredDate = props.items.filter(item => {
        return item.date.getFullYear().toString() === year
    })

    const filterYear = year => {
        setYear(year)
    }

    return ( <
        Card className = 'expenses' >
        <
        ExpensesFilter selected = { year }
        onFilterYear = { filterYear }
        /> {''}{' '} <
        ExpensesList filteredDate = { filteredDate }
        />{' '} <
        /Card>
    )
}

export default Expenses