import React, { useState } from 'react'

const Child = ({sendDataToParent}) => {

    const [inputValue,setInputValue] = useState('')

    const handleInputChange =(event)=>{
        setInputValue(event.target.value)
    }

    const sendDatatoParentHandler =()=>{
            sendDataToParent(inputValue)
    }

  return (
    <div>
        <h1>Child component</h1>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={sendDatatoParentHandler}>Send Data to Parent</button>
    </div>
  )
}

export default Child