import React from 'react'

function Header(props) {

  function changeData(){
    props.func('child data')
  }
  
 
  return (
    <div onClick={changeData} className='bg-red-500'>
      Header
    </div>
  )
}

export default Header
