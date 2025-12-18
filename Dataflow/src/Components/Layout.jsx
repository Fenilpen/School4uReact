import React from 'react'
import Hero from './Hero'
import About from './About'

function Layout() {
  return (
    <div className='p-[2rem] h-[30vh] bg-gray-400w-full'>
      Layout
      <Hero/>
      <About/>
    </div>
  )
}

export default Layout
