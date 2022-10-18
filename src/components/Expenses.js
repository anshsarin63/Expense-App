import { useState } from "react";
import ExpenseChart from "./ExpenseChart";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props){
    const [year,setYear]=useState('2020');
    function yearSelector(argYear){
        // console.log(argYear);
        setYear(argYear);

    }
    const selectedItems=props.expenses.filter((expense)=>{
        return expense.date.getFullYear().toString()===year;
    })
    return (
        <div className="expenses">
            <ExpensesFilter onSelectYear={yearSelector} yearSelector={year}></ExpensesFilter>
            <ExpenseChart expenses={selectedItems}></ExpenseChart>
            {selectedItems.map(expense=><ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>)}
            
        </div>
        
    );
}

export default Expenses;