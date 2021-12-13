import React, { useEffect, useState } from 'react';
import DashBoard from '../Dash-Board/DashBoard';

import Person from '../Person/Person';
import './Persons.css'

const Persons = () => {
 
    const [persons,setPersons]=useState([]);
   const [dashBoard,setDashBoard]=useState([]);


    useEffect(()=>{
        fetch('./persons.json')
        .then(res=>res.json())
        .then(data=>{
           
            setPersons(data)
        })
    },[])

    

    const dashBoardUpdate=(person)=>{
        const newDashBoard=[...dashBoard,person]
        setDashBoard(newDashBoard);
        console.log(person);
    }

    return (
    <div className='persons'>
        <div className='persons-container'>
           { persons.map(person=><Person 
           key={person.id}
           dashBoardUpdate={dashBoardUpdate}
           person={person}
           ></Person>)}
        </div>

        <div>
            <DashBoard dashBoard={dashBoard}></DashBoard>
        </div>
    </div>
    );
};

export default Persons;