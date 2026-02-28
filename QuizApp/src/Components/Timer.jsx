import React from 'react'

function Timer() {
  
  const [leftTime,setLeftTime] = useState(5)

  useEffect(()=>{

    setInterval(() => {
    let intervalId =  setLeftTime(prev => {
      if(prev <= 0 ){
        clearInterval(intervalId)
        return 0
      }
      return prev - 1
      })
    },1000)

    return () => {
      clearInterval(intervalId)
    }
    
  },[])

  useEffect(()=>{
   console.log(`${Math.floor(LeftTime/60)} : ${leftTime%60}`);
  },[leftTime])
  
  return (
    <div>
      Time Left: {leftTime}
    </div>
  )
}

export default Timer
