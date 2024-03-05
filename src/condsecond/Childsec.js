import React, { useEffect } from 'react'

const Childsec = ({shouldRender}) => {

    useEffect(()=>{
        if(!shouldRender){
            return ()=>{}
        }
    },[shouldRender])

  return (
    <div>
        {shouldRender && 
        <h1>This component will render on should component update</h1>
        }
    </div>
  )
}

export default Childsec