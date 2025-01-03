import React, { useState } from 'react'
import '../assets/Nav.css'
const Navbar = () => {
  var sky={
    color: 'white',
    fontFamily: 'Arial, sans-serif',
    fontSize: '2rem',
    padding: '10px'
  }
  var[count,set]=useState(0)
  return (
    <header>
      <h1 style={sky}>I am Pagal</h1>
      <h2 className='Box-model'>Such a dumb😓</h2>
      <h5 id='text'>And choose my friends same as me </h5>
      <h2>Count  {count}</h2>
      <button onClick={()=>set(count+1)}>Increase</button>
      <button onClick={()=>set(count-1)}>Decrease</button>
      <button onClick={()=>set(count==0)}>Reset</button>
    </header>
  )
}
export default Navbar