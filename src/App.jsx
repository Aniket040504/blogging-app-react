import React from 'react'
import './index.css'
import Navbar from './Navbar';
import Home from './Home'

const App = () => {

  return (
    <div className= 'w-full App' >
      <div className="content max-w-[1000px] my-10 mx-auto p-4" >
        <Navbar/>
        <Home />
      </div>
    </div>
  )
}

export default App
