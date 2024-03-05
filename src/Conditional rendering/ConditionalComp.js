import React from 'react'

const ConditionalComp = ({shouldRender}) => {

  if(!shouldRender){
    return null
  }

  return (
    <div>
      <h1>This component will render conditionaly</h1>
    </div>
  )
}

export default ConditionalComp