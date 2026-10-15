import { useState } from 'react'
import data from "./Data.json"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='h-screen w-full bg-red-500'>
      {data.map(function(phoneDetails, index){
        return {
          <div className='flex'>
            
          {/* Image */}
          <img src={phoneDetails.image}  />
            
          {/* details */}
          <div>{phoneDetails.title}</div>
      
          {/* pricing */}
          <div>
            <h1>{phoneDetails.price}</h1>
          </div>
          </div>
        }
      })}
    </div>
    </>
  )
}

export default App
