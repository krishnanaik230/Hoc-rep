import React, { useState } from 'react'

import Childsec from './Childsec';

const Parentsec = () => {

    const [ shouldRender, setShouldRender ] = useState(true);

    const toggleRendering =()=>{
        setShouldRender(!shouldRender)
    }

  return (
    <div>
        <button onClick={toggleRendering}> Toggle Rendering </button>
        <Childsec shouldRender={shouldRender} />
    </div>
  )
}

export default Parentsec;