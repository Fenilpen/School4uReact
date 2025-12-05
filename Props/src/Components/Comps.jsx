import React from 'react'

// default values

function Comp({title="this is title",age}) {
  return (
    <div>
      <h1>{title}</h1>
      <h1>{age}</h1>
    </div>
  )
}

export default Comp

Comp.defaultProps={
  title:"this is title",
  age: 20
}
