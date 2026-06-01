import React from 'react'

const App = () => {
    
    const [toggle,setToggle] = useState(false);

    return (
        
    <>
        
      {/* <h1 className={`${color ==="red" ? 'bg-red-500' : 'bg-blue-600' }`}>Hello how are you</h1> */}
        {
            toggle ? (
                <h1>this is the message</h1>
            ) : (
                <h1>toggle is false</h1>
            )
        }

        <button onClick={()=>{
          setToggle(!Toggle)
    }}></button>
        
    </>
        
        )
}

export default App
