import { useState } from "react";
import Expense from "./Expense";
import './NewExpense.css'
function NewExpense(props){
    const [isEditing,setIsEditing]=useState(false);
    function addExpense(newExpense){
        props.addNewExpense(newExpense);
    }
    function startEditing(){
        setIsEditing(true);
    }
    function stopEditiong(){
        setIsEditing(false);
    }
    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditing}>Add New Expense</button>}
            {isEditing && <Expense editing={stopEditiong} addExpense={addExpense}></Expense>}
            
        </div>
    );
}

export default NewExpense;