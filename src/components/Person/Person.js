import React from 'react';
import './Person.css';


const Person = (props) => {

 
   const{image,full_name,email,salary,job_title}=props.person;

   
    return (
    
    <div className='person-container'>
            <img className='person-img' src={image} alt="" />
            <h2>{full_name}</h2>
            <p>Designation: {job_title}</p>
            <p>Salary: $ {salary}</p>
            <p>E-mail: {email}</p>
            <button  onClick={()=>props.dashBoardUpdate(props.person)}  className='person-button'>Add To Dash-Board</button>
            
        </div>
    );
};

export default Person;