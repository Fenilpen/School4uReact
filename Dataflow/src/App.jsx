import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Layout from './components/Layout'

function App() {
const [data,setData] = useState(0);

function recieve (param) {
console.log(param);
}

  return (
    <>
      <Header data={data} />
      <Layout data={data}/>
      <Footer data={data}/>
    </>
  )
}

export default App
