import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Footer from './components/Footer'
import MapCard from "../src/components/Map"
import Gallery from './components/Gallery'
import Review from './components/Review'

function App() {
  const [count, setCount] = useState(0)
  const option={
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  
  


  return (
    <div className='w-full'>
      <Review/>
      <Gallery/>
      
    <MapCard/>
    <Footer/>
    </div>
   
  )
}

export default App
