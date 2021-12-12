import React from 'react';
import './Person.css'

const Person = (props) => {
 
   const{image,full_name,email,salary,job_title}=props.person
    return (
    
    <div className='person-container'>
            <img src={image} alt="" />
            <h2>Name: {full_name}</h2>
            <p>Designation: {job_title}</p>
            <p>Salary: {salary}</p>
            <p>E-mail: {email}</p>
            
        </div>
    );
};

export default Person;