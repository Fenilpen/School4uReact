import { useState } from 'react'
import data from "./Data.json"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-screen w-full bg-red-500'>
      {data.map(function(phoneDetails, index){
        return {
          <>
            
          {/* Image */}
          <img src={phoneDetails.image}  />
            
          {/* details */}
          <div>{phoneDetails.title}</div>
      
          {/* pricing */}
          <div><h1>
          
          </h1></div>
          </>
        }
      })}
    </div>
    </>
  )
}

export default App
