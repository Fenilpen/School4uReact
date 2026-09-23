import React from 'react'
import Usercard from './Usercard'

const Usercard = ({userDetails}) => {
  return (
    <div className='[bg-tomato] mt-5' >
      <h1>{userDetails.id}</h1>
      <h1 {userDetails.age > 18 ? userDetails.name : "to young"} >{userDetails.name}</h1>
      <h1>{userDetails.age}</h1>
    </div>
  )
}

export default Usercard
