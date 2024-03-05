import React, { useState } from 'react'

const Higherordercom = (STUDENT) => {

    const Higherordercominner = ()=>{
        const [num , setNum] = useState(0);
        const handleEvent = () =>{
            setNum(num+15)
        }
        return (
            <STUDENT num={num} handleEvent={handleEvent} />
        )
    }

    return Higherordercominner;
}

export default Higherordercom

