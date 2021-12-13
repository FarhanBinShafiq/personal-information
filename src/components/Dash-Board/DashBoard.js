import React from 'react';
import './DashBoard.css'

const DashBoard = (props) => {
 
    const {dashBoard}=props;
    let totalSalary= parseInt(0);
    for (const person of dashBoard){
        totalSalary=totalSalary +parseInt(person.salary)
    }

    return (
        <div className='dashboard-container'>
            <h2 className='dashboard-title'>Show Company Salary Dash Board</h2>
             <p>Number Employee got The Salary:{props.dashBoard.length}</p>
            <p>Total salary Paid:$ {totalSalary}</p>
        </div>
    );
};

export default DashBoard;