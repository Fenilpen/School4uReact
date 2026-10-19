import { useState } from 'react'
import data from "./Data.json"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='p-6 w-full flex flex-col gap-5'>
      {data.map(function(phoneDetails, index){
        return {
          <div className='flex'>
            
          {/* Image */}
          <div className='w-1/4 bg-red-500 flex item-center justify-center'>
          <img src={phoneDetails.image}  />
          </div>
            
          {/* details */}
          <div className='flex-1 bg-green-500'>
           <h1>
            {phoneDetails.title}
           </h1> 
          </div>
      
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
