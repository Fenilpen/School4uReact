import './App.css'
import "./Card.css"
import Card from './Card'
import Button from './Components/Button'
import Header from './Components/Header'


function App() {

  return (
    <> 
    <Header/>
    <Hero/>
    <div className='text-3xl'>
    <Button title="Join subscription"/>
    </div>
    <Footer/>
    </>
  )
}

export default App
