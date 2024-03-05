import React from 'react'

const ChildMem = React.memo(({name})=>{
  console.log('Rendering child comp')
  return <div>
        {name}
  </div>
})
 

export default ChildMem