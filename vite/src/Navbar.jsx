import React from 'react'


const Navim = ({title,link,number}) => {
  // console.log(props);
  
  return (
    <div>
      <h1>{title}</h1>
      <h1>{link}</h1>
      <h1>{number}</h1>
      <h1>{number}</h1>
      <h1>{data}</h1>
      <Button data={data}/>
    </div>
  )
}

function Button({data}) {
  return(
    <button>{data}</button>
  )
}


export default Navim
