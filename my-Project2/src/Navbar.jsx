import React from 'react'

function Navbar() {
  return (
    <div className='w-full bg-red-500 flex justify-between' >
      <h1>Logo</h1>
      <div>
        <a href="">home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Service</a>
        <a href="">Help</a>
      </div>

      <div>
        <span></span>
        <span></span>
      </div>
      
    </div>
  )
}

export default Navbar
