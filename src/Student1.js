import React, { useState } from 'react'

export default function Student1() {

    const [num,setNum] = useState(0)

    const handleEvent=()=>{
        setNum(num+10)
    }

  return (
    <div>
        <h1>Student1</h1>
        <h2>{num}</h2>
        <button onClick={()=>handleEvent()} >Count Inc</button>
    </div>
  )
}
