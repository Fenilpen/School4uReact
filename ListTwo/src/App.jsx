import { useState } from 'react'
import data from "./Data.json"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='p-6 w-full flex flex-col gap-5'>
      {data.map(function(phoneDetails, index){
        return {
          <div key={index} className='flex bg-[#282828] p-[3] rounded-lg'>
            
          {/* Image */}
          <div className='w-1/4 flex item-center justify-center'>
          <img src={phoneDetails.image}  />
          </div>
            
          {/* details */}
          <div className='flex-1'>
           <h1>
            {phoneDetails.title}
           </h1> 
          <p className='my-1'>{phoneDetails.rating} | {phoneDetails.reviews} </p>
            <ul className='my-3'>
            {phoneDetails.details.map(function(index,item){
            return <li className='list-disc ml-6'>{item}</li>
            })
            </ul>
          </div>
      
          {/* pricing */}
          <div className='flex flex-col items-end'>
            <h1 className='2xl'>{phoneDetails.price}</h1>
            <p className='line-through text-xl'>{phoneDetails.originalPrice}</p>
            <p className='text-green-500'>{phoneDetails.discount}</p>
          </div>
          </div>
        }
      })}
    </ul>
     <p className='text-green-500 font-bold'>{phoneDetails.offers.exchangeOffer}</p>
     <p className='text-green-300 mt-2' >{{phoneDetails.offers.bankOffer}}</p>
    </div>
    </>
  )
}

export default App
