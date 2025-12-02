import React from 'react'

function Button({children,func}) {
  return (
    <div>
      <button onClick={func}>{children}</button>
    </div>
  )
}

export default Button
