import React from 'react'

function Navbar() {
  return (
    <div className='w-full flex justify-between items-center px-[1rem] py-[2rem] bg-[lightseagreen]'>
      <h1 className='text-2xl font-bold'>Logo</h1>
      
      <div className='flex gap-9 items-center text-lg max-[720px]:hidden' >
        <a href="">home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Service</a>
        <a href="">Help</a>
      </div>

      <div className='text-2xl flex items-center gap-5'>
        <span></span>
        <span></span>
        <span className='min-[720px]: hidden text-4xl'>Menu</span>
      </div>

{/* Mobile view */}
      <div className='absolute bg-[black] h-screen top-0 left-0 w-[20rem] flex gap-5'>
        <a href="" className='bg-red-200 p-5 flex' >home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Service</a>
        <a href="">Help</a>
      </div>
      
    </div>
  )
}

export default Navbar
