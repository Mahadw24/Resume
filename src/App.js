import React from 'react'
import About from './components/About'
import Education from './components/Education'
import Mid from './components/Mid'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import './App.css'

const App = () => {
  return (
    <>
    <div className='flex flex-col'>
    <Navbar/>
    <Mid/>  
    <About/>
    <Projects/>
    <Education/>
    </div>
    </>
  )
}
export default App