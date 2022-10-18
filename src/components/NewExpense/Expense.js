import './Expense.css';
import {useState} from 'react';

function Expense(props){

    let [enterTitle,setEnterTitle]=useState('');
    let [enterAmount,setEnterAmount]=useState('');
    let [enterDate,setEnterDate]=useState('');

    function titleChangeHandler(event){
        setEnterTitle(event.target.value);
    }
    function amountChangeHandler(event){
        setEnterAmount(event.target.value);
    }
    function dateChangeHandler(event){
        setEnterDate(event.target.value);
    }

    function onFormSubmit(event){
        event.preventDefault();
        let expenseData={
            title:enterTitle,
            amount:+enterAmount,
            date:new Date(enterDate)
        }
        setEnterTitle('')
        setEnterAmount('')
        setEnterDate('')
        props.addExpense(expenseData);
        props.editing();
        // console.log(expenseDate);
    }

    return (
        <form onSubmit={onFormSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enterTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enterAmount} min='0.01' step='0.01' onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enterDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='button' onClick={props.editing}>Cancel</button>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
}


export default Expense;