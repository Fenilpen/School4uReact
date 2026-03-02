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
    console.log(`${(Math.floor(leftTime/60)).toString().padStart(2,0)} : ${(leftTime%60).toString().padStart(2,0)}`);
  },[leftTime])
  
  return (
    <div>
      Time Left: {leftTime}
    </div>
  )
}

export default Timer
