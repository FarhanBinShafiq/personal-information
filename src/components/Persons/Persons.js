import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';

const Persons = () => {
 
    const [persons,setPersons]=useState([]);
    useEffect(()=>{
        fetch('./persons.json')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setPersons(data)
        })
    },[])

    return (
        <div>
           { persons.map(person=><Person 
           key={person.id}
           person={person}
           ></Person>)}
        </div>
    );
};

export default Persons;