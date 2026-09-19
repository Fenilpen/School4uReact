import React from 'react'

const Usercard = ({userDetails}) => {
  return (
    <div>
      <h1>{userDetails.id}</h1>
      <h1>{userDetails.name}</h1>
    </div>
  )
}

export default Usercard
