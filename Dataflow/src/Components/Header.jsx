import React from 'react'

function Header(props) {

  const [headerdata,setHeaderdata] = useState('its Headers data')

  function changeData(){
    props.func(headerdata)
  }
  
 
  return (
    <div onClick={changeData} className='bg-red-500'>
      Header
    </div>
  )
}

export default Header
