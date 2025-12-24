import React from 'react'

function Header(props) {
  props.func("hello")
  return (
    <div className='bg-red-500'>
      Header
    </div>
  )
}

export default Header
