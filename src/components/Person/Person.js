import React from 'react';

const Person = (props) => {
 
   const{img,name,id,salary,gender}=props.person
    return (
        <div>
            <img src={img} alt="" />
            <h2>Name:{name}</h2>
            <p>ID:{id}</p>
            <p>Salary:${salary}</p>
            <p>Gender:{gender}</p>
        </div>
    );
};

export default Person;