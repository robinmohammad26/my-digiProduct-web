import { useState } from 'react'
import './App.css'
import Banner from './components/Banner/Banner'
import Counter from './components/Counter/Counter'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'

function App() {

  // const [AddToCard, setAddToCard] = useState([]);

  return (
    <>
      <div className='w-8/12 mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
    </div>
    <div className='bg-linear-to-r from-purple-600 to-purple-500 py-15'>
      <Counter></Counter>
    </div>
    <div className='w-8/12 mx-auto'>
      <Products></Products>
    </div>
    </>
  )
}

export default App
