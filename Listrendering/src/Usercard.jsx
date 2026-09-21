import React from 'react'

const Usercard = ({userDetails}) => {
  return (
    <div className='[bg-tomato] >
      <h1>{userDetails.id}</h1>
      <h1>{userDetails.name}</h1>
      <h1>{userDetails.age}</h1>
    </div>
  )
}

export default Usercard
