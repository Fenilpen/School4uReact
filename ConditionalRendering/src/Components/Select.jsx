import React from 'react'
import ComponentA from './Components'
import ComponentB from './Components'
import ComponentC from './Components'

function Select() {

  const option = 'a'
  const Component = option === "a" ? ComponentA : ComponentB

  return (
    <div>
      <Component/>
    </div>
  )
}

export default Select
