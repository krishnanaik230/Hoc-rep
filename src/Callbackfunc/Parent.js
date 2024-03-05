import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [datafromchild,setDatafromchild] = useState('');

    const  handleDataFromChild =(data)=>{
        setDatafromchild(data);

    };

  return (
    <div>
        <h1>Parent Component</h1>
        <p>Data from child : {datafromchild}</p>
        <Child sendDataToParent={handleDataFromChild} />
    </div>
  )
}

export default Parent