import React from 'react'
import '../assets/Navbar.css'
import {Link}from 'react-router-dom'
const Navbar2 = () => {
  return (
    <div><ul>
        <li><Link to ='/'>Home</Link></li>
        <li><b><Link to ='/about'>About</Link></b></li>
        <li><b><Link to = '/Contact'>Contact</Link></b></li>
        <li><b><Link to = '/Blog'>Blog</Link></b></li>
        </ul>
        <hr/>
        </div>
  )
}
export default Navbar2