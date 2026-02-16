import React from 'react'

function Button({color,children}) {
  function setColor(){
    
  }
  return (
      <button onClick={setColor} style={{
        backgroundColor: color,
      }}>{children}</button>
  )
}

export default Button
