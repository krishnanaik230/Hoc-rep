import React, { useState } from 'react'
import ConditionalComp from './ConditionalComp'

const ParentComp = () => {

  const [toggleRender,setToggleRender] = useState(true);

  const toggleRendering =()=>{
    setToggleRender(!toggleRender);
  }

  return (
    <div>
      <button onClick={toggleRendering} >Toggle Rendering</button>
      <ConditionalComp shouldRender={toggleRender}  />
    </div>
  )
}

export default ParentComp