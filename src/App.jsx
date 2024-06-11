import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Footer from './components/Footer'
import MapCard from "../src/components/Map"
import Gallery from './components/Gallery'
import Review from './components/Review'
import ContactForm from './components/Contact/Contact'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)
  const option={
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };

  
  


  return (
    <div className='w-full'>
      <Header/>
      <Review/>
      <Gallery/>
      <ContactForm/>
    <MapCard/>
    <Footer/>
    </div>
   
  )
}

export default App
