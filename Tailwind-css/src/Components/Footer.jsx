import Button from './Button'


function Footer() {
  return (
    <div className='bg-red-300 py-5'>
    
    <header className='max-w-[60rem] flex justify-between items-center text-xl text-black/80 bg-red-300 m-auto'>

    <h1 className='text-3xl'><span className='font-extrabold text-[tomato]'>B</span>rand</h1>
    
    <div className='flex items-center gap-7'>
      <a href="">Features</a>
      <a href="">Use Cases</a>
      <a href="">Intergrations</a>
      <a href="">Portfolio</a>
    </div>
    
    <Button title="Join-US"/>
    </header>
    
    </div>
  )
}

export default Footer
