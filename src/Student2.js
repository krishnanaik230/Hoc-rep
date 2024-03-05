import React, { useState } from 'react';
import Higherordercom from './HOC';

const  Student2 =(props)=> {



  return (
    <div>
        <h1>Student2</h1>
        <h2>{props.num}</h2>
        <button onClick={props.handleEvent} >Count Inc</button>
    </div>
  )
}

export default Higherordercom(Student2) 