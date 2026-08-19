import React from 'react'

function Navbar() {
  const [mobileview ,setMobileview] = useState(false)
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
        <span onClick={()=>{
          setMobileview(true)
        }} className='min-[720px]: hidden text-4xl'>Menu</span>
      </div>

{/* Mobile view */}
      <div className='absolute bg-[black] h-screen top-0 left-0 w-[20rem] flex '>
        <button className='bg-[#242424] absolute top-[1rem] right-[1rem] p-3 rounded-2xl'>Cancel</button>
        <a href="" className='mt-[5rem] hover bg-[black] p-5 flex items-center justify-center' >home</a>
        <a href="" className='hover bg-[black] p-5 flex items-center justify-center ' >home</a>
        <a href="" className='hover bg-[black] p-5 flex items-center justify-center ' >home</a>
        <a href="" className='hover bg-[black] p-5 flex items-center justify-center ' >home</a>
        <a href="" className='hover bg-[black] p-5 flex items-center justify-center ' >home</a>
        <a href="" className='hover bg-[black] p-5 flex items-center justify-center ' >home</a>
      </div>
      
    </div>
  )
}

export default Navbar
