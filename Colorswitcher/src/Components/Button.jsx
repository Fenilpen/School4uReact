import React from 'react'

function Button({color,children}) {
  return (
      <button className={`bg-[${color}]`}>{children}</button>
  )
}

export default Button
