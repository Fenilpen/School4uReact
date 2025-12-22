import React from 'react'
import Hero from './Hero'
import About from './About'

function Layout(props) {
  return (
    <div className='p-[2rem] h-[30vh] bg-gray-400w-full'>
      Layout
      <Hero data={props.data} count={count}/>
      <About data={props.data} count={count}/>
    </div>
  )
}

export default Layout
