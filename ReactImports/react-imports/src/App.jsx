import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Head,Card,Card2,Thirdparty} from './Header'
import reactlogo from "./assets/react.svg"   // to import image 


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Card/>
      <Card2/>
      <Thirdparty/>
      <img src={reactlogo} alt=""/> 
      <img src="./src/assets/react.svg" alt=""/>    // using path
    </>
  )
}

export default App
