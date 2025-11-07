import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button className='bg-[tomato] rounded-lg px-3 py-2'>{props.title}</button>
    </div>
  )
}

export default Button
