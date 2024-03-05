import React, { useState } from 'react'
import ChildMem from './ChildMem';

const ParentalMem = () => {

    const [count , setCount] = useState(0);

    const [name , setName] = useState('John');

    const handleClick = () =>{
        setCount(count + 1);
    };

    const handleNameChange = ()=>{
        setName (name === 'John' ? 'Doe' : 'John')
    }

    console.log('Rendering ParentComponet');

  return (
    <div>
        <h2>Parent Component</h2>
        <p>Count : {count}</p>
        <button onClick={handleClick} >Increment Count</button>
        <button onClick={handleNameChange} >Change Name</button>
        <ChildMem name ={name}/>
    </div>
  )
}

export default ParentalMem