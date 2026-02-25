import React from 'react'

function Timer() {
  
  const [leftTime,setLeftTime] = useState(5)

  useEffect(()=>{

    setInterval(() => {

    },1000)
    
  },[])
  
  return (
    <div>
      Time Left: {leftTime}
    </div>
  )
}

export default Timer
