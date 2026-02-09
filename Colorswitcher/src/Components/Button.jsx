import React from 'react'

function Button({color,children}) {
  return (
      <button style={{
        backgroundColor: color,
      }}>{children}</button>
  )
}

export default Button
